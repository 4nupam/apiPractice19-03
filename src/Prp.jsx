import React, { useEffect, useState } from "react";

export default function Prp({ name }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function apis() {
      try {
        let res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          console.log("Error in res");
        }
        let ans = await res.json();
        setData(ans);
      } catch (error) {
        console.log(error);
      }
    }
    apis();
  }, []);

  return (
    <>
      The code for {name}
      {data.length > 0
        ? data.map((e, index) => (
            <ul>
              <li key={index}>{e.id}</li>
              <li key={index}>{e.title}</li>
            </ul>
          ))
        : "no data"}
    </>
  );
}
