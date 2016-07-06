'use strict';

var app = angular.module('relaxCtrl',[]);

app.controller('relaxCtrl',['$scope','$http','$sce','$q',
    function($scope,$http,$sce,$q){
        var deferred = $q.defer();
        $scope.sce = $sce.trustAsResourceUrl;

        var music = function(){
            var channel_id="";
            $http.get('http://api.jirengu.com/fm/getChannels.php').success(function(response){
                var channels = response.channels;
                var num = Math.floor(Math.random()*channels.length);
                channel_id = channels[num].channel_id;
                deferred.resolve(channel_id);
            }).error(function(error){
                deferred.reject(error);
            });
            deferred.promise.then(function(data){
                $http.get('http://api.jirengu.com/fm/getSong.php?channel='+data).success(function(response){
                    $scope.music = response.song[0];
                });
            },function(error){
                alert("some error");
            });

        };
        $scope.getmusic = function(){
            music();
        };
        music();
    }]);


// function music($http,$scope){
//     var channel_id = getchannel($http);
//     $scope.music = getmusic($http,channel_id);
// }
//
// function getchannel($http){
//     var channel_id="";
//     $http.get('http://api.jirengu.com/fm/getChannels.php').success(function(response){
//         var channels = response.channels;
//         var num = Math.floor(Math.random()*channels.length);
//         channel_id = channels[num].channel_id;
//     });
//     return channel_id;
// }
// function getmusic($http,channel_id){
//     var resource="";
//     var url="";
//     $http.get('http://api.jirengu.com/fm/getSong.php?channel='+channel_id).success(function(response){
//         resource = response.song[0];
//         url = resource.url;
//     });
//     return resource;
// }