const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('api negative tests', () => {
    beforeAll(() => {
        options.baseURL = "https://reqres.in/api";
    });

    it('should fail with Missing Password', async () => {
        const registeration = "/register";
        const registerationData = {
            email: "QA_Negative_Test@gmail.com"
        }
        await API_ACTIONS.post(registeration, registerationData).then(res => {
            expect(res.status).toBe(400);
            expect(res.data.error).toEqual("Missing password");
        });
    });

    xit('should ', async () => {

    })

    xit('should ', async () => {

    })

});