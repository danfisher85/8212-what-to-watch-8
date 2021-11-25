import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const formatElapsedTime = (time: number): string => {
  const HOUR_IN_MS = 3600;
  const format = time >= HOUR_IN_MS ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(time, 'seconds').format(format);
};
