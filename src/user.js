class User {
	firstName;
	lastName;
	middleName;
	constructor(data = {}) {
		this.firstName = data.firstName || "";
		this.lastName = data.lastName || "";
		this.middleName = data.middleName || "";
	}

	get fullName() {
		if (this.middleName) {
			let middleInitial = "";
			middleInitial = this.middleName.charAt(0) + ".";
			return `${this.firstName} ${middleInitial} ${this.lastName}`.trim();
		}
		return `${this.firstName} ${this.lastName}`.trim();
	}
}
