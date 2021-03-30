const Axios = require("axios").default;
const conf = require("./config");
const API_ACTIONS = {
    get: async (componentUrl, params = null, headers = null) => {
        headers ? conf.headers = headers : null;
        params ? conf.params = params : null
        try {
            return (await Axios.get(componentUrl, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    },
    post: async (componentUrl, query) => {
        try {
            return (await Axios.post(componentUrl, query, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    },
    put: async (componentUrl, query) => {
        try {
            return (await Axios.put(componentUrl, query, conf));
        } catch (err) {
            if (!err.isAxiosError) {
                throw new Error(`Test error: ${err.message}`);
            }

            return (err.response);
        }
    }
}

module.exports = API_ACTIONS