const Axios = require("axios").default;
const conf = require("./config");
const API_ACTIONS = {
    get: async (componentUrl, params = null, headers = null) => {
        headers ? conf.headers = headers : null;
        params ? conf.params = params : null
        return (await Axios.get(componentUrl, conf));
    },
    post: () => { },
    update: () => { }
}

module.exports = API_ACTIONS