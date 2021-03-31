const API_ACTIONS = require("../../../api/axios")
const options = require("../../../api/config")

describe('QA Guilde Api', () => {
    let companiesLength, ourCompanyId;

    beforeAll(() => {
        options.baseURL = "http://localhost:8080/api";
    });

    it('should get all companies', async () => {
        const companies = "/companies";

        await API_ACTIONS.get(companies).then(response => {
            const serverCompanies = response.data;
            serverCompanies.forEach(company => {
                expect(company.name).not.toBe(undefined);
                expect(company.id).not.toBe(undefined);
                expect(company.foundation).not.toBe(undefined);
            });
            expect(response.status).toBe(200);
            expect(serverCompanies.length).toBeGreaterThan(0);

            companiesLength = serverCompanies.length;
        });
    });

    it('should create new company', async () => {
        const companies = "/companies";
        const newCompany = {
            name: "myNewCompany",
            foundation: 2021
        }

        await API_ACTIONS.post(companies, newCompany).then(response => {
            expect(response.status).toBe(200);
            expect(response.data).toEqual(jasmine.objectContaining(newCompany));
            ourCompanyId = response.data.id;
        });
    });

    it('should get all companies again', async () => {
        const companies = "/companies";

        await API_ACTIONS.get(companies).then(response => {
            expect(response.status).toBe(200);
            expect(response.data.length).toBe(companiesLength + 1);
        });
    });

    it('should get the requested company', async () => {
        const ourCompany = `/companies/${ourCompanyId}`;

        await API_ACTIONS.get(ourCompany).then(response => {
            expect(response.status).toBe(200);
            expect(response.data.name).not.toBe(undefined);
            expect(response.data.id).not.toBe(undefined);
            expect(response.data.foundation).not.toBe(undefined);
        });
    });

    xit('should update requested company', async () => {
        const ourCompany = `/companies/${ourCompanyId}`;
        const companyUpdate = {
            name: "updateCompany"
        }

        await API_ACTIONS.patch(ourCompany, companyUpdate).then(response => {
            expect(response.status).toBe(200);
            expect(response.data).toEqual(jasmine.objectContaining(companyUpdate));
            expect(response.data.id).toBe(ourCompanyId);
        });
    });

    it('should delete the requested company', async () => {
        const ourCompany = `/companies/${ourCompanyId}`;

        await API_ACTIONS.delete(ourCompany).then(response => {
            expect(response.status).toBe(200);
            expect(response.data.id).toBe(ourCompanyId);
        });
    });

    it('should not find the requested company', async () => {
        const ourCompany = `/companies/${ourCompanyId}`;

        await API_ACTIONS.get(ourCompany).then(response => {
            expect(response.status).toBe(404);
        });
    });

});