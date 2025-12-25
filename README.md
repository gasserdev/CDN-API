# cdn-api

A simple serverless API that converts GitHub file URLs into jsDelivr CDN links.

Built with vanilla JavaScript, no dependencies, and designed to be deployed easily on platforms like Vercel or Netlify.

Live demo:  
https://cdn-api-dev.vercel.app/

---

## What it does

Instead of using a normal GitHub file URL like:

https://github.com/user/repo/blob/main/file.js

arduino
Copy code

You get a fast jsDelivr CDN link:

https://cdn.jsdelivr.net/gh/user/repo@main/file.js

yaml
Copy code

This helps serve files faster and more reliably.

---

## Usage

### Endpoint
/api/cdn?url=GITHUB_URL

yaml
Copy code

---

### Example Request
/api/cdn?url=https://github.com/user/repo/blob/main/script.js

yaml
Copy code

---

### Response
https://cdn.jsdelivr.net/gh/user/repo@main/script.js

yaml
Copy code

The response is returned as plain text (not JSON).

---

## Supported URLs

### GitHub blob URLs
https://github.com/user/repo/blob/branch/file

shell
Copy code

### Raw GitHub URLs
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
Deploy the repository and the API will be available automatically as a serverless function.

### Netlify
Use the same logic inside a Netlify serverless function.

---

## License

MIT
