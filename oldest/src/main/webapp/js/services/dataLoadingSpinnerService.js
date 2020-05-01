
jsdi.service("dataLoadingSpinnerService", function () {

    var dataLoadingSpinnerService = {
        init: function () {
            console.log("Init dataLoadingSpinnerService");
        },
        spinnerData: {
            counter: 0,
            isLoading: false
        }
    };

    dataLoadingSpinnerService.start = function () {//getService('dataLoadingSpinnerService').start();
        this.spinnerData.counter++;
        this.spinnerData.isLoading = true;
        console.log("Spinner ON", this.spinnerData.counter);
    };

    dataLoadingSpinnerService.end = function () {//getService('dataLoadingSpinnerService').end();
        if (this.spinnerData.counter > 0) {
            this.spinnerData.counter--;
        }
        if (this.spinnerData.counter === 0) {
            this.spinnerData.isLoading = false;
        }
        console.log("Spinner END", this.spinnerData.counter);
    };

    return dataLoadingSpinnerService;
});
