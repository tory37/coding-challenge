module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [
                    {
						expand: true, 
						flatten: true,
						src: ['./dist/*'], 
						dest: '../backend/', 
						filter: 'isFile'
					}
                ]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('copyToBackend', ['copy']);
}