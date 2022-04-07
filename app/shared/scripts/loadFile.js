async function $loadFile(htmlRelativeUrl, baseUrl) {
  const htmlUrl = new URL(htmlRelativeUrl, baseUrl).href;
  const response = await fetch(htmlUrl);
  return await response.text();
}

export { $loadFile };
