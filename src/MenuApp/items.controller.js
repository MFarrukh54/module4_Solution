(function(){
    'use strict';
    angular.module('DataModule')
    .controller('itemDetailController',itemDetailController);
    
    itemDetailController.$inject=['item'];
    
    function itemDetailController(item){
    var $ctrl=this;
        // console.log(items.data[0].name,"DSFSF");
        $ctrl.items=item;
    }
    
    })();