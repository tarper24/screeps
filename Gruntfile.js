module.exports = function (grunt) {

    let account;
    try {
        account = require('./account.screeps.com'); // eslint-disable-line global-require
    } catch (e) {
        account = {
            email: false,
            password: false,
        };
    }

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'YOUR_EMAIL',
                password: 'YOUR_PASSWORD',
                branch: 'default',
                ptr: false
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/',
                        src: ['**/*.js'],
                        flatten: true
                    }
                ]
            }
        }
    });
}
