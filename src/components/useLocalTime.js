import { useEffect, useState } from 'react';

const format = () =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Jakarta' }).format(new Date());

// Current time in Gresik (WIB, UTC+7), refreshed every 30 seconds.
export const useLocalTime = () => {
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
};
