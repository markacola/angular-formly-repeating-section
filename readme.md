# angular-formly: Repeating Sections

This is a template for angular-formly which adds repeating sections. This is all pretty much just packaged up from [formly-repeating-section](http://angular-formly.com/#/example/advanced/repeating-section) and influenced by the package design of [angular-formly-templates-bootstrap](https://github.com/formly-js/angular-formly-templates-bootstrap/).

## Dependencies
- Required to use these templates:
 - angular
 - angular-formly

## Install in your project
- Install [angular-formly](https://github.com/formly-js/angular-formly)

- Install angular-formly: Bootstrap Templates
 `$ bower install angular-formly angular-formly-repeating-section --save`

 or

 `$ npm install angular-formly angular-formly-repeating-section --save`

- Include the javascript file in your index.html, Formly comes in the following flavors:
 `<script src="bower_components/angular-formly/dist/formly.min.js"></script>`
 `<script src="bower_components/angular-formly-templates-bootstrap/dist/angular-formly-repeating-section.min.js"></script>`

 and

 `angular.module('yourModule', ['formly', 'formlyRepeatingSection']);`

 or

 `angular.module('yourModule', [require('angular-formly'), require('angular-formly-repeating-section')]);`

## Documentation

See [angular-formly](http://docs.angular-formly.com) for formly core documentation.

Use as follows:

```
[
  {
    "type": "repeatSection",
    "key": "investments",
    "templateOptions": {
      "btnText": "Add another investment",
      "fields": [
        {
          "className": "row",
          "fieldGroup": [
            {
              "className": "col-xs-4",
              "type": "input",
              "key": "investmentName",
              "templateOptions": {
                "label": "Name of Investment:",
                "required": true
              }
            },
            {
              "type": "input",
              "key": "investmentDate",
              "className": "col-xs-4",
              "templateOptions": {
                "label": "Date of Investment:",
                "placeholder": "dd/mm/yyyy such as 20/05/2015",
                "dateFormat": "DD, d  MM, yy"
              }
            },
            {
              "type": "input",
              "key": "stockIdentifier",
              "className": "col-xs-4",
              "templateOptions": {
                "label": "Stock Identifier:"
              }
            }
          ]
        },
        {
          "type": "radio",
          "key": "type",
          "templateOptions": {
            "options": [
              {
                "name": "Text Field",
                "value": "input"
              },
              {
                "name": "TextArea Field",
                "value": "textarea"
              },
              {
                "name": "Radio Buttons",
                "value": "radio"
              },
              {
                "name": "Checkbox",
                "value": "checkbox"
              }
            ],
            "label": "Field Type",
            "required": true
          }
        },
        {
          "type": "input",
          "key": "investmentValue",
          "templateOptions": {
            "label": "Value:"
          },
          "expressionProperties": {
            "templateOptions.disabled": "!model.stockIdentifier"
          }
        },
        {
          "type": "checkbox",
          "model": "formState",
          "key": "selfExecuting",
          "templateOptions": {
            "label": "Are you executing this trade?"
          }
        },
        {
          "hideExpression": "!formState.selfExecuting",
          "fieldGroup": [
            {
              "type": "input",
              "key": "relationshipName",
              "templateOptions": {
                "label": "Name:"
              }
            },
            {
              "type": "select",
              "key": "complianceApprover",
              "templateOptions": {
                "label": "Compliance Approver:",
                "options": [
                  {
                    "name": "approver 1",
                    "value": "some one 1"
                  },
                  {
                    "name": "approver 2",
                    "value": "some one 2"
                  }
                ]
              }
            },
            {
              "type": "textarea",
              "key": "requestorComment",
              "templateOptions": {
                "label": "Requestor Comment",
                "rows": 4
              }
            }
          ]
        }
      ]
    }
  }
]
```
