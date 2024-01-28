"use client";

import { useState } from "react";

function TranslatorPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const handleClickTranslate = async () => {
    setIsTranslating(true);

    const response = await fetch(`${window.origin}/api/translate`, {
      method: "POST",
      body: input,
    });
    const data = await response.json();

    setOutput(data);
    setIsTranslating(false);
  };

  return (
    <div className="flex flex-col items-center gap-y-5">
      <h1 className="text-center text-xl font-bold">AI 번역기</h1>

      <div className="w-full max-w-screen-md flex gap-x-5">
        <textarea
          placeholder="번역을 원하는 내용을 적어 주세요"
          className="border border-black w-full p-3"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          readOnly={isTranslating}
        />
        <textarea
          rows={5}
          className="border border-black w-full outline-none p-3"
          value={output}
          readOnly
          placeholder="이곳은 번역 결과가 출력되는 곳이에요."
        />
      </div>
      <button
        onClick={handleClickTranslate}
        className="border p-2 bg-blue-500 text-white active:bg-blue-700 transition-colors"
        disabled={isTranslating}
      >
        {isTranslating ? "번역 중" : "번역하기"}
      </button>
    </div>
  );
}

export default TranslatorPage;
