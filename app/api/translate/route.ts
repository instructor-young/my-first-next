import { NextResponse } from "next/server";
import OpenAI from "openai";

const OPENAI_API_KEY = "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";
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function POST(request) {
  const input = await request.text();
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "너는 사용자의 한글 입력을 영어로 아주 정확하고 자연스럽게 번역해 주는 번역기야.",
      },
      {
        role: "user",
        content: input,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  const message = chatCompletion.choices[0].message.content;

  return NextResponse.json(message);
}
