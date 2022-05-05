"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4136],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Exercises",sidebar_label:"Exercises",pagination_next:null,pagination_prev:null,slug:"exercises",hide_table_of_contents:!1,sidebar_position:2},s="Exercises (15pts)",p={unversionedId:"lecture-08/exercises",id:"lecture-08/exercises",title:"Exercises",description:"Submission",source:"@site/docs/lecture-08/exercises.md",sourceDirName:"lecture-08",slug:"/lecture-08/exercises",permalink:"/sp2022/lecture-08/exercises",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Exercises",sidebar_label:"Exercises",pagination_next:null,pagination_prev:null,slug:"exercises",hide_table_of_contents:!1,sidebar_position:2},sidebar:"docs"},u={},c=[{value:"Submission",id:"submission",level:2},{value:"The Phonebook Step1",id:"the-phonebook-step1",level:2},{value:"The Phonebook Step2",id:"the-phonebook-step2",level:2},{value:"The Phonebook Step3",id:"the-phonebook-step3",level:2},{value:"The Phonebook Step4",id:"the-phonebook-step4",level:2},{value:"The Phonebook Step5",id:"the-phonebook-step5",level:2},{value:"Reference",id:"reference",level:2}],h={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercises-15pts"},"Exercises (15pts)"),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"Please submit the ",(0,r.kt)("inlineCode",{parentName:"p"},"*.js")," files to OMA by the deadline."),(0,r.kt)("h2",{id:"the-phonebook-step1"},"The Phonebook Step1"),(0,r.kt)("p",null,"We will start working on an application that will be further developed in the later exercises. "),(0,r.kt)("p",null,"Let's create a simple phonebook. ",(0,r.kt)("i",null,(0,r.kt)("strong",{parentName:"p"},"In this part we will only be adding names to the phonebook."))),(0,r.kt)("p",null,"Let us start by implementing the addition of a person to phonebook."),(0,r.kt)("p",null,"You can use the code below as a starting point for the ",(0,r.kt)("i",null,"App")," component of your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { useState } from 'react'\n\nconst App = () => {\n  const [persons, setPersons] = useState([\n    { name: 'Arto Hellas' }\n  ]) \n  const [newName, setNewName] = useState('')\n\n  return (\n    <div>\n      <h2>Phonebook</h2>\n      <form>\n        <div>\n          name: <input />\n        </div>\n        <div>\n          <button type=\"submit\">add</button>\n        </div>\n      </form>\n      <h2>Numbers</h2>\n      ...\n    </div>\n  )\n}\n\nexport default App\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",null,"newName")," state is meant for controlling the form input element."),(0,r.kt)("p",null,"Sometimes it can be useful to render state and other variables as text for debugging purposes. You can temporarily add the following element to the rendered component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<div>debug: {newName}</div>\n")),(0,r.kt)("p",null,"It's also important to put what we learned in the debugging React applications chapter into good use. The ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"React developer tools")," extension especially, is incredibly useful for tracking changes that occur in the application's state."),(0,r.kt)("p",null,"After finishing this exercise your application should look something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(7106).Z,width:"1572",height:"852"})),(0,r.kt)("p",null,"Note the use of the React developer tools extension in the picture above!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NB:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you can use the person's name as value of the ",(0,r.kt)("i",null,"key")," property"),(0,r.kt)("li",{parentName:"ul"},"remember to prevent the default action of submitting HTML forms!")),(0,r.kt)("h2",{id:"the-phonebook-step2"},"The Phonebook Step2"),(0,r.kt)("p",null,"Prevent the user from being able to add names that already exist in the phonebook. JavaScript arrays have numerous suitable ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"},"methods")," for accomplishing this task. Keep in mind ",(0,r.kt)("a",{parentName:"p",href:"https://www.joshbritz.co/posts/why-its-so-hard-to-check-object-equality/"},"how object equality works")," in Javascript."),(0,r.kt)("p",null,"Issue a warning with the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"},"alert")," command when such an action is attempted:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(5045).Z,width:"1484",height:"478"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint:")," when you are forming strings that contain values from variables, it is recommended to use a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"},"template string"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"`${newName} is already added to phonebook`\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",null,"newName")," variable holds the value ",(0,r.kt)("i",null,"Arto Hellas"),", the template string expression returns the string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"`Arto Hellas is already added to phonebook`\n")),(0,r.kt)("p",null,"The same could be done in a more Java-like fashion by using the plus operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"newName + ' is already added to phonebook'\n")),(0,r.kt)("p",null,"Using template strings is the more idiomatic option and the sign of a true JavaScript professional."),(0,r.kt)("h2",{id:"the-phonebook-step3"},"The Phonebook Step3"),(0,r.kt)("p",null,"Expand your application by allowing users to add phone numbers to the phone book. You will need to add a second ",(0,r.kt)("i",null,"input")," element to the form (along with its own event handler):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<form>\n  <div>name: <input /></div>\n  <div>number: <input /></div>\n  <div><button type="submit">add</button></div>\n</form>\n')),(0,r.kt)("p",null,"At this point the application could look something like this. The image also displays the application's state with the help of ",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"React developer tools"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(4055).Z,width:"1808",height:"1004"})),(0,r.kt)("h2",{id:"the-phonebook-step4"},"The Phonebook Step4"),(0,r.kt)("p",null,"Implement a search field that can be used to filter the list of people by name:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(2596).Z,width:"1560",height:"674"})),(0,r.kt)("p",null,"You can implement the search field as an ",(0,r.kt)("i",null,"input")," element that is placed outside the HTML form. The filtering logic shown in the image is ",(0,r.kt)("i",null,"case insensitive"),", meaning that the search term ",(0,r.kt)("i",null,"arto")," also returns results that contain Arto with an uppercase A."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NB:"),' When you are working on new functionality, it\'s often useful to "hardcode" some dummy data into your application, e.g.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const App = () => {\n  const [persons, setPersons] = useState([\n    { name: 'Arto Hellas', number: '040-123456', id: 1 },\n    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },\n    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },\n    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }\n  ])\n\n  // ...\n}\n")),(0,r.kt)("p",null,"This saves you from having to manually input data into your application for testing out your new functionality."),(0,r.kt)("h2",{id:"the-phonebook-step5"},"The Phonebook Step5"),(0,r.kt)("p",null,"If you have implemented your application in a single component, refactor it by extracting suitable parts into new components. Maintain the application's state and all event handlers in the ",(0,r.kt)("i",null,"App")," root component."),(0,r.kt)("p",null,"It is sufficient to extract ",(0,r.kt)("i",null,(0,r.kt)("strong",{parentName:"p"},"three"))," components from the application. Good candidates for separate components are, for example, the search filter, the form for adding new people into the phonebook, a component that renders all people from the phonebook, and a component that renders a single person's details."),(0,r.kt)("p",null,"The application's root component could look similar to this after the refactoring. The refactored root component below only renders titles and lets the extracted components take care of the rest."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const App = () => {\n  // ...\n\n  return (\n    <div>\n      <h2>Phonebook</h2>\n\n      <Filter ... />\n\n      <h3>Add a new</h3>\n\n      <PersonForm \n        ...\n      />\n\n      <h3>Numbers</h3>\n\n      <Persons ... />\n    </div>\n  )\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NB"),': You might run into problems in this exercise if you define your components "in the wrong place".'),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fullstackopen.com"},"FullStackOpen: Exercises 2.6-2.10"))))}d.isMDXComponent=!0},7106:function(e,t,n){t.Z=n.p+"assets/images/10e-1d1b520e66895dc8682f1affbd86bfa0.png"},5045:function(e,t,n){t.Z=n.p+"assets/images/11e-0004090cc0e171195381f717c410da21.png"},4055:function(e,t,n){t.Z=n.p+"assets/images/12e-d0ba859f98ccbdac5a0e6fb56e1fae66.png"},2596:function(e,t,n){t.Z=n.p+"assets/images/13e-6183f83ae9e57cc1e30cdfb87162fa51.png"}}]);