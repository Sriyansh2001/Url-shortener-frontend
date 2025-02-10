import React from "react";
import "./home.css";
import useSmothText from "../../hooks/useSmothText";
import { HEADING_LIST } from "./constant/homeContants";

export default function Home() {
  const { heading } = useSmothText({ HEADING_LIST });

  return (
    <div className="home-container">
      <div class="background-light light1"></div>
      <div class="background-light light2"></div>
      <div className="home-body">
        <div className="home-main-heading">
          Create Your Short Url in one click
        </div>
        <div className="home-heading">{heading}</div>
        <div className="url-input-container">
          <input
            className="url-input-field"
            type="text"
            placeholder="Please enter a URL"
          />
          <button className="create-url-button">Create Short Url</button>
        </div>
      </div>
    </div>
  );
}
