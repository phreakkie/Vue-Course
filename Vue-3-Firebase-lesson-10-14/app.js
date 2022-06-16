const app = Vue.createApp({
	data() {
		return {
			url: "https://www.thenetninja.co.uk",
			showBooks: true,
			books: [
				{ title: "name of the wind", author: "patrick rothfuss", img: "assets/1.jpg", isFav: true },
				{ title: "the way of kings", author: "brandon sanderson", img: "assets/2.jpg", isFav: false },
				{ title: "the final empire", author: "brandon sanderson", img: "assets/3.jpg", isFav: true },
			],
			// x: 0,
			// y: 0,
		};
	},
	methods: {
		toggleShowBooks() {
			this.showBooks = !this.showBooks;
		},
		// handleEvent(e, data) {
		// 	console.log(e, e.type);
		// 	if (data) {
		// 		console.log(data);
		// 	}
		// },
		// handleMousemove(e) {
		// 	this.x = e.offsetX;
		// 	this.y = e.offsetY;
		// },
	},
});

app.mount("#app");
