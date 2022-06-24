import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { todoContext } from "../../context/todoContext";
const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo.todo);
    }
  }, [oneTodo]);
  function handleSave() {
    let editedTodo = {
      todo,
    };
    updateTodo(id, editedTodo);
    navigate("/list");
  }
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      {oneTodo ? (
        <Box>
          <TextField
            value={todo}
            onChange={e => setTodo(e.target.value)}
            label="Outlined"
            variant="outlined"
          />
          <Button
            onClick={handleSave}
            style={{
              height: "55px",
              width: "100px",
            }}
            variant="contained">
            Save
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};
export default Edit;
