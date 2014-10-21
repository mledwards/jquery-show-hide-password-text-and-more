/*
 * jQuery function to 
 */

// Create closure.
(function( $ ) {
	// Create jQuery plugin
	$.fn.toggleAttribute = function(newOptions) {
		"use strict";
		var options = $.extend({
			elementChangeIs: "checked",
			attributeOn: "text",
			attributeOff: "password",
		}, newOptions);

		// Loop through every element and return it for chainibility e.g. .showHidePassword().slideToggle()
		return this.each(function() {

			// Store element as jQuery object
			var $element = $(this);

			// NOTE: jQuery objects automatically store all "data-*" attributesin a data() object
			// Store "selector" data attribute value
			var target = $element.data("selector");

			// Store original "toggleAttribute" data attribute value
			var attributeType = $element.data("toggleAttribute");

			// Grab jQuery element based on target ID
			var $targetElement = $(target);

			// On click of originally grabbed element
			$element.on("change", function() {

				// Check if the element is checked
				if ($element.is(":" + options.elementChangeIs)) {

					// If so the target element should be a hidden password field
					$targetElement.attr(attributeType, options.attributeOff);
				} else {

					// If not the target element should be a text field
					$targetElement.attr(attributeType, options.attributeOn);
				}
			});
		});

	};


	// Use these in conjunction with data-selector="ELEMENT_ID_HERE"
	$( '[data-toggle-attribute="disabled"]' ).toggleAttribute({
		attributeOn: "true",
		attributeOff: false
	});

	// "type" attribute uses show / hide password field defaults
	$( '[data-toggle-attribute="type"]' ).toggleAttribute({ });

})( jQuery );