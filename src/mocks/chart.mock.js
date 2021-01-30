export const mockChart = (count) => new Array(count).fill({}).map((_, idx) => ({
  name: `${idx + 1}`,
  uv: getRandomInt(1000, 4000),
  pv: getRandomInt(1300, 5000),
  amt: getRandomInt(2100, 3000),
}))


//
// Utils
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}