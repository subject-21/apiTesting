const Actions = require("../../api/axios")

describe('Spotify api test', () => {
    const API_ACTIONS = new Actions();
    const token = "Bearer BQBnPUcuxpbUzFY3GakCkzIjtd7mULgeVvwLZ7ko9ZM2yDJlMbKSqK4UPGJzQQ_lUfkhZitEJ21TVmA45EVgucrRXO0B1NA2FIhqBBVx76ft3NMVDMjTlyhPuDkbAfPxZdA4DgKGXIozCNbLE_9FuIG7z71KKzwO2PNGLCc";
    let playlistID = "";

    beforeAll(() => {
        API_ACTIONS.requestOptions.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token
        }
        API_ACTIONS.requestOptions.baseURL = "https://api.spotify.com/v1";
    });

    it('should get all featured playlists', async () => {
        const playlists = "/browse/featured-playlists";
        const params = {
            country: "IL",
            limit: 1
        }
        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.GET, playlists, { params: params }).then(res => {
            expect(res.status).toBe(200);
            expect(res.data).not.toBe(undefined);
            playlistID = res.data.playlists.items[0].id;
        });
    });

    it('get playlist cover image', async () => {
        const playlists = `/playlists/${playlistID}/images`;
        await API_ACTIONS.restApiRequest(API_ACTIONS.methodType.GET, playlists).then(res => {
            expect(res.status).toBe(200);
            expect(res.data.length).toBeGreaterThan(0);
            expect(res.data[0].url).toContain("/image");
            console.log(res.data[0].url);
        });
    });
});