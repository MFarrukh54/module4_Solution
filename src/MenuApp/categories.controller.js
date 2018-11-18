(function(){
'use strict';
angular.module('DataModule')
.controller('CategoriesController',CategoriesController);

CategoriesController.$inject=['items'];

function CategoriesController(items){
    var $ctrl=this;
    $ctrl.list=items;
   
}

})();