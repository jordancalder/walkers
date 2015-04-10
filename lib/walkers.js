/*
 * walkers
 * https://github.com/jordancalder/walkers
 *
 * Copyright (c) 2015 Sterling Jordan Calder
 * Licensed under the MIT license.
 */

'use strict';

exports.walk = function(node, wrap, func) {
	if(wrap) node = wrapper(node);
	func(node);

	node = (node.hasOwnProperty('children'))
		? node.children[0]
		: null;

	while (node) {
	    this.walk(node, false, func);
	    node = node.next;
	}
};

var wrapper = function(node){
	return {
		name: 'wrapper',
    data: 'wrapper',
    type: 'wrapper',
    children: node,
    next: null,
    prev: null,
    parent: null
	};
}