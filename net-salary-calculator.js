function calculateNetSalary() {
  // enter basic salary and benefits
  const basicSalary = parseFloat(prompt("Enter basic salary"));
  const benefits = parseFloat(prompt("Enter benefits"));

  //FOR PAYEE, NHIF, NSSF CREATE VARIABLES
  const payee = calculatePayee(basicSalary);
  const nhif = calculateNHIF(basicSalary);
  const nssf = calculateNSSF(basicSalary);

  // CALCULATION OF GROSS SALARY AND NET SALARY
  const grossSalary = basicSalary + benefits;
  const netSalary = grossSalary - payee - nhif - nssf;

  //DISPLAY THE RESULTS
  alert(
    `Payee: ${payee}, NHIF:${nhif}, NSSF:${nssf}, Gross Salary: ${grossSalary}, Net Salary: ${netSalary}`
  );
  return {
    payee,
    nhif,
    nssf,
    grossSalary,
    netSalary,
  };
}

function calculatePayee(basicSalary) {
  return basicSalary * 0.1;
}

function calculateNHIF(basicSalary) {
  return basicSalary * 0.05;
}

function calculateNSSF(basicSalary) {
  return basicSalary * 0.05;
}

calculateNetSalary() ;
