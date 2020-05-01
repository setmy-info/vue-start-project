axios.interceptors.request.use(function (config) {
    console.log("Interceptor request!");
    jsdi.services.dataLoadingSpinnerService.start();
    return config;
}, function (error) {
    jsdi.services.dataLoadingSpinnerService.end();
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log("Interceptor response!");
    jsdi.services.dataLoadingSpinnerService.end();
    return response;
}, function (error) {
    jsdi.services.dataLoadingSpinnerService.end();
    return Promise.reject(error);
});
