import express from "express";
import { products } from "./data.js";

const app = express();

// Returns name, image, price and id of all products
app.get("/api/products", (req, res) => {
  const sortedProducts = products.map(
    ({ description, reviews, ...rest }) => rest
  );

  res.status(200).json({
    count: sortedProducts.length,
    data: sortedProducts,
  });
});

// Get details of a particular product
app.get("/api/products/:pid", (req, res) => {
  const { pid } = req.params;

  const item = products.find((p) => p.id === Number(pid));

  if (!item) {
    return res.status(404).json({
      msg: `Product with id ${pid} not found`,
    });
  }

  res.status(200).json({
    msg: "Product found",
    data: item,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

// Start server
app.listen(4444, () => {
  console.log("prg4 is running at port 4444");
});