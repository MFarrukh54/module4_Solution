(function(){
    'use strict'

    angular.module('DataModule')
    .service('MenuDataService',MenuDataService)
    .constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/");

    MenuDataService.$inject=['$http','ApiBasePath'];
     function MenuDataService($http,ApiBasePath){
        var service=this;
        
        service.getAllCategories=function(){
           var promise=$http({
               method:'get',
               url:(ApiBasePath+"categories.json")
           });
           return promise.then(function (response){
            return response.data;
          });
        }

        service.getItemsForCategory=function(categoryShortName){
            // console.log("selceindex",categoryShortName);
            var promise=$http({
                method:'get',
                url:(ApiBasePath+"menu_items.json"),
                params:{
                    category:categoryShortName
                }
            });
            return promise.then(function (response){
                return response.data;
            });
        };

     }
    })();