const TestError = require("./testError")
const Reporter = require("../../../jasmineHelper").allure

/** @returns {Promise<import("axios").AxiosResponse>} */
const handleResponse = async (axiosInstance, method, args) => {
    try {
        const requestAction = await (axiosInstance[method].apply(this, args)); 
        Reporter.description(JSON.stringify(requestAction.config));
        return (requestAction);
    } catch (err) {
        if (!err.isAxiosError) {
            throw new TestError(err.message);
        }
        return (err.response);
    }
}

module.exports = handleResponse