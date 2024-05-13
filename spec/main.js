/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
	describe("sayMyName", () => {
		it("should display the full name in an alert", () => {
			const user = new User({ firstName: "John", lastName: "Doe" });
			spyOn(window, "alert");
			user.sayMyName();
			expect(window.alert).toHaveBeenCalledWith("John Doe");
		});
	});
});
