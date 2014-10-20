jquery-toggle-attribute
=======================

jQuery plugin to toggle an attribute of an element given the change of another element.

Primarily used to hide / show text in password field.

1) Include in HTML.

2) Add data-toggle-attribute="*attribute-name*" to any form element that on change you wish to toggle an attribute on another element (using data-selector="*target-element-id*").


Options are:

attributeOn - changed selected attribute to - default "type"
attributeOn - changed selected attribute to - default "password"
elementChangeIs - what the activation element change is looking for - default "checked"
