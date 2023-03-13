import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return <button onClick={navigate("/testing")}>Testing</button>;
}

export default Home;
