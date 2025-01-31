import ollama from "ollama/browser";
import { Dispatch } from "react";

export const streamingAnswer = async (
  inputQuestion: string,
  setResponseFromAI: Dispatch<React.SetStateAction<string>>,
  setLoading: Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setResponseFromAI("");
    setLoading(true);
    const message = { role: "user", content: inputQuestion };
    const response = await ollama.chat({
      model: "deepseek-r1:1.5b",
      messages: [message],
      stream: true,
    });

    for await (const part of response) {
      setResponseFromAI((prev) => prev + part.message.content);
    }
    setLoading(false);
  } catch (error) {
    console.error(error);
    setResponseFromAI("An error occurred in getting the AI ​​response.");
    setLoading(false);
  }
};
