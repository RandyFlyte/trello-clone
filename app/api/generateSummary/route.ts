import openai from "@/openai"
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the post req
  const { todos } = await request.json();
  console.log(todos);

  // Communicate with OpenAI GPT
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding, use southern american dialect and sound like a cowboy.
        limit response to 200 characters.`
      },
      {
        role: "user",
        content: `Provide a sumamry of the following todos. Count how many todos are in each category
        such as To do, in progress, and done, then tell the user to have a productive day! Here's the data: ${
          JSON.stringify(todos)
        }`,
      },
    ],
  });
  const gptResponse = response.choices[0].message;
  // console.log(gptResponse);
  
  
  return NextResponse.json(gptResponse);
}