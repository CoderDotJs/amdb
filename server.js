const app = require("./app");
const connectDatabase = require("./database/database");
const PORT = 5000;

connectDatabase();

app.listen(PORT, () => {
  console.log("Server is connected on " + PORT);
});
