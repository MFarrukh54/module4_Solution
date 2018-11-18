(function(){

    angular.module('DataModule')
    .component('itemsComponent',{
       templateUrl:"src/MenuApp/Templates/items.template.html",
       binding:{
           items:"<"
       }
    });
})();