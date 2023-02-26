export const getAiResponse = async (question: string) => {
  try {
    const response = await fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [question],
        examples: JSON.parse(process.env.NEXT_PUBLIC_EXAMPLES),
      }),
    });

    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }

    const data = await response.json();

    return { type: "data", content: data.classifications[0].prediction };
  } catch (error) {
    if (error instanceof TypeError) {
      return {
        type: "error",
        content:
          "Network error. Please check your internet connection and try again.",
      };
    } else if (error instanceof SyntaxError) {
      return {
        type: "error",
        content:
          "Parsing error. The data received from the server was not in the expected format.",
      };
    } else {
      return {
        type: "error",
        content: "An error occurred. Please try again later.",
      };
    }
  }
};
