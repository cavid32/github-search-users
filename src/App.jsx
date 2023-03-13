import { useState, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Context from "./Context";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import UserInfo from "./pages/UserDetail/UserInfo";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "getUsers":
        return {
          ...state,
          users: action.value,
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    users: [],
  });

  const data = {
    state,
    dispatch
  }

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "getUsers", value: res }));
  }, []);



  return <Context.Provider value={data}>
    <Routes>
      <Route  path="/" element={ <Home/>}/>
      <Route  path ="/notfound" element={<NotFound/>}/>
      <Route path =":login" element={<UserInfo/>}/>
    </Routes>
  </Context.Provider>;
}

export default App;
