angular.module("forum", [])
    .controller("ForumController", function($scope, $http, userService)  {

        $scope.model = {
            selectedTopic : undefined,
            commentModel : undefined
        }

        $scope.createComment = function(commentModel){
            $scope.model.selectedTopic.comments
                .push(angular.copy(commentModel));
            $scope.commentModel = {};
        }

        $scope.topics = globals.topics;

        $scope.users = globals.users;

        $scope.getAdmins = function(users){
            return users.filter(function(user){
                return user.admin;
            });
        };


    })
    
    .factory("userService", function($q, $http, apiService){

        var users = null; // could be used as a cache

        var service = {

            getUsers : function(){

            },
            getAdmins : function(){
                return service.getUsers().then(function(users){
                    //filter, map, some, foreach
                    return users.filter(function(user){
                        return user.admin;
                    })
                })
            }
        };
        return service;
    }).factory("apiService", function(){

        var service ={
            root : "http://localhost:3000/api/"
        }
        return service;
    })


























