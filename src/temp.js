function toF(temp) {
  return Math.floor((1.8 * (temp - 273.15) + 32));
}

function toC(temp) {
  return Math.floor(temp - 273.15);
}

function toTime(zone, form) {
  return moment().utcOffset(zone / 60).format(form);
}

function sunRiseSet(zone, time) {
  return moment.utc(time, 'X').add(zone, 'seconds').format('h:mm A');
}

export {
  toF, toC, toTime, sunRiseSet,
};
