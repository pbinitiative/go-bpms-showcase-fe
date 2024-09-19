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
    instance = new BpmnEngineOpenApi.ProcessInstance();
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

  describe('ProcessInstance', function() {
    it('should create an instance of ProcessInstance', function() {
      // uncomment below and update the code to test ProcessInstance
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be.a(BpmnEngineOpenApi.ProcessInstance);
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

    it('should have the property processDefinitionKey (base name: "processDefinitionKey")', function() {
      // uncomment below and update the code to test the property processDefinitionKey
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

    it('should have the property variableHolder (base name: "variableHolder")', function() {
      // uncomment below and update the code to test the property variableHolder
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

    it('should have the property caughtEvents (base name: "caughtEvents")', function() {
      // uncomment below and update the code to test the property caughtEvents
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

    it('should have the property activities (base name: "activities")', function() {
      // uncomment below and update the code to test the property activities
      //var instance = new BpmnEngineOpenApi.ProcessInstance();
      //expect(instance).to.be();
    });

  });

}));