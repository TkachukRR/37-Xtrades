import { Image } from "./image";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatar: Image;
  bits: number;
  points: number;
}
