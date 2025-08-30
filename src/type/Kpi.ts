import type { ReactNode } from "react";

export type KPIProps = {
  icon: ReactNode;
  title: string;
  date: string;
};

export type KPIPercentageProps = {
  color: string;
  title: string;
  percentage: string;
  index?: string;
};

export type KPIProgressProps = {
  index: number;
  title: string;
  percentage: number;
};

export type KPIStatisticsProps = {
  icon: ReactNode;
  title: string;
  num: string;
  isFlex?: boolean;
};
