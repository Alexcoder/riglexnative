import { useNavigate } from "react-router-dom";
import "./navbar.css";

import React from "react";

const Navbar = ({ setShuffleQuestion }) => {
  const navigate = useNavigate();
  return (
    <main className="nav-cont">
      <button
        onClick={() => {
          navigate("/"),
            localStorage.clear("score"),
            localStorage.clear("quiz-finish"),
            localStorage.clear("currentIndex"),
            setShuffleQuestion(false);
        }}
        className="nav-home-btn"
      >
        Home
      </button>
      <div className="nav-quiz-hub">QUIZ HUB</div>
      {/* <div>
            {""}
        </div> */}
    </main>
  );
};

export default Navbar;
