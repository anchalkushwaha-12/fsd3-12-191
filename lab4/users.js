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
export const getAllUser=()=>{
    return users;
}
export const getUserById=(pid)=>{

users.find((user)=>
user.id==pid)
return found
}

export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};
export const updateUser=(pid,updateData)=>{
    const index=users.findIndex((user)=>user.id==pid);
    if(index!==-1){
        return false;
    }
    updateData.id=pid;
    users[index]=updateData;
    return updateData;
}
 export const deleteUser=(pid)=>{
    const index=users.findIndex((user)=>user.id==pid);
    if(index!==-1){
        return false;

    }
    users.splice(index,1);


}