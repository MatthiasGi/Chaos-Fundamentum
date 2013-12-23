module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: 'chaos/chaos.js',
        dest: 'res/chaos.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'res/chaos.css': 'chaos/css/chaos.scss'
        }
      }
    },

    autoprefixer: {
      dist: {
        src: 'res/chaos.css',
        dest: 'res/chaos.css'
      }
    },

    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      }
    },

    watch: {
      files: [
        '_includes/*.html',
        '_layouts/*.html',
        './*.html'
      ],
      tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
      options: {
        interrupt: true,
        atBegin: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'sass', 'autoprefixer', 'watch']);

};
