module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      js: {
        // src: ["js/jquery-1.12.4.js", "js/rslides.js", "js/scripts.js"],
        src: ["js/*.js"],
        dest: "build/main_script.js",
      },
      css: {
        src: ["css/*.css"],
        dest: "build/main_styles.css",
      },
    },
    uglify: {
      js: {
        files: [
          { src: "build/main_script.js", dest: "build/main_min_script.js" },
        ],
        // src: ["js/*.js"],
        // dest: "build/min/min.js",
      },
    },
  });

  //load grunt plugins

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("hello", () => {
    console.log("hello");
  });
};
