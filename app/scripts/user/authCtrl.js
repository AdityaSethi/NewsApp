'use strict';

angular.module('news.user.controllers', [
    'ui.router',
    'news.user.services'
  ])
  .controller('AuthCtrl', function ($scope, $state, Auth, user) {

    if (user) {
      $state.go('posts');
    }

    $scope.login = function () {
      Auth.login($scope.user).then(function () {
        $state.go('posts');
      }, function (error) {
        $scope.error = error.toString();
      });
    };

    $scope.register = function () {
      Auth.register($scope.user).then(function(user) {
        return Auth.login($scope.user).then(function() {
          user.username = $scope.user.username;
          return Auth.createProfile(user);
        }).then(function() {
          $state.go('posts');
        });
      }, function(error) {
        $scope.error = error.toString();
      });
    };
  })
  .controller('ProfileCtrl', function($scope, $stateParams, Profile) {
    var uid = $stateParams.id;

    $scope.profile = Profile.get(uid);
    Profile.getPosts(uid).then(function(posts) {
      $scope.posts = posts;
    });
  });