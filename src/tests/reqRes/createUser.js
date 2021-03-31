const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('post api test', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should post a new user', async () => {
        const users = "/users";
        const ourNewUser = {
            first_name: "QA",
            last_name: "Developer",
            email: "QA_guilde@gmail.com"

        }
        await API_ACTIONS.post(users, ourNewUser).then(response => {
            expect(response.status).toBe(201);
            expect(Object.keys(response.data)).toContain("id");
            console.log(response.data);
        });
    });
});