var gulp = require('gulp');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');
var del = require('del');
var node;
var ng;

gulp.task('build', ['sdk-win'], function (cb) {
	exec('ng build', {cwd: './client', maxBuffer: 1024 * 500}, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('run', ['build'], function(cb) {
	if (node) node.kill()
	node = spawn('node', ['server/server.js'])
	node.stdout.on('data', function(data) {
		console.log(`stdout: ${data}`);
	});
	node.stderr.on('data', function(data) {
		console.log(`stderr: ${data}`);
	});
	node.on('close', function (code) {
		if (code === 8) {
			console.log('Error detected, waiting for changes...');
		}

		console.log('exit node .');
	});
});

gulp.task('clean', function(cb) {
	return del([
		'client/src/app/shared/sdk',
	]);
});

gulp.task('sdk', ['clean'], function(cb) {
	exec('./node_modules/.bin/lb-sdk server/server ./client/src/app/shared/sdk -d ng2web -v enabled -w', {cwd: './'}, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('sdk-win', ['clean'], function(cb) {
	exec('.\\node_modules\\.bin\\lb-sdk server\\server .\\client\\src\\app\\shared\\sdk -d ng2web -v enabled -w', {cwd: '.\\'}, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('test', function(cb) {
	exec('npm test', {cwd: './client'}, function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

process.on('exit', function() {
    if (node) node.kill()
});