
let jsonobj;
$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:8080/getApps",
        data: "",
        dataType: "json",
        success: function (response) {
            console.log('hello');
            jsonobj = response;
            console.log(jsonobj);
            console.log(jsonobj.categories);
            $(".categories").append("<p class='category'>all</p>");
            jsonobj.categories.forEach(element => {
                $(".categories").append("<p class='category'>"+element+"</p>");
            });
        }
    });
        
});