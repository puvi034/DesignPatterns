/**
 * Created by Puneeth T S on 11/26/15.
 */
/* Observer List Model*/
(function () {
    function observerList() {
        this.observerList = [];
    }

    observerList.prototype.add = function (observer) {
        this.observerList.push(observer);
    }

    observerList.prototype.count = function () {
        return this.observerList.length;
    }

    observerList.prototype.find = function (observer, startIndex) {
        if (startIndex > -1 && startIndex < this.observerList.length) {
            for (var i = startIndex; i < this.observerList.length; i++) {
                if (observer === this.observerList[i]) {
                    return i;
                }
            }
        }
        return -1
    }

    observerList.prototype.remove = function (index) {
        this.observerList.splice(index, 1);
    }

    observerList.prototype.get = function (index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    /*Modelling the Subject*/

    function Subject() {
        this.observers = new ObserverList();
    }

    Subject.prototype.addObserver = function (observer) {
        this.observers.add(observer);
    }

    Subject.prototype.removeObserver = function (index) {
        this.observers.remove(index);
    }

    Subject.prototype.notify = function () {
        for (var i = 0; i < observers.count(); i++) {
            observers.get(i).update("Update Status");
        }
    }


    /* Modelling the Observer*/

    function Observer() {
        this.update = function (status) {
            console.log(status);
        }
    }

})()