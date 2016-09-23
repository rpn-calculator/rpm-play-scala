module.exports = function (grunt) {

    grunt.initConfig({
        ngtemplates:  {
            osprey: {
                cwd: '',
                src: 'app/js/**/*.html',
                dest: './app/js/ngTemplates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('build', [ 'ngtemplates' ]);
};
