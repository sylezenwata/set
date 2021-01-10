(function (G, F) {
	"object" == typeof exports && "object" == typeof module ? (module.exports = F())
		: "function" == typeof define && define.amd ? define([], F)
		: "object" == typeof exports ? (exports.SET = F())
		: (G.SET = F());
})(window, function () {
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
	Set.prototype.getElem = function (selector, all = false) {
		const target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
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
		if (selector instanceof Element) return all ? Array.from(selector) : selector;
		if (selector instanceof NodeList) return all ? Array.from(selector) : selector;
		return all ? Array.from(this.querySelectorAll(selector)) : this.querySelectorAll(selector)[0];
	};
	/**
	 * function for adding event listener to an element
	 * @param {string} event
	 * @param {*} handler
	 * @param {object} options
	 * @returns {void}
	 */
	EventTarget.prototype.on = function (event, handler, options = null) {
		return options ? this.addEventListener(event, handler, capture) : this.addEventListener(event, handler);
	};
	/**
	 * function for removing event listener on an element
	 * @param {string} event
	 * @param {*} handler
	 * @param {object} options
	 * @returns {void}
	 */
	EventTarget.prototype.off = function (event, handler, options = null) {
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
		for (let _i = 0; _i < selectorArray.length; _i++) {
			let target = this.getElem(selectorArray[_i]);
			if (target !== undefined) {
				for (let i = 0; i < classArray[_i].length; i++) {
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
		for (let _i = 0; _i < selectorArray.length; _i++) {
			const target = this.getElem(selectorArray[_i]);
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
	 * function to append element
	 * @param position
	 * @param newNode
	 */
	EventTarget.prototype.appendElem = function (newNode, position = null) {
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
	EventTarget.prototype.getSibling = function (type = null, siblingSelector = null) {
		if (type === "next" || type === null) {
			if (siblingSelector)
				return this.getParent().getElem(this.classList.value.split(" ").map((e) => `.${e}`).join().replace(/,/g, "") + " + " + siblingSelector);
			return this.nextElementSibling;
		}
		if (type === "prev")
			return this.previousElementSibling;
	};
	/**
	 * function to remove element
	 * @param targetElement
	 * @param index | for a case where there are numerous target
	 */
	Set.prototype.removeElem = function (targetElement, index = 0) {
		const target = this.getElem(targetElement, true)[index];
		if (target) target.remove();
	};
	/**
	 * function to set a cookie
	 * @param cName
	 * @param cValue
	 * @param expDays
	 * @param path
	 */
	Set.prototype.sCookie = function (
		cName,
		cValue,
		expDays = 30,
		path = "/"
	) {
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
			cache ? url : url + (/\?/.test(url) ? "&" : "?") + "_" + Math.floor(Math.random() * 10e11)
		);
		// set req header
		// NB: each header obj key and value will be used to set header
		let headersKeys = Object.keys(headers);
		headersKeys.forEach((eachKey) => {
			xhr.setRequestHeader(eachKey, headers[eachKey]);
		});
		// set response type
		responseType && (xhr.responseType = responseType);
		// set timeout
		timeOut && (xhr.timeout = timeOut * 1000);
		// exec send
		try {
			xhr.send(
				body ? 
					headers["Content-Type"] === "application/json; charset=UTF-8" ?
						JSON.stringify(body)
						: body
					: null
			);
		} catch (error) {
			console.error(error);
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
					handler(response, { code: status, error: statusText });
				else handler(response, null);
			else return response;
		};
		// capture error
		xhr.onerror = (error) => {
			console.error(error);
		};
	};
	/**
	 * function to bind objs dynamically
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
		if (this.nodeName.toLowerCase() !== "form")
			throw new Error("This function only works on a form.");
		const formElements = this["elements"];
		if (!formElements.length > 0) {
			return false;
		}
		// loop through formElements
		[...formElements].forEach((eachElement) => {
			eachElement.disabled = !(arguments.length > 0 && arguments[0] === false);
		});
	};
	/**
	 * function to show top bar error
	 * @param {string} message
	 * @param {string} status
	 */
	Set.prototype.showResponse = function (message, status = "default") {
		if (message) {
			//create elements
			let [divTags, pTags, spanTags] = this.createTag(
				[2, 1, 1],
				["div", "p", "span"]
			);
			this.addAttr(
				[divTags, spanTags],
				[
					["notification", `notification-content ${status}`],
					["SET.removeNotification()"],
				],
				[["class", "class"], ["onclick"]]
			);
			spanTags[0].innerHTML = "&times;";
			pTags[0].innerHTML = message;
			divTags[1].append(pTags[0]);
			divTags[1].append(spanTags[0]);
			divTags[0].append(divTags[1]);
			// check if error exists
			if (this.getElem(".notification")) this.removeElem(".notification");
			document.body.append(divTags[0]);
		}
	};
	/**
	 * function to remove response notification
	 */
	Set.prototype.removeNotification = function () {
		this.removeElem(".notification");
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
		if ("object" === typeof obj) {
			for (var _i = 0; _i < targetArray.length; _i++) {
				var objKeys = Object.keys(obj);
				for (var i = 0; i < objKeys.length; i++) {
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
			for (var i = 0; i < arrayOfObj.length; i++) {
				if (existsInObj([target], [value], arrayOfObj[i])) return i;
			}
		}
		return null;
	};
	// instantiate constructor
	return new Set();
});
