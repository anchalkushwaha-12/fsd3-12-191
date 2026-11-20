const User = () => {
  const data = {
    name: "Anchal Kushwaha",
    age: 19,
    isAdmin: false,
    theme: "dark",
  };

  return (
    <>
      <h1>Name : {data.name}</h1>
      <h2>Age: {data.age}</h2>
    </>
  );
};

const Book = (props) => {
  return (
    <>
      <h1>Book Name: {props.name}</h1>
      <h2>Price: {props.price}</h2>
      <h3>Author: {props.author}</h3>
    </>
  );
};

function App() {
  const bookData = [
    {
      name: "Let Us Java",
      author: "Yashwant Kanitkar",
      price: 900,
    },
    {
      name: "Let Us React",
      author: "Vikash Kanitkar",
      price: 1150,
    },
    {
      name: "Let Us NodeJs",
      author: "Suresh Kanitkar",
      price: 1050,
    },
  ];

  return (
    <>

      <h1>Welcome to React</h1>
      <User />
      <Book name="let Us c" author="Yashwant Kanitkar" price="355" />
      <Book {...bookData[0]} />
      <Book {...bookData[1]} />
      <Book {...bookData[2]} />
    </>
  );
}



export default App;