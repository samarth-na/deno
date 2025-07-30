import puppeteer from "puppeteer";
import axios from "axios";
import cheerio from "cheerio";

// Step 1: Fetch top 10 URLs
async function getTop10Urls(query: string): Promise<string[]> {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://www.google.com");
    await page.type('input[name="q"]', query);
    await page.keyboard.press("Enter");
    await page.waitForSelector("h3");

    const urls = await page.evaluate(() => {
        const results = document.querySelectorAll("h3");
        const links: string[] = [];
        results.forEach((result) => {
            const link = result.closest("a")?.href;
            if (link && links.length < 10) {
                links.push(link);
            }
        });
        return links;
    });

    await browser.close();
    return urls;
}

// Step 2: Scrape content from URLs
async function scrapeWebsite(url: string): Promise<string | null> {
    try {
        const response = await axios.get(url, { timeout: 10000 });
        const $ = cheerio.load(response.data);
        const mainContent = $("body").text().replace(/\s+/g, " ").trim();
        return mainContent;
    } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        return null;
    }
}

async function scrapeAllUrls(
    urls: string[]
): Promise<{ url: string; content: string }[]> {
    const scrapedData: { url: string; content: string }[] = [];
    for (const url of urls) {
        const content = await scrapeWebsite(url);
        if (content) {
            scrapedData.push({ url, content });
        }
    }
    return scrapedData;
}

// Step 3: Format data for TinyLLaMA
function formatDataForLLM(
    scrapedData: { url: string; content: string }[]
): string {
    let formattedData = "";
    for (const data of scrapedData) {
        formattedData += `URL: ${data.url}\nContent: ${data.content}\n\n`;
    }
    return formattedData;
}

// Step 4: Query TinyLLaMA
async function queryTinyLLaMA(prompt: string): Promise<string> {
    const response = await axios.post("http://localhost:11434/api/generate", {
        model: "tinyllama",
        prompt: prompt,
    });
    return response.data.response;
}

// Main program
async function main() {
    const query = "best AI tools 2023";

    // Fetch URLs
    const urls = await getTop10Urls(query);
    console.log("Top 10 URLs:", urls);

    // Scrape content
    const scrapedData = await scrapeAllUrls(urls);
    console.log("Scraped Data:", scrapedData);

    // Format data
    const formattedData = formatDataForLLM(scrapedData);
    console.log("Formatted Data:", formattedData);

    // Query TinyLLaMA
    const prompt = "Summarize the following information:\n" + formattedData;
    const response = await queryTinyLLaMA(prompt);
    console.log("TinyLLaMA Response:", response);
}

main();
