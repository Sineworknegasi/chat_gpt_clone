import OpenAI from "openai";
const openai = new OpenAI({
  apiKey:"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", dangerouslyAllowBrowser: true 
});

export async function sendMsgToOpenAi(message) {
  const res = await openai.completions.create ({
    model: 'gpt-3.5-turbo-instruct',
    prompt: message,
    temprature: 0.7,
    max_tokens: 256,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return (res.choices[0].message.content);
}
