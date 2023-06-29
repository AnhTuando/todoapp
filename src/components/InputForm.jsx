import "./components.css";
import Input from "./Input";
import Button from "./Button";
import { useState, useEffect, useContext } from "react";
import { SharedArr } from "../App";
export default function InputForm() {
  const { addData } = useContext(SharedArr);
  const { todos } = useContext(SharedArr);
  const [input, setInput] = useState("");

  const handleCreateClickBtn = () => {
    if (input.trim() !== "") {
      addData({
        title: input,
        completed: false,
      });
      setInput("");
    }
  };
  return (
    <div className="input-form d-flex justify-content-center align-items-center gap-3">
      <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
      <Button variant={"primary"} onClick={handleCreateClickBtn}>
        Create
      </Button>
    </div>
  );
}
