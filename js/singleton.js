/**
 * Created by Puneeth T S on 11/24/15.
 */
var singletonObject = (function () {
    var instance;

    function config(options) {
        this.x = options.x || '10';
        this.y = options.y || '20';
    }

    return {
        getInstance: function (options) {
            //create instance only if instance does not exist, otherwise provide reference to existing instance

            if (!instance) {
                instance = new config(options);
            }
            return instance;
        }
    }

})();

//test always you get the same instance.
console.log(singletonObject.getInstance({"x": 20, "y": 30}));

console.log(singletonObject.getInstance({"x": 30, "y": 40}));