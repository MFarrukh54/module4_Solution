(function(){

    angular.module('DataModule')
    .component('categoriesComponent',{
       templateUrl:"src/MenuApp/Templates/categories.template.html",
       bindings: {
        list: '<'
      }
    });
})();