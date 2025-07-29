import { readFile } from "node:fs/promises";

const content = await readFile("deno.lock", "utf8");

console.log(content); // string
