(function($) {
    Drupal.behaviors.fhp = {
        attach: function(context, settings) {
            $(document).ready(function(){
                jQuery('#block-pieddepagemakoa').insertAfter('#bottom_part');
                console.log('script loaded by module')
            })
        }
    }
})(jQuery)

console.log('check for ')