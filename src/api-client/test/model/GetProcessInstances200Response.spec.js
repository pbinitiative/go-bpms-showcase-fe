/**
 * BPMN Engine OpenAPI
 * REST API for lib-bpmn-engine
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BpmnEngineOpenApi);
  }
}(this, function(expect, BpmnEngineOpenApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BpmnEngineOpenApi.GetProcessInstances200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('GetProcessInstances200Response', function() {
    it('should create an instance of GetProcessInstances200Response', function() {
      // uncomment below and update the code to test GetProcessInstances200Response
      //var instance = new BpmnEngineOpenApi.GetProcessInstances200Response();
      //expect(instance).to.be.a(BpmnEngineOpenApi.GetProcessInstances200Response);
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new BpmnEngineOpenApi.GetProcessInstances200Response();
      //expect(instance).to.be();
    });

    it('should have the property processInstances (base name: "processInstances")', function() {
      // uncomment below and update the code to test the property processInstances
      //var instance = new BpmnEngineOpenApi.GetProcessInstances200Response();
      //expect(instance).to.be();
    });

  });

}));