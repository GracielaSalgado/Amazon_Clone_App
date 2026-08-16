import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>> ", authUser);
      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
