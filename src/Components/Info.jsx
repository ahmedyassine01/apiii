import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Info = () => {
  const [user, setUser] = useState("");

  console.log(user);
  const {id } = useParams();
  const getOneUser = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

   useEffect(() => {
    getOneUser()
    
   ;
  
  }, [id ])
  useEffect(() => {
    setTimeout(() => {
    }, 1000);
  });
  
  return <div>
    <h1>{user.name}</h1>
  </div>;
};

export default Info;
