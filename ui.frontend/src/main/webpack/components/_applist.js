$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:8080/getApps",
        data: "",
        dataType: "json",
        success: function (response) {
            console.log('hello');
            console.log(response);
        }
    });    
});