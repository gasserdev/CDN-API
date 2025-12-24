export default function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("Missing url parameter");
  }

  let cdn;

  if (url.startsWith("https://github.com/") && url.includes("/blob/")) {
    cdn = url
      .replace("https://github.com/", "https://cdn.jsdelivr.net/gh/")
      .replace("/blob/", "/");
  }

  else if (url.startsWith("https://raw.githubusercontent.com/")) {
    const parts = url.split("/");
    const userRepo = `${parts[3]}/${parts[4]}`;
    const filePath = parts.slice(5).join("/");
    cdn = `https://cdn.jsdelivr.net/gh/${userRepo}/${filePath}`;
  }

  else {
    return res.status(400).send("Invalid GitHub URL");
  }

  res.setHeader("Content-Type", "text/plain");
  res.send(cdn);
}
