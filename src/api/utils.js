const handleResponse = async (axiosInstance, method, args) => {
    try {
        return await (axiosInstance[method].apply(this, args));
    } catch (err) {
        if (!err.isAxiosError) {
            const error = new Error(`${err.message}`);
            error.Level = "Test";
            throw (error);
        }
        return (err.response);
    }
}

module.exports = handleResponse