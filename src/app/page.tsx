"use client";

import { useState } from "react";
import { marked } from "marked";
import { streamingAnswer } from "@/services/streamingAnswer";

export default function Home() {
  const [inputQuestion, setInputQuestion] = useState<string>("");
  const [responseFromAI, setResponseFromAI] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <main className="min-h-screen bg-white text-black p-5 text-center">
      <h1 className="text-3xl font-semibold">Learn DeepSeek</h1>
      <small>
        <span className="font-semibold">Core:</span>{" "}
        <a
          href="https://www.deepseek.com/"
          target="_blank"
          className="hover:underline hover:text-blue-500"
        >
          DeepSeek-R1
        </a>{" "}
        <span className="font-semibold">By:</span>{" "}
        <a
          href="https://github.com/ikhwanhsn"
          target="_blank"
          className="hover:underline hover:text-blue-500"
        >
          Ikhwan Hsn
        </a>
      </small>
      <section>
        <form
          className="mt-2 w-1/3 mx-auto space-x-1 flex"
          onSubmit={(e) => {
            e.preventDefault();
            (document.activeElement as HTMLInputElement)?.blur();
            streamingAnswer(inputQuestion, setResponseFromAI, setLoading);
          }}
        >
          <input
            type="text"
            className="input input-primary bg-white w-full"
            placeholder="Ask me anything..."
            value={inputQuestion}
            onChange={(e) => setInputQuestion(e.target.value)}
          />
          <button
            className="btn btn-primary text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </section>
      {responseFromAI && (
        <section className="mt-2 card shadow-md w-full mx-auto px-5 py-3 text-left border">
          <p
            dangerouslySetInnerHTML={{
              __html: marked(responseFromAI, { gfm: true, breaks: true }), // alternative react-markdown
            }}
          />
        </section>
      )}
      {/* <footer className="mt-5 text-sm text-gray-500">
        Copyright © 2025 Ikhwan Hsn
      </footer> */}
    </main>
  );
}
