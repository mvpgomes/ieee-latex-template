/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
   shell: {
        build: {
          command: 'make'
        },
        clean: {
          command: 'make clean'
        },
        bibliography: {
          command: 'make bibliography_pdf'
        },
        pdf: {
          command: 'make pdf'
        }
    },
    watch: {
      latex: {
        files: ['./**/*.tex'],
        tasks: ['shell:pdf']
      },
      bibliography: {
        files: ['./**/*.bib'],
        tasks: ['shell:bibliography']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('build', ['shell:build']);
  grunt.registerTask('work', ['build', 'watch']);
  grunt.registerTask('clean', ['shell:clean']);
  grunt.registerTask('default', ['work']);

};
