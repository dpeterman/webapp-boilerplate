module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/js/main.js',
                ],
                dest: 'src/js/concat.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/js/scripts.js': ['src/js/concat.js']
                }
            }
        },

        less: {
            development: {
                options: {
					cleancss: true,
					compress: true
                },
                files: {
                    'dist/css/styles.css': 'src/less/main.less',
                }
            }
        },

        watch: {
            less: {
                files: ['src/less/*'],
                tasks: ['less']
            },
            js: {
                files: ['src/js/*'],
                tasks: ['concat, uglify']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'index.html',
                    'dist/js/scripts.js',
                    'dist/css/styles.css'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'less', 'watch'])

}
