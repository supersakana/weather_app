function toF(temp) {
  return Math.floor((1.8 * (temp - 273.15) + 32));
}

function toC(temp) {
  return Math.floor(temp - 273.15);
}

function toTime(time, form) {
  return moment().utcOffset(time / 60).format(form); // moment is an npm time formatting package
}

export {
  toF, toC, toTime,
};
