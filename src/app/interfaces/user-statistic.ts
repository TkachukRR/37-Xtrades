import { Image } from "./image";

export interface UserStatistic{
  firstName: string;
  lastName: string;
  avatar: Image;
  alerts: number;
  winRate: number;
  yield: number;
  earningCurrency: number;
  earningPercentage: number;
}
