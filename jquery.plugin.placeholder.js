/* 
* jQuery placeholder plugin for non-HTML5 browsers
* @author Niklas von Hertzen <niklas at hertzen.com>
* @created 14.5.2011 
* @website http://hertzen.com
*/

(function($) {
    $.fn.placeholder = function(options) {
                    
        var defaults = {
            'placeholderClass':'placeholderFallback',
            'forceAll':false
        };
        
        var options = $.extend(defaults, options);            
                    
        var placeholderText = $(this).attr('placeholder');                
                
        
                  
        if (!supported()||options.forceAll){
            $(this).focusin(function(){
                if ($(this).val()==placeholderText){
                    $(this).val('').removeClass(options.placeholderClass);
                }

            }).focusout(function(){
                if ($(this).val()==""){
                    $(this).val(placeholderText).addClass(options.placeholderClass);
                }             
            }).trigger('focusout');        

        }
        
        /*
         * Test if users browser supports the placeholder attribute
         */
        function supported(){
            var i = document.createElement('input');
            return 'placeholder' in i;
        }
    }
})(jQuery);


