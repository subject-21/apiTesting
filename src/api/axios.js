const Axios = require("axios").default;
const conf = require("./config");
const handleResponse = require("./utils/handleResponse");
const TestError = require("./utils/testError");
class ApiMethods {
    constructor() {
        this.methodType = {
            PUT: "put",
            GET: "get",
            DELETE: "delete",
            PATCH: "patch",
            POST: "post"
        }
        this.requestOptions = conf;
    }

    async restApiRequest(method, endpointUrl, { bodyData, headers, params } = {}) {
        headers ? this.requestOptions.headers = headers : null;
        params ? this.requestOptions.params = params : null

        if (method === this.methodType.POST || method === this.methodType.PUT || method === this.methodType.PATCH) {
            return await handleResponse(Axios, method, [endpointUrl, bodyData, this.requestOptions]);
        } else if (method === this.methodType.GET || method === this.methodType.DELETE) {
            return await handleResponse(Axios, method, [endpointUrl, this.requestOptions]);
        } else {
            throw new TestError(`"${method}" is invalid`,
                `valid methods are: ${Object.values(this.methodType)}`);
        }
    }
}

module.exports = ApiMethods