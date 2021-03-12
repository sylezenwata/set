// // SET js | MIT License | Copyright (c) 2021 sylvester ezenwata [https://github.com/sylezenwata]
// function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _instanceof(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"object"==("undefined"==typeof module?"undefined":_typeof(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?exports.SET=t():e.SET=t()}(window,function(){function e(){}return e.prototype.$=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document).getElem(e,t)},EventTarget.prototype.getElem=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e===window?e:_instanceof(e,Element)?t?[e]:e:_instanceof(e,NodeList)?t?[e]:e:t?_toConsumableArray(this.querySelectorAll(e)):this.querySelectorAll(e)[0]},EventTarget.prototype.on=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r?this.addEventListener(e,t,r):this.addEventListener(e,t)},EventTarget.prototype.off=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return r?this.removeEventListener(e,t,r):this.removeEventListener(e,t)},e.prototype.fixClass=function(e,t,r){for(var n=0;n<e.length;n++){var o=this.$(e[n]);if(void 0!==o)for(var i=0;i<t[n].length;i++)r[n]?o.classList.add(t[n][i]):o.classList.remove(t[n][i])}},e.prototype.fixStyle=function(e,t,r){for(var n=0;n<e.length;n++){var o=this.$(e[n]);if(void 0!==o)for(var i=0;i<r[n].length;i++)o.style.hasOwnProperty(t[n][i])&&(o.style[t[n][i]]=r[n][i])}},e.prototype.checkDeviceWidth=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},e.prototype.deviceType=function(){var e=navigator.userAgent||navigator.vendor;return/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)?"tablet":/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e)?"mobile":"desktop"},e.prototype.browserType=function(){return-1!=(navigator.userAgent.indexOf("Opera")||navigator.userAgent.indexOf("OPR"))?"Opera":-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Safari")?"Safari":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":-1!=navigator.userAgent.indexOf("MSIE")||1==!!document.documentMode?"IE":"unknown"},e.prototype.createTag=function(e,t){for(var r=0,n=[];r<e.length;r++){for(var o=0,i=[];o<e[r];o++)i.push(document.createElement(t[r]));n.push(i)}return n},e.prototype.addAttr=function(e,t,r){for(var n=0;n<e.length;n++)for(var o=0;o<e[n].length;o++)e[n][o].setAttribute("".concat(r[n][o]),t[n][o])},EventTarget.prototype.appendElem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t){case 1:t="beforebegin";break;case 2:t="afterbegin";break;case 3:t="beforeend";break;default:t="afterend"}this.insertAdjacentElement(t,e)},EventTarget.prototype.getParent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.parentElement;if(!e)return t;for(;!t.classList.contains(e);)t=t.parentElement;return t},EventTarget.prototype.getSibling=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"next"===e||null===e?t?this.getParent().getElem(this.classList.value.split(" ").map(function(e){return".".concat(e)}).join().replace(/,/g,"")+" + "+t):this.nextElementSibling:"prev"===e?this.previousElementSibling:void 0},e.prototype.removeElem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.$(e,!0)[t];r&&r.remove()},e.prototype.sCookie=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",o=new Date;o.setTime(o.getTime()+24*(r||0)*60*60*1e3);var i=escape(t)+"; expires="+o.toUTCString();document.cookie=e+"="+i+"; path="+n},e.prototype.gCookie=function(e){var t,r,n;t=decodeURIComponent(document.cookie).split(";");for(var o=0;o<t.length;o++)if(r=t[o].substr(0,t[o].indexOf("=")),n=t[o].substr(t[o].indexOf("=")+1),(r=r.replace(/^\s+|\s+$/g,""))===e)return unescape(n)},e.prototype.uCookie=function(e,t){this.gCookie(e)&&(document.cookie=e+"="+t)},e.prototype.ajax=function(e){var t=e.url,r=e.method,n=e.timeOut,o=e.cache,i=void 0!==o&&o,a=e.body,s=void 0===a?null:a,u=e.handler,l=void 0===u?null:u,f=e.withCredentials,c=void 0===f||f,p=e.responseType,d=void 0===p?"json":p,y=e.headers,v=void 0===y?{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json; charset=UTF-8"}:y,h=new XMLHttpRequest||new ActiveXObject("Microsoft.XMLHTTP");c&&(h.withCredentials=!0),h.open(r,i?t:t+(/\?/.test(t)?"&":"?")+"_"+Math.floor(1e12*Math.random())),Object.keys(v).map(function(e){h.setRequestHeader(e,v[e])}),d&&(h.responseType=d),n&&(h.timeout=1e3*n);try{h.send(s?"application/json; charset=UTF-8"===v["Content-Type"]?JSON.stringify(s):s:null)}catch(e){if(console.error(e),l)return l(null,{code:e.status,error:e.statusText})}h.onload=function(){var e=h.status,t=h.statusText,r=h.response;if((200!==e||e<200||e>200)&&console.error("".concat(e,": ").concat(t)),!l)return r;l(r,200!==e||e<200||e>200?{code:e,error:t}:null)},h.onerror=function(e){console.error(e)}},e.prototype.extend=function(e,t){Array.isArray(e)||"object"!==_typeof(e)||(e=[e])&&(t=[t]);for(var r=function(r){Object.keys(t[r]).forEach(function(n){e[r][n]=t[r][n]})},n=0;n<e.length;n++)r(n)},EventTarget.prototype.disableForm=function(){for(var e=arguments,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if("form"!==this.nodeName.toLowerCase())throw new Error("This function only works on a form.");var o=this.elements;if(o.length<1)return!1;Array.from(o).forEach(function(t){t.disabled=!(e.length>0&&!1===e[0])})},e.prototype.existsInArray=function(e,t){var r=!1;if(Array.isArray(t)&&t.length>0)for(var n=0;n<t.length;n++)if(e===t[n]){r=n;break}return r},e.prototype.existsInObj=function(e,t,r){var n=0;if("object"===_typeof(r))for(var o=0;o<e.length;o++)for(var i=Object.keys(r),a=0;a<i.length;a++)i[a]===e[o]&&t[o]===r[e[o]]&&(n+=1);return n===e.length},e.prototype.indexOfObj=function(e,t,r){if(Array.isArray(r)&&r.length>0)for(var n=0;n<r.length;n++)if(existsInObj([e],[t],r[n]))return n;return null},EventTarget.prototype.attr=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return t?this.setAttribute(e,t):this.getAttribute(e)},new e});
(function (G, F) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = F())
		: "function" == typeof define && define.amd
		? define([], F)
		: "object" == typeof exports
		? (exports.SET = F())
		: (G.SET = F());
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
	Set.prototype.$ = function (selector, all = false) {
		const target =
			arguments.length > 2 && arguments[2] !== undefined
				? arguments[2]
				: document;
		return target.getElem(selector, all);
	};
	/**
	 * function to bind query select to element
	 * @param selector
	 * @param all
	 * @return {NodeList|Element[]|*[]|NodeListOf<*>|NodeListOf<Element>|*}
	 */
	EventTarget.prototype.getElem = function (selector, all = false) {
		if (selector === window) return selector;
		if (selector instanceof Element) return all ? [selector] : selector;
		if (selector instanceof NodeList) return all ? [selector] : selector;
		return all
			? [...this.querySelectorAll(selector)]
			: this.querySelectorAll(selector)[0];
	};
	/**
	 * function for adding event listener to an element
	 * @param {string} event
	 * @param {*} handler
	 * @param {object} options
	 * @returns {void}
	 */
	EventTarget.prototype.on = function (event, handler, options = null) {
		return options
			? this.addEventListener(event, handler, options)
			: this.addEventListener(event, handler);
	};
	/**
	 * function for removing event listener on an element
	 * @param {string} event
	 * @param {*} handler
	 * @param {object} options
	 * @returns {void}
	 */
	EventTarget.prototype.off = function (event, handler, options = null) {
		return options
			? this.removeEventListener(event, handler, options)
			: this.removeEventListener(event, handler);
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
		for (let _i = 0; _i < selectorArray.length; _i++) {
			let target = this.$(selectorArray[_i]);
			if (target !== undefined) {
				for (let i = 0; i < classArray[_i].length; i++) {
					actionArray[_i]
						? target.classList.add(classArray[_i][i])
						: target.classList.remove(classArray[_i][i]);
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
		for (let _i = 0; _i < selectorArray.length; _i++) {
			const target = this.$(selectorArray[_i]);
			if (target !== undefined) {
				for (let i = 0; i < valueArray[_i].length; i++) {
					if (target.style.hasOwnProperty(propertyArray[_i][i]))
						target.style[propertyArray[_i][i]] = valueArray[_i][i];
				}
			}
		}
	};
	/**
	 * function to calc device width
	 * @returns {number}
	 */
	Set.prototype.checkDeviceWidth = function () {
		return (
			window.innerWidth ||
			document.documentElement.clientWidth ||
			document.body.clientWidth
		);
	};
	/**
	 * function to check device (ie. whether desktop/tablet/mobile)
	 * @returns {string}
	 */
	Set.prototype.deviceType = function () {
		const userAgent = navigator.userAgent || navigator.vendor;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
			return "tablet";
		}
		if (
			/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				userAgent
			)
		) {
			return "mobile";
		}
		return "desktop";
	};
	/**
	 * function to check for browser type
	 */
	Set.prototype.browserType = function () {
		if (
			(navigator.userAgent.indexOf("Opera") ||
				navigator.userAgent.indexOf("OPR")) != -1
		) {
			return "Opera";
		} else if (navigator.userAgent.indexOf("Chrome") != -1) {
			return "Chrome";
		} else if (navigator.userAgent.indexOf("Safari") != -1) {
			return "Safari";
		} else if (navigator.userAgent.indexOf("Firefox") != -1) {
			return "Firefox";
		} else if (
			navigator.userAgent.indexOf("MSIE") != -1 ||
			!!document.documentMode == true
		) {
			//IF IE > 10
			return "IE";
		} else {
			return "unknown";
		}
	};
	/**
	 * function to create tag
	 * @param numberArray
	 * @param typeArray
	 * @returns {[]}
	 */
	Set.prototype.createTag = function (numberArray, typeArray) {
		let _i = 0,
			tagsArray = [];
		for (; _i < numberArray.length; _i++) {
			let i = 0,
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
		for (let _i = 0; _i < tagsArray.length; _i++) {
			for (let i = 0; i < tagsArray[_i].length; i++) {
				tagsArray[_i][i].setAttribute(
					`${typesArray[_i][i]}`,
					valuesArray[_i][i]
				);
			}
		}
	};
	/**
	 * function to manipulate String Element into Node Element
	 * @param {String} node
	 * @returns {Node}
	 */
	Set.prototype.elemManip = function (node) {
		// match and get first element and it properties (class, attributes)
		let elem = node
			.match(/<[^>]*>/g)[0]
			.replace(/\</, "")
			.replace(/\>/, "")
			.split(" ");
		// get tag name
		let elemTag = elem.splice(0, 1)[0];
		// update passed node by removing first tag
		node = node.replace(/<[^>]*>/, "").replace(/<\/[^>]*>$/, "");
		// create tag
		let [newNode] = this.createTag([1], [elemTag])[0];
		// set properties to newNode
		elem.forEach((e) => {
			let [name, value] = e.replaceAll('"', "").split("=");
			newNode.attr(name, value);
		});
		// set node in newNode
		newNode.innerHTML = node;
		return newNode;
	};
	/**
	 * function to append element
	 * @param {String} node
	 */
	EventTarget.prototype.appendElem = function (node) {
		this.insertAdjacentElement("beforeend", SET.elemManip(node));
	};
	/**
	 * function to prepend element
	 * @param {String} node
	 */
	EventTarget.prototype.prependElem = function (node) {
		this.insertAdjacentElement("afterbegin", SET.elemManip(node));
	};
	/**
	 * function to get parent element
	 * @param parentClass
	 * @returns {Node}
	 */
	EventTarget.prototype.getParent = function (parentClass = null) {
		let parent = this.parentElement;
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
	EventTarget.prototype.getSibling = function (
		type = null,
		siblingSelector = null
	) {
		if (type === "next" || type === null) {
			if (siblingSelector)
				return this.getParent().getElem(
					this.classList.value
						.split(" ")
						.map((e) => `.${e}`)
						.join()
						.replace(/,/g, "") +
						" + " +
						siblingSelector
				);
			return this.nextElementSibling;
		}
		if (type === "prev") return this.previousElementSibling;
	};
	/**
	 * function to remove element
	 * @param targetElement
	 * @param index | for a case where there are numerous target
	 */
	Set.prototype.removeElem = function (targetElement, index = 0) {
		const target = this.$(targetElement, true)[index];
		if (target) target.remove();
	};
	/**
	 * function to set a cookie
	 * @param cName
	 * @param cValue
	 * @param expDays
	 * @param path
	 */
	Set.prototype.sCookie = function (cName, cValue, expDays = 30, path = "/") {
		const cDate = new Date();
		cDate.setTime(
			cDate.getTime() + (expDays ? expDays : 0) * 24 * 60 * 60 * 1000
		);
		const cVal = escape(cValue) + "; expires=" + cDate.toUTCString();
		document.cookie = cName + "=" + cVal + "; path=" + path;
	};
	/**
	 * function to get a cookie
	 * @param cName
	 * @returns {string}
	 */
	Set.prototype.gCookie = function (cName) {
		let decodedC, splitC, eachCname, eachCvalue;
		decodedC = decodeURIComponent(document.cookie);
		splitC = decodedC.split(";");
		for (let i = 0; i < splitC.length; i++) {
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
		let {
			url,
			method,
			timeOut,
			cache = false,
			body = null,
			handler = null,
			withCredentials = true,
			responseType = "json",
			headers = {
				"X-Requested-With": "XMLHttpRequest",
				"Content-Type": "application/json; charset=UTF-8",
			},
		} = reqDataObj;
		// defining XMLHttpRequest
		const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP");
		// validate withCredentials
		withCredentials && (xhr.withCredentials = true);
		// open req
		xhr.open(
			method,
			cache
				? url
				: url +
						(/\?/.test(url) ? "&" : "?") +
						"_" +
						Math.floor(Math.random() * 10e11)
		);
		// set req header
		// NB: eachHeader obj key and value will be used to set header
		let headersKeys = Object.keys(headers);
		headersKeys.map((eachKey) => {
			xhr.setRequestHeader(eachKey, headers[eachKey]);
		});
		// set response type
		responseType && (xhr.responseType = responseType);
		// set timeout
		timeOut && (xhr.timeout = timeOut * 1000);
		// exec send
		try {
			xhr.send(
				body
					? headers["Content-Type"] === "application/json; charset=UTF-8"
						? JSON.stringify(body)
						: body
					: null
			);
		} catch (error) {
			console.error(error);
			if (handler)
				return handler(null, {
					code: error.status,
					msg: error.statusText,
				});
		}
		// capture when loaded
		xhr.onload = () => {
			// request status
			const { status, statusText, response } = xhr;
			if (status !== 200 || status < 200 || status > 200)
				console.error(`${status}: ${statusText}`);
			// handler
			if (handler)
				if (status !== 200 || status < 200 || status > 200)
					handler(response, {
						code: status,
						msg: statusText,
					});
				else handler(response, null);
			else return response;
		};
		// capture error
		xhr.onerror = (error) => {
			console.error(error);
			if (handler)
				return handler(null, {
					msg: "Request was not sent due to error.",
				});
		};
	};
	/**
	 * function to bind objs dynamically | like Object.assign()
	 * @param {object|array} target
	 * @param {object|array} data
	 */
	Set.prototype.extend = function (target, data) {
		if (!Array.isArray(target) && "object" === typeof target)
			(target = [target]) && (data = [data]);
		for (let _i = 0; _i < target.length; _i++) {
			let eachDataKeys = Object.keys(data[_i]);
			eachDataKeys.forEach((eachKey) => {
				target[_i][eachKey] = data[_i][eachKey];
			});
		}
	};
	/**
	 * function to disable form
	 * @return {boolean}
	 */
	EventTarget.prototype.disableForm = function (...args) {
		if (this.nodeName.toLowerCase() !== "form") {
			throw new Error("This function only works on a form.");
		}
		const formElements = this.elements;
		if (formElements.length < 1) return false;
		// loop through formElements
		Array.from(formElements).forEach((eachElement) => {
			eachElement.disabled = !(arguments.length > 0 && arguments[0] === false);
		});
	};
	/**
	 * function to val if an item exists in an array
	 * @param {string} value
	 * @param {array} array
	 * @return {boolean|number}
	 */
	Set.prototype.existsInArray = function (value, array) {
		let result = false;
		if (Array.isArray(array) && array.length > 0) {
			for (let i = 0; i < array.length; i++) {
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
		let result = 0;
		if ("object" === typeof obj) {
			for (let _i = 0; _i < targetArray.length; _i++) {
				let objKeys = Object.keys(obj);
				for (let i = 0; i < objKeys.length; i++) {
					if (
						objKeys[i] === targetArray[_i] &&
						valueArray[_i] === obj[targetArray[_i]]
					) {
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
			for (let i = 0; i < arrayOfObj.length; i++) {
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
	HTMLElement.prototype.attr = function (attr, attrValue = null) {
		if (attrValue) {
			return this.setAttribute(attr, attrValue);
		}
		return this.getAttribute(attr);
	};
	// instantiate constructor
	return new Set();
});