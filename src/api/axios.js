const Axios = require("axios").default;
const conf = require("./config");
const API_ACTIONS = {
    get: async (componentUrl, params = null, headers = null) => {
        headers ? conf.headers = headers : null;
        params ? conf.params = params : null
        try {
            return (await Axios.get(componentUrl, conf));
        } catch (err) {
            if (err.isAxiosError) {
                throw new Error(`Axios: ${err.message} \nApi: ${err.response.data.error.message}`);
            } else {
                throw new Error(`unknown: ${err.message}`)
            }
        }
    },
    post: () => { },
    update: () => { }
}

module.exports = API_ACTIONS