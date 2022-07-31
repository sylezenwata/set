const $ = set.set;

// $(document).ready(() => {
//   $("body").prepend(`<button>Load data</button>`);
//   let ex = () => {
// 		$("div").html("Fetching data...");
// 		$.ajax({
// 			url: "https://jsonplaceholder.typicode.com/todos/1",
// 			method: "GET",
// 			headers: {
// 				Accept: false,
// 			},
// 			// responseType: 'json'
// 		})
// 			.then((res) => $("div").text(res))
// 			.catch((e) => console.log(e))
// 			.finally(() => {
// 				$("button").data('clicked', true);
// 			});
// 	};
// 	$(document).on("click", 'button:not([data-clicked=true])', ex);
// 	$('body').toggleClass('class-test');
// });

console.log($("[data-test]").data("data-test"));
console.log($("[data-test]").html(null));
