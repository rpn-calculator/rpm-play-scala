module.exports = function (grunt) {

    grunt.initConfig({
        ngtemplates:  {
            osprey: {
                cwd: '',
                src: 'public/javascripts/**/*.html',
                dest: './public/javascripts/ngTemplates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('build', [ 'ngtemplates' ]);
};
