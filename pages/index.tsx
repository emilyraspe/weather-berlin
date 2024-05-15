import Footer from "@/components/Footer/Footer";
import Legend from "@/components/Legend/Legend";
import Navigation from "@/components/Navigation/Navigation";
import Summary from "@/components/Summary/Summary";
import Temperature from "@/components/Temperature/Temperature";
import { fetchWeatherApi } from "openmeteo";
import { useState, useEffect } from "react";
import React from "react";

export default function Home() {
  const [allData, setAllData] = useState({ daily: {} });

  useEffect(() => {
    async function fetch() {
      const params = {
        latitude: 52.5244,
        longitude: 13.4105,
        start_date: "2016-01-01",
        end_date: "2023-12-31",
        daily: "temperature_2m_mean",
      };
      const url = "https://archive-api.open-meteo.com/v1/archive";
      const responses = await fetchWeatherApi(url, params);

      // Helper function to form time ranges
      const range = (start: number, stop: number, step: number) =>
        Array.from(
          { length: (stop - start) / step },
          (_, i) => start + i * step
        );

      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];

      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();

      const daily = response.daily()!;

      const weatherData = {
        daily: {
          time: range(
            Number(daily.time()),
            Number(daily.timeEnd()),
            daily.interval()
          ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
          temperature2mMean: daily.variables(0)!.valuesArray()!,
        },
      };
      setAllData(weatherData);
    }
    fetch();
  }, []);
  useEffect(() => {
    console.log("Updated allData:", allData);
  }, [allData]);

  const temperaturesByYear = [];
  if (allData.daily.time && allData.daily.temperature2mMean) {
    allData.daily.time.forEach((time, index) => {
      const year = time.getFullYear();
      if (!temperaturesByYear[year]) {
        temperaturesByYear[year] = [];
      }
      temperaturesByYear[year].push(allData.daily.temperature2mMean[index]);
    });
  }

  const temperature = allData.daily.temperature2mMean;

  const means = [];

  temperaturesByYear.forEach((yearTemperatures) => {
    let sum = 0;
    yearTemperatures.forEach((temperature) => {
      sum += temperature;
    });
    const mean = sum / yearTemperatures.length;
    means.push(mean);
  });

  return (
    <>
      <div className="wrapper">
        <Navigation />
        <main>
          <div className="main-content">
            <div className="header">
              <h1 id="home">Weatherchange in Berlin</h1>
            </div>
            <h4>Data from {allData.daily.time?.length} days</h4>
            <div className="temperature-container">
              {Object.keys(temperaturesByYear).map((year) => (
                <React.Fragment key={year}>
                  <p className="year">{year} ⭢</p>
                  {temperaturesByYear[year].map((temperature, index) => (
                    <div key={index}>
                      <Temperature temperature={temperature} />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <Legend />
            <Summary temperature={temperature} means={means} />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
