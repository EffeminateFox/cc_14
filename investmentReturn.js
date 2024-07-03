// U54529624

// Function to calculate future value of an investment
// Formula is A = P(1 + r/n)^(nt)
export function calculateInvestmentReturn(principal, rate, timesCompounded, time) {
    // Calculates future value using the formula
    return principal * Math.pow((1 + rate / timesCompounded), timesCompounded * time);
}
