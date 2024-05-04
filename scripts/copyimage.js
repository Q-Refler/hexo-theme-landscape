// scripts/copy-images.js
var fs = require('hexo-fs');
var path = require('path');

hexo.on('generateBefore', function() {
  var sourceDir = hexo.source_dir;
  var publicDir = hexo.public_dir;
  var imageDir = path.join(sourceDir, '_posts/image');

  fs.exists(imageDir).then(exist => {
    if (exist) {
      return fs.copyDir(imageDir, path.join(publicDir, 'image'));
    }
  }).catch(err => {
    console.error('Error copying images:', err);
  });
});
