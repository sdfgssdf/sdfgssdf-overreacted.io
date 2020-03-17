import React, { useState, useEffect, useContext } from "react";
import InputHeader from "./InputHeader";
import InputContext from "./inputContext";
import TileInput from "./TileInput.tsx";
import RecursionInput from "./RecursionInput.tsx";
import Carousel from "./Carousel.tsx";
import { TYPE } from "./interface";
import { draw } from "./drawMethod";
const InputComponent = props => {
  const { savePicture, reGenerate } = props;
  const [{ type }, setInput] = useContext(InputContext);
  const [input] = useContext(InputContext);
  let carouselType, options, inputDetailCompoent;
  if (type === "递归") {
    options = [
      { name: "recursion1", url: "./recursion1.png" },
      { name: "recursion2", url: "./recursion2.png" },
      { name: "recursion3", url: "./recursion3.png" }
    ];
    carouselType = TYPE.RECURSION;
    inputDetailCompoent = <RecursionInput />;
  } else if (type === "瓷砖") {
    options = [
      { name: "tile1", url: "./tile1.png" },
      { name: "tile2", url: "./tile2.png" },
      { name: "tile3", url: "./tile3.png" },
      { name: "tile4", url: "./tile4.png" }
    ];
    carouselType = TYPE.TILE;
    inputDetailCompoent = <TileInput />;
  }
  return (
    <div className="search-params" draggable={false}>
      <form>
        <InputHeader />
        <Carousel options={options} type={carouselType} />
        {inputDetailCompoent}
        <div className="bottom">
          {" "}
          <button
            onClick={e => {
              e.preventDefault();
              reGenerate();
            }}
          >
            重新生成
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              savePicture();
            }}
          >
            保存图片
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
