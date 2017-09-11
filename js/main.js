import React from 'react';
import ReactDOM from 'react-dom';

import ExampleWork from './example-work';

const holder = document.getElementById('example-work-holder');
console.log('holder is',holder);

const mywork = [
	{
		"title": "Work Example1",
		"desc":"Lorem ipsum 1 dolor sit amet, consectetur adipiscing elit. Suspendisse semper efficitur varius. Curabitur id risus in tellus accumsan luctus at non mauris. Phasellus imperdiet diam ut porta vestibulum. Suspendisse vitae sapien ac nisi porta bibendum. Sed posuere velit neque, id scelerisque quam vehicula ut. Vestibulum hendrerit mauris id diam rhoncus, dignissim congue lorem dapibus. Etiam ut risus auctor, tincidunt quam eget, lacinia tellus. In mattis urna in mi suscipit, ac consequat leo convallis. Nam lacinia volutpat consequat.",
		"href":"http://example.com?ex=1",
	 	"image": {
	 		"desc":"example1 screenshot of a project involving code",
	 		"src":"images/example1.png",
	 		"comment":""
	 }},
	{
		"title": "Work Example2",
		"desc":"Lorem ipsum 2 dolor sit amet, consectetur adipiscing elit. Suspendisse semper efficitur varius. Curabitur id risus in tellus accumsan luctus at non mauris. Phasellus imperdiet diam ut porta vestibulum. Suspendisse vitae sapien ac nisi porta bibendum. Sed posuere velit neque, id scelerisque quam vehicula ut. Vestibulum hendrerit mauris id diam rhoncus, dignissim congue lorem dapibus. Etiam ut risus auctor, tincidunt quam eget, lacinia tellus. In mattis urna in mi suscipit, ac consequat leo convallis. Nam lacinia volutpat consequat.",
		"href":"http://example.com?ex=2",
	 	"image": {
	 		"desc":"example2 screenshot of a project involving code",
	 		"src":"images/example2.png",
	 		"comment":`“Chemistry” by Surian Soosay is licensed under CC BY 2.0 
	 		https://www.flickr.com/photos/ssoosay/4097410999"`
	 }},
	{
		"title": "Work Example3",
		"desc":"Lorem ipsum 3 dolor sit amet, consectetur adipiscing elit. Suspendisse semper efficitur varius. Curabitur id risus in tellus accumsan luctus at non mauris. Phasellus imperdiet diam ut porta vestibulum. Suspendisse vitae sapien ac nisi porta bibendum. Sed posuere velit neque, id scelerisque quam vehicula ut. Vestibulum hendrerit mauris id diam rhoncus, dignissim congue lorem dapibus. Etiam ut risus auctor, tincidunt quam eget, lacinia tellus. In mattis urna in mi suscipit, ac consequat leo convallis. Nam lacinia volutpat consequat.",
		"href":"http://example.com?ex=3",
	 	"image": {
	 		"desc":"example3 screenshot of a project involving code",
	 		"src":"images/example3.png",
	 		"comment":`"Chemistry” by Surian Soosay is licensed under CC BY 2.0 
	 		https://www.flickr.com/photos/ssoosay/4097410999"`
	 }}
]
ReactDOM.render(<ExampleWork work={mywork}/>, holder);
