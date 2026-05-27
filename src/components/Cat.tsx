"use client";

import { useState, useEffect, useCallback } from "react";

export type CatExpression = "normal" | "happy" | "sleepy" | "curious";

interface CatProps {
  isAnimating?: boolean;
  onExpressionChange?: (expression: CatExpression) => void;
}

interface FloatingHeart {
  id: number;
  emoji: string;
  offsetX: number; // px, relative offset from center
  delay: number;   // ms
}

// ─── 颜色常量 ────────────────────────────────────────
const C = {
  earOuter: "linear-gradient(to bottom, #c7d2e8, #bfdbfe)",
  earInner: "#fca5a5",
  head:     "linear-gradient(175deg, #f8faff 0%, #e8efff 55%, #f5f8ff 100%)",
  eye:      "#0f172a",
  iris:     "#f59e0b",
  nose:     "#fb7185",
  whisker:  "#b8c0cc",
  body:     "linear-gradient(175deg, #dce8ff 0%, #eff4ff 60%, #f5f8ff 100%)",
  belly:    "rgba(255,255,255,0.72)",
  tail:     "linear-gradient(90deg, #c7d2fe, #a5b4fc)",
  tailTip:  "#c7d2fe",
  paw:      "linear-gradient(175deg, #eef2ff, #dce8ff)",
  pawToe:   "#dde5f5",
  blush:    "#fbcfe8",
};

export default function Cat({ isAnimating = false, onExpressionChange }: CatProps) {
  const [expression, setExpression] = useState<CatExpression>("normal");
  const [isWagging,  setIsWagging]  = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [hearts,     setHearts]     = useState<FloatingHeart[]>([]);
  const [showZzz,    setShowZzz]    = useState(false);

  // ── 周期性眨眼 ──────────────────────────────────────
  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    };
    const id = setInterval(blink, 3200 + Math.random() * 2400);
    return () => clearInterval(id);
  }, []);

  // ── 周期性困倦状态 ──────────────────────────────────
  useEffect(() => {
    const id = setInterval(() => {
      setExpression((cur) => {
        if (cur !== "normal") return cur;
        onExpressionChange?.("sleepy");
        setShowZzz(true);
        setTimeout(() => {
          setExpression("normal");
          setShowZzz(false);
          onExpressionChange?.("normal");
        }, 3200);
        return "sleepy";
      });
    }, 20000);
    return () => clearInterval(id);
  }, [onExpressionChange]);

  // ── 点击互动 ────────────────────────────────────────
  const handleClick = useCallback(() => {
    setIsWagging(true);
    setExpression("happy");
    onExpressionChange?.("happy");

    const newHearts: FloatingHeart[] = [
      { id: Date.now(),     emoji: "💕", offsetX: 0,   delay: 0   },
      { id: Date.now() + 1, emoji: "💖", offsetX: -30, delay: 160 },
      { id: Date.now() + 2, emoji: "💗", offsetX: 30,  delay: 320 },
    ];
    setHearts(newHearts);

    setTimeout(() => {
      setIsWagging(false);
      setHearts([]);
      setExpression("normal");
      onExpressionChange?.("normal");
    }, 1800);
  }, [onExpressionChange]);

  // ── 眼睛形状（根据表情 + 眨眼） ────────────────────
  const eyeH = isBlinking ? 2
    : expression === "sleepy" ? 7
    : expression === "happy"  ? 13
    : 24;
  const eyeRadius = isBlinking ? 2
    : expression === "happy"  ? "50% 50% 0 0"
    : "50%";

  const showPupil = !isBlinking && expression !== "sleepy";

  return (
    // 最外层容器：整体上下浮动（idle float）
    <div
      onClick={handleClick}
      className={`relative cursor-pointer select-none ${isAnimating ? "animate-bounce" : ""}`}
      style={{
        width: 224,
        height: 280,
        margin: "0 auto",
        animation: isAnimating ? undefined : "catIdleFloat 3.6s ease-in-out infinite",
      }}
    >
      {/* ── 飘浮爱心：外层负责 X 偏移，内层负责 Y 动画 ── */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute pointer-events-none"
          style={{
            top: 16,
            left: "50%",
            // X 偏移通过这个包裹层固定，不参与 Y 动画
            transform: `translateX(calc(-50% + ${h.offsetX}px))`,
          }}
        >
          <div
            className="text-2xl"
            style={{ animation: `catFloatUp 1.5s ease-out ${h.delay}ms forwards` }}
          >
            {h.emoji}
          </div>
        </div>
      ))}

      {/* ── 飘浮 💤 ── */}
      {showZzz && (
        <div
          className="absolute pointer-events-none text-indigo-300 font-bold text-lg"
          style={{ top: 8, right: 24, animation: "catFloatUp 2.8s ease-out forwards" }}
        >
          💤
        </div>
      )}

      {/* ══ 耳朵（zIndex 1，头部后面） ══════════════════ */}
      {/* 左耳外 */}
      <div className="absolute" style={{ width: 40, height: 50, top: 28, left: 22, background: C.earOuter, borderRadius: "50% 50% 18% 18%", transform: "rotate(-20deg)", zIndex: 1 }} />
      {/* 左耳内 */}
      <div className="absolute" style={{ width: 24, height: 32, top: 36, left: 30, backgroundColor: C.earInner, borderRadius: "50% 50% 18% 18%", transform: "rotate(-20deg)", zIndex: 2 }} />
      {/* 右耳外 */}
      <div className="absolute" style={{ width: 40, height: 50, top: 28, right: 22, background: C.earOuter, borderRadius: "50% 50% 18% 18%", transform: "rotate(20deg)", zIndex: 1 }} />
      {/* 右耳内 */}
      <div className="absolute" style={{ width: 24, height: 32, top: 36, right: 30, backgroundColor: C.earInner, borderRadius: "50% 50% 18% 18%", transform: "rotate(20deg)", zIndex: 2 }} />

      {/* ══ 头部（zIndex 3） ════════════════════════════ */}
      <div
        className="absolute shadow-md"
        style={{
          width: 152,
          height: 136,
          top: 50,
          left: "50%",
          transform: `translateX(-50%) ${expression === "happy" ? "scale(1.04)" : "scale(1)"}`,
          background: C.head,
          borderRadius: "48% 48% 44% 44%",
          zIndex: 3,
          transition: "transform 0.25s ease",
          boxShadow: "0 4px 20px rgba(100,120,200,0.10)",
        }}
      >
        {/* 腮红（happy 才显示） */}
        {expression === "happy" && (
          <>
            <div className="absolute rounded-full" style={{ width: 30, height: 14, top: 80, left: 5, backgroundColor: C.blush, opacity: 0.75 }} />
            <div className="absolute rounded-full" style={{ width: 30, height: 14, top: 80, right: 5, backgroundColor: C.blush, opacity: 0.75 }} />
          </>
        )}

        {/* 眼睛行 */}
        <div className="absolute flex" style={{ top: 44, left: "50%", transform: "translateX(-50%)", gap: 26 }}>
          {/* 左眼 */}
          <div style={{ width: 26, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 26, height: eyeH, backgroundColor: C.eye, borderRadius: eyeRadius, position: "relative", transition: "height 0.12s ease, border-radius 0.12s ease", overflow: "hidden" }}>
              {showPupil && (
                <>
                  <div style={{ position: "absolute", inset: 2, backgroundColor: C.iris, borderRadius: "50%" }} />
                  <div style={{ position: "absolute", width: 13, height: 15, top: 3, left: 6, backgroundColor: C.eye, borderRadius: "50%" }} />
                  <div style={{ position: "absolute", width: 6, height: 6, top: 2, right: 2, backgroundColor: "white", borderRadius: "50%" }} />
                  <div style={{ position: "absolute", width: 3, height: 3, top: 11, left: 3, backgroundColor: "white", borderRadius: "50%", opacity: 0.7 }} />
                </>
              )}
            </div>
          </div>
          {/* 右眼 */}
          <div style={{ width: 26, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 26, height: eyeH, backgroundColor: C.eye, borderRadius: eyeRadius, position: "relative", transition: "height 0.12s ease, border-radius 0.12s ease", overflow: "hidden" }}>
              {showPupil && (
                <>
                  <div style={{ position: "absolute", inset: 2, backgroundColor: C.iris, borderRadius: "50%" }} />
                  <div style={{ position: "absolute", width: 13, height: 15, top: 3, left: 6, backgroundColor: C.eye, borderRadius: "50%" }} />
                  <div style={{ position: "absolute", width: 6, height: 6, top: 2, right: 2, backgroundColor: "white", borderRadius: "50%" }} />
                  <div style={{ position: "absolute", width: 3, height: 3, top: 11, left: 3, backgroundColor: "white", borderRadius: "50%", opacity: 0.7 }} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* 鼻子 */}
        <div className="absolute" style={{ width: 14, height: 10, top: 80, left: "50%", transform: "translateX(-50%)", backgroundColor: C.nose, borderRadius: "50%" }} />

        {/* 嘴巴 */}
        <div className="absolute flex" style={{ top: 93, left: "50%", transform: "translateX(-50%)", gap: 2 }}>
          {expression === "happy" ? (
            <>
              <div style={{ width: 18, height: 10, borderBottom: "2.5px solid #9ca3af", borderRadius: "0 0 60% 60%" }} />
              <div style={{ width: 18, height: 10, borderBottom: "2.5px solid #9ca3af", borderRadius: "0 0 60% 60%" }} />
            </>
          ) : expression === "sleepy" ? (
            <div style={{ width: 10, height: 8, border: "2px solid #9ca3af", borderRadius: "50%" }} />
          ) : (
            <>
              <div style={{ width: 15, height: 8, borderBottom: "2px solid #9ca3af", borderRadius: "0 0 60% 60%" }} />
              <div style={{ width: 15, height: 8, borderBottom: "2px solid #9ca3af", borderRadius: "0 0 60% 60%" }} />
            </>
          )}
        </div>

        {/* 胡须 左 */}
        <div className="absolute" style={{ top: 68, left: -58 }}>
          {["-9deg", "0deg", "9deg"].map((rot, i) => (
            <div key={i} style={{ width: 56, height: 1.5, backgroundColor: C.whisker, borderRadius: 2, transform: `rotate(${rot})`, marginBottom: i < 2 ? 6 : 0 }} />
          ))}
        </div>
        {/* 胡须 右 */}
        <div className="absolute" style={{ top: 68, right: -58 }}>
          {["9deg", "0deg", "-9deg"].map((rot, i) => (
            <div key={i} style={{ width: 56, height: 1.5, backgroundColor: C.whisker, borderRadius: 2, transform: `rotate(${rot})`, marginBottom: i < 2 ? 6 : 0 }} />
          ))}
        </div>
      </div>

      {/* ══ 身体：外层定位 + 内层呼吸动画 ════════════════ */}
      {/* 外层只负责 translateX(-50%)，不做动画 */}
      <div className="absolute" style={{ top: 162, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
        {/* 内层做 scaleY 呼吸，不带 translateX 冲突 */}
        <div
          style={{
            width: 116,
            height: 92,
            background: C.body,
            borderRadius: "40% 40% 50% 50%",
            boxShadow: "0 4px 16px rgba(100,120,200,0.08)",
            animation: "catBreathe 3.2s ease-in-out infinite",
            position: "relative",
          }}
        >
          {/* 肚皮 */}
          <div style={{ position: "absolute", width: 74, height: 60, top: 14, left: "50%", transform: "translateX(-50%)", backgroundColor: C.belly, borderRadius: "50%" }} />
        </div>
      </div>

      {/* ══ 尾巴 ════════════════════════════════════════ */}
      <div
        className="absolute"
        style={{
          width: 76,
          height: 18,
          top: 204,
          right: 2,
          background: C.tail,
          borderRadius: "50%",
          transformOrigin: "left center",
          animation: isWagging ? "catWag 0.28s ease-in-out infinite alternate" : "catIdleTail 4.2s ease-in-out infinite",
          zIndex: 1,
        }}
      >
        <div style={{ position: "absolute", width: 18, height: 18, right: -3, top: 0, backgroundColor: C.tailTip, borderRadius: "50%" }} />
      </div>

      {/* ══ 前爪 ════════════════════════════════════════ */}
      <div className="absolute flex" style={{ top: 244, left: "50%", transform: "translateX(-50%)", gap: 26, zIndex: 4 }}>
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              width: 38,
              height: 24,
              background: C.paw,
              borderRadius: "50% 50% 38% 38%",
              boxShadow: "0 2px 6px rgba(100,120,200,0.10)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 2,
              paddingTop: 5,
            }}
          >
            {[8, 10, 8].map((h, j) => (
              <div key={j} style={{ width: 7, height: h, backgroundColor: C.pawToe, borderRadius: "50% 50% 30% 30%" }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
