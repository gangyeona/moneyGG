'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ui.router',
    'relaxCtrl',
    'recordCtrl',
    'service'
]);
app.run(function($rootScope){
    $rootScope.logoname="moneyGG";
});
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('index',{
        url:'/',
        templateUrl:'relax/relax.html',
        controller:'relaxCtrl'
      })
      .state('relax',{
          url:'/relax',
          templateUrl:'relax/relax.html',
          controller:'relaxCtrl'
      })
      .state('record',{
        url:'/record',
        templateUrl:'record/record.html',
        controller:'recordCtrl'
      })
      .state('edit',{
          url:'/edit',
          templateUrl:'record/new.html',
          controller:'editCtrl'
      })
  ;
  // $stateProvider.otherwise({redirectTo: '/index'});

}]);
