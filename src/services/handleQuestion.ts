import ollama from "ollama/browser";
import React, { Dispatch } from "react";

export const handleQuestion = async (
  inputQuestion: string,
  setResponseFromAI: Dispatch<React.SetStateAction<string>>,
  setLoading: Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    setResponseFromAI("");
    setLoading(true);
    const response = await ollama.chat({
      model: "deepseek-r1:1.5b",
      messages: [{ role: "user", content: inputQuestion }],
    });
    if (response.message.content) {
      setResponseFromAI(response.message.content);
      setLoading(false);
    }
  } catch (error) {
    console.error(error);
    setLoading(false);
    setResponseFromAI("Terjadi kesalahan dalam mendapatkan respon AI.");
  }
};
