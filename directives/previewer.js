'use strict';

app.directive('cpPreview', ['fileReader', function(fileReader) {
	return {
		transclude: true,
		restrict: 'E',
		replace: true,
		template: '<div class="img-preview"></div>',
		link: function(scope, elem, attrs) {

			scope.$watch(function(scope) {

				return scope.project.image;

			}, function(newData, oldData) {

				if(newData !== null) {
					var img, imgWidth, imgHeight, maxWidth, maxHeight;

					img = new Image();
					img.src = newData;

					var canvas     = document.createElement('canvas');
					var canvasCopy = document.createElement('canvas');
					var ctx        = canvas.getContext('2d');
					var ctxCopy    = canvasCopy.getContext('2d');

					imgWidth  = img.width;
					imgHeight = img.height;
					maxWidth  = attrs.maxWidth ? attrs.maxWidth : 0;
					maxHeight = attrs.maxHeight ? attrs.maxHeight : 0;

					if(imgWidth > maxWidth) {
						img.height = (imgHeight / imgWidth) * maxWidth;
						img.width  = maxWidth;
					}
					
					canvas.width  = img.width;
					canvas.height = img.height;
					ctx.drawImage(img, 0, 0, img.width, img.height);

					canvasCopy.width = maxWidth;
					canvasCopy.height = maxHeight;
					ctxCopy.drawImage(canvas, 0, 0, canvas.width, maxHeight, 0, 0, maxWidth, maxHeight);

					var newDataUrl = canvasCopy.toDataURL();

					elem.append(canvasCopy);

				}
			});
		}
	};

}]);