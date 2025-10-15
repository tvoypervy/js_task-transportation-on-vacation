/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;

  const totalCost = days * perDay;

  if (days < 3) {
    return totalCost;
  }

  if (days < 7) {
    return totalCost - 20;
  }

  if (days >= 7) {
    return totalCost - 50;
  }
}

module.exports = calculateRentalCost;
