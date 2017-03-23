/*global module:false*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      pug: {
        files: ['./*.pug'],
        tasks: ['pug']
      }
    },

    pug: {
      release: {
        options: {
          pretty: false,
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'index.pug'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-pug');

  grunt.registerTask('default', ['watch']);

};
