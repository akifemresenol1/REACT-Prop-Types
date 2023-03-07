import "./App.css";

import User from "./components/User";

const friends = [
  {
    id: 1,
    name:"Ahmet",
  },
  {
    id: 2,
    name:"Mehmet",
  },
  {
    id: 3,
    name:"Ali",
  }
];

function App() {
  return(
    <>
    <User 
    name="Akif Emre"
    surname="Şenol"
    isLoggedIn={true}
    age={"23"}
    friends={friends}
    address={{
      title:'İzmit/Kocaeli',
      zip: 41654
    }}
    />
    </>
  )
}


export default App;