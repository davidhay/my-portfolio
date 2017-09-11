import React from 'react';
import { shallow } from 'enzyme'; //why is this different??

import ExampleWorkModal from '../js/example-work-modal';
//no js extension
//we don't import JEST - it's running this code

const myexample = 	{
		"title": "Work Example1",
		"desc":"Lorem ipsum 1 dolor sit amet, consectetur adipiscing elit. Suspendisse semper efficitur varius. Curabitur id risus in tellus accumsan luctus at non mauris. Phasellus imperdiet diam ut porta vestibulum. Suspendisse vitae sapien ac nisi porta bibendum. Sed posuere velit neque, id scelerisque quam vehicula ut. Vestibulum hendrerit mauris id diam rhoncus, dignissim congue lorem dapibus. Etiam ut risus auctor, tincidunt quam eget, lacinia tellus. In mattis urna in mi suscipit, ac consequat leo convallis. Nam lacinia volutpat consequat.",
		"href":"http://example.com?ex=1",
	 	"image": {
	 		"desc":"example1 screenshot of a project involving code",
	 		"src":"images/example1.png",
	 		"comment":""
	 }};

describe("ExampleWorkModal component", () => {

	let component     = shallow(<ExampleWorkModal example={myexample} open={false}/>);
	let openComponent = shallow(<ExampleWorkModal example={myexample} open={true} />);

	let anchors = component.find('a');
	let paras = component.find('p');

	it("should contain a single anchor element", () => {
		expect(anchors.length).toEqual(1);
	});

	let anchor = anchors.nodes[0];
	let para = paras.nodes[0];

	it("should contain a link to our example", () => {
		expect(anchor.props.href).toEqual(myexample.href);
	});

	it("should contain the correct description", () => {
		expect(para.props.children).toEqual(myexample.desc);
	});

	let images = component.find('img');

	it("should contain a single image", () => {
		expect(images.length).toEqual(1);
	});

	let image = images.nodes[0];

	//console.log(image);

	it("The image source should be correct", () => {
		expect(image.props.src).toEqual(myexample.image.src);
	});

	it("The image alt text should be correct", () => {
		expect(image.props.alt).toEqual(myexample.image.desc);
	});

	it("should have the modal class set correctly", () => {
		expect(component.find('.background--skyBlue').hasClass('modal--closed')).toBe(true);
		expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
	});

});




