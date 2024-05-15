import React, { ReactNode } from "react";

interface means {
  means?: any;
}

export default function Summary({ means }: means) {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
  return (
    <div className="container">
      <h2 id="summary">Summary</h2>
      <div className="summary-container">
        <p className="summary-text">
          According to the DWD (German Weather Service), the year 2020 was the
          second warmest year in Germany since records began in 1881. In the
          preceding years from 2011 to 2020, temperatures in Germany have risen
          significantly. This illustrates the rapid temperature increase of
          recent decades. (Auswirkungen Des Klimawandels, o. D.) <br />
          It's important to note that long-term trends are necessary to
          demonstrate climate change. (Höke, 2023) The chosen 8 years here are
          just an example of how temperature fluctuations can be visually
          represented.
        </p>
        <div className="average-temp">
          <h5>Average temperature for each year</h5>
          {means.map((mean, index) => (
            <span key={index} className="year">
              <strong>{years[index]}:</strong> {Math.round(mean * 100) / 100} °C
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
