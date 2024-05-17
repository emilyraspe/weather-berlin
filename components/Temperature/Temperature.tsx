import React from "react";

type TemperatureProps = {
  temperature: number;
};

export default function Temperature({ temperature }: TemperatureProps) {
  if (temperature < 0) {
    return <div className="temperature color1"></div>;
  } else if (temperature <= 5) {
    return <div className="temperature color2"></div>;
  } else if (temperature <= 10) {
    return <div className="temperature color3"></div>;
  } else if (temperature <= 20) {
    return <div className="temperature color4"></div>;
  } else {
    return <div className="color5 temperature"></div>;
  }
}
