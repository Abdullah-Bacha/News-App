export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing 'url' query parameter" });
  }

  const apiKey = process.env.VITE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  try {
    const separator = url.includes("?") ? "&" : "?";
    const apiUrl = `https://newsapi.org/v2${url}${separator}apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    // Forward the status code from NewsAPI
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return res.status(500).json({ error: "Failed to fetch news" });
  }
}
