const Actions = require("../../../api/axios")

describe('api negative tests', () => {
    const API_ACTIONS = new Actions();

    beforeAll(() => {
        API_ACTIONS.requestOptions.baseURL = "https://reqres.in/api";
    });

    it('should fail registeration with Missing email', async () => {
        const registeration = "/register";
        const registerationData = {
            password: "1234"
        }
        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.POST, registeration, { bodyData: registerationData }).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing email or username");
        });
    });

    it('should fail registeration with Missing Password', async () => {
        const registeration = "/register";
        const registerationData = {
            email: "QA_Negative_Test@gmail.com"
        }
        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.POST, registeration, { bodyData: registerationData }).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing password");
        });
    });

    it('should fail login with missing email', async () => {
        const login = "/login";
        const userInfo = {
            password: "PASSWORD_NOT_STRONG_ENOUGH"
        }

        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.POST, login, { bodyData: userInfo }).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing email or username");
        });
    });

    it('should fail login with missing password', async () => {
        const login = "/login";
        const userInfo = {
            email: "iLoveMcDonalds@gmail.com"
        }

        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.POST, login, { bodyData: userInfo }).then(response => {
            expect(response.status).toBe(400);
            expect(response.data.error).toEqual("Missing password");
        });
    });
});