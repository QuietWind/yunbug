module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        globals:{
          jQuery:true
        },
        ignores:['./dest/js/libs/']
      },
      files: ['Gruntfile.js', './dest/**/*.js']
    },
    jade: {
      mainfiles: {
        options: {
          banner: '/* QuietWind Create at 2014-12-23 */',
          pretty: true,
          data: {
            debug: true
          }
        },
        files: [{
          expand: true,
          cwd: 'build/jade/',
          src: ['**/*.jade'],
          dest: 'dest/view/',
          ext: '.html'
        }]
      }
    },
    sass: {
      compile: {
        options: {
          banner: '/* QuietWind Create at 2014-12-23 */',
          //style: 'compressed',
          style: 'nested',
          sourcemap: 'file',
          compass: true
        },
        files: [{
          expand: true,
          cwd: './scss/',
          src: ['**/*.scss'],
          dest: './www/css/',
          ext: '.css'
        }]
      }
    },
    coffee: {
      options: {
        banner: '/* QuietWind Create at 2014-12-23 */',
        separator:"linefeed",
        sourcemap:true
      },
      fileCompile: {
        expand: true,
        // flatten: true,
        cwd: 'build/coffee/',
        src: ['**/*.coffee'],
        dest: 'dest/js/',
        ext: '.js'
      }
    },
    watch: {
      sass: {
        files: ['./scss/**/*.scss'],
        tasks: ['sass']
      }//,
      // jade: {
      //   files: ['build/view/**/*.jade'],
      //   tasks: ['jade']
      // },
      // coffee: {
      //   files: ['build/coffee/**/*.coffee'],
      //   tasks: ['coffee']
      // }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', ['sass','watch']);

};