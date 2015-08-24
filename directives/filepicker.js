'use strict';

app.directive('cpFilePicker', ['fileReader', function(fileReader) {
	return {
		transclude: true,
		restrict: 'E',
		replace: true,
		template: '<input type="file" class="form-control" />',
		link: function(scope, elem, attrs) {

			elem.bind('change', function(e) {
				fileReader.readAsDataUrl(e.target.files[0], scope)
					.then(function(data) {
						scope.project.image = data;
					});
			});
		}
	};
}]);