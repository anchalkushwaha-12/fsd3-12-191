import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });// json file vj rhe h
  const product =[ {
    name: "Laptop",
    price: 50000,
    qty: 3,
    discount: 10,
  },
  {
    name: "Mobile",
    price: 20000,
    qty: 5,
    discount: 5,
  },
   {
    name: "Ipad",
    price: 76000,
    qty: 2,
    discount: 20,
  },
];
  res.end(JSON.stringify(product,null, 2));
});

server.listen(3000, () => console.log("Server is running at 3000 ..."));