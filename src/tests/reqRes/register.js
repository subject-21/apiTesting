const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('post api test - register', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should register to system', async () => {
        const registeration = "/register";
        const registerationData = {
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        await API_ACTIONS.post(registeration, registerationData).then(response => {
            expect(response.status).toBe(200);
            expect(Object.keys(response.data)).toContain("id");
        });
    });

    it('should fail with Missing email', async () => {
        const registeration = "/register";
        const registerationData = {
            password: "Aa1-6"
        }
        await API_ACTIONS.post(registeration, registerationData).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing email or username");
        });
    });

    it('should fail with Missing Password', async () => {
        const registeration = "/register";
        const registerationData = {
            email: "QA_Negative_Test@gmail.com"
        }
        await API_ACTIONS.post(registeration, registerationData).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing password");
        });
    });
});