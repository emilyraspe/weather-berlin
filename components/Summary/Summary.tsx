export default function Summary({ temperature, means }) {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  return (
    <div className="container">
      <h2 id="summary">Summary</h2>
      <p>
        Explore the dynamic weather patterns and climate trends of Berlin from
        2016 to 2023 through this visualization. Each colored dot represents a
        single day, allowing you to easily observe the fluctuations in
        temperature and weather conditions over the years. Through this
        visualization, I hope to foster a greater understanding of climate
        dynamics and encourage discussions on climate change and its impacts.
      </p>
      <h4>Average temperature for each year</h4>
      {means.map((mean, index) => (
        <p key={index}>{mean}</p>
      ))}
    </div>
  );
}
