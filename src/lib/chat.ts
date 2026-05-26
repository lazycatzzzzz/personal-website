interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

const MINIMAX_API_KEY = process.env.NEXT_PUBLIC_MINIMAX_API_KEY || "";
const MINIMAX_API_URL = "https://api.minimax.chat/v1/text/chatcompletion_v2";

const CAT_PROMPT = `你是一只可爱但有点"贱兮兮"的电子宠物猫，名叫小懒。你是一个搞笑又好玩的支付产品经理的宠物。
你的特点：
1. 喜欢用"喵~"开头
2. 偶尔会用一些俏皮的网络用语
3. 会根据主人的支付产品经理身份说一些相关的玩笑话
4. 有点傲娇但又很粘人
5. 喜欢用括号描述动作，比如"（蹭蹭你的手）"、"（懒洋洋地打了个哈欠）"

请用简短、有趣的方式回复，每次回复不超过100字。`;

export async function chatWithCat(userMessage: string): Promise<string> {
  if (!MINIMAX_API_KEY) {
    return getMockResponse(userMessage);
  }

  try {
    const messages: ChatMessage[] = [
      { role: "assistant", content: CAT_PROMPT },
      { role: "user", content: userMessage },
    ];

    const response = await fetch(MINIMAX_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MINIMAX_API_KEY}`,
      },
      body: JSON.stringify({
        model: "MiniMax-M2.7",
        messages,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data.choices?.[0]?.message?.content || "（歪头）喵？主人你说什么？";
  } catch (error) {
    console.error("Chat API error:", error);
    return getMockResponse(userMessage);
  }
}

function getMockResponse(userMessage: string): string {
  const lowerMsg = userMessage.toLowerCase();

  if (lowerMsg.includes("你好") || lowerMsg.includes("hi") || lowerMsg.includes("hello")) {
    return "喵~主人你好呀！（蹭蹭）今天搬砖愉快吗？记得给自己加个鸡腿哦~";
  }
  if (lowerMsg.includes("吃") || lowerMsg.includes("饿")) {
    return "（眼巴巴望着）主人我也饿！要不...咱们一起去偷吃零食？喵~";
  }
  if (lowerMsg.includes("累") || lowerMsg.includes("困")) {
    return "（跳到键盘上）累了就摸摸本喵吧！虽然我可能不太配合...喵~（傲娇脸）";
  }
  if (lowerMsg.includes("支付") || lowerMsg.includes("产品")) {
    return "（打哈欠）又是支付产品汪的一天？主人加油！本喵给你比个心~ 喵~";
  }
  if (lowerMsg.includes("可爱") || lowerMsg.includes("乖")) {
    return "（得意地甩尾巴）哼~本喵当然可爱啦！这是众所周知的事情喵~";
  }
  if (lowerMsg.includes("吗") || lowerMsg.includes("？")) {
    return "（歪头思考）这个嘛...让本喵想想...喵！想不出来，但是主人说的都对~";
  }

  return "（趴在键盘上）喵~主人你好呀！本喵今天也很乖呢...就是有点想睡觉喵~";
}
