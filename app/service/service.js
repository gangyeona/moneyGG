"use strict";

var serviceApp = angular.module("service",[]);

serviceApp.factory('hello',function(){
    var sayHello = function(){
        alert("hello world");
    };
    return {sayHello : sayHello}
});

serviceApp.factory('userService',function(){
    var current_user;
    var setCurrentUser = function(user){
        current_user = user;
    };
    var getCurrentUser = function(){
        return current_user;
    };
    return{
        setCurrentUser : setCurrentUser,
        getCurrentUser : getCurrentUser
    };
});
serviceApp.factory('githubService',function($http){
    var githubUrl = 'https://api.github.com';

    var runUserRequest = function(username,path){
        return $http({
            method:'JSON',
            url:githubUrl + '/users/' + username + '/' + path +'?callback-JSON_CALLBACK'
        });
    };
    return {
        events : function(username){
            return runUserRequest(username,'event');
        }
    };
});