import { useEffect, useState } from "react";
const caseData ={}

const Ajax = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(1);
  const maxId = 10;

  useEffect(() => {
    if(caseData[`user-${id}`]){
        setUser(caseData[`user-${id}`])
        return ;
    }
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        caseData[`user-${id}`] = data;
      } );
  },[id]);

  function nextId(){
    if( id < maxId){
        setId(id + 1)
    }
  }
  function prevId(){
    if( id > 1){
        setId(id - 1)
    }
  }


  return (
    <div>
        <h2>Id: {id}</h2>
      <ul>
        <li>name: {user.name}</li>
        <li>email: {user.email}</li>
        <li>phone: {user.phone}</li>
      </ul>
      <div>
        <button onClick={prevId}> prev user </button>
        <button onClick={nextId}> next user </button>
      </div>
    </div>
  );
};

export default Ajax;
