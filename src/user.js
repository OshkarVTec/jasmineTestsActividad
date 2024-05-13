class User {
	firstName;
	lastName;
	middleName;
	id;
	userService;

	constructor(data, userService) {
		this.firstName = data.firstName || "";
		this.lastName = data.lastName || "";
		this.middleName = data.middleName || "";
		this.id = data.id;
		this.userService = userService;
	}

	get fullName() {
		if (this.middleName) {
			let middleInitial = "";
			middleInitial = this.middleName.charAt(0) + ".";
			return `${this.firstName} ${middleInitial} ${this.lastName}`.trim();
		}
		return `${this.firstName} ${this.lastName}`.trim();
	}

	async getMyFullUserData() {
		return this.userService.getUserById(this.id);
	}

	sayMyName() {
		window.alert(this.fullName);
	}
}
