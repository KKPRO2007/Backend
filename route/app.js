const express = require("express");
const app = express();

const userRouter = require("./routes/user");

// Mount router
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log("Server running");
});