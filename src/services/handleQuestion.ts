import ollama from "ollama/browser";

export const handleQuestion = async () => {
  const response = await ollama.chat({
    model: "llama3.1",
    messages: [{ role: "user", content: "Why is the sky blue?" }],
  });
  if (response.message.content) {
    console.log(response.message.content);
  }
};
