<<<<<<< HEAD
  (function($) {
=======
(function($) {
>>>>>>> 85fdbd23b177ba3dad2627bf69e2e2167b53b328
    Drupal.behaviors.fhp = {
        attach: function(context, settings) {
            $(document).ready(function(){
                jQuery('#block-pieddepagemakoa').insertAfter('#bottom_part');
<<<<<<< HEAD
                console.log('script loaded by module')
                var input = document.querySelector(".crm_phone.twelve.crm-form-text");
                console.log(input, ' ble input')
                var iti = window.intlTelInput(input, {
                    // Configuration options
                    initialCountry: "mg",
                }).setNumber("+261349856896");
                console.log(input, ' haha')
=======
>>>>>>> 85fdbd23b177ba3dad2627bf69e2e2167b53b328
            })
        }
    }
})(jQuery)
<<<<<<< HEAD
 
=======
>>>>>>> 85fdbd23b177ba3dad2627bf69e2e2167b53b328
