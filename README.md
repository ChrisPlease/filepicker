# FilePicker Directives

This is a File Picker Directive that uses a service inspired by [this post](http://odetocode.com/blogs/scott/archive/2013/07/03/building-a-filereader-service-for-angularjs-the-service.aspx).

I also wrote a second directive that takes the data from the filepicker, and inserts a resized and cropped image. 

Working CodePen example can be found [here](http://codepen.io/ChrisPlz/pen/eNwwvN)

Only tested on Chrome.

This resizes to an attribute defined in cp-preview, then hard crops from the top.

I've only tested for images that are longer, and I'm not sure it would work if it was wider to begin with.

It's still not done, because I can't figure out how to transfer the new, cropped image back into `scope.project.image`.

### 8/24 Edit

I moved the Resizing to it's own service, and added the max width and height to picker, although I still think it should probably stay in the preview.

## Usage

`<cp-file-picker max-width="500" max-height="300" ng-model="project.image" accept="image/*"></cp-file-picker>` to insert the picker

`<cp-preview></cp-preview>` for the preview