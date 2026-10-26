import { useState, useEffect } from 'react';

export interface CountdownState {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly isZeroOrPast: boolean;
}

/**
 * Calculates remaining time in days, hours, minutes, and seconds.
 * Strictly clamps at zero to avoid displaying negative numbers if the target
 * date passes or if time skew occurs.
 *
 * @param targetIso - The target date string in ISO 8601 UTC format.
 * @param nowMs - The current timestamp in milliseconds (defaults to Date.now()).
 */
export function calculateCountdown(targetIso: string, nowMs: number = Date.now()): CountdownState {
  const targetMs = Date.parse(targetIso);

  if (isNaN(targetMs) || nowMs >= targetMs) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isZeroOrPast: true,
    };
  }

  const diffMs = targetMs - nowMs;
  const totalSeconds = Math.floor(diffMs / 1000);

  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return {
    days,
    hours,
    minutes,
    seconds,
    isZeroOrPast: false,
  };
}

/**
 * Custom React hook for driving a dynamic, 1-second interval countdown timer.
 * Fully unmount-safe and cleans up intervals cleanly.
 *
 * @param targetIso - ISO 8601 UTC timestamp string
 */
export function useCountdown(targetIso: string): CountdownState {
  const [countdown, setCountdown] = useState<CountdownState>(() => calculateCountdown(targetIso));

  useEffect(() => {
    // Run an immediate calculation to ensure freshness
    setCountdown(calculateCountdown(targetIso));

    const intervalId = window.setInterval(() => {
      const updated = calculateCountdown(targetIso);
      setCountdown(updated);

      // If time reached zero, stop interval
      if (updated.isZeroOrPast) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetIso]);

  return countdown;
}
