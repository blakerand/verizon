const url =
  "https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream"; // replace with your actual API key
const apiKey = process.env.ELEVENLABS_API_KEY;
import { OpenAIStream, StreamingTextResponse, streamToResponse } from "ai";
if (!apiKey) {
  throw new Error("ELEVENLABS_API_KEY is not defined");
}

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

const encoder = new TextEncoder();

export async function POST(req: Request) {
  const body = await req.json();
  const data = {
    text: body.text,
    model_id: "eleven_monolingual_v1",
    voice_settings: {
      stability: 0.5,
      similarity_boost: 0.5,
    },
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": apiKey,
      accept: "audio/mpeg",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  if (response.body === null) {
    throw new Error("Response body is null");
  }
  return new Response(response.body);
}
