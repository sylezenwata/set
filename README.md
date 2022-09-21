# set.js

> set.js is a light-weight basic dom manipulation library.

# Install

As module

```javascript
import set from "set";
```

In the browser

```html
<script type="text/javascript" src="dist/set.min.js"></script>
```

# Usage

Query select dom elements

```javascript
const input = set("input"); // returns array with functions bounded to the Array constructor as prototypes
```

cookies

```javascript
const _cookie = set.setCookie(name, value, expDays, path);
```

ajax request

```javascript
set
	.ajax(objProps)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
```
