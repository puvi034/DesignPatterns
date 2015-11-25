/**
 * Created by Puneeth T S on 11/24/15.
 */
/* below factory pattern can be used to create dynamic xmlHttpRequest URL*/

var factoryObject = (function () {

    function urlMaker(options) {
        this.url = options.url || "localhost:11420/";
        this.url.headers = options.url.header || {"Content-Type": "text/plain"}
        this.url.method = options.url.method || "testApi";
        this.url.params = options.url.params || '';
        this.url.reqBody = options.url.data || '';
    }

    urlMaker.prototype.URL = function () {
        var finalUrl;
        finalUrl = this.url + this.method;

        //appending params If params exist
        if (this.url.params) {
            var params = "?";
            for (var i = 0, keys = Object.keys(this.url.params); i < keys.length; i++) {
                params += this.url.params[keys[i]] + (i < keys.length - 1) ? '&' : '';
            }
            finalUrl += params;
        }
        return finalUrl;
    }


    return {
        getURL: function (options) {
            return new urlMaker(options);

        }
    }

})();
