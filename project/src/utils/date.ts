import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const getFormattedDateTime = (date: string): string => dayjs(date).format('YYYY-MM-DD');
export const getHumanizedDate = (date: string): string => dayjs(date).format('MMMM D, YYYY');
export const getFormattedRunTime = (runtime: number): string => dayjs.duration(runtime, 'minutes').format('H[h] mm[m]');
