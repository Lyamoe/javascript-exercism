// freelancer-rates.js

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDays = 22;
  const monthsInProject = Math.floor(numDays / billableDays);
  const dailyRate = dayRate(ratePerHour);
  const monthlyRate = billableDays * dailyRate;
  const remainingDays = numDays - monthsInProject * billableDays;

  return Math.ceil(
    monthsInProject * (monthlyRate * (1 - discount)) + remainingDays * dailyRate
  );
}