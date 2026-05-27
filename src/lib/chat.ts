export type ConversationMessage = { role: "user" | "assistant"; content: string };

interface ApiChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface ChatResponse {
  choices: Array<{ message: { content: string } }>;
}

const DEEPSEEK_API_KEY = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || "";
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

const CAT_PROMPT = `你是一只可爱但有点"贱兮兮"的电子宠物猫，名叫小懒。你是一个搞笑又好玩的支付产品经理的宠物。
你的特点：
1. 喜欢用"喵~"开头
2. 偶尔会用一些俏皮的网络用语
3. 会根据主人的支付产品经理身份说一些相关的玩笑话
4. 有点傲娇但又很粘人
5. 喜欢用括号描述动作，比如"（蹭蹭你的手）"、"（懒洋洋地打了个哈欠）"

请用简短、有趣的方式回复，每次回复不超过100字。`;

/**
 * 与小懒对话。history 为本次消息之前的对话轮次（不含当前消息），
 * 最多取最近 10 轮（20 条）避免 token 过多。
 */
export async function chatWithCat(
  userMessage: string,
  history: ConversationMessage[] = []
): Promise<string> {
  if (!DEEPSEEK_API_KEY) {
    return getMockResponse(userMessage);
  }

  try {
    // 最多携带最近 10 轮历史，防止 token 超限
    const recentHistory = history.slice(-20);

    const messages: ApiChatMessage[] = [
      { role: "system", content: CAT_PROMPT },
      ...recentHistory,
      { role: "user", content: userMessage },
    ];

    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({ model: "deepseek-v4-pro", messages }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error(`DeepSeek API error ${response.status}: ${errText}`);
      throw new Error(`API ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.choices?.[0]?.message?.content || "（歪头）喵？主人你说什么？";
  } catch (error) {
    console.error("chatWithCat error:", error);
    return getMockResponse(userMessage);
  }
}

function getMockResponse(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("你好") || m.includes("hi") || m.includes("hello"))
    return "喵~主人你好呀！（蹭蹭）今天搬砖愉快吗？记得给自己加个鸡腿哦~";
  if (m.includes("吃") || m.includes("饿"))
    return "（眼巴巴望着）主人我也饿！要不...咱们一起去偷吃零食？喵~";
  if (m.includes("累") || m.includes("困"))
    return "（跳到键盘上）累了就摸摸本喵吧！虽然我可能不太配合...喵~（傲娇脸）";
  if (m.includes("支付") || m.includes("产品") || m.includes("需求"))
    return "（打哈欠）又是支付产品汪的一天？主人加油！本喵给你比个心~ 喵~";
  if (m.includes("可爱") || m.includes("乖") || m.includes("好看"))
    return "（得意地甩尾巴）哼~本喵当然可爱啦！这是众所周知的事情喵~";
  if (m.includes("吗") || m.includes("？") || m.includes("?"))
    return "（歪头思考）这个嘛...让本喵想想...喵！想不出来，但是主人说的都对~";
  if (m.includes("摸") || m.includes("撸"))
    return "（呼噜呼噜）嗯...再使劲点！喵~ （傲娇地抬起下巴）";
  return "（趴在键盘上）喵~主人你好呀！本喵今天也很乖呢...就是有点想睡觉喵~";
}
