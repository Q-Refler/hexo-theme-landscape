// hexo.extend.generator.register('embed_html_pages', function(locals) {
//     const fs = require('fs');
//     const path = require('path');
//     const htmlDir = path.join(this.source_dir, '_html');
  
//     try {
//       const files = fs.readdirSync(htmlDir);
//       return files.map(file => {
//         if (path.extname(file).toLowerCase() === '.html') {
//           const filePath = path.join(htmlDir, file);
//           const content = fs.readFileSync(filePath, 'utf8');
//           console.log(`Generating page for: ${file}`);
//           return {
//             path: file.replace(path.extname(file), ''),
//             data: content,
//             layout: false
//           };
//         }
//       }).filter(Boolean);
//     } catch (error) {
//       console.error('Error processing HTML files:', error);
//       return [];
//     }
//   });
hexo.extend.tag.register('include_html', function(args) {
    
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(hexo.source_dir, '_html', args[0]);
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    return htmlContent
});
hexo.extend.tag.register('include_iframe', function(args) {
    const path = require('path');
    const fs = require('fs');
    // 构建文件路径
    const filePath = path.join(hexo.source_dir, 'html', args[0]);

    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
        console.error('File does not exist:', filePath);
        return '<p>Error: HTML file does not exist.</p>'; // 如果文件不存在，返回错误消息
    }

    // 构建iframe标记，引用HTML文件
    const urlPath = '/html/' + args[0]; // 根据你的服务器和部署设置可能需要调整路径
    return `<iframe src="${urlPath}" style="width:100%; height:100%; border:none;"></iframe>`;
});