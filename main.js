// With JavaScript, use document.querySelector() to obtain a programmatic reference to your DOM <article> element that you created. With that reference, update its contents with another sub-component that displays a fictitious mission statement for your representative.


const newSection = document.createElement('section');

const newSectionContent = document.createTextNode("The State of Tennessee leads the country when it comes to balancing its budget, keeping a competitive tax code with no state income tax and pushing to set its own priorities in education. In fact, I think Washington could learn a lot by listening to Tennessee.");

newSection.appendChild(newSectionContent);

const senator = document.querySelector('#senatorInfo');

senator.appendChild(newSection);

// In JavaScript, there is a method that creates a new attribute node for any DOM element. Discover that method and use it to create a custom attribute named congressional-district and its value should be your congressional district number. Then attach that attribute to the <article> container you made for your representative component.


const congressionalDistrict = document.createAttribute("congressional-district");
congressionalDistrict.value = "5";
senator.setAttributeNode(congressionalDistrict);

//create all the sections from the html in js

const section1 = document.createElement('section'); //create section element
const senatorInfo1 = document.createAttribute("id"); //create id for section
senatorInfo1.value = "senatorInfo"; //set value for id
section1.setAttributeNode(senatorInfo1); //assign id to section
const article1 = document.querySelector('article');
article1.appendChild(section1); //append 1st section to article

const ul1 = document.createElement('ul'); //create ul
section1.appendChild(ul1); //append ul to section

const li1 = document.createElement('li'); //create li
ul1.appendChild(li1); //append li to ul
const img1 = document.createElement('img'); //create img
img1.setAttribute('src', 'https://www.govtrack.us/data/photos/300002-200px.jpeg'); // img content to img element
li1.appendChild(img1); //append img to li

const li2 = document.createElement('li'); //create 2nd li
const li2Content = document.createTextNode('Lamar Alexander'); //create content for 2nd li
li2.appendChild(li2Content); //append 2nd li content to li element
ul1.appendChild(li2); //appednd 2nd li to ul

const li3 = document.createElement('li'); //create 3rd li
const li3Content = document.createTextNode('Senator of Tennessee'); // create 3rd li content
li3.appendChild(li3Content); //append content to li3
ul1.appendChild(li3); //append 3rd li to ul

const li4 = document.createElement('li'); //create 4th li
const li4Content = document.createTextNode('Republican'); //create content fo li4
li4.appendChild(li4Content); //append content to li4
ul1.appendChild(li4); //appdend 4th li to ul

const section2 = document.createElement('section'); //create 2nd section
const section2class = document.createAttribute('id'); //create id for secton 2
section2class.value = 'committees'; //set value for section 2 id
section2.setAttributeNode(section2class); //assign id to section
article1.appendChild(section2); //append 2nd  section to article

const ul2 = document.createElement('ul'); // create 2nd ul
section2.appendChild(ul2); //append ul2 to section2

const li5 = document.createElement('li'); //create 5th li
const li5Content = document.createTextNode('Senate Committee on Health, Education, Labor, and Pensions'); //create li5 content
li5.appendChild(li5Content); //append content to li5
ul2.appendChild(li5); //append li5 to ul2








