export const getAiResponse = async (question: string) => {
  const res = await fetch("https://api.cohere.ai/classify", {
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

  const json = await res.json();

  return json.classifications[0].prediction;
};
