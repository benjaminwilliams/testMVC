var testApp = angular.module('testApp', []);

testApp.controller('testCtrl', function ($scope, testService) {

    $scope.test = "hello world";
    $scope.data = "loading";

    $scope.number = "";

    function getTest() {
        testService.getTest().then(
            function (data) {
                $scope.data = data;
            },
            function (err) {
                console.log("error: " + err);
            }
        )
    }

    $scope.getInt = function() {
        testService.getIntTest().then(
            function (data) {
                $scope.data2 = data;
            },
            function (err) {
                console.log("error: " + err);
            }
        )
    }

    $scope.setInt = function () {
        console.log('starting');
        testService.setInt($scope.number).then(
            function (data) {
                console.log('yay!');
            },
            function (err) {
                console.log("O NOES!: " + err);
            }
        )
    }

    getTest();

});

testApp.factory('testService', function ($http, $q) {
    return {
        getTest: function() {
            var deferred = $q.defer();
            $http.get('/api/api')
                .success(function (data){
                    deferred.resolve(data);
                })
                .error(function(msg, code){
                    deferred.reject(msg);
                });
            return deferred.promise;
        },
        getIntTest: function() {
            var deferred = $q.defer();
            $http.get('/api/api/3')
                .success(function (data){
                    deferred.resolve(data);
                })
                .error(function(msg, code){
                    deferred.reject(msg);
                });
            return deferred.promise;
        },
        setInt: function(data) {
            var deferred = $q.defer();
            $http.post('/api/api/',{data: data})
                .success(function (data){
                    deferred.resolve(data);
                })
                .error(function(msg, code){
                    deferred.reject(msg);
                });
            return deferred.promise;
        }
    }

});