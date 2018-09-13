'use strict';
const addOrsub = require('./string/addOrsub');
module.exports = {
    show() {
        return addOrsub.removeOne("123");
    }
};