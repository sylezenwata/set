/**
 * set.js 2.0.1
 * MIT License
 * Copyright (c) 2021 sylvester ezenwata
 * https://github.com/sylezenwata/set.git
 * - Inspired by https://github.com/WebDevSimplified/jquery-clone.git
 */

"use strict";

/**
 * @name ElementCollection
 * comprises of function bounded to the Array constructor as prototypes
 */
class ElementCollection extends Array {
	/**
	 * function to execute an ction when document is ready
	 * @param {Function} cb
	 * @returns {Array}
	 */
	ready(cb) {
		const isReady = this.some((e) => {
			return e.readyState != null && e.readyState != "loading";
		});
		if (isReady) {
			cb();
		} else {
			this.on("DOMContentLoaded", cb);
		}
		return this;
	}

	/**
	 * function to bind event listener to an element
	 * @param {String} event
	 * @param {String|Function} cbOrSelector
	 * @param {Function} cb
	 * @param {Object} option
	 * @returns {Array}
	 */
	on(event, cbOrSelector, cb, option) {
		if (typeof cbOrSelector === "function") {
			this.forEach((e) => e.addEventListener(event, cbOrSelector, option));
		} else {
			this.forEach((elem) => {
				elem.addEventListener(
					event,
					(e) => {
						if (e.target.matches(cbOrSelector)) cb(e);
					},
					option
				);
			});
		}
		return this;
	}

	/**
	 * function to remove bounded event from an element
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Object} option
	 * @returns {Array}
	 */
	off(event, cb, option) {
		if (typeof cb === "function") {
			this.forEach((e) => e.removeEventListener(event, cb, option));
		}
		return this;
	}

	/**
	 * function to get next element of a targeted element in dom tree
	 * @returns {Array}
	 */
	next() {
		return this.map((e) => e.nextElementSibling).filter((e) => e != null);
	}

	/**
	 * function to get previous element of a targeted element in dom tree
	 * @returns {Array}
	 */
	prev() {
		return this.map((e) => e.previousElementSibling).filter((e) => e != null);
	}

	/**
	 * function to get targeted element parent
	 * @returns {Array}
	 */
	parent(selector) {
		if (selector) {
			return this.map((e) => {
				if (
					document.querySelector(selector) &&
					document.querySelector(selector).querySelector(e.nodeName)
				) {
					let parent = e.parentElement;
					while (!parent.matches(selector)) {
						parent = parent.parentElement;
					}
					return parent;
				}
				return null;
			}).filter((e) => e != null);
		}
		return this.map((e) => e.parentElement).filter((e) => e != null);
	}

	/**
	 * function to get sibling of a targeted element
	 * this can be apllied in a case when one is not certain if sibling is prev or next element,
	 * or its position within it's parent dom tree
	 * @param {String} siblingSelector
	 * @returns {Array}
	 */
	sibling(siblingSelector) {
		return this.map((e) => [
			...e.parentElement.querySelector(siblingSelector),
		]).filter((e) => e.length > 0);
	}

	/**
	 * function to query elements
	 * @param {String} selector
	 * @returns {Array}
	 */
	find(selector) {
		return this.map((e) => [...e.querySelectorAll(selector)]).filter(
			(e) => e.length > 0
		);
	}

	/**
	 * function to toggle class list
	 * @param {String} className 
	 * @param {Boolean|Undefined} force 
	 * @returns {Array}
	 */
	toggleClass(className, force) {
		this.forEach(e => e.classList.toggle(className, force));
		return this;
	}

	/**
	 * function to remove a class from element
	 * @param {String} className
	 * @returns {Array}
	 */
	removeClass(...classNames) {
		this.forEach((e) => e.classList.remove(...classNames));
		return this;
	}

	/**
	 * function to add a class from element
	 * @param {String} className
	 * @returns {Array}
	 */
	addClass(...classNames) {
		this.forEach((e) => e.classList.add(...classNames));
		return this;
	}

	/**
	 * function to add or remove a style prop and value
	 * @param {String} property
	 * @param {String} value
	 * @returns {Array}
	 */
	css(property, value) {
		const camelProp = property.replace(/(-[a-z])/, (g) => {
			return g.replace("-", "").toUpperCase();
		});
		this.forEach((e) => (e.style[camelProp] = value));
		return this;
	}

	/**
	 * function to add, remove and get attribute
	 * @param {String} attr
	 * @param {String|Boolean} attrValue
	 * @returns {Array}
	 */
	attr(attr, attrValue = null) {
		if (!attrValue && typeof attrValue !== "string") {
			return this.map((e) => e.getAttribute(attr)).filter((e) => e != null);
		}
		if (attrValue === false) {
			this.forEach((e) => e.removeAttribute(attr));
		} else {
			this.forEach((e) => e.setAttribute(attr, attrValue));
		}
		return this;
	}

	/**
	 * function to get or add data attribute
	 * @param {String} name
	 * @param {String} value
	 * @returns {Array}
	 */
	data(name, value) {
		try {
			const {
				groups: { dataname },
			} = /^(data)?(-)?(?<dataname>.+)$/.exec(name);
			name = name
				.split("-")
				.map((e, i) => (i > 0 ? e.slice(0, 1).toUpperCase() + e.slice(1) : e))
				.join("");
		} catch (error) {
			if (error.name.toLowerCase() === "typeerror") {
				console.error("you did not pass a valid data name");
			}
			console.error(error);
			return this;
		}
		if (!value && typeof value !== "string") {
			return this.map((e) => e.dataset[name]).filter((e) => e != null);
		}
		this.forEach((e) => (e.dataset[name] = value));
		return this;
	}

	/**
	 * function to add, remove or get innerHTML content
	 * @param {*} data
	 * @returns {Array}
	 */
	html(data) {
		if (data === null) {
			return this.map((e) => e.innerHTML).filter((e) => e != null);
		}
		this.forEach((e) => (e.innerHTML = data));
		return this;
	}

	/**
	 * function to add, remove or get textContent content
	 * @param {*} data
	 * @returns {Array}
	 */
	text(data) {
		if (data === null) {
			return this.map((e) => e.textContent).filter((e) => e != null);
		}
		this.forEach((e) => (e.textContent = data));
		return this;
	}

	/**
	 * function to create a new node when appending or prepending string node
	 * @param {Node} node
	 * @returns {Node}
	 */
	elemManip(node) {
		// match and get first element and it properties (class, attributes)
		let elem = node
			.match(/<[^>]*>/g)[0]
			.replace(/</, "")
			.replace(/>/, "");

		// get tag name
		let elemTag = elem.split(" ")[0];
		elem = elem.match(/(\s+[a-zA-Z0-9-]+="[a-zA-Z0-9-_:\(\)\/\s;]+")|(\s+[a-zA-Z0-9-]+)/g);
		if (elem) {
			elem = elem.map((e) => e.trim());
		}

		// update passed node by removing first tag
		node = node.replace(/<[^>]*>/, "").replace(/<\/[^>]*>$/, "");

		// create tag
		let newNode = document.createElement(elemTag);

		// set properties to newNode
		if (elem) {
			elem.forEach((e) => {
				let [name, value = ''] = e.replace(/\"/g, "").split("=");
				newNode.setAttribute(name, value);
			});
		}

		// set node in newNode
		newNode.innerHTML = node;

		return newNode;
	}

	/**
	 * function to append string node
	 * @param {String} node
	 * @returns {Array}
	 */
	append(node) {
		this.forEach((e) =>
			e.insertAdjacentElement("beforeend", this.elemManip.call(this, node))
		);
		return this;
	}

	/**
	 * function to prepend string node
	 * @param {String} node
	 * @returns {Array}
	 */
	prepend(node) {
		this.forEach((e) =>
			e.insertAdjacentElement("afterbegin", this.elemManip.call(this, node))
		);
		return this;
	}

	/**
	 * function to disable or enable a form
	 * @param {Boolean} enable
	 * @returns {Array}
	 */
	disableForm(enable = false) {
		this.forEach((form) => {
			if (form.elements && form.elements.length > 0) {
				[...form.elements].forEach((eachElement) => {
					eachElement.disabled = enable ? false : true;
				});
			}
		});
		return this;
	}

	remove(selector) {
		this.forEach((e) => {
			e.querySelectorAll(selector).forEach((i) => i && i.remove());
		});
		return this;
	}
}

/**
 * set function constructor
 * @param {String|NodeList|Array} param
 * @returns {Array}
 */
function set(param) {
	if (typeof param === "string" || param instanceof String) {
		return new ElementCollection(...document.querySelectorAll(param));
	} else {
		return new ElementCollection(param);
	}
}

/**
 * function to calc device width
 * @returns {number}
 */
set.checkDeviceWidth = function () {
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
set.deviceType = function () {
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
set.browserType = function () {
	if (
		(navigator.userAgent.indexOf("Opera") ||
			navigator.userAgent.indexOf("OPR")) !== -1
	) {
		return "Opera";
	} else if (navigator.userAgent.indexOf("Chrome") !== -1) {
		return "Chrome";
	} else if (navigator.userAgent.indexOf("Safari") !== -1) {
		return "Safari";
	} else if (navigator.userAgent.indexOf("Firefox") !== -1) {
		return "Firefox";
	} else if (
		navigator.userAgent.indexOf("MSIE") !== -1 ||
		!!document.documentMode === true
	) {
		return "IE";
	} else {
		return "unknown";
	}
};

/**
 * function to set a cookie
 * @param cName
 * @param cValue
 * @param expDays
 * @param path
 */
set.setCookie = function (cName, cValue, expDays = 30, path = "/") {
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
set.getCookie = function (cName) {
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
set.updateCookie = function (cName, cValue) {
	if (this.gCookie(cName)) document.cookie = cName + "=" + cValue;
};

/**
 * function to perform xml http request
 * @param {Object} param0
 * @returns {Function}
 */
set.ajax = function ({
	url,
	method,
	timeOut,
	cache = true,
	body = null,
	headers = null,
	responseType = null,
	withCredentials = true,
}) {
	return new Promise(function (resolve, reject) {
		// defining XMLHttpRequest
		const xhr = new XMLHttpRequest();

		// validate withCredentials
		if (withCredentials) {
			xhr.withCredentials = true;
		}

		// open request
		xhr.open(
			method,
			!cache
				? url +
						(/\?/.test(url) ? "&" : "?") +
						"_" +
						Math.floor(Math.random() * 10e11)
				: url
		);
		// set request header(s)
		headers = Object.assign(
			{
				"X-Requested-With": "XMLHttpRequest",
				Accept: "application/json; charset=UTF-8",
			},
			headers
		);
		let headersKeys = Object.keys(headers);
		for (let eachKey of headersKeys) {
			if (!headers[eachKey]) {
				continue;
			}
			xhr.setRequestHeader(eachKey, headers[eachKey]);
		}

		// set response type
		if (responseType) {
			xhr.responseType = responseType;
		}

		// set timeout
		if (timeOut) {
			xhr.timeout = timeOut * 1000;
		}

		// capture when request is completed
		xhr.onload = function () {
			let { status, statusText, response } = xhr;
			if (status >= 200 && status < 300) {
				resolve(response);
			} else {
				reject({
					code: status,
					message: statusText,
				});
			}
		};

		// capture when request fails due to error
		xhr.onerror = function () {
			let { status, statusText } = xhr;
			reject({
				code: status,
				message: statusText,
			});
		};

		// send request
		xhr.send(
			body
				? /application\/json/.test(headers["Content-Type"])
					? JSON.stringify(body)
					: body
				: null
		);
	});
};

export { set };
