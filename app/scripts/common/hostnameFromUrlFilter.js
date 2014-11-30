'use strict';

angular.module('news.common.filters', [])
	.filter('hostnameFromUrl', function () {
	  return function (str) {
	    var url = document.createElement('a');

	    url.href = str;

	    return url.hostname;
	  };
});