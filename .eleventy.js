const {DateTime} = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/styles/main.css');
  eleventyConfig.addPassthroughCopy('.src/assets');
  eleventyConfig.addPassthroughCopy('.src/admin');
  
  eleventyConfig.addFilter("postDate",(dateObj)=>{
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input:"src",
      output: "_site",
    }
  };
};
