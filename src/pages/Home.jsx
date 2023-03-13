import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/testing")}>Testing</button>
    </div>
  );
}

export default Home;
