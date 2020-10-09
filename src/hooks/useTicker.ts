import { useState, useEffect } from "react";
import { getDate, getDateWithTimezone } from "../helpers";

const useTicker = (timezone: TimeZone) => {
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const tick = () => {
      setDate(getDateWithTimezone(timezone.value));
    };

    let ticker = setInterval(() => tick(), 1000);
    return () => clearInterval(ticker);
  }, [timezone.value]);

  return date;
};

export default useTicker;
