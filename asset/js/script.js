//Research page 
//Get the tbody element 
const tbody = document.querySelector('table.selector tbody');

// Get all the tr elements inside the tbody
const rows = tbody.querySelectorAll('tr');
rows.forEach(row => {
  const lastTd = row.querySelector('td:last-child');
  if (lastTd) {
    lastTd.style.width = 'auto';
  }
});