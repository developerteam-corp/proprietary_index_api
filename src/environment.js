let config;
let db = process.env.DB_CONN || "mongodb://localhost/proprietaryIndexSystemDb";
if (!process.env.DB_CONN) {
  console.log("Using default DB Connection String.");
}
config = {
  bodyLimit: "100kb",
  corsHeaders: ["Link"]
};

export default {
  config,
  db
};
