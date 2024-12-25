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
        <p><img src="unemployement-grant-sassa-status-check.webp" alt="SASSA unemployment grant for R350" class="featured-image"></p>

        <p>Are you currently facing unemployment and struggling to make ends meet? The South African Social Security Agency (<a href="https://www.sassa.gov.za/" target="_blank">SASSA</a>) provides relief through the Social Relief of Distress (SRD) grant of R370. This temporary grant is designed to assist individuals who have no other means of financial support. In this article, we will dive deep into the details of the unemployment SASSA grant, explore how you can check your SASSA status, and provide tips to ensure your application process is seamless. Let’s ensure you have the information you need to access this vital support.</p>
    </section>

    <section>
        <h2>What Is the SASSA Unemployment Grant?</h2>
        <p>The SASSA unemployment grant, often referred to as the SRD R370 grant, is aimed at providing temporary financial aid to unemployed individuals who meet specific eligibility criteria. This program was introduced to alleviate the economic burden faced by millions of South Africans, particularly in light of challenges like COVID-19 and rising unemployment rates.</p>
        <ul>
            <li><strong>Grant Amount:</strong> R370 per month.</li>
            <li><strong>Purpose:</strong> To offer short-term financial relief for basic needs like food and utilities.</li>
            <li><strong>Duration:</strong> Typically issued for a six-month period, subject to extension based on government directives.</li>
        </ul>
    </section>

    <section>
        <h2>Who Qualifies for the R370 Grant?</h2>
        <p>Not everyone qualifies for the SRD R370 grant. Here are the eligibility criteria:</p>
        <ul>
            <li>Must be a South African citizen, permanent resident, or refugee.</li>
            <li>Between the ages of 18 and 60 years.</li>
            <li>Currently unemployed and not receiving any other form of income, grant, or UIF payment.</li>
            <li>Must not be living in a government-funded or subsidized institution.</li>
        </ul>
    </section>

    <section>
        <h2>How to Apply for the SASSA R370 Grant</h2>
        <p>Applying for the unemployment SASSA grant is straightforward. Follow these steps:</p>
        <ol>
            <li>Visit the SASSA SRD Website: Head to the official website to start your application.</li>
            <li>Provide Personal Information: Enter your ID number, contact details, and bank account information.</li>
            <li>Agree to Declarations: Confirm that you meet the eligibility criteria.</li>
            <li>Submit Application: Complete the form and wait for confirmation.</li>
        </ol>
        <p>Applications are verified through the Department of Home Affairs and other government databases to ensure transparency.</p>
    </section>

    <section>
        <h2>SASSA Status Check: Tracking Your Application</h2>
        <p>Once you’ve applied for the grant, it’s crucial to monitor your application status. The SASSA status check system allows you to track updates in real time. To perform a status check, visit <a href="https://sassagrantcheck.co.za/" target="_blank">SASSA Status Check</a> and follow these steps:</p>
        <ul>
            <li>Enter your ID number and cellphone number.</li>
            <li>Click on "Submit."</li>
            <li>View the current status of your application.</li>
        </ul>
        <p>Common statuses include "Pending," "Approved," or "Declined." If your application is declined, you can submit an appeal online.</p>
    </section>

    <section>
        <h2>Key Statistics on Unemployment in South Africa</h2>
        <p>Understanding the bigger picture can help highlight the importance of programs like the SRD grant:</p>
        <ul>
            <li>As of 2024, South Africa’s unemployment rate stands at <strong>32.6%</strong>.</li>
            <li>Approximately <strong>7.9 million people</strong> are actively seeking work but unable to find employment.</li>
            <li>Over <strong>10 million South Africans</strong> live below the poverty line, making financial assistance programs a lifeline.</li>
        </ul>
    </section>

    <section>
        <h2>Why the SRD R370 Grant Matters</h2>
        <p>The R370 unemployment grant serves as a safety net for individuals and families facing financial distress. While the amount may seem modest, it can make a significant difference in covering essentials like food, transport, and utilities. Furthermore, the program strengthens the government’s commitment to social welfare and provides temporary relief to the most vulnerable.</p>
    </section>
    
    <section>
        <h2>Common Issues During Application and Solutions</h2>
        <p>While the process is simple, some applicants face challenges. Here are common issues and how to resolve them:</p>
        <ul>
            <li>Application Declined: Double-check your eligibility and ensure all information is accurate. Submit an appeal if necessary.</li>
            <li>No Feedback: Regularly check your application status online.</li>
            <li>Bank Details Verification: Ensure the banking information provided matches the applicant’s ID.</li>
        </ul>

For updates and detailed solutions, visit <a href="https://sassagrant.s3.eu-north-1.amazonaws.com/SASSA+Updates/index.html" target="_blank">SASSA’s Latest Updates</a>.
    </section>
    
    <section>
        <h2>Conclusion</h2>
        <p>Accessing financial assistance during tough times is not just a right but a necessity for many South Africans. The SASSA unemployment grant for R370 is designed to offer hope and stability to individuals who need it most. By understanding the application process and checking your grant status every month, you can ensure that you receive the support you deserve. Don’t hesitate to take action—help is just a few clicks away.</p>
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
