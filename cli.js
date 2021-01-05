#!/usr/bin/env node

var commit = require('./App'),
options = require('minimist')(process.argv.slice(2)),
message = options.m || options.message,
cron = options.c || options.cron || '*/5 * * * *';
commit(message,cron)