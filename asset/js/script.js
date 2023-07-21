/* (function($) {
    Drupal.behaviors.fhp = {
        attach: function(context, settings) {
            $(document).ready(function(){
                jQuery('#block-pieddepagemakoa').insertAfter('#bottom_part');
                var input = document.querySelector(".crm_phone.twelve.crm-form-text");
                var iti = window.intlTelInput(input, {
                    // Configuration options
                    initialCountry: "mg",
                }).setNumber("+261349856896");
            })
        }
    }
})(jQuery) */


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