/*****

===================
Problem Description
===================

The objective is to implement a function "translate" that will translate a
path string into a translated label. The function has the following
signature:

    function translate(translations, path, data)


The function parameters are defined as follows:

translations - An object containing all supported languages and the labels
               for each language divided into sections. Individual labels
               can include interpolated values using '{{' and '}}'. For
               example, a translation of "I have {{ n }} cats" will 
               replace {{ n }} with the value of n in the data parameter.

path - A string that describes the location of the desired label in the
       translations object.

data - An object containing key-value pairs of strings to be interpolated
       into the label.

The function returns a string containing interpolated data based on the
path, or if no label exists for the path, it returns the path itself.
 

==================
Example Parameters
==================
 
* An example of the translations object:

{
    "english": {
        "buttons": {
          "ok": "OK",
          "cancel": "Cancel",
          "create_account": "Create Account"
        },
        "headings": {
          "account": "My Account",
          "home": "Home",
          "my_page": "{{ name }}'s Page"
        }
    },
    "french": {

    },
    "spanish": {

    }
}


* An example of the path parameter:

"english.headings.my_page"


* An example of the data parameter:

{ "name": "John" }

would yield the following result:

"John's Page"
 
******/



function translate(translations, path, data) {
    const keys = path.split('.'); // ['english', 'headings', 'my_page']
    let result = translations;
    for (let i = 0; i < keys.length; i++) {
        if (result[key[i]] === undefined) {
            return "Path is incorrect";
        }
        result = result[keys[i]];
    };

    // result = "{{ name }}'s Page"


    // iterate through data object and verify if the result string contains interpolation params,
    // if it does, match the object's key with string {{}} and replace.
    for (let prop in data) {
        let objKey = `{{ ${prop} }}`;
        if (result.includes(objKey)) {
            result = result.replace(objKey, data[prop]);
        }
    }
    return result;

}
