import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
    let currentTime = weatherData.current.time, timezone = weatherData.timezone;
  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay( 
            weatherData,
            timezone
        )}, ${getTime(
        unitSystem,
          currentTime,
          timezone
        
        )} ${getAMPM(unitSystem, currentTime, timezone )}`}
      </h2>
    </div>
  );
};
