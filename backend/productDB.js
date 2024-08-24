const connectDb = require("./db/connect");
require("dotenv").config();

const product = require("./models/product");
const productJson = require("./products.json")

const start = async () => {
    try{
        await connectDb(process.env.MONGODB_URI);
        await product.create(productJson);
        console.log("success");

    }catch(error){
        console.log(error);
    }
};
start();