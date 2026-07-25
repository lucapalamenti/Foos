module.exports = class MyObject {
    /** @type {Number} */
    myObject_id = null;

    /**
     * Constructor given MyObject object data
     * @param {MyObject} data 
     */
    constructor ( data ) {
        this.myObject_id = data.myObject_id;
    }
};  