
let jsonobj;
let currentCategory;
let currentCategoryApps = [];
let categories;
let apps;
let appscount;
let showNumber = 5;
let currentCategoryCount;
let pagecount;
let showPageNumber = 10;
let currentPage;
$(document).ready(function () {

    currentCategory = '.all';

    $.ajax({
        type: "get",
        url: "http://localhost:8080/getApps",
        data: "",
        dataType: "json",
        success: function (response) {
            console.log('ajax success');

            jsonobj = response;

            console.log(jsonobj);

            categories = jsonobj.categories;
            apps = jsonobj.apps;
            
            appscount = jsonobj.appscount;

            console.log(categories);
            console.log(apps);
            console.log(appscount);

            $(".categories").append("<li class='category all'>all</li>");
            jsonobj.categories.forEach(element => {
                $(".categories").append("<li class='category'>"+element+"</li>");
            });
            
            $(currentCategory).append();
            
        }
    });
    

    $(".categories").on("click", "li", function(){
        currentCategory = this.innerText;
        clearAppsList();
        $(".pagerItem").remove();
        $(".previousPage").remove();
        $(".nextPage").remove();
        showApps(currentCategory);
    })

    $(".pager").on("click",".previousPage",function(){
        $(".pagerItem").remove();
        $(".previousPage").remove();
        $(".nextPage").remove();
        console.log('debug : ' + parseInt(parseInt(currentPage-1)/showPageNumber));
        currentPage = ((parseInt(parseInt(currentPage-1)/showPageNumber)-1)*showPageNumber+1);
        console.log(currentPage);
        console.log(showPageNumber);
        clearAppsList();

        for (let i = (currentPage-1)*showNumber; i < (currentPage)*showNumber; i++) {
            if(i==currentCategoryCount){
                break;
            }
            $(".applistContainer").append("<li class='listContent'>"+currentCategoryApps[i][0]+"<p hidden class='description'>"+currentCategoryApps[i][1]+"</p></li>");
        }


        if(currentPage>showPageNumber){
            $(".pager").append("<li class='previousPage'>prev</li>");
        }

        for (let i = currentPage; i < currentPage+showPageNumber; i++){
            if(i==pagecount){
                if(i === currentPage){
                    $(".pager").append("<li class='pagerItem currentPage'>"+(i)+"</li>");
                }else{      
                    $(".pager").append("<li class='pagerItem'>"+(i)+"</li>");
                }
                break;
            }
            if(i === currentPage){
                $(".pager").append("<li class='pagerItem currentPage'>"+(i)+"</li>");
            }else{
                $(".pager").append("<li class='pagerItem'>"+(i)+"</li>");
            }
        }

        if(showPageNumber*(parseInt(currentPage/showPageNumber)+1) < pagecount){
            $(".pager").append("<li class='nextPage'>next</li>");
        }
    })

    $(".pager").on("click",".nextPage",function(){
        $(".pagerItem").remove();
        $(".previousPage").remove();
        $(".nextPage").remove();
        console.log('debug : ' + parseInt(parseInt(currentPage-1)/showPageNumber));
        currentPage = ((parseInt(parseInt(currentPage-1)/showPageNumber)+1)*showPageNumber+1);
        console.log(currentPage);
        console.log(showPageNumber);
        clearAppsList();

        for (let i = (currentPage-1)*showNumber; i < (currentPage)*showNumber; i++) {
            if(i==currentCategoryCount){
                break;
            }
            $(".applistContainer").append("<li class='listContent'>"+currentCategoryApps[i][0]+"<p hidden class='description'>"+currentCategoryApps[i][1]+"</p></li>");
        }


        if(currentPage>showPageNumber){
            $(".pager").append("<li class='previousPage'>prev</li>");
        }

        for (let i = currentPage; i < currentPage+showPageNumber; i++){
            if(i==pagecount){
                if(i === currentPage){
                    $(".pager").append("<li class='pagerItem currentPage'>"+(i)+"</li>");
                }else{      
                    $(".pager").append("<li class='pagerItem'>"+(i)+"</li>");
                }
                break;
            }
            if(i === currentPage){
                $(".pager").append("<li class='pagerItem currentPage'>"+(i)+"</li>");
            }else{
                $(".pager").append("<li class='pagerItem'>"+(i)+"</li>");
            }
        }

        if(showPageNumber*(parseInt(currentPage/showPageNumber)+1) < pagecount){
            $(".pager").append("<li class='nextPage'>next</li>");
        }
    })

    $(".applistContainer").on("click","li",function(){
        console.log(this);
        alert($(this).find('.description').text());
    })

    $(".pager").on("click",".pagerItem",function(){
        $(".pager").find('.currentPage').removeClass('currentPage');
        $(this).addClass('currentPage');
        currentPage = this.innerText;
        console.log(currentPage);
        clearAppsList();

        for (let i = (currentPage-1)*showNumber; i < (currentPage)*showNumber; i++) {
            $(".applistContainer").append("<li class='listContent'>"+currentCategoryApps[i][0]+"<p hidden class='description'>"+currentCategoryApps[i][1]+"</p></li>");
        }
    
    })

    function showApps(category){
        currentCategoryCount = 0;
        currentCategoryApps = [];
        currentPage = 1;
        console.log(category);
        apps.forEach(element => {
            if(element.category === category){
                currentCategoryCount++;
                let innerApp = [element.appName, element.description];
                currentCategoryApps.push(innerApp);
            }
        });
        if(currentCategoryCount%showNumber === 0){
            pagecount = parseInt(currentCategoryCount/showNumber);
        }else{
            pagecount = parseInt(currentCategoryCount/showNumber)+1;
        }

        for (let i = 0; i < showPageNumber; i++){
            if(i+1 === currentPage){
                $(".pager").append("<li class='pagerItem currentPage'>"+(i+1)+"</li>");
            }else{
                $(".pager").append("<li class='pagerItem'>"+(i+1)+"</li>");
            }
        }

        if((parseInt(currentPage/showPageNumber)+1)*showPageNumber<pagecount){
            $(".pager").append("<li class='nextPage'>next</li>");
        }

        for (let i = (currentPage-1)*showNumber; i < (currentPage)*showNumber; i++) {
            
            $(".applistContainer").append("<li class='listContent'>"+currentCategoryApps[i][0]+"<p hidden class='description'>"+currentCategoryApps[i][1]+"</p></li>");
        }

        console.log(pagecount);
        console.log(currentCategoryApps);
        


        // $(".applistContainer").append("<li class='listContent'>"+element.appName+"<p hidden class='description'>"+element.description+"</p></li>");
        
    }

    function clearAppsList(){
        console.log('clear');
        $(".listContent").remove();
    }
        
});