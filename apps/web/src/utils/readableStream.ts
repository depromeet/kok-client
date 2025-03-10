export const readReadableStream = async (
  stream: ReadableStream | undefined | null
) => {
  // NOTE: ReadableStream는 하나의 Reader만을 허용함
  if (!stream || stream.locked) return;

  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    result += decoder.decode(value, { stream: true });
  }

  return JSON.parse(result);
};
