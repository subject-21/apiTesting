const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('put api test', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should update a user', async () => {
        const component = "/users/2";
        const ourNewUser = {
            first_name: "QA",
            last_name: "Update"
        }
        await API_ACTIONS.put(component, ourNewUser).then(res => {
            expect(res.status).toBe(200);
            expect(Object.keys(res.data)).toContain("updatedAt");
        });
    });
});