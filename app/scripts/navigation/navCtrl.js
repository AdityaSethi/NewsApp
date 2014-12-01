'use strict';

angular.module('news.nav.controllers', [
		'ui.router',
		'news.post.services',
		'news.user.services'
	])
	.controller('NavCtrl', function ($scope, $state, Post, Auth) {
	  $scope.post = {url: 'http://', title: ''};

	  $scope.submitPost = function () {
	  	$scope.post.creator = $scope.user.profile.username;
			$scope.post.creatorUID = $scope.user.uid;	
	    Post.create($scope.post).then(function (ref) {
	      $state.go('showpost', {'postId': ref.name()});
	      $scope.post = {url: 'http://', title: ''};
	    });
	  };

	  $scope.signedIn = Auth.signedIn;
		$scope.logout = Auth.logout;
	  $scope.user = Auth.user;

	});