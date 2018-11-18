(function(){
    'use strict';
    angular.module('DataModule')
    .controller('itemDetailController',itemDetailController);
    
    itemDetailController.$inject=['items'];
    
    function itemDetailController(items){
           console.log("work",items);
    var itemDetails=this;
        // console.log(items.data[0].name,"DSFSF");
        itemDetails.item=items;
    }
    
    })();