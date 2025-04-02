import { useEffect, useState } from "react";

interface Props {
  startTime?: number;
}

export function useStopWatch({ startTime }: Props) {
  const [restTime, setRestTime] = useState(-1);

  useEffect(() => {
    if (startTime != null) {
      setRestTime(startTime);

      const interval = setInterval(() => {
        setRestTime((prev) => prev - 1);
      }, 60 * 1000);

      return () => clearInterval(interval);
    }
    return;
  }, [startTime]);

  return { restTime };
}
