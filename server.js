const mongoose = require("mongoose");

// import configured server
const app = require("./app");

const { MONGO_URI, PORT = 4200 } = process.env;

// connect to DB
mongoose
  .connect(MONGO_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
