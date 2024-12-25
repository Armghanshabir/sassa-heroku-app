const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

// The HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Discover how to apply for the SASSA unemployment grant of R370, track your application status, and access vital information for financial relief in South Africa.">
    <meta name="keywords" content="SASSA unemployment grant, R370 grant, SASSA status check, South Africa social grants">
    <meta name="author" content="Emila Orton">
    <meta name="robots" content="index, follow">
    <title>Unemployment SASSA Grant for R370 & SASSA Status Check</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }

        header {
            background: #0077b6;
            color: #fff;
            padding: 20px 0;
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 2rem;
        }

        .featured-image {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 20px auto;
        }

        main {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #0077b6;
            margin-top: 20px;
        }

        ul, ol {
            margin: 10px 0;
            padding-left: 20px;
        }

        ul li, ol li {
            margin-bottom: 10px;
        }

        a {
            color: #0077b6;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        footer {
            text-align: center;
            padding: 10px 0;
            background: #0077b6;
            color: #fff;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<header>
    <h1>Unemployment SASSA Grant for R370 & SASSA Status Check</h1>
</header>

<main>
    <section>
        <p><img src="unemployement-grant-sassa-status-check.webp" alt="SASSA unemployment grant for R370" class="featured-image"></p>
        <p>Are you currently facing unemployment and struggling to make ends meet? The South African Social Security Agency (<a href="https://www.sassa.gov.za/" target="_blank">SASSA</a>) provides relief through the Social Relief of Distress (SRD) grant of R370...</p>
    </section>
</main>

<footer>
    <p>&copy; 2024 Insight Aura. All rights reserved.</p>
</footer>

</body>
</html>`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
