export default function Summary({ temperature, means }) {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  return (
    <div className="container">
      <h2 id="summary">Summary</h2>
      <p>Average temperature for each year</p>
      {means.map((mean, index) => (
        <p key={index}>
          <strong>{years[index]}:</strong> {Math.round(mean * 100) / 100} °C
        </p>
      ))}
    </div>
  );
}
