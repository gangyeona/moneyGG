'use strict';

var app = angular.module('recordCtrl',[]);

app.controller('recordCtrl',['$scope','$http','$q','githubService',
  function($scope,$http,$q,githubService){
    //初始化记录数据
    $http.get("json/records.json").success(function(res){
      $scope.records = res.records;
    }).error(function(error){

    });
    //服务测试
    $scope.events = githubService.events('auser');
    $scope.$watch('username',function(newUsername){
      githubService.events(newUsername).success(function(data,status,headers){
        $scope.events = data;
      });
    });
    //初始化排序字段
    $scope.col = "date";
    $scope.desc = 0;
  }]);
