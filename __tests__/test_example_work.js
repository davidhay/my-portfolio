import React from 'react';
import { shallow } from 'enzyme'; //why is this different??

import ExampleWork, {ExampleWorkBubble} from '../js/example-work';
//no js extension
//we don't import JEST - it's running this code

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
	 }}];

describe("ExampleWork component", () => {

		let component = shallow(<ExampleWork work={mywork} />);

	 	it("should be a 'section' element", () => {
			//expect("Hello").toEqual("Hello");
			//console.log(component.debug());
			expect(component.type()).toEqual('section'); //WORKS!!
		});

		it("should contain the same number of ExampleWorkBubble as there are mywork array elements", () => {
			expect(component.find('ExampleWorkBubble').length).toEqual(mywork.length);
		});
});

describe("ExampleWorkBubble component", () => {

		let component = shallow(<ExampleWorkBubble example={mywork[1]} />);

		let dts = component.find('dt');
	 	it("should be have 1 dt", () => {
			expect(dts.length).toEqual(1);
		});
		let dt = dts.nodes[0];
		//console.log('dt',dt);

	 	it("should be have title set correctly", () => {
			let title = dt.props.children;
			expect(title).toEqual("Work Example2");
		});
		let images = component.find('img');
	 	it("should be have 1 image", () => {
			expect(images.length).toEqual(1);
		});

		let image = images.nodes[0];

		//console.log('images',images);
		//console.log('image',image);

		it("should have image source set correctly", () => {
			expect(image.props.src).toEqual("images/example2.png");
		});
		it("should have alt text set correctly", () => {
			expect(image.props.alt).toEqual("example2 screenshot of a project involving code");
		});

});


