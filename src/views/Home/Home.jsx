import React from "react";
import "./home.css";
import { HEADING_LIST } from "./constant/homeContants";
import useHome from "./hook/useHome";
import RunningText from "../../components/RunningText/RunningText";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ClipboardText from "../../components/ClipboardText/ClipboardText";

export default function Home() {
  const {
    createShortUrl,
    createdUrl,
    removeCreatedUrl,
    loading,
    handleInputChange,
    inputUrl,
  } = useHome();

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
          {createdUrl ? (
            <div className="created-url">
              <ClipboardText text={createdUrl} />
            </div>
          ) : (
            <Input
              className="url-input-field"
              type="text"
              placeholder="Please enter a URL"
              value={inputUrl}
              onChange={handleInputChange}
            />
          )}
          {createdUrl ? (
            <Button onClick={removeCreatedUrl} disabled={loading}>
              Create New Url
            </Button>
          ) : (
            <Button onClick={createShortUrl} disabled={loading}>
              Create Short Url
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
