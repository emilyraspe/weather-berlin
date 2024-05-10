export default function Temperature({ temperature }) {
  if (temperature < 0) {
    return <div className="color1"></div>;
  } else if (temperature <= 5) {
    return <div className="color2"></div>;
  } else if (temperature <= 10) {
    return <div className="color3"></div>;
  } else if (temperature <= 20) {
    return <div className="color4"></div>;
  } else {
    return <div className="color5"></div>;
  }
}
