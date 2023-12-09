const companies = [
	{ name: 'Intelliswift', hq: 'Newark, CA', indiaLocations: ['Pune', 'Bengaluru'] },
	{ name: 'Salesforce', hq: 'San Francisco, CA', indiaLocations: ['Hyderabad', 'Bengaluru', 'Mumbai', 'Gurugram', 'Jaipur'] }
  ];
  
console.log('Number of companies:', companies.length);

console.log('Name of companies:');
companies.forEach(company => console.log(company.name));

console.log('Headquarters of the companies:');
companies.forEach(company => console.log(company.hq));


  function displayCompanyInfo() {
    const companyListElement = document.getElementById('companyList');
    companyListElement.innerHTML = ''; 

    companies.forEach(company => {
      const listItem = document.createElement('li');
      listItem.textContent = `${company.name} - ${company.hq} - ${company.indiaLocations.join(', ')}`;
      companyListElement.appendChild(listItem);
    });
}