import { Route, Routes } from "react-router-dom";
import LearnHOC from "./pages/LearnHOC";
import Home from "./pages/Home";
import Testing from "./pages/Testing";

function App() {
  const Button = (props) => <button style={props.style}>Submit di sini</button>;
  const Text = (props) => <p style={props.style}>Text</p>;

  const StyleButton = LearnHOC(Button);
  const StyleText = LearnHOC(Text);

  return (
    <>
      <StyleButton />
      <StyleText />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
        {/* <Route path="" element={<LearnHOC />} /> */}
      </Routes>
    </>
  );
}

export default App;
