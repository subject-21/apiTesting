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
            throw new TestError(`"${method}" is invalid`,
                `valid methods are: ${Object.values(this.methodType)}`);
        }
    }

    async graphQl(query, variables, headers = null, url = null) {
        headers ? conf.headers = headers : null;
        const data = {
            query: `${query}`,
            variables: `${variables}`
        }

        return await handleResponse(Axios, this.methodType.POST, [url, data, conf]);
    }
}

module.exports = ApiMethods