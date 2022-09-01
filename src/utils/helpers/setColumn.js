import { WINDOW_SIZE } from "src/constants/windowSize";

export const setColumn = (size) => {
  if (size >= WINDOW_SIZE.desktop) return 4;
  if (size >= WINDOW_SIZE.laptop) return 3;
  if (size >= WINDOW_SIZE.phablet) return 2;
  if (size >= WINDOW_SIZE.phone) return 1;
  return 1;
};
