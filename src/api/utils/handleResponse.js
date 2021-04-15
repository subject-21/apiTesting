const TestError = require("./testError")
/** @returns {Promise<import("axios").AxiosResponse>} */
const handleResponse = async (axiosInstance, method, args) => {
    try {
        return await (axiosInstance[method].apply(this, args));
    } catch (err) {
        if (!err.isAxiosError) {
            throw new TestError(err.message);
        }
        return (err.response);
    }
}

module.exports = handleResponse