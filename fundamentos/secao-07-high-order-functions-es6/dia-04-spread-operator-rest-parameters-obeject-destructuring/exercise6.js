
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const { winter, spring, summer, autumn} = yearSeasons;

const monthsOfTheYear = [ ...winter, ...spring, ...summer, ...autumn];
console.log(monthsOfTheYear);
