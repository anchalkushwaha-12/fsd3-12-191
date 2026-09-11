import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });// json file vj rhe h
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
];
  res.end(JSON.stringify(product));
});

server.listen(3000, () => console.log("Server is running at 3000 ..."));