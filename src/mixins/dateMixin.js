export default {
	methods: {
		parseDate(date) {
			let dateBefore = date.split(".");
			let now = new Date(dateBefore[0]);
			let minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
			let seconds = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
			let time = `${now.getHours()}:${minutes}:${seconds}`;
			let parsed = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`;
			return `${parsed}-${time}`;
		},
		removeTZone(date) {
			let dateBefore = date.split(".");
			return dateBefore[0];
		}
	}
};