module.exports = class TestError extends Error {
    /** @param {String} message @param {String} moreDetails */
    constructor(message, moreDetails = undefined) {
        super(message);
        this.name = this.constructor.name;
        if (moreDetails) {
            this.details = moreDetails;
        }
    }
}