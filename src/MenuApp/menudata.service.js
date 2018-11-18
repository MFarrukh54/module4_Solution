(function(){
    'use strict'

    angular.module('DataModule')
    .service('MenuDataService',MenuDataService)
    .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/");

    MenuDataService.$inject=['$http','ApiBasePath'];
     function MenuDataService($http,ApiBasePath){
        var service=this;
        
        service.getAllCategories=function(){
           var response=$http({
               method:'get',
               url:(ApiBasePath+"categories.json")
           });
           return response;
        }

        service.getItemsForCategory=function(categoryShortName){
            // console.log("selceindex",categoryShortName);
            var response=$http({
                method:'get',
                url:(ApiBasePath+"menu_items.json"),
                params:{
                    category:categoryShortName
                }
            });
            return response;
        };

     }
    })();