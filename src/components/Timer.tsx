import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { formatTime } from "../lib/utils";

/**
 * Imperative handle exposed by the {@link Timer} component via `ref`.
 */
export interface TimerRef {
  /** Stops the timer. */
  stop: () => void;
  /** Resets and restarts the timer. */
  reset: () => void;
}

/**
 * Elapsed-time display with imperative `stop` and `reset` controls.
 *
 * Starts automatically on mount. Use a `ref` to control:
 *
 * @example
 * ```tsx
 * const timerRef = useRef<TimerRef>(null);
 * <Timer ref={timerRef} />
 * timerRef.current?.stop();
 * ```
 */
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
