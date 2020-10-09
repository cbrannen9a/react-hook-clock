import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export const getDate = () => dayjs();

export const getDateWithTimezone = (timezone: string) => dayjs().tz(timezone);

export const getLocalisedDate = (date: Dayjs) => date.format("LTS");
