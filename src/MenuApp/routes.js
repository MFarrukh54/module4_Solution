(function(){
    'use strict'
        angular.module("MenuAppModule")
        .config(RoutesConfig);

        RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
        function RoutesConfig($stateProvider,$urlRouterProvider){

             $urlRouterProvider.otherwise('/home');

             $stateProvider
             .state('home',{
                 url:'/home',
                 templateUrl:'src/MenuApp/Templates/home.template.html'
             });
            $stateProvider
            .state('categories',{
                url:'/categories',
          templateUrl:'src/MenuApp/Templates/categoriesList.html',
              controller:"CategoriesController as ctrl",
            
              resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                  return MenuDataService.getAllCategories();
                }]
                }
            });
            $stateProvider
            .state('itemDetail', {
                url: '/item-detail/{itemId}',
                templateUrl: 'src/MenuApp/Templates/itemList.html',
              controller: 'itemDetailController as ctrl',
                resolve: {
                    item: ['MenuDataService','$stateParams',
                     function (MenuDataService,$stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.itemId);
                      }]
                }
              });
           
        }
    })();