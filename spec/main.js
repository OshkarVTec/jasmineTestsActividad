/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
	it("exists", () => {
		expect(User).toBeDefined();
	});

	let model;

	beforeEach(() => {
		model = new User({});
	});

	describe("additional matchers examples", () => {
		it("get full name pieces", () => {
			const firstName = "John";
			const middleName = "Doe";
			const lastName = "Smith";

			model = new User({ firstName, middleName, lastName });

			expect(model.fullNamePieces).toEqual([firstName, middleName, lastName]);
		});
	});
});
