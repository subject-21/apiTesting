const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('put api test', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should update a user', async () => {
        const users = "/users/2";
        const ourNewUser = {
            first_name: "QA",
            last_name: "Update"
        }
        await API_ACTIONS.put(users, ourNewUser).then(response => {
            expect(response.status).toBe(200);
            expect(Object.keys(response.data)).toContain("updatedAt");
        });
    });
});