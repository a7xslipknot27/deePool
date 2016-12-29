#!/usr/bin/env node

global.deePool = require("./lib/deePool.src.js");
global.Benchmark = require("benchmark");
global.makeObj = makeObj;

require("./benchmark.config.js");
require("./perfs.js");


// **********************

function makeObj() {
	return new MyObject();
}

function MyObject() {
	this.foo = [1,2,3];
}
