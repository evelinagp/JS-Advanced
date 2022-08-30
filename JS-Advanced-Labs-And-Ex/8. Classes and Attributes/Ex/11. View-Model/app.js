// We need to create a class Textbox that represents one or more HTML input elements with type="text". 
class Textbox {
    // The constructor takes as parameters a selector and a regex for invalid symbols. 
    constructor(selector, invalidSymbolsRegex) {

        this.selector = selector;
        //property _invalidSymbols - a regex used for validating the textbox value
        this._invalidSymbols = invalidSymbolsRegex;
        this._elements = $(this.selector);
        //property _elements containing the set of elements matching the selector
        //Textbox elements created from the class should have:
        //All _elements values and the value property should be linked. 
        //If the value of an element from _elements change all other elements' 
        //values and the value property should instantly reflect it, likewise should happen 
        //if the value property changes.
        //Selectors will always point to input elements with type text.* / 
        $(this.selector).on('input', function() {
            $('*[type=text]').val(this.value);
        });

    }

    //	property value (has getters and setters) 
    get value() {
        return this.elements.val();
    }
    set value(newValue) {
            this.elements.val(newValue);
        }
        //getter elements for the _elements property – return as NodeList
    get elements() {
            return this._elements;
        }
        //method isValid() - if the _invalidSymbols regex can be matched in any of 
        //the _elements values return false, otherwise return true.
    isValid() {
        return !this.value.match(this._invalidSymbols);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function() { console.log(textbox.value); });