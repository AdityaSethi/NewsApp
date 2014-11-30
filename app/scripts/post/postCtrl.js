'use strict';

angular.module('news.post.controllers', [
		'ui.router',
		'news.post.services'
	])
	.controller('PostCtrl', function ($scope, Post) {
		$scope.posts = Post.all;

	  $scope.deletePost = function (post) {
	    Post.delete(post);
	  };
	})
	.controller('PostViewCtrl', function ($scope, $stateParams, Post) {	  
	  $scope.post = Post.get($stateParams.postId);
	});