// Tab switching
function showTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabId).classList.add('active');

    // Add active class to clicked nav tab
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// 529 Calculator
function calculate529() {
    const childSelect = parseInt(document.getElementById('childSelect').value);
    const goalAmount = parseFloat(document.getElementById('collegeCost').value);
    const currentBalance = parseFloat(document.getElementById('currentBalance').value);
    const returnRate = parseFloat(document.getElementById('returnRate').value) / 100;

    const years = childSelect;
    const monthlyRate = returnRate / 12;
    const months = years * 12;

    // Future value of current balance
    const futureValueCurrent = currentBalance * Math.pow(1 + returnRate, years);

    // Amount still needed
    const amountNeeded = goalAmount - futureValueCurrent;

    // Monthly payment calculation using future value of annuity formula
    const monthlyPayment = amountNeeded * (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));

    // Total contributions
    const totalContributions = (monthlyPayment * months) + currentBalance;
    const totalGrowth = goalAmount - totalContributions;

    const resultDiv = document.getElementById('calculatorResult');
    const resultContent = document.getElementById('resultContent');

    resultContent.innerHTML = `
        <p style="font-size: 1.2em; margin: 10px 0;"><strong>Monthly Savings Needed: $${Math.max(0, monthlyPayment).toFixed(2)}</strong></p>
        <hr style="margin: 15px 0;">
        <p><strong>Goal Amount:</strong> $${goalAmount.toLocaleString()}</p>
        <p><strong>Current Balance:</strong> $${currentBalance.toLocaleString()}</p>
        <p><strong>Future Value of Current Balance:</strong> $${futureValueCurrent.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
        <p><strong>Still Needed:</strong> $${Math.max(0, amountNeeded).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
        <p><strong>Years to Save:</strong> ${years}</p>
        <p><strong>Expected Return:</strong> ${(returnRate * 100).toFixed(1)}% annually</p>
        <hr style="margin: 15px 0;">
        <p><strong>Total You'll Contribute:</strong> $${totalContributions.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
        <p><strong>Total Investment Growth:</strong> $${Math.max(0, totalGrowth).toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
        <p style="color: #27ae60; font-weight: bold; margin-top: 15px;">Your money will grow by ${Math.max(0, (totalGrowth/totalContributions * 100)).toFixed(1)}%!</p>
    `;

    resultDiv.style.display = 'block';
}

// Update years when child selection changes
function updateYears() {
    // Just recalculate if results are showing
    const resultDiv = document.getElementById('calculatorResult');
    if (resultDiv.style.display === 'block') {
        calculate529();
    }
}

// NY Tax Benefit Calculator
function calculateTaxBenefit() {
    const filingStatus = document.getElementById('filingStatus').value;
    const contribution = parseFloat(document.getElementById('annualContribution').value);

    const deductionLimit = filingStatus === 'single' ? 5000 : 10000;
    const applicableDeduction = Math.min(contribution, deductionLimit);

    // NY state tax rate approximately 6.85% (middle bracket)
    const taxSavings = applicableDeduction * 0.0685;

    const taxResult = document.getElementById('taxResult');
    const taxContent = document.getElementById('taxContent');

    taxContent.innerHTML = `
        <p style="font-size: 1.2em; margin: 10px 0;"><strong>Annual Tax Savings: $${taxSavings.toFixed(2)}</strong></p>
        <hr style="margin: 15px 0;">
        <p><strong>Your Annual Contribution:</strong> $${contribution.toLocaleString()}</p>
        <p><strong>Deduction Limit (${filingStatus}):</strong> $${deductionLimit.toLocaleString()}</p>
        <p><strong>Eligible Deduction:</strong> $${applicableDeduction.toLocaleString()}</p>
        <p><strong>NY State Tax Rate:</strong> 6.85% (approximate)</p>
        <hr style="margin: 15px 0;">
        <p><strong>Over 17 years (Cenna):</strong> $${(taxSavings * 17).toFixed(0).toLocaleString()} in tax savings</p>
        <p><strong>Over 12 years (Cyrene):</strong> $${(taxSavings * 12).toFixed(0).toLocaleString()} in tax savings</p>
        ${contribution > deductionLimit ? `<p style="color: #f39c12; margin-top: 15px;"><strong>Note:</strong> You're contributing more than the deduction limit. Consider splitting contributions between parents if married, or reviewing your strategy.</p>` : ''}
    `;

    taxResult.style.display = 'block';
}

// Checklist functionality
function toggleCheck(element) {
    const checkbox = element.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    saveChecklistState();
}

// Save checklist state to localStorage
function saveChecklistState() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const state = {};
    checkboxes.forEach(cb => {
        state[cb.id] = cb.checked;
    });
    localStorage.setItem('collegeChecklistState', JSON.stringify(state));
}

// Load checklist state from localStorage
function loadChecklistState() {
    const savedState = localStorage.getItem('collegeChecklistState');
    if (savedState) {
        const state = JSON.parse(savedState);
        Object.keys(state).forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = state[id];
            }
        });
    }
}

// Print functionality
function printPage() {
    window.print();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadChecklistState();

    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checkboxes.forEach(cb => {
        cb.addEventListener('change', saveChecklistState);
    });
});
