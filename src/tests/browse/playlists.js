const API_ACTIONS = require("../../api/axios")
const options = require("../../api/config")

describe('Spotify api test', () => {
    let playlistID = "";
    beforeAll(() => {
        options.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer BQBV5X6AoHMpjZpTtEDKFZqMbmghAeGmA3oKM7xJ-1baf9bBhCU_hKFW4O4JVxknMqG8hPOl9YsnLFQI3thLTPlxnFDzHhAhFLDB7Ejv4ZwarUnFjpu4OqL1_ArKkj4grlgkeHqUu4DQsfnRmBwtnTwxtc1VwW09dLKMyvM"
        }
        options.baseURL = "https://api.spotify.com/v1";
    });

    it('should get all featured playlists', async () => {
        const component = "/browse/featured-playlists";
        const params = {
            country: "IL",
            limit: 1
        }
        await API_ACTIONS.get(component, params).then(res => {
            expect(res.status).toBe(200);
            expect(res.data).not.toBe(undefined);
            playlistID = res.data.playlists.items[0].id;
        });
    });

    it('get playlist cover image', async () => {
        const component = `/playlists/${playlistID}ge/images`;
        await API_ACTIONS.get(component).then(res => {
            expect(res.status).toBe(200);
            expect(res.data.length).toBeGreaterThan(0);
            console.log(res.data[0].url);
        });
    });
});