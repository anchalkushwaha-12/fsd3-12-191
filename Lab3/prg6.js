import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Product Page</h1><p>Product details will be displayed here.</p>");
    res.end(
      `<a href="/product">Click here to view product details</a><br>
         <a href="/contact">Click here to view product details using prg7</a>`

    );
  }
  else if (req.url === "/product") {


    const stream = createReadStream("product.html", { encoding: "utf-8" });
    stream.pipe(res);

    
  }else if (req.url === "/contact") {
    const stream = createReadStream("contact.html", { encoding: "utf-8" });
    stream.pipe(res);
  }
   else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => console.log("prg6 is running..."));