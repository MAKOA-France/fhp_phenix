  (function($) {
    Drupal.behaviors.fhp = {
        attach: function(context, settings) {
            $(document).ready(function(){
                jQuery('#block-pieddepagemakoa').insertAfter('#bottom_part');
                console.log('script loaded by module')
                var input = document.querySelector(".crm_phone.twelve.crm-form-text");
                console.log(input, ' ble input')
                var iti = window.intlTelInput(input, {
                    // Configuration options
                    initialCountry: "mg",
                }).setNumber("+261349856896");
                console.log(input, ' haha')
            })
        }
    }
})(jQuery)
 