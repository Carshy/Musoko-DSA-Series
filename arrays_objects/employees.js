const employees = [
  {
    id: 1,
    first_name: "john",
    last_name: "Doe",
    company_ID: "201",
    salary: 5500,
    nationality: "United Arabs Emirates"
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Boe",
    company_ID: "202",
    salary: 5000,
    nationality: "United Kingdom"
  },
  {
    id: 3,
    first_name: "Ali",
    last_name: "Khan",
    companyID: "101",
    salary: 6000,
    nationality: "Pakistan",
  },
  {
    id: 4,
    first_name: "Amy",
    last_name: "Khanwanwa",
    companyID: "101",
    salary: 6000,
    nationality: "Kenyan",
  },
];

const companies = [
  {
    id: "202",
    name: "Techcorp",
    address: "Dubai HQ"
  },
  {
    id: "201",
    name: "Safaricom",
    address: "Nairobi HQ"
  },
  {
    id: "101",
    name: "HereWith",
    address: "Berlin HQ"
  }
];

const employeeGenarateReport = (employees, companies) => {
    //   Map through employees and generate reports for each employee
    const reports = employees.map((employee) => {
        // get a company for each employee
        const company = companies.find((c) => c.id === employee.companyID);

        // Calculate contributions
        const employeeContrib = employee.salary * 0.05;
        const employerContrb = employee.salary * 0.15;

        const report = {
          employeeID: employee.id,
          name: `${employee.first_name} ${employee.last_name}`,
          companyName: company ? company.name : "Company does not Exist",
          companyAddress: company ? company.address : "Unknown Address",
          salary: employee.salary,
          employeeContribution: employeeContrib.toFixed(2),
          employerContribution: employerContrb.toFixed(2),
          nationality: employee.nationality
        }

        return report;
    });
    // console.log("Generate Employee Report", reports)
    return reports;
};

// Call the function
employeeGenarateReport(employees, companies);