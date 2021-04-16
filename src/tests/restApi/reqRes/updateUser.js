const Actions = require("../../../api/axios")

describe('put api test', () => {
    const API_ACTIONS = new Actions();

    beforeAll(() => {
        API_ACTIONS.requestOptions.baseURL = "https://reqres.in/api";
    });

    it('should update a user', async () => {
        const users = "/users/2";
        const ourNewUser = {
            first_name: "QA",
            last_name: "Update"
        }
        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.PUT, users, { bodyData: ourNewUser }).then(response => {
            expect(response.status).toBe(200);
            expect(Object.keys(response.data)).toContain("updatedAt");
        });
    });
});