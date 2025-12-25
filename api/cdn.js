export default function handler(req, res) {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("Missing url parameter");
  }

  let cdn;

  if (url.startsWith("https://github.com/") && url.includes("/blob/")) {
    const parts = url.replace("https://github.com/", "").split("/");
    const user = parts[0];
    const repo = parts[1];
    const branch = parts[3];
    const filePath = parts.slice(4).join("/");

    cdn = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${filePath}`;
  }

  else if (url.startsWith("https://raw.githubusercontent.com/")) {
    const parts = url.split("/");
    const user = parts[3];
    const repo = parts[4];
    const branch = parts[5];
    const filePath = parts.slice(6).join("/");

    cdn = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${filePath}`;
  }

  else {
    return res.status(400).send("Invalid GitHub URL");
  }

  res.setHeader("Content-Type", "text/plain");
  res.send(cdn);
}
