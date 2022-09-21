import set from "../src/index.js";

set(document).ready(() => {
	set("body").prepend(`<button>Load data</button>`);
	const req = () => {
		set("[data-test]").text("Fetching data...");
		set
			.ajax({
				url: "https://jsonplaceholder.typicode.com/todos/2",
				method: "GET",
				headers: {
					Accept: false,
				},
				responseType: "json",
				withCredentials: false,
			})
			.then((res) => {
				set("button").data("clicked", true);
				console.log(res);
				set("[data-test]").text(JSON.stringify(res));
			})
			.catch((err) => {
				console.log(err);
				set("[data-test]").text(err.response?.message || err.message || "An error occurred");
			});
	};
	set(document).on("click", "button:not([data-clicked=true])", req);
});
