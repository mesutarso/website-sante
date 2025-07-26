import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getWeek } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cx = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const positionweekofyear = (date: Date) => {
  const week = getWeek(date);
  return week;
};
