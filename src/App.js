import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./components/Add/Add";
import Counter from "./components/Counter/Counter";
import Edit from "./components/Edit/Edit";
import List from "./components/List/List";

import CounterContextProvider from "./context/counterContext";
import TodoContextProvider from "./context/todoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </TodoContextProvider>
  );
};

export default App;
