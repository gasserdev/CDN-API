# cdn-api

A simple serverless API that converts GitHub file URLs into jsDelivr CDN links.

Built with vanilla JavaScript, no dependencies, and designed to be deployed easily on platforms like Vercel or Netlify.

---

## What it does

Instead of using:
https://github.com/user/repo/blob/main/file.js

arduino
Copy code

You get:
https://cdn.jsdelivr.net/gh/user/repo/file.js

yaml
Copy code

---

## Usage

### Endpoint
/api/cdn?url=GITHUB_URL

shell
Copy code

### Example
/api/cdn?url=https://github.com/user/repo/blob/main/script.js

shell
Copy code

### Response
https://cdn.jsdelivr.net/gh/user/repo/script.js

yaml
Copy code

---

## Supported URLs

- GitHub blob URLs  
https://github.com/user/repo/blob/branch/file

diff
Copy code

- Raw GitHub URLs  
https://raw.githubusercontent.com/user/repo/branch/file

yaml
Copy code

---

## Not Supported

- Non-GitHub URLs
- Private repositories
- GitHub release assets

---

## Deployment

### Vercel
Deploy the repository and the API will be available automatically.

### Netlify
Use the same logic inside a serverless function.

---

## License

MIT






