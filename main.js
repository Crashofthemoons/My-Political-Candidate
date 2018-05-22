// With JavaScript, use document.querySelector() to obtain a programmatic reference to your DOM <article> element that you created. With that reference, update its contents with another sub-component that displays a fictitious mission statement for your representative.


const newSection = document.createElement('section');

const newSectionContent = document.createTextNode("The State of Tennessee leads the country when it comes to balancing its budget, keeping a competitive tax code with no state income tax and pushing to set its own priorities in education. In fact, I think Washington could learn a lot by listening to Tennessee.");

newSection.appendChild(newSectionContent);

const senator = document.querySelector('#senatorInfo');

senator.appendChild(newSection);

// In JavaScript, there is a method that creates a new attribute node for any DOM element. Discover that method and use it to create a custom attribute named congressional-district and its value should be your congressional district number. Then attach that attribute to the <article> container you made for your representative component.


const congressionalDistrict = document.createAttribute("dog");
congressionalDistrict.value = "5";
senator.setAttributeNode(congressionalDistrict);