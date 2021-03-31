const Axios = require("axios").default;
const conf = require("./config");
const API_ACTIONS = {
    get: async (endpointUrl, params = null, headers = null) => {
        headers ? conf.headers = headers : null;
        params ? conf.params = params : null
        try {
            return (await Axios.get(endpointUrl, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    },
    post: async (endpointUrl, query) => {
        try {
            return (await Axios.post(endpointUrl, query, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    },
    put: async (endpointUrl, query) => {
        try {
            return (await Axios.put(endpointUrl, query, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    },
    patch: async (endpointUrl, query) => {
        try {
            return (await Axios.patch(endpointUrl, query, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    },
    delete: async (endpointUrl) => {
        try {
            return (await Axios.delete(endpointUrl, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    }
}

module.exports = API_ACTIONS