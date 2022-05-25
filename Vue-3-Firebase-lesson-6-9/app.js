const app = Vue.createApp({
	//data, functions
	// template: "<h2>I am a template</h2>",
	data() {
		return {
			title: "The Final Emprie",
			author: "Brandon Sanderson",
			age: 45,
		};
	},
	methods: {
		changeTitle(abc) {
			//this.title = "Word of Radiance";
			this.title = abc;
		},
	},
});

app.mount("#app");
