import "../styles/landing.css";

import { Link, useNavigate } from "react-router-dom";

import React from "react";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="zoom-in-zoom-out">
        <img
          className="animation"
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-square-icon.png"
          alt="Insta logo"
        />
      </div>
      <button className="btn" onClick={() => navigate("postview")}>
        Enter
      </button>
    </div>
  );
}
