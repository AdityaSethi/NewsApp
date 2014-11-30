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
      Auth.register($scope.user).then(function() {
        return Auth.login($scope.user).then(function() {
          $state.go('posts');
        });
      }, function (error) {
        $scope.error = error.toString();
      });
    };
  });