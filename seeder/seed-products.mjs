import mongoose from "mongoose";
import Product from "../models/Product.mjs";
import products from "../data/products.mjs";

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("removing products...");
    await Product.deleteMany({});
    console.log("removed all products successfully");
    console.log("seeding products...");
    await Product.insertMany(products);
    console.log("seeded products successfully");
    mongoose.disconnect();
    process.exit();
  } catch (error) {
    console.log("can not seed products");
    process.exit();
  }
};

seedProducts();
