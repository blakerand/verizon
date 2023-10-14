import openai from "../../../../services/openai.service"


export async function GET(Request) {
    console.log(Request.url)
    console.log(process.env.OPENAI_KEY)
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'What is 100 + 100' }],
        model: 'gpt-3.5-turbo',
      });
    
      console.log(chatCompletion.choices);
    return new Response("Route")
}