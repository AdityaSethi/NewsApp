'use strict';

angular.module('news.post.controllers', [
		'ui.router',
		'news.post.services',
		'news.user.services'
	])
	.controller('PostCtrl', function ($scope, Post, Auth) {
		$scope.posts = Post.all;
		$scope.user = Auth.user;
		
	  $scope.deletePost = function (post) {
	    Post.delete(post);
	  };
	})
	.controller('PostViewCtrl', function ($scope, $stateParams, Post, Auth) {	  
	  $scope.post = Post.get($stateParams.postId);
	  $scope.comments = Post.comments($stateParams.postId);

	  $scope.user = Auth.user;
	  $scope.signedIn = Auth.signedIn;

	  $scope.addComment = function () {
	    if(!$scope.commentText || $scope.commentText === '') {
	      return;
	    }

	    var comment = {
	      text: $scope.commentText,
	      creator: $scope.user.profile.username,
	      creatorUID: $scope.user.uid
	    };

	    $scope.comments.$add(comment);

	    $scope.commentText = '';

	    $scope.deleteComment = function (comment) {
		  $scope.comments.$remove(comment);
		};
	  };
	});