const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('api negative tests', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should fail registeration with Missing email', async () => {
        const registeration = "/register";
        const registerationData = {
            password: "1234"
        }
        await API_ACTIONS.post(registeration, registerationData).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing email or username");
        });
    });

    it('should fail registeration with Missing Password', async () => {
        const registeration = "/register";
        const registerationData = {
            email: "QA_Negative_Test@gmail.com"
        }
        await API_ACTIONS.post(registeration, registerationData).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing password");
        });
    });

    it('should fail login with missing email', async () => {
        const login = "/login";
        const userInfo = {
            password: "PASSWORD_NOT_STRONG_ENOUGH"
        }

        await API_ACTIONS.post(login, userInfo).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing email or username");
        });
    });

    it('should fail login with missing password', async () => {
        const login = "/login";
        const userInfo = {
            email: "iLoveMcDonalds@gmail.com"
        }

        await API_ACTIONS.post(login, userInfo).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing password");
        });
    });
});