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





    



    var matomoScript = `
    <!-- Matomo -->
    <script>
      var _paq = window._paq = window._paq || [];
      /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://makoa.matomo.cloud/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '11']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/makoa.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <!-- End Matomo Code -->
  `;

  // Create a new <div> element to hold the script
  var scriptContainer = $('<div>').html(matomoScript);
  
  // Append the script to the <head>
  $('head').append(scriptContainer.children());










    jQuery('.path-frontpage #block-pieddepagemakoa').insertAfter('#bottom_part');


    // Define the regex pattern to match the URL
    var pattern = /^\/user\/\d+\/edit$/;
    var pattern_reset_pass = /^\/user\/reset\/\d+$/;
          // console.log('fire, ', pattern_reset_pass)
    // Get the current path
    var currentPath = window.location.pathname;

    // Check if the current path matches the pattern
    if (pattern.test(currentPath)) {
      jQuery('.user-logged-in.path-user #header-nav').hide();
      jQuery('.social-bar').hide();
      jQuery('.breadcrumb__content').hide();

    }
    
  });

})(jQuery);