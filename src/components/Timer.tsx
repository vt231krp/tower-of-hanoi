import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { formatTime } from "../lib/utils";

export interface TimerRef {
  stop: () => void;
  reset: () => void;
}

export const Timer = forwardRef<TimerRef>((_, ref) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  useImperativeHandle(ref, () => ({
    stop: () => {
      setIsRunning(false);
    },
    reset: () => {
      setIsRunning(false);
      setTime(0);
      startTimeRef.current = Date.now();
      setIsRunning(true);
    },
  }));

  return <div className="text-2xl font-medium">{formatTime(time)}</div>;
});

Timer.displayName = "Timer";
