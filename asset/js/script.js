//Research page 
//Get the tbody element 
let tbodyResearchPage = document.querySelector('table.selector tbody');

// Get all the tr elements inside the tbody
let rows = tbodyResearchPage.querySelectorAll('tr');
rows.forEach(row => {
  const lastTd = row.querySelector('td:last-child');
  if (lastTd) {
    lastTd.style.width = 'auto';
  }
});