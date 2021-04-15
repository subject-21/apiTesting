const Actions = require("../../api/axios");

describe('register api test - post', () => {
    const API_ACTIONS = new Actions();

    beforeAll(() => {
        API_ACTIONS.requestOptions.baseURL = "https://reqres.in/api";
    });

    it('should post a new user', async () => {
        const users = "/users";
        const ourNewUser = {
            first_name: "QA",
            last_name: "Developer",
            email: "QA_guilde@gmail.com"

        }
        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.POST, users, { bodyData: ourNewUser }).then(response => {
            expect(response.status).toBe(201);
            expect(Object.keys(response.data)).toContain("id");
            console.log(response.data);
        });
    });
});