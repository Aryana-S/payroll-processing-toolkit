// Payroll Processing Toolkit

//1. Array of employee objects
const employees = [
    {name: 'Alice', hourlyRate: 20, hoursWorked: 32},
    {name: 'Bob', hourlyRate: 30, hoursWorked: 45},
    {name: 'Charlie', hourlyRate: 30, hoursWorked: 50},
    {name: 'Diana', hourlyRate: 22, hoursWorked: 40},
    {name: 'Ethan', hourlyRate: 28, hoursWorked: 42}
];

//2. Base pay calculation (calculateBasePay) max 40hrs
function calculateBasePay(rate, hours) {
    const baseHours = Math.min(hours, 40);
    return baseHours * rate;
}

//3. Overtime calculation (calculateOvertimePay) 1.5x > 40hrs
function calculateOvertimePay (rate, hours) {
    const overtimeHours = Math.max(hours - 40, 0);
    return overtimeHours * rate * 1.5;
}

//4. Tax deduction (calculateTaxes), tax rate 15%
function calculateTaxes (grossPay) {
    return grossPay * 0.85;
}

//5. Payroll Processor
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const netPay = calculateTaxes(grossPay);

        return {
            name: employee.name,
            basePay: basePay,
            overtimePay: overtimePay,
            grossPay: grossPay,
            netPay: netPay
        };
}

//6. Loop: process all employees
console.log("Payroll Report: ");
console.log("================");
employees.forEach(employee => {
    const payroll = processPayroll(employee);
    console.log(payroll);
});