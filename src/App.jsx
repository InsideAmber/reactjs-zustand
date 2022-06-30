import React, { useEffect, useState } from "react";
import useStore from "./store";

const App = () => {
  const data = useStore((state) => state.dataHouse);
  const allUsers = useStore((state) => state.fetchUsers);

  useEffect(() => {
    allUsers();
  }, []);

  console.log(data);
  if (data.length === 0) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      {data.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default App;
