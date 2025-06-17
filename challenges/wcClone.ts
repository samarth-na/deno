import fs from "node:fs";

// Asynchronous file reading

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(typeof data);

    let lineCount = 0;
    let wordCount = 0 - 1;

    let bytes = data.length;
    const words = data.split(/\s+/);

    words.forEach(() => {
        wordCount++;
    });
    for (const _ of data) {
        if (_.match("\n")) {
            lineCount++;
        }
    }
    console.log(` ${lineCount}  ${wordCount} ${bytes} example.txt`);
});
