"use client";
import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData.current.time)}, ${getTime(
          unitSystem,
          weatherData.current.time,
          weatherData.timezone
        )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
      </h2>
    </div>
  );
};
