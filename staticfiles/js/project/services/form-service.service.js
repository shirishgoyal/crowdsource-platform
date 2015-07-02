/**
* FormService
* @namespace crowdsource.project.services
*/

'use strict';

(function () {
  'use strict';

  angular
    .module('crowdsource.project.services')
    .factory('FormService', FormService);

  FormService.$inject = ['$http'];

  /**
  * @namespace FormService
  * @returns {Factory}
  */
  function FormService($http) {

    var formsJson = '{"1":{"form_id":"1","form_name":"My Test Form","form_fields":{"1":{"field_id":1,"field_title":"First Name","field_type":"textfield","field_value":"John","field_required":true,"field_disabled":false},"2":{"field_id":2,"field_title":"Last Name","field_type":"textfield","field_value":"Doe","field_required":true,"field_disabled":false},"3":{"field_id":3,"field_title":"Gender","field_type":"radio","field_value":"2","field_required":true,"field_disabled":false,"field_options":[{"option_id":1,"option_title":"Male","option_value":1},{"option_id":2,"option_title":"Female","option_value":2}]},"4":{"field_id":4,"field_title":"Email Address","field_type":"email","field_value":"test@example.com","field_required":true,"field_disabled":false},"5":{"field_id":5,"field_title":"Password","field_type":"password","field_value":"","field_required":true,"field_disabled":false},"6":{"field_id":6,"field_title":"Birth Date","field_type":"date","field_value":"01.21.1980","field_required":true,"field_disabled":false},"7":{"field_id":7,"field_title":"Your browser","field_type":"dropdown","field_value":"2","field_required":false,"field_disabled":false,"field_options":[{"option_id":1,"option_title":"-- Please Select --","option_value":1},{"option_id":2,"option_title":"Internet Explorer","option_value":2},{"option_id":3,"option_title":"Google Chrome","option_value":3},{"option_id":4,"option_title":"Mozilla Firefox","option_value":4}]},"8":{"field_id":8,"field_title":"Additional Comments","field_type":"textarea","field_value":"Please type here..","field_required":false,"field_disabled":false},"9":{"field_id":9,"field_title":"I accept the terms and conditions.","field_type":"checkbox","field_value":"0","field_required":true,"field_disabled":false},"10":{"field_id":10,"field_title":"I have a secret.","field_type":"hidden","field_value":"X","field_required":false,"field_disabled":false}}}}';

    return {
        fields:[
            {
                name : 'textfield',
                value : 'Textfield'
            },
            {
                name : 'imagefield',
                value : 'ImageField'
            },
            {
                name : 'password',
                value : 'Password'
            },
            {
                name : 'radio',
                value : 'Radio Buttons'
            },
            {
                name : 'dropdown',
                value : 'Dropdown List'
            },
            {
                name : 'date',
                value : 'Date'
            },
            {
                name : 'textarea',
                value : 'Text Area'
            },
            {
                name : 'checkbox',
                value : 'Checkbox'
            },
            {
                name : 'hidden',
                value : 'Hidden'
            }
        ],
        form:function (id) {
          var response = JSON.parse(formsJson);
          var requestedForm = {};
          angular.forEach(response, function (form) {
              if (form.form_id == id) requestedForm = form;
          });
          return requestedForm;
        },
        forms: function() {
          var response = JSON.parse(formsJson);
          return response;
        }
    };
  }
})();