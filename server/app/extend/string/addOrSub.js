'use strict';
module.exports = {
    removeOne(str) {
        var rstr = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] != '1')
                rstr += str[i];
        }
        return rstr;
    }
}