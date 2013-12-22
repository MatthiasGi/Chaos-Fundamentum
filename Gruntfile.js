module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: '../master/chaos.js',
        dest: 'page/chaos.min.js'
      }
    },

    cssmin: {
      combine: {
        files: {
          'page/chaos.css': ['../master/chaos.css', '../master/demo.css']
        }
      }
    },

    jekyll: {
      build: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['uglify', 'cssmin', 'jekyll']);

};
