export default function Legend() {
  return (
    <div className="container">
      <h2 id="legend">Legend</h2>

      <div className="legends-container">
        <div className="temperature color1"></div>
        <p>Less than 0 °C </p>

        <div className="temperature color2"></div>
        <p>0 – 5 °C</p>

        <div className="temperature color3"></div>
        <p>6 – 9 °C</p>

        <div className="temperature color4"></div>
        <p>10 – 20 °C</p>

        <div className="temperature color5"></div>
        <p>More than 20 °C</p>
      </div>
    </div>
  );
}
