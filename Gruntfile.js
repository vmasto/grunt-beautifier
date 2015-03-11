module.exports = function(grunt) {

	grunt.initConfig({
	 	prettify: {
			all: {
				expand: true,
				cwd: "../../",
				ext: ".html",
				src: ["*.html"],
				dest: "../../"
			},
			options: {
				"indent": 1,
				"indent_char": '	',
				"condense": true,
				"indent_inner_html": false,
				"unformatted": [
					"a", "i", "b", "strong", "em"
				]
			}
		},

		autonav: {
			all: {
				expand: true,
				cwd: "../../",
				ext: ".html",
				src: ["*.html"],
				dest: "../../"
			},
			options: {
				activeclass: 'current-menu-item',
				parentclass: 'current-menu-parent',
				ancestorclass: 'current-menu-ancestor'
			}
		},

		cssbeautifier : {
			files : ["../../style.css"],
			options : {
				indent: '	',
				openbrace: 'end-of-line',
				autosemicolon: false
			}
		}
	});

	grunt.loadNpmTasks('grunt-prettify');
	grunt.loadNpmTasks('grunt-cssbeautifier');
	grunt.loadNpmTasks('grunt-autonav');

  // Default task(s).
  grunt.registerTask('default', ['prettify']);

};
