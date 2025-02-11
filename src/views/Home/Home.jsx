import React from "react";
import "./home.css";
import useSmothText from "../../hooks/useSmothText";
import { HEADING_LIST } from "./constant/homeContants";
import useHome from "./hook/useHome";
import RunningText from "../../components/RunningText/RunningText";

export default function Home() {
  const { createShortUrl, data, loading, error, handleInputChange, inputUrl } =
    useHome();

  console.log(data);
  console.log(error);

  return (
    <div className="home-container">
      <div class="background-light light1"></div>
      <div class="background-light light2"></div>
      <div className="home-body">
        <div className="home-main-heading">
          Create Your Short Url in one click
        </div>
        <div className="home-heading">
          <RunningText HEADING_LIST={HEADING_LIST} />
        </div>
        <div className="url-input-container">
          <input
            className="url-input-field"
            type="text"
            placeholder="Please enter a URL"
            value={inputUrl}
            onChange={handleInputChange}
          />
          <button
            onClick={createShortUrl}
            disabled={loading}
            className="create-url-button"
          >
            Create Short Url
          </button>
        </div>
      </div>
    </div>
  );
}
