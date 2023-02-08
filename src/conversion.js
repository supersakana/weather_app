function toF(temp) {
  return Math.floor((1.8 * (temp - 273.15) + 32));
}

function toC(temp) {
  return Math.floor(temp - 273.15);
}

function toTime(zone, form) {
  return moment().utcOffset(zone / 60).format(form); // eslint-disable-line
}

function sunRiseSet(zone, time) {
  return moment.utc(time, 'X').add(zone, 'seconds').format('h:mm A'); // eslint-disable-line
}

function toMph(speed) {
  return Math.floor(speed * 2.2369);
}

export {
  toF, toC, toTime, sunRiseSet, toMph,
};
