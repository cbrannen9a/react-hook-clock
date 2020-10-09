import { useState, useEffect } from "react";
import moment from "moment-timezone";

const useTicker = (timezone: TimeZone) => {
  const [date, setDate] = useState(moment());

  useEffect(() => {
    let ticker = setInterval(() => tick(), 1000);
    return () => clearInterval(ticker);
  });

  const tick = () => {
    setDate(moment().tz(timezone.value));
  };

  return date;
};

export default useTicker;