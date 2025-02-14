import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { headers } from "next/headers";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

/**
 * Returns a description of the input text based on the specified number of words.
 * @property  {string} text - The text to be described.
 * @property  {number} wordCount - The desired word count for the description.
 * @returns {Promise<StreamingTextResponse>} - The response containing the description.
 */
export async function describe(text: string, wordCount: number) {
  text = text.replace(/[\n\r\t]/g, "");
  const messages = [
    {
      role: "user",
      content: `Generate a description of the word ${text} in ${wordCount} words.`,
    },
  ];
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages,
  });

  const response = new StreamingTextResponse(await OpenAIStream(completion));
  return response;
}

/**
 * Generates a summary of the input text based on the specified number of words.
 * @property  {string} text - The text to be summarized.
 * @property  {number} wordCount - The desired word count for the summary.
 * @returns {Promise<Response>} - The response containing the summary.
 */
export async function summarize(text: string, wordCount: number) {
  const url = `https://api.openai.com/v1/completions`;

  text = text.replace(/[\n\r\t]/g, "");

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `"Generate a summary of the text: ${text} in ${wordCount} words`,
    }),
  });

  const data = await response.json();

  return data.choices[0].text;
}

/**
 * Generates a question based on the input text and the specified type of question.
 * @property  {string} text - The input text.
 * @property  {string} type - The type of question to be generated.
 * @returns {Promise<Response>} - The response containing the generated question.
 */
export async function ask(text: string, type: string) {
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `Generate a ${type} question for ${text}.`,
    }),
  });

  const data = await response.json();

  return data.choices[0].text;
}

/**
 * Generates synonyms for a word, optionally with a specific count and part of speech.
 * @property  {string} word - The word for which synonyms are desired.
 * @property  {number} count - Optional: The number of synonyms to generate (default is 1).
 * @property  {string} pos - Optional: The part of speech for the synonyms (e.g., "noun", "verb").
 * @returns {Promise<Response>} - The response containing the generated synonyms.
 */
export async function synonyms(word: string, count: number, pos: string) {
  pos = pos || "";
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `"Return ${count} synonyms for the word ${word}. ${
        pos ? "POS is " + pos : ""
      }"`,
    }),
  });

  const data = await response.json();

  return data.choices[0].text;
}

/**
 * Generates examples for a word in the specified number of sentences and context.
 * @property  {string} word - The word for which examples are desired.
 * @property  {number} sentences - The number of example sentences to generate (default is 1).
 * @property  {string} context - Optional: Additional context or requirements for the examples.
 * @returns {Promise<Response>} - The response containing the generated examples.
 */
export async function examples(word: string, sentences: number, context: string) {
  context = context || "";
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `"Generate ${sentences} example sentences for the word ${word} ${
        context && `with ${context} context`
      }"`,
    }),
  });

  const data = await response.json();

  return data.choices[0].text;
}

/**
 * Translates the input text into a specified language.
 * @property  {string} text - The text to be translated.
 * @property  {string} language - The target language for translation.
 * @returns {Promise<Response>} - The response containing the translated text.
 */
export async function translate(text: string, language: string) {
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `"Translate the text ${text} to ${language}"`,
    }),
  });

  const data = await response.json();

  return data.choices[0].text;
}

/**
 * Rewrites the input text while preserving its meaning and context.
 * @property  {string} text - The text to be rewritten.
 * @returns {Promise<StreamingTextResponse>} - The response containing the rewritten text.
 */
export async function rewrite(text: string) {
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `"Rewrite  the text ${text}"`,
    }),
  });

  const data = await response.json();
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: `Rewrite  the text ${text}`,
      },
    ],
  });

  const response1 = new StreamingTextResponse(await OpenAIStream(completion));
  return response1;
}

/**
 * Paraphrases the input text, preserving its meaning while expressing it differently.
 * @property  {string} text - The text to be paraphrased.
 * @returns {Promise<StreamingTextResponse>} - The response containing the paraphrased text.
 */
export async function paraphrase(text: string) {
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `"Paraphrase the text ${text}"`,
    }),
  });

  const data = await response.json();
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: `Paraphrase the text ${text}`,
      },
    ],
  });

  const response1 = new StreamingTextResponse(await OpenAIStream(completion));
  return response1;
}

/**
 * Generates headlines based on the input text and specified number of headlines.
 * @property  {string} text - The input text.
 * @property  {number} noOfHeadlines - The number of headlines to generate.
 * @returns {Promise<StreamingTextResponse>} - The response containing the generated headlines.
 */

export async function generateHeadlines(text: string, noOfHeadlines: number) {
  const prompt = `Generate  number of ${noOfHeadlines} headlines based on the input text: \n '${text}'`;

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: prompt }],
  });

  const response = new StreamingTextResponse(await OpenAIStream(completion));

  return response;
}

/**
 * Generates keywords based on the input text and specified number of keywords.
 * @property  {string} text - The input text.
 * @property  {number} noOfKeywords - The number of keywords to generate.
 * @returns {Promise<Response>} - The response containing the generated keywords.
 */
export async function generateKeywords(text: string, noOfKeywords: number) {
  const url = `https://api.openai.com/v1/completions`;

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `Generate ${noOfKeywords} keywords for ${text}`,
    }),
  });

  const data = await response.json();

  // console.log("Keywords", data.choices[0].text);
  return data.choices[0].text;
}

/**
 * Generates tags based on the input text and specified number of tags.
 * @property  {string} text - The input text.
 * @property  {number} noOfTags - The number of tags to generate.
 * @returns {Promise<Response>} - The response containing the generated tags.
 */
export async function generateTags(text: string, noOfTags: number) {
  const url = `https://api.openai.com/v1/completions`;

  text = text.replace(/[\n\r\t]/g, "");

  const response = await fetch(url, {
    headers: {
      "api-key": process.env.OPENAI_API_KEY,
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      max_tokens: 300,
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      model: "davinci",
      prompt: `Generate ${noOfTags} tags for ${text} in JSON format.`,
    }),
  });

  const data = await response.json();

  return data.choices[0].text;
}