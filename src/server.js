const app = require("./api");

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is connected on " + PORT);
});
