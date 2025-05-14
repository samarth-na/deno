"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = require("puppeteer");
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
// Step 1: Fetch top 10 URLs
function getTop10Urls(query) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, page, urls;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer_1.default.launch({ headless: true })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto("https://www.google.com")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.type('input[name="q"]', query)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, page.keyboard.press("Enter")];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, page.waitForSelector("h3")];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.evaluate(function () {
                            var results = document.querySelectorAll("h3");
                            var links = [];
                            results.forEach(function (result) {
                                var _a;
                                var link = (_a = result.closest("a")) === null || _a === void 0 ? void 0 : _a.href;
                                if (link && links.length < 10) {
                                    links.push(link);
                                }
                            });
                            return links;
                        })];
                case 7:
                    urls = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 8:
                    _a.sent();
                    return [2 /*return*/, urls];
            }
        });
    });
}
// Step 2: Scrape content from URLs
function scrapeWebsite(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, $, mainContent, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get(url, { timeout: 10000 })];
                case 1:
                    response = _a.sent();
                    $ = cheerio_1.default.load(response.data);
                    mainContent = $("body").text().replace(/\s+/g, " ").trim();
                    return [2 /*return*/, mainContent];
                case 2:
                    error_1 = _a.sent();
                    console.error("Error scraping ".concat(url, ":"), error_1);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function scrapeAllUrls(urls) {
    return __awaiter(this, void 0, void 0, function () {
        var scrapedData, _i, urls_1, url, content;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    scrapedData = [];
                    _i = 0, urls_1 = urls;
                    _a.label = 1;
                case 1:
                    if (!(_i < urls_1.length)) return [3 /*break*/, 4];
                    url = urls_1[_i];
                    return [4 /*yield*/, scrapeWebsite(url)];
                case 2:
                    content = _a.sent();
                    if (content) {
                        scrapedData.push({ url: url, content: content });
                    }
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, scrapedData];
            }
        });
    });
}
// Step 3: Format data for TinyLLaMA
function formatDataForLLM(scrapedData) {
    var formattedData = "";
    for (var _i = 0, scrapedData_1 = scrapedData; _i < scrapedData_1.length; _i++) {
        var data = scrapedData_1[_i];
        formattedData += "URL: ".concat(data.url, "\nContent: ").concat(data.content, "\n\n");
    }
    return formattedData;
}
// Step 4: Query TinyLLaMA
function queryTinyLLaMA(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.post("http://localhost:11434/api/generate", {
                        model: "tinyllama",
                        prompt: prompt,
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.data.response];
            }
        });
    });
}
// Main program
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var query, urls, scrapedData, formattedData, prompt, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = "best AI tools 2023";
                    return [4 /*yield*/, getTop10Urls(query)];
                case 1:
                    urls = _a.sent();
                    console.log("Top 10 URLs:", urls);
                    return [4 /*yield*/, scrapeAllUrls(urls)];
                case 2:
                    scrapedData = _a.sent();
                    console.log("Scraped Data:", scrapedData);
                    formattedData = formatDataForLLM(scrapedData);
                    console.log("Formatted Data:", formattedData);
                    prompt = "Summarize the following information:\n" + formattedData;
                    return [4 /*yield*/, queryTinyLLaMA(prompt)];
                case 3:
                    response = _a.sent();
                    console.log("TinyLLaMA Response:", response);
                    return [2 /*return*/];
            }
        });
    });
}
main();
