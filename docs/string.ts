// 1. String Declaration
const str1: string = "Hello";
const str2: string = "World";

// 2. Concatenation
const concatenated: string = str1 + " " + str2;
console.log(`Concatenation: ${concatenated}`); // "Hello World"

// 3. Length
console.log(`Length of "${str1}": ${str1.length}`); // 5

// 4. Accessing Characters
console.log(`First character of "${str1}": ${str1[0]}`); // "H"
console.log(`Char at index 1: ${str1.charAt(0)}`); // "e"

// 5. Substring/Slicing
console.log(`Substring(1,3): ${str1.substring(1, 3)}`); // "el"
console.log(`Slice(1,3): ${str1.slice(1, 3)}`); // "el"

// 6. Searching
console.log(`Index of 'e': ${str1.indexOf("e")}`); // 1
console.log(`Includes 'ell'? ${str1.includes("ell")}`); // true
console.log(`Starts with 'He'? ${str1.startsWith("He")}`); // true
console.log(`Ends with 'lo'? ${str1.endsWith("lo")}`); // true

// 7. Modifying Strings
console.log(`Uppercase: ${str1.toUpperCase()}`); // "HELLO"
console.log(`Lowercase: ${str1.toLowerCase()}`); // "hello"
console.log(`Trim: ${"  Hello  ".trim()}`); // "Hello"
console.log(`Replace: ${str1.replace("llo", "y")}`); // "Hey"

// 8. Splitting & Joining
const splitResult: string[] = "a,b,c".split(",");
console.log(`Split: ${JSON.stringify(splitResult)}`); // ["a","b","c"]
console.log(`Join: ${splitResult.join("-")}`); // "a-b-c"

// 9. Type Conversion
const numStr: string = "123";
console.log(`String to number: ${parseInt(numStr)}`); // 123
console.log(`Number to string: ${(123).toString()}`); // "123"

// 10. Checking String Properties
console.log(`Is "123" numeric? ${!isNaN(parseFloat("123"))}`); // true
console.log(`Is "abc" numeric? ${!isNaN(parseFloat("abc"))}`); // false

// 11. Padding
console.log(`PadStart: ${"7".padStart(3, "0")}`); // "007"
console.log(`PadEnd: ${"7".padEnd(3, "!")}`); // "7!!"

// 12. Iteration
for (const char of str1) {
    console.log(`Character: ${char}`);
}

// 13. Multiline Strings (using template literals)
const multiline: string = `Line 1
Line 2`;
console.log(multiline);

// 14. Unicode/Emoji Handling
// Run with: deno run string_operations.ts
