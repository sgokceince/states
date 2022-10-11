
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
       <br></br>
        <h2>friends</h2>
       {
         friends.map((friend, index) => (
            <div key= {index}>{friend}</div>
       ))}

       <br />
       <button onClick={() => setFriends([...friends, "Sümbül"])}>Add new friend</button>

    </div>
  );
}

export default App;
