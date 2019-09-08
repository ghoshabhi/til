import React from "react";

import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">
        Today I Learned <span className="blinking-cursor">|</span>
      </h1>
    </header>
  );
}
