/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
	it("exists", () => {
		expect(User).toBeDefined();
	});

	let model;

	beforeEach(() => {
		model = new User();
	});
});
