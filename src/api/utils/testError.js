module.exports = class TestError extends Error {
    /** @param {String} message @param {String} moreDetails */
    constructor(message, moreDetails = undefined) {
        super(message);
        this.name = this.constructor.name;
        moreDetails ? this.details = moreDetails : void 0
    }
}