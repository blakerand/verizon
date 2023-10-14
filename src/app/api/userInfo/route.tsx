import openai from "../../../../services/openai.service";

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Provided the json array of a user, you will analyze the data of why the user is a great Verizon customer and what they are enjoying. Make it sound fun and interesting. Talk as if you are talking directly to the user. Do not say basic facts. Talk about their account and usage data. Include 3-5 bullet points with no more than 8 sentences total. Output in a json format with the output being {message: 'your message here', bulletPoints: []} DO NOT INCLUDE ANY formatting in the output including line breaks REMOVE \n DO NOT USE ANY LANGUAGE AT THE END OF THE MESSAGE SUCH AS HERE'S WHY",
        },
        { role: "user", content: JSON.stringify(body) },
      ],
      model: "gpt-3.5-turbo",
    });
    const message = chatCompletion["choices"][0]["message"]["content"];
    return new Response(JSON.stringify({ message: message }));
  } catch {
    return new Response(JSON.stringify({ message: "Error", status: 500 }));
  }
}
