import React from "react";

function Header() {

  const toggleMenu = () => {
    document.getElementById("menu").classList.toggle("show");
  };

  const toggleDark = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="header">

      <div className="logo">TechNova</div>

      <div className="menuBtn" onClick={toggleMenu}>
        ☰
      </div>

      <nav>
        <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <button onClick={toggleDark} className="darkBtn">
        Dark Mode
      </button>

    </header>
  );
}

export default Header;