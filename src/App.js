
import './App.css';
import {useState} from "react";

function App() {

  const [name, setName] = useState("Sakiz");
  const [age, setAge] = useState(3);
  const [friends, setFriends] = useState(["Sunay", "Orhan"]);

  return (
    <div className="App">
       <div>Merhaba {name}</div>
       <h1>{age}</h1>
       <button onClick={() => setName("Gusta")}>change name</button>
       <button onClick={() => setAge(5)}>change age</button>
       <hr />

       {
         friends.map(friend => <div>{friend}</div>)
       }

    </div>
  );
}

export default App;
