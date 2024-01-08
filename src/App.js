import "./App.css";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "./Components/Info";

function App() {
  const [users, setUsers] = useState([]);
  // const [count, setCount] = useState(0);

  console.log(users);
  
  const getUsers = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
  
    } catch (error) {
      console.log(error.response.data);
    }
  };
 
  useEffect(() => {
    getUsers();
    
  }, []);

  return (
    <div className="App">
    

      <Router>
        <Routes>
          <Route path="/" element={<UserList list={users} />} />
          <Route path="/info/:id" element={<Info/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
