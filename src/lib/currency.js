// Utility functions for price formatting and currency handling

/**
 * Format price in Indian Rupees (INR)
 * @param {number} price - Price in INR
 * @returns {string} Formatted price string with ₹ symbol
 */
export function formatPrice(price) {
  // Handle edge cases
  if (typeof price !== 'number' || isNaN(price)) {
    return '₹0';
  }

  // Format with Indian number system (lakhs and crores)
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Format price without currency symbol (just the number)
 * @param {number} price - Price in INR
 * @returns {string} Formatted price number
 */
export function formatPriceNumber(price) {
  if (typeof price !== 'number' || isNaN(price)) {
    return '0';
  }

  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Get currency symbol
 * @returns {string} INR currency symbol
 */
export function getCurrencySymbol() {
  return '₹';
}
