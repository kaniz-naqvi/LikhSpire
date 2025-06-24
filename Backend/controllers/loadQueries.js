import fs from "fs";
import path from "path";

const sql = fs.readFileSync(
  path.join("queries", "../sql/blog.queries.sql"),
  "utf-8"
);

const queries = {};
let currentKey = "";

sql.split("\n").forEach((line) => {
  line = line.trim();

  if (line.startsWith("--")) {
    currentKey = line.replace("--", "").trim();
    queries[currentKey] = "";
  } else if (currentKey) {
    queries[currentKey] += line + " ";
  }
});

for (let key in queries) {
  queries[key] = queries[key].replace(";", "").trim();
}

export default queries;
