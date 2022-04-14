
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
const allCategory = 'all';


//drawFunctions
const draw = {

    category : function(element){
        $(".categories").append("<li class='category all'>"+allCategory+"</li>");
        jsonobj.categories.forEach(element => {
            $(".categories").append("<li class='category'>"+element+"</li>");
        })
    },

    applist : function(category){
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

        draw.pagerItems;
        draw.apps();
    },

    pagerItems : function(){
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
    },

    apps : function(){
        for (let i = (currentPage-1)*showNumber; i < (currentPage)*showNumber; i++) {
            if(i==currentCategoryCount){
                break;
            }
            $(".applistContainer").append("<li class='listContent'>"+currentCategoryApps[i][0]+"<p hidden class='description'>"+currentCategoryApps[i][1]+"</p></li>");
        }
    },

    appsAndPagerItems : function(){
        draw.apps();
        draw.pagerItems();
    }

}

//removeFunctions
const remove = {

    pagerItems : function(){
        $(".pagerItem").remove();
        $(".previousPage").remove();
        $(".nextPage").remove();
    },

    applist :  function(){
        $(".listContent").remove();
    },

    all : function(){
        remove.pagerItems();
        remove.applist();
    },

}


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
            categories = jsonobj.categories;
            apps = jsonobj.apps;
            appscount = jsonobj.appscount;
            draw.category(jsonobj);
        }
    });
    

    $(".categories").on("click", "li", function(){
        remove.all();
        currentCategory = this.innerText;
        draw.applist(currentCategory);
        draw.pagerItems();
    })

    $(".pager").on("click",".previousPage",function(){
        currentPage = ((parseInt(parseInt(currentPage-1)/showPageNumber)-1)*showPageNumber+1);
        remove.all();
        draw.appsAndPagerItems();
    })

    $(".pager").on("click",".nextPage",function(){
        currentPage = ((parseInt(parseInt(currentPage-1)/showPageNumber)+1)*showPageNumber+1);
        remove.all();
        draw.appsAndPagerItems();
    })

    $(".applistContainer").on("click","li",function(){
        alert($(this).find('.description').text());
    })

    $(".pager").on("click",".pagerItem",function(){

        $(".pager").find('.currentPage').removeClass('currentPage');
        $(this).addClass('currentPage');
        currentPage = this.innerText;
        remove.applist();
        draw.apps();
    })

        
});