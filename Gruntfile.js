module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/library/css/screen.css' : 'src/sass/screen.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['src/sass/**/*.scss'],
				tasks: ['sass']
			}
		},
		express: {
			dist: {
				options: { script: 'server.js' }
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['express', 'watch']);
}