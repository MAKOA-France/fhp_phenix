//Research page 
//Get the tbody element 
let tbodyResearchPage = document.querySelector('table.selector tbody');
if (tbodyResearchPage) {

  // Get all the tr elements inside the tbody
  let rows = tbodyResearchPage.querySelectorAll('tr');
  rows.forEach(row => {
    const lastTd = row.querySelector('td:last-child');
    if (lastTd) {
      lastTd.style.width = 'auto';
    }
  });
}

(function($) {
  $(document).ready(function() {
// Define the regex pattern to match the URL
var pattern = /^\/user\/\d+\/edit$/;
      
// Get the current path
var currentPath = window.location.pathname;

// Check if the current path matches the pattern
if (pattern.test(currentPath)) {
  jQuery('.user-logged-in.path-user #header-nav').hide();
}
  
  });

})(jQuery);