// U54529624

// Import functions from other modules
import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

// Function to validate inputs
function validateInputs(inputs) {
    // Makes sure numbers is not empty
    for (const input of inputs) {
        if (isNaN(input) || input === '') {
            alert('Please enter valid numbers in all fields.');
            return false;
        }
    }
    return true;
}

// Event listener for interest calculation button
document.getElementById('calculateInterest').addEventListener('click', () => {
    // Get user inputs
    const principal = parseFloat(document.getElementById('interestPrincipal').value);
    const rate = parseFloat(document.getElementById('interestRate').value);
    const time = parseFloat(document.getElementById('interestTime').value);
    // Validate inputs
    if (validateInputs([principal, rate, time])) {
        // Calculate interest and display result
        const result = calculateInterest(principal, rate, time);
        document.getElementById('interestResult').innerText = `Interest: ${result}`;
    }
});

// Event listener for loan payment calculation button
document.getElementById('calculateLoanPayment').addEventListener('click', () => {
    // Get user inputs
    const principal = parseFloat(document.getElementById('loanPrincipal').value);
    const rate = parseFloat(document.getElementById('loanRate').value) / 100; // Convert rate to decimal
    const numPayments = parseInt(document.getElementById('loanNumPayments').value);
    // Validate inputs
    if (validateInputs([principal, rate, numPayments])) {
        // Calculate loan payment and display result
        const result = calculateLoanPayment(principal, rate, numPayments);
        document.getElementById('loanResult').innerText = `Monthly Payment: ${result.toFixed(2)}`;
    }
});

// Event listener for investment return calculation button
document.getElementById('calculateInvestmentReturn').addEventListener('click', () => {
    // Get user inputs
    const principal = parseFloat(document.getElementById('investmentPrincipal').value);
    const rate = parseFloat(document.getElementById('investmentRate').value) / 100; // Convert rate to decimal
    const timesCompounded = parseInt(document.getElementById('investmentTimesCompounded').value);
    const time = parseFloat(document.getElementById('investmentTime').value);
    // Validate inputs
    if (validateInputs([principal, rate, timesCompounded, time])) {
        // Calculate investment return and display result
        const result = calculateInvestmentReturn(principal, rate, timesCompounded, time);
        document.getElementById('investmentResult').innerText = `Future Value: ${result.toFixed(2)}`;
    }
});

