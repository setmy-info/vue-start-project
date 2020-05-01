axios.interceptors.request.use(function (config) {
    console.log("Interceptor request!");
    jsdi.get().dataLoadingSpinnerService.start();
    return config;
}, function (error) {
    jsdi.get().dataLoadingSpinnerService.end();
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log("Interceptor response!");
    jsdi.get().dataLoadingSpinnerService.end();
    return response;
}, function (error) {
    jsdi.get().dataLoadingSpinnerService.end();
    return Promise.reject(error);
});
