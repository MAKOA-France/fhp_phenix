(function($) {
    Drupal.behaviors.fhp = {
        attach: function(context, settings) {
            $(document).ready(function(){
                jQuery('#block-pieddepagemakoa').insertAfter('#bottom_part');
            })
        }
    }
})(jQuery)
