module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("actos", function(collection) {
    return collection
      .getFilteredByGlob("src/actos/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0)); // Orden por 'order'
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "../_includes"
    }
  };
};
