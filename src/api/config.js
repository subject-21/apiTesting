const options = {
    url: '/todos',
    method: 'get',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        Accept: "application/json, text/plain, */*",
    },
    params: null,

    /** @default */
    timeout: 0,

    /** @default */
    withCredentials: false,

    /** 
     * **For Bearer tokens and such, use `Authorization` custom headers instead.** 
     * @example
     * {
     *    username: 'janedoe',
     *    password: 's00pers3cret'
     * }
     * */
    auth: null,

    /**
     *  @type {'arraybuffer'| 'document'| 'json'| 'text'| 'stream'} - *"blob"*: browser only
     *  @default 
     */
    responseType: 'json',

    /**
     * `responseEncoding` indicates encoding to use for decoding responses - Node.js only
     * *NOTE:* Ignored for `responseType` of 'stream' or client-side requests 
     * @default
    */
    responseEncoding: 'utf8',

    /** 
     * `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
     *  @default
     */
    xsrfCookieName: "XSRF-TOKEN",

    /** 
     * `xsrfHeaderName` is the name of the http header that carries the xsrf token value
     *  @default
     */
    xsrfHeaderName: "X-XSRF-TOKEN",

    onUploadProgress: function (progressEvent) {
        /* ...actions can be made with node Progress... */
    },

    //** `onDownloadProgress` allows handling of progress events for downloads - browser only */
    onDownloadProgress: function (progressEvent) {
        /* ...actions can be made with node Progress... */
    },

    /** defines the max size of the http response content in bytes allowed */
    maxContentLength: 200000,

    /** defines the max size of the http request content in bytes allowed */
    maxBodyLength: 200000,

    /**
     * @description
     * defines whether to resolve or reject the promise for a given
     * HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
     * or `undefined`), the promise will be resolved; otherwise, the promise will be rejected.
     * @default  
    */
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },

    /** 
     * defines the maximum number of redirects to follow in node.js.
     * If set to 0, no redirects will be followed
     * @default
    */
    maxRedirects: 5,

    /**
     *  @description
     * defines a UNIX Socket to be used in node.js.
     * Only either `socketPath` or `proxy` can be specified.
     * If both are specified, `socketPath` is used.
     * @example '/var/run/docker.sock' to send requests to the docker daemon.
     * @default
    */
    socketPath: null,

    /**
     * `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
     * and https requests, respectively, in node.js. This allows options to be added like
     * `keepAlive` that are not enabled by default.
     *  @example 
     *  new http.Agent({ keepAlive: true })
     *  new https.Agent({ keepAlive: true })
     */
    httpAgent: null,
    httpsAgent: null,

    /** 
     * @description
     * `proxy` defines the hostname, port, and protocol of the proxy server.
     * You can also define your proxy using the conventional `http_proxy` and
     * `https_proxy` environment variables. If you are using environment variables
     * for your proxy configuration, you can also define a `no_proxy` environment
     * variable as a comma-separated list of domains that should not be proxied.
     * Use `false` to disable proxies, ignoring environment variables.
     * `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
     * supplies credentials.
     * This will set an `Proxy-Authorization` header, overwriting any existing
     * `Proxy-Authorization` custom headers you have set using `headers`.
     * If the proxy server uses HTTPS, then you must set the protocol to `https`. 
     * @example {
     *  protocol: 'https',
     *   host: '127.0.0.1',
     *   port: 9000,
     *   auth: {
     *       username: 'mikeymike',
     *       password: 'rapunz3l'
     *   }
     * }
    */
    proxy: null,

    /** 
     * `cancelToken` specifies a cancel token that can be used to cancel the request 
     *  @example 
     *  new CancelToken(function (cancel) {})
     * */
    cancelToken: null,

    /** 
     * @description 
     * `decompress` indicates whether or not the response body should be decompressed 
     * automatically. If set to `true` will also remove the 'content-encoding' header 
     * from the responses objects of all decompressed responses
     * - Node only (XHR cannot turn off decompression)
     * @default
    */
    decompress: true
}

module.exports = options