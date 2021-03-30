const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('post api test', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should post a new user', async () => {
        const component = "/users";
        const ourNewUser = {
            first_name: "QA",
            last_name: "Developer",
            email: "QA_guilde@gmail.com"

        }
        await API_ACTIONS.post(component, ourNewUser).then(res => {
            expect(res.status).toBe(201);
            expect(Object.keys(res.data)).toContain("id");
            console.log(res.data);
        });
    });
});