"use strict";

var serviceApp = angular.module("service",[]);

serviceApp.factory('hello',function(){
    var sayHello = function(){
        alert("hello world");
    };
    return {sayHello : sayHello}
});