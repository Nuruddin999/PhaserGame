import { ObjectPoint } from "../types/objectPoint";

export const gameObjToObjPoint = (gameObjects: unknown[]): ObjectPoint[] => {
  return gameObjects.map((gameObject) => gameObject as ObjectPoint);
};
