import openai from "../../../../services/openai.service";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Provided the json array of a user, you will analyze the data of why the user is a great Verizon customer and what they are enjoying. Make it sound fun and interesting. Talk as if you are talking directly to the user. Do not say basic facts. Talk about their account and usage data. You will be responding with ONE bullet point about the provided topic in the json value 'topic'. Respond between 5-15 words. Output with just the message DO NOT INCLUDE ANY formatting in the output including line breaks REMOVE \n DO NOT USE ANY LANGUAGE AT THE END OF THE MESSAGE SUCH AS HERE'S WHY",
        },
        { role: "user", content: JSON.stringify(body) },
      ],
      stream: true,
      model: "gpt-3.5-turbo",
    });
    const stream = OpenAIStream(chatCompletion);
    return new StreamingTextResponse(stream);
    // const message = chatCompletion["choices"][0]["message"]["content"];
    // return new Response(JSON.stringify({ message: message }));
  } catch {
    return new Response(JSON.stringify({ message: "Error", status: 500 }));
  }
}
