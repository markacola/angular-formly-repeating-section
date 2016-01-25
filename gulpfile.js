
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var ngHtml2Js = require("gulp-ng-html2js");
var minifyHtml = require("gulp-minify-html");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");


function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {

  var props = {
    entries: ['./src/' + file],
    debug : true,
    transform:  [[babelify, {'presets': ['es2015']}]],
    sourceType: 'module'
  };

  // watchify() if watch requested, otherwise run browserify() once
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest('./.tmp'));
  }

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });

  // run it once the first time buildScript is called
  return rebundle();
}

// build html
function buildHtml() {

  gulp.src("./src/*.html")
	.pipe(minifyHtml({
		empty: true,
		spare: true,
		quotes: true
	}))
	.pipe(ngHtml2Js({
		moduleName: "RepeatingSectionPartials"
	}))
	.pipe(concat("partials.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./.tmp"));

}

//concat tmp
function concatTask() {

  gulp.src('./.tmp/*.js')
	.pipe(concat('angular-formly-repeating-section.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist'));

}

// run once
gulp.task('scripts', function() {
  return buildScript('index.js', false);
});

gulp.task('html', buildHtml);

gulp.task('concat', concatTask);

gulp.task('build', ['scripts', 'html', 'concat']);

// run 'scripts' task first, then watch for future changes
gulp.task('default', ['scripts'], function() {
  return buildScript('index.js', true);
});
