module.exports = function(grunt) {

  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'res/chaos.css': 'chaos/css/chaos.scss',
          'res/demo.css': 'res/demo.scss'
        }
      }
    },

    autoprefixer: {
      chaos: {
        src: 'res/chaos.css',
        dest: 'res/chaos.min.css'
      },
      demo: {
        src: 'res/demo.css',
        dest: 'res/demo.min.css'
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
      jekyll: {
        files: [
          './*.html',
          '_includes/*',
          '_layouts/*',
          'res/demo.js'
        ],
        tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
        options: {
          interrupt: true,
          atBegin: true
        }
      },
      source: {
        files: [
          'chaos/*',
          'res/demo.scss'
        ],
        tasks: ['sass', 'autoprefixer', 'shell:jekyllBuild', 'shell:jekyllServe'],
        options: {
          interrupt: true,
          atBegin: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'autoprefixer', 'watch']);

};
