import React from 'react';
import ReactDOM from 'react-dom';

import ExampleWork from './example-work';

const holder = document.getElementById('example-work-holder');
console.log('holder is',holder);

const mywork = [
	{
		"title": "Work Example1",
	 	"image": {
	 		"desc":"example1 screenshot of a project involving code",
	 		"src":"images/example1.png",
	 		"comment":""
	 }},
	{
		"title": "Work Example2",
	 	"image": {
	 		"desc":"example2 screenshot of a project involving code",
	 		"src":"images/example2.png",
	 		"comment":`“Chemistry” by Surian Soosay is licensed under CC BY 2.0 
	 		https://www.flickr.com/photos/ssoosay/4097410999"`
	 }},
	{
		"title": "Work Example3",
	 	"image": {
	 		"desc":"example3 screenshot of a project involving code",
	 		"src":"images/example3.png",
	 		"comment":`"Chemistry” by Surian Soosay is licensed under CC BY 2.0 
	 		https://www.flickr.com/photos/ssoosay/4097410999"`
	 }}
]
ReactDOM.render(<ExampleWork work={mywork}/>, holder);
