import { useState } from "react";
import "./App.css";
import MemberInfo from "./components/MemberInfo";
import Navbar from "./components/Navbar";

function App() {
  const [name, setName] = useState("Tegar");
  const [age, setAge] = useState(19);

  return (
    <>
      <Navbar />
      <MemberInfo name={name} age={age} info={"Peserta Bootcamp Frontend Skilvul"} imgUrl={"https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"} nameColor={"blue"} />

      <br />
      <button onClick={() => setName("Risqy")}>change name</button>
      <button onClick={() => setAge(age + 1)}>change age</button>
    </>
  );
}

export default App;