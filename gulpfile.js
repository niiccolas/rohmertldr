const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const composer = require('gulp-uglify/composer');
const uglifyjs = require('uglify-es');

const minify = composer(uglifyjs, console);

// Supported browsers
const AUTOPREFIX_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10',
];

// TASK: Minify CSS
gulp.task('styles', () =>
  gulp
    .src('./app/assets/css/**/*.css')
    // Auto-prefix for cross-browser compatibility
    .pipe(concat('styles.css'))
    .pipe(autoprefixer({ browsers: AUTOPREFIX_BROWSERS }))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(gulp.dest('./dist/assets/css/')),);

// TASK: Concat and minify JS
gulp.task('scripts', () => {
  const options = {};
  return gulp
    .src('./app/assets/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(minify(options))
    .pipe(gulp.dest('./dist/assets/js'));
});

// TASK: Minify HTML files
gulp.task('pages', () =>
  gulp
    .src('./app/**/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),)
    .pipe(gulp.dest('./dist')),);

// Delete current ./dist folder
gulp.task('clean', () => del(['dist']));

// GULP DEFAULT TASK runs all of the above
gulp.task(
  'default',
  gulp.series('clean', 'styles', 'scripts', 'pages', (done) => {
    console.log('****** FRESH ./dist FOLDER EXPORTED ******');
    done();
  }),
);
