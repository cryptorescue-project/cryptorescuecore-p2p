'use strict';

var gulp = require('gulp');
var cryptorescuecoreTasks = require('cryptorescuecore-build');

cryptorescuecoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
