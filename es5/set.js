function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (G, F) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = F() : "function" == typeof define && define.amd ? define([], F) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.SET = F() : G.SET = F();
})(window, function () {
    "use strict";
    /**
     * Set constructor
     * @constructor
     */

    function Set() {}
    /**
     * function to query select
     * @param {*} selector
     * @param {boolean} all
     * @returns {Element[]|NodeListOf<*>}
     */


    Set.prototype.$ = function (selector) {
        var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
        return target.getElem(selector, all);
    };
    /**
     * function to bind query select to element
     * @param selector
     * @param all
     * @return {NodeList|Element[]|*[]|NodeListOf<*>|NodeListOf<Element>|*}
     */


    EventTarget.prototype.getElem = function (selector) {
        var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (selector === window) return selector;
        if (_instanceof(selector, Element)) return all ? [selector] : selector;
        if (_instanceof(selector, NodeList)) return all ? [selector] : selector;
        return all ? _toConsumableArray(this.querySelectorAll(selector)) : this.querySelectorAll(selector)[0];
    };
    /**
     * function for adding event listener to an element
     * @param {string} event
     * @param {*} handler
     * @param {object} options
     * @returns {void}
     */


    EventTarget.prototype.on = function (event, handler) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return options ? this.addEventListener(event, handler, options) : this.addEventListener(event, handler);
    };
    /**
     * function for removing event listener on an element
     * @param {string} event
     * @param {*} handler
     * @param {object} options
     * @returns {void}
     */


    EventTarget.prototype.off = function (event, handler) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        return options ? this.removeEventListener(event, handler, options) : this.removeEventListener(event, handler);
    };
    /**
     * function to add/remove class -
     * this function will loop through the selectorArray, then using its index to loop through
     * classArray and actionArray
     * @param selectorArray
     * @param classArray | contains array of classes for each selectorArray
     * @param actionArray | true (to add class) or false (to remove class) for each selectorArray
     * @returns {boolean|void}
     */


    Set.prototype.fixClass = function (selectorArray, classArray, actionArray) {
        for (var _i = 0; _i < selectorArray.length; _i++) {
            var target = this.$(selectorArray[_i]);

            if (target !== undefined) {
                for (var i = 0; i < classArray[_i].length; i++) {
                    actionArray[_i] ? target.classList.add(classArray[_i][i]) : target.classList.remove(classArray[_i][i]);
                }
            }
        }
    };
    /**
     * function to write style to an element
     * @param selectorArray
     * @param propertyArray
     * @param valueArray
     */


    Set.prototype.fixStyle = function (selectorArray, propertyArray, valueArray) {
        for (var _i = 0; _i < selectorArray.length; _i++) {
            var target = this.$(selectorArray[_i]);

            if (target !== undefined) {
                for (var i = 0; i < valueArray[_i].length; i++) {
                    if (target.style.hasOwnProperty(propertyArray[_i][i])) target.style[propertyArray[_i][i]] = valueArray[_i][i];
                }
            }
        }
    };
    /**
     * function to calc device width
     * @returns {number}
     */


    Set.prototype.checkDeviceWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    /**
     * function to check device (ie. whether desktop/tablet/mobile)
     * @returns {string}
     */


    Set.prototype.deviceType = function () {
        var userAgent = navigator.userAgent || navigator.vendor;

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
            return "tablet";
        }

        if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
            return "mobile";
        }

        return "desktop";
    };
    /**
     * function to check for browser type
     */


    Set.prototype.browserType = function () {
        if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
            return 'Opera';
        } else if (navigator.userAgent.indexOf("Chrome") != -1) {
            return 'Chrome';
        } else if (navigator.userAgent.indexOf("Safari") != -1) {
            return 'Safari';
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            return 'Firefox';
        } else if (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true) //IF IE > 10
        {
            return 'IE';
        } else {
            return 'unknown';
        }
    };
    /**
     * function to create tag
     * @param numberArray
     * @param typeArray
     * @returns {[]}
     */


    Set.prototype.createTag = function (numberArray, typeArray) {
        var _i = 0,
            tagsArray = [];

        for (; _i < numberArray.length; _i++) {
            var i = 0,
                tags = [];

            for (; i < numberArray[_i]; i++) {
                tags.push(document.createElement(typeArray[_i]));
            }

            tagsArray.push(tags);
        }

        return tagsArray;
    };
    /**
     * function to add attribute to element
     * @param {array} tagsArray
     * @param {array} valuesArray
     * @param {array} typesArray
     */


    Set.prototype.addAttr = function (tagsArray, valuesArray, typesArray) {
        for (var _i = 0; _i < tagsArray.length; _i++) {
            for (var i = 0; i < tagsArray[_i].length; i++) {
                tagsArray[_i][i].setAttribute("".concat(typesArray[_i][i]), valuesArray[_i][i]);
            }
        }
    };
    /**
     * function to append element
     * @param position
     * @param newNode
     */


    EventTarget.prototype.appendElem = function (newNode) {
        var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        switch (position) {
            case 1:
                position = "beforebegin";
                break;

            case 2:
                position = "afterbegin";
                break;

            case 3:
                position = "beforeend";
                break;

            default:
                position = "afterend";
        }

        this.insertAdjacentElement(position, newNode);
    };
    /**
     * function to get parent element
     * @param parentClass
     * @returns {Node}
     */


    EventTarget.prototype.getParent = function () {
        var parentClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var parent = this.parentElement;
        if (!parentClass) return parent;

        while (!parent.classList.contains(parentClass)) {
            parent = parent.parentElement;
        }

        return parent;
    };
    /**
     * function to get sibling
     * @param type {String} | 'next' or 'prev'
     * @returns {Element}
     */


    EventTarget.prototype.getSibling = function () {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var siblingSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (type === "next" || type === null) {
            if (siblingSelector) return this.getParent().getElem(this.classList.value.split(" ").map(function (e) {
                return ".".concat(e);
            }).join().replace(/,/g, "") + " + " + siblingSelector);
            return this.nextElementSibling;
        }

        if (type === "prev") return this.previousElementSibling;
    };
    /**
     * function to remove element
     * @param targetElement
     * @param index | for a case where there are numerous target
     */


    Set.prototype.removeElem = function (targetElement) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var target = this.$(targetElement, true)[index];
        if (target) target.remove();
    };
    /**
     * function to set a cookie
     * @param cName
     * @param cValue
     * @param expDays
     * @param path
     */


    Set.prototype.sCookie = function (cName, cValue) {
        var expDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
        var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
        var cDate = new Date();
        cDate.setTime(cDate.getTime() + (expDays ? expDays : 0) * 24 * 60 * 60 * 1000);
        var cVal = escape(cValue) + "; expires=" + cDate.toUTCString();
        document.cookie = cName + "=" + cVal + "; path=" + path;
    };
    /**
     * function to get a cookie
     * @param cName
     * @returns {string}
     */


    Set.prototype.gCookie = function (cName) {
        var decodedC, splitC, eachCname, eachCvalue;
        decodedC = decodeURIComponent(document.cookie);
        splitC = decodedC.split(";");

        for (var i = 0; i < splitC.length; i++) {
            eachCname = splitC[i].substr(0, splitC[i].indexOf("="));
            eachCvalue = splitC[i].substr(splitC[i].indexOf("=") + 1);
            eachCname = eachCname.replace(/^\s+|\s+$/g, "");
            if (eachCname === cName) return unescape(eachCvalue);
        }
    };
    /**
     * function to update a cookie
     * @param cName
     * @param cValue
     */


    Set.prototype.uCookie = function (cName, cValue) {
        if (this.gCookie(cName)) document.cookie = cName + "=" + cValue;
    };
    /**
     * function to run ajax request
     * @param reqDataObj - {url,method,timeOut,cache = false,body = null,handler = null,withCredentials = true,responseType = 'json',headers = {'X-Requested-With': 'XMLHttpRequest','Content-Type': 'application/json; charset=UTF-8'}}
     */


    Set.prototype.ajax = function (reqDataObj) {
        // defining request data
        var url = reqDataObj.url,
            method = reqDataObj.method,
            timeOut = reqDataObj.timeOut,
            _reqDataObj$cache = reqDataObj.cache,
            cache = _reqDataObj$cache === void 0 ? false : _reqDataObj$cache,
            _reqDataObj$body = reqDataObj.body,
            body = _reqDataObj$body === void 0 ? null : _reqDataObj$body,
            _reqDataObj$handler = reqDataObj.handler,
            handler = _reqDataObj$handler === void 0 ? null : _reqDataObj$handler,
            _reqDataObj$withCrede = reqDataObj.withCredentials,
            withCredentials = _reqDataObj$withCrede === void 0 ? true : _reqDataObj$withCrede,
            _reqDataObj$responseT = reqDataObj.responseType,
            responseType = _reqDataObj$responseT === void 0 ? "json" : _reqDataObj$responseT,
            _reqDataObj$headers = reqDataObj.headers,
            headers = _reqDataObj$headers === void 0 ? {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json; charset=UTF-8"
            } : _reqDataObj$headers; // defining XMLHttpRequest

        var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP"); // validate withCredentials

        withCredentials && (xhr.withCredentials = true); // open req

        xhr.open(method, cache ? url : url + (/\?/.test(url) ? "&" : "?") + "_" + Math.floor(Math.random() * 10e11)); // set req header
        // NB: eachHeader obj key and value will be used to set header

        var headersKeys = Object.keys(headers);
        headersKeys.map(function (eachKey) {
            xhr.setRequestHeader(eachKey, headers[eachKey]);
        }); // set response type

        responseType && (xhr.responseType = responseType); // set timeout

        timeOut && (xhr.timeout = timeOut * 1000); // exec send

        try {
            xhr.send(body ? headers["Content-Type"] === "application/json; charset=UTF-8" ? JSON.stringify(body) : body : null);
        } catch (error) {
            console.error(error);
            if (handler) return handler(null, {
                code: error.status,
                error: error.statusText
            });
        } // capture when loaded


        xhr.onload = function () {
            // request status
            var status = xhr.status,
                statusText = xhr.statusText,
                response = xhr.response;
            if (status !== 200 || status < 200 || status > 200) console.error("".concat(status, ": ").concat(statusText)); // handler

            if (handler) {
                if (status !== 200 || status < 200 || status > 200) handler(response, {
                    code: status,
                    error: statusText
                });else handler(response, null);
            } else return response;
        }; // capture error


        xhr.onerror = function (error) {
            console.error(error);
        };
    };
    /**
     * function to bind objs dynamically | like Object.assign()
     * @param {object|array} target
     * @param {object|array} data
     */


    Set.prototype.extend = function (target, data) {
        if (!Array.isArray(target) && "object" === _typeof(target)) (target = [target]) && (data = [data]);

        var _loop = function _loop(_i) {
            var eachDataKeys = Object.keys(data[_i]);
            eachDataKeys.forEach(function (eachKey) {
                target[_i][eachKey] = data[_i][eachKey];
            });
        };

        for (var _i = 0; _i < target.length; _i++) {
            _loop(_i);
        }
    };
    /**
     * function to disable form
     * @return {boolean}
     */


    EventTarget.prototype.disableForm = function () {
        var _arguments = arguments;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (this.nodeName.toLowerCase() !== "form") throw new Error("This function only works on a form.");
        var formElements = this.elements;
        if (formElements.length < 1) return false; // loop through formElements

        Array.from(formElements).forEach(function (eachElement) {
            eachElement.disabled = !(_arguments.length > 0 && _arguments[0] === false);
        });
    };
    /**
     * function to val if an item exists in an array
     * @param {string} value
     * @param {array} array
     * @return {boolean|number}
     */


    Set.prototype.existsInArray = function (value, array) {
        var result = false;

        if (Array.isArray(array) && array.length > 0) {
            for (var i = 0; i < array.length; i++) {
                if (value === array[i]) {
                    result = i;
                    break;
                }
            }
        }

        return result;
    };
    /**
     * function to val if an item(key and value) exists in an object
     * @param {array} targetArray
     * @param {array} valueArray
     * @param {object} obj
     * @return boolean
     */


    Set.prototype.existsInObj = function (targetArray, valueArray, obj) {
        var result = 0;

        if ("object" === _typeof(obj)) {
            for (var _i = 0; _i < targetArray.length; _i++) {
                var objKeys = Object.keys(obj);

                for (var i = 0; i < objKeys.length; i++) {
                    if (objKeys[i] === targetArray[_i] && valueArray[_i] === obj[targetArray[_i]]) {
                        result += 1;
                    }
                }
            }
        }

        return result === targetArray.length;
    };
    /**
     * function to get index of an obj in an array
     * @param {string} target
     * @param {array} arrayOfObj
     * @return number|null
     */


    Set.prototype.indexOfObj = function (target, value, arrayOfObj) {
        if (Array.isArray(arrayOfObj) && arrayOfObj.length > 0) {
            for (var i = 0; i < arrayOfObj.length; i++) {
                if (existsInObj([target], [value], arrayOfObj[i])) return i;
            }
        }

        return null;
    };
    /**
     * function to set or get attribute value
     * @param {string} attr element's attr
     * @param {*} attrValue if passed, the function performs a setAttribute, otherwise getAttribute
     */


    EventTarget.prototype.attr = function (attr) {
        var attrValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (attrValue) {
            return this.setAttribute(attr, attrValue);
        }

        return this.getAttribute(attr);
    }; // instantiate constructor


    return new Set();
});