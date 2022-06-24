import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../context/todoContext";

const Add = () => {
  const { createTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  function handleSave() {
    let newTodo = {
      todo,
    };
    createTodo(newTodo);
    navigate("/list");
  }
  return (
    <Box style={{ display: "flex", margin: "20px" }}>
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="Outlined"
        variant="outlined"
      />
      <Button
        onClick={() => handleSave()}
        style={{ marginLeft: "10px" }}
        variant="outlined">
        Add
      </Button>
    </Box>
  );
};

export default Add;
