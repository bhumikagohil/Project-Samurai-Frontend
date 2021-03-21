import { React, useEffect, useState } from "react";
import axios from "axios";

const Screen = () => {
  const[data,setData]=useState()
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  });
  return <h1>{data}</h1>;
};

export default Screen;
