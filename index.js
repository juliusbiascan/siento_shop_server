const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();
const DB = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

mongoose
    .connect(DB)
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((e) => console.log(e));

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
});

