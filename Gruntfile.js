'use strict';
module.exports = function (grunt) {
        grunt.initConfig({
                sass: {
                        dist: {
                                files: {
                                        'public/css/main.css': 'public/css/scss/main.scss'
                                }
                        },
                        dev: {
                                options: {
                                        'includePaths': [
                                                'public/css/scss/'
                                        ]
                                },
                                files: {
                                        'public/css/main.css': 'public/css/scss/main.scss'
                                }
                        },
                }
        });

        grunt.loadNpmTasks('grunt-sass');
        grunt.registerTask('default', ['sass']);
};