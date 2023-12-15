import { Image } from "./image";

export interface Winner{
  avatar: Image;
  firstName: string;
  lastName: string;
  nick: string;
  prize: number;
  daysPast: number;
}
