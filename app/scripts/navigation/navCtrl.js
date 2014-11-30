'use strict';

angular.module('news.nav.controllers', [
		'ui.router',
		'news.post.services',
		'news.user.services'
	])
	.controller('NavCtrl', function ($scope, $state, Post, Auth) {
	  $scope.signedIn = Auth.signedIn;
		$scope.logout = Auth.logout;

	  $scope.post = {url: 'http://', title: ''};

	  $scope.submitPost = function () {
	    Post.create($scope.post).then(function (ref) {
	      $state.go('showpost', {'postId': ref.name()});
	      $scope.post = {url: 'http://', title: ''};
	    });
	  };

	});