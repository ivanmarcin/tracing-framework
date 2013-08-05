module.exports = function(grunt) {
  // https://github.com/jamesallardice/grunt-append-sourcemapping
  grunt.loadNpmTasks('grunt-append-sourcemapping');
  // https://github.com/wzr1337/grunt-closure-linter
  grunt.loadNpmTasks('grunt-closure-linter');
  // https://github.com/tactivos/grunt-closure-soy
  grunt.loadNpmTasks('grunt-closure-soy');
  // https://github.com/closureplease/grunt-closure-tools
  grunt.loadNpmTasks('grunt-closure-tools');

  // https://github.com/gruntjs/grunt-contrib-clean
  grunt.loadNpmTasks('grunt-contrib-clean');
  // https://github.com/gruntjs/grunt-contrib-compress
  grunt.loadNpmTasks('grunt-contrib-compress');
  // https://github.com/gruntjs/grunt-contrib-concat
  grunt.loadNpmTasks('grunt-contrib-concat');
  // https://github.com/gruntjs/grunt-contrib-less
  grunt.loadNpmTasks('grunt-contrib-less');
  // https://github.com/gruntjs/grunt-contrib-watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'closureSoys': {
      all: {
        soyToJsJarPath: './third_party/closure-templates/SoyToJsSrcCompiler.jar',
        options: {
          shouldGenerateJsdoc: true,
          shouldProvideRequireSoyNamespaces: true
        },
        outputPathFormat: '{INPUT_DIRECTORY}/{INPUT_FILE_NAME}.js',
        src: './static/template/**/*.soy'
      }
    },

    'closureLint': {
      app: {
        closureLinterPath: './third_party/closure-linter/closure_linter/',
        options: {
          stdout: true,
          strict: true
        },
        src: [
          'app/scripts/controllers/**',
          'app/scripts/services/**',
          'app/scripts/app.js'
        ]
      }
    },
    'closureFixStyle': {
      app:{
        closureLinterPath: './third_party/closure-linter/closure_linter/',
        options: {
          stdout: true,
          strict: true
        },
        src: [
          'app/scripts/controllers/**',
          'app/scripts/services/**',
          'app/scripts/app.js'
        ]
      }
    },

    'append-sourcemapping': {
      main: {
        files: {
          'build/lib.min.js': 'lib.min.js.map'
        }
      }
    }
  });

  //grunt.registerTask('default', ['']);
  grunt.registerTask('lint', ['closureLint']);
};
