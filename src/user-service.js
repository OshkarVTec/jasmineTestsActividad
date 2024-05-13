class userService {
	getUserById(id) {
		return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	}
}
