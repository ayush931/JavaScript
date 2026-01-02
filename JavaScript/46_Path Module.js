const path = require ("path")

console.log(path.sep); // "\" separator

console.log(process.env.path); // ";"

console.log(path.delimiter); // ";"

const filePath1 = "\public_html\home\index.html"

const currentFilePath = __filename  
console.log("currentFilePath >", currentFilePath); // It will show the current file path.

console.log("dirName >",__dirname); // It will show the directory name

let baseName = path.basename(currentFilePath)
console.log("baseName >",baseName);

let baseNameWithoutExt = path.basename(currentFilePath, ".js")
console.log("baseNameWithoutExt >",baseNameWithoutExt);

let dirName = path.dirname(currentFilePath)
console.log("dirName1 >", dirName);

console.log("ext >", path.extname(currentFilePath));
console.log("ext1 >", path.extname("index.md.js"));

let pathToFile = path.format({
    dir: "\public_html\home",
    base: "index.html"
})

console.log("pathToFile >", pathToFile);

console.log("IsAbsolute", path.isAbsolute(currentFilePath));

console.log("IsAbsolute", path.isAbsolute(".\index.html"));

let pathToDir = path.join("\home", "js", "dist", "index.js")
console.log("pathToDir >", pathToDir);

console.log("parse >", path.parse(currentFilePath));

console.log("Relative path >", path.relative("\home\\config", "\home\\js"));

console.log("resolve >", path.resolve()); // Give directory.

console.log("normalize >", path.normalize("\\home\\user\\js"));