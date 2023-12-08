import React from "react";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div">
        <div className="text-wrapper">In A Galaxy...</div>
        <div className="text-wrapper-2">Not So Far Away...</div>
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653dbe720a18b93eb2753fa8/releases/6547ca25fa5e4242ace92a93/img/image-1.png"
        />
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="img"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653dbe720a18b93eb2753fa8/releases/6547ca25fa5e4242ace92a93/img/image-2@2x.png"
            />
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653dbe720a18b93eb2753fa8/releases/6547ca25fa5e4242ace92a93/img/image-3@2x.png"
            />
            <img
              className="image-3"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653dbe720a18b93eb2753fa8/releases/6547ca25fa5e4242ace92a93/img/image-4.png"
            />
            <img
              className="image-4"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653dbe720a18b93eb2753fa8/releases/6547ca25fa5e4242ace92a93/img/image-5.png"
            />
          </div>
          <div className="text-wrapper-3">Do Or Do Not...</div>
          <div className="text-wrapper-4">There Is No Try</div>
          <a
            className="text-wrapper-5"
            href="https://www.lego.com/en-us/themes/star-wars"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.lego.com/en-us/themes/star-wars
          </a>
        </div>
      </div>
    </div>
  );
};