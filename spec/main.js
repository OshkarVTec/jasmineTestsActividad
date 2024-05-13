/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
	let model;
	describe("default values", () => {
		beforeAll(() => {
			model = new User();
		});

		it("first name defaults to empty", () => {
			// assert
			expect(model.firstName).toBe("");
		});

		it("last name defaults to empty", () => {
			// assert
			expect(model.firstName).toBe("");
		});

		it("middle name defaults to empty", () => {
			// assert
			expect(model.middleName).toBe("");
		});
	});

	describe("full name", () => {
		beforeAll(() => {
			model = new User({ firstName: "Dylan", lastName: "Israel" });
		});

		it("returns full name with middle name", () => {
			model.middleName = "James";

			response = model.fullName;

			expect(response).toBe("Dylan J. Israel");
		});

		it("returns full name without middle name", () => {
			model.middleName = "";

			response = model.fullName;

			expect(response).toBe("Dylan Israel");
		});
	});
});
