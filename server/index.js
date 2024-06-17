const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const productRouter = require("./routes/product.route");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.URI;
const app = express();
dbConnect(URI);

app.use(express.json());
app.use(cors());
app.use("/api/product", productRouter);
app.get("/", (req, res) => {
    res.status(200).json({
        status: "Ok"
    })
})

app.listen(PORT, () => {
    console.log("Server is listening at: " + PORT);
})