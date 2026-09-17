//we use in memory data base
let users = [{
    id: 1,
    name: "Anchal",
    email: "anchal@example.com",
    phone: "1234567xxxx",
},
{
    id: 2,
    name: "Angel",
    email: "angel@example.com",
    phone: "9876543xxxx",
},
];
let nextId = 3;

export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};