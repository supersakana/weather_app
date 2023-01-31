export function toF(temp) {
  return Math.floor((1.8 * (temp - 273.15) + 32));
}

export function toC(temp) {
  return Math.floor(temp - 273.15);
}
