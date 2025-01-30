"use client";

import { handleQuestion } from "@/services/handleQuestion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-5 text-center">
      <h1 className="mt-12 text-3xl font-semibold">Learn Ollama</h1>
      <section className="mt-5 w-1/3 mx-auto space-x-1 flex">
        <input
          type="text"
          name=""
          id=""
          className="input input-primary bg-white w-full"
          placeholder="Ask me anything..."
        />
        <button className="btn btn-primary text-white" onClick={handleQuestion}>
          Submit
        </button>
      </section>
      <section className="mt-2 card shadow-md w-1/3 mx-auto p-5">
        <p>Answer from Ollama</p>
      </section>
    </main>
  );
}
