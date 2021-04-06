const Axios = require("axios").default;
const conf = require("./config");
const handleResponse = require("./utils");

class ApiMethods {
    constructor() {
        this.methodType = {
            PUT: "put",
            GET: "get",
            DELETE: "delete",
            PATCH: "patch",
            POST: "post"
        }
        this.options = conf;
    }

    async request(method, endpointUrl, { bodyData, headers, params } = {}) {
        headers ? conf.headers = headers : null;
        params ? conf.params = params : null

        if (method === this.methodType.POST || method === this.methodType.PUT || method === this.methodType.PATCH) {
            return await handleResponse(Axios, method, [endpointUrl, bodyData, conf]);
        } else if (method === this.methodType.GET || method === this.methodType.DELETE) {
            return await handleResponse(Axios, method, [endpointUrl, conf]);
        } else {
            const err = new Error(`"${method}" is invalid`);
            err.Level = "Test";
            err.validOptions = Object.keys(this.methodType);
            throw err;
        }
    }
}

module.exports = ApiMethods