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

import ApiClient from '../ApiClient';

/**
 * The CreateProcessDefinition200Response model module.
 * @module model/CreateProcessDefinition200Response
 * @version 0.1.0
 */
class CreateProcessDefinition200Response {
    /**
     * Constructs a new <code>CreateProcessDefinition200Response</code>.
     * @alias module:model/CreateProcessDefinition200Response
     */
    constructor() { 
        
        CreateProcessDefinition200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateProcessDefinition200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProcessDefinition200Response} obj Optional instance to populate.
     * @return {module:model/CreateProcessDefinition200Response} The populated <code>CreateProcessDefinition200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProcessDefinition200Response();

            if (data.hasOwnProperty('processDefinitionKey')) {
                obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProcessDefinition200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProcessDefinition200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['processDefinitionKey'] && !(typeof data['processDefinitionKey'] === 'string' || data['processDefinitionKey'] instanceof String)) {
            throw new Error("Expected the field `processDefinitionKey` to be a primitive type in the JSON string but got " + data['processDefinitionKey']);
        }

        return true;
    }


}



/**
 * @member {String} processDefinitionKey
 */
CreateProcessDefinition200Response.prototype['processDefinitionKey'] = undefined;






export default CreateProcessDefinition200Response;
