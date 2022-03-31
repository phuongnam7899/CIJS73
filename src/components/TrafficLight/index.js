import { useState } from "react";
import "./index.css";

export const TrafficLight1 = () => {
  const [lights, setLights] = useState([
    {
      color: "red",
      isActive: false,
    },
    {
      color: "yellow",
      isActive: false,
    },
    {
      color: "green",
      isActive: true,
    },
    {
      color: "violet",
      isActive: false,
    },
  ]);
  const handleClickNext = () => {
    const activeLightIndex = lights.findIndex((light) => {
      return light.isActive;
    });

    // let nextActiveLightIndex;
    // if (activeLightIndex === lights.length - 1) {
    //   nextActiveLightIndex = 0;
    // } else {
    //   nextActiveLightIndex = activeLightIndex + 1;
    // }
    const nextActiveLightIndex =
      activeLightIndex === lights.length - 1 ? 0 : activeLightIndex + 1;

    const newLights = [...lights];
    newLights[activeLightIndex].isActive = false;
    newLights[nextActiveLightIndex].isActive = true;

    setLights(newLights);
  };
  return (
    <div>
      <button onClick={handleClickNext}>Next</button>
      {lights.map((light) => {
        return (
          <div
            className="light"
            style={{ backgroundColor: light.isActive ? light.color : "grey" }}
          ></div>
        );
      })}
    </div>
  );
};

export const TrafficLight2 = () => {
  const lightsOrder = ["red", "yellow", "green"];
  const [activeLightIndex, setActiveLightIndex] = useState(1);
  const handleClickNext = () => {
    setActiveLightIndex(
      activeLightIndex === lightsOrder.length - 1 ? 0 : activeLightIndex + 1
    );
  };
  return (
    <div>
      {
          activeLightIndex !==  lightsOrder.length - 1 && <button onClick={handleClickNext}>Next</button>
      }
      
      {lightsOrder.map((light, index) => {
        return (
          <div
            className="light"
            key={index}
            style={{
              backgroundColor: index === activeLightIndex ? light : "grey",
            }}
          ></div>
        );
      })}
    </div>
  );
};
