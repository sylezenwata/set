// import set from "../src/index.js";

set(document).ready(() => {
	set("body").prepend(`<button>Load data</button>`);
	let ex = () => {
		set("[data-test]").html("Fetching data...");
		set
			.ajax({
				url: "https://jsonplaceholder.typicode.com/todos",
				method: "GET",
				headers: {
					Accept: false,
				},
				// responseType: 'json'
			})
			.then((res) => set("[data-test]").text(res))
			.catch((e) => console.log(e))
			.finally(() => {
				set("button").data("clicked", true);
			});
	};
	set(document).on("click", "button:not([data-clicked=true])", ex);
	set("body").toggleClass("class-test");
});
