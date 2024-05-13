/**
 * Test Suite
 */
describe(`${User.name} Class`, () => {
	let model;
	let mockedService;
	beforeEach(() => {
		mockedService = {
			lastId: null,
			user: {},
			getUserById(id) {
				this.lastId = id;
				return this.user;
			},
		};
		const data = {
			firstName: "John",
			middleName: "Emilio",
			lastName: "Doe",
			id: 1,
		};
		model = new User(data, mockedService);
	});

	describe("getMyFullUserData", () => {
		it("gets iser data by id", async () => {
			mockedService.lastId = null;

			const result = await model.getMyFullUserData();

			expect(mockedService.lastId).toBe(1);
		});
	});
});
