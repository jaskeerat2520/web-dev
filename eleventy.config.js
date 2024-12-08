const blocksToMd = require('@sanity/block-content-to-markdown')

module.exports = function(eleventyConfig) {


  const markdownIt = require("markdown-it");

  const md = markdownIt({html: true, linkify: true, typographer: true});

  eleventyConfig.addFilter("markdown", (content) => md.render(content));

// function filter image the image is rerned from sanity
  // so I have to filter the word "image-" and replace "-" with 0
eleventyConfig.addFilter("filterImage", function(value) {
  if (typeof value === 'string') {
    // Remove the "image-" 
    value = value.replace(/^image-/, '');
    
    // Replace the last hyphen with a dot
    value = value.replace(/-([^-]*)$/, '.$1');
    
    return value;
  }
  return '';
});


eleventyConfig.addFilter("filterActionMovies", function(movies) {
console.log(movies)
 }) 
  return {
    dir: {
      output: "dist"
    }
  };
};

