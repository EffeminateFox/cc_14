// U54529624

// Function to calculate monthly loan payment
// Formula: M = P[r(1+r)^n]/[(1+r)^n-1]
export function calculateLoanPayment(principal, rate, numPayments) {
    // Monthly interest rate
    const monthlyRate = rate / 12;
    // Calculate monthly payment using the formula
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
}
