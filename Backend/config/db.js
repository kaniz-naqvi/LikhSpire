import Client from "pg";
const db = new Client({
  user: "postgres",
  password: "Syeda@313",
  port: 4000,
  database: "LikhSpire",
  host: "localhost",
});
export default db;
