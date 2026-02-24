# assignment-04

getElementbyID - It selects an HTML ID

getElementbyClassName - can select elements using class names

queryselector - we can use it to select anything as a css selector
and it only selects the first matching element

queryselectorall - we also can use it to select anything using css selector but it shows a full node of matchin element, it returns a nodelist whereas the normal queryselector returns the first matching element.


for creating an element we can use,  document.createElement();

we will create a div and insert a <p> tag here:
const card = document.createElement('div');

const bunga = document.createElement('p');
bunga.innerText = 'hey';
card.appendChild(bunga);


Event Bubbling - when an event happens on a element, it goes/propagates upward through all its ancestors and goes to document then finally window. It's called event bubbling

Event Delegation - Instead of adding event listener to all elements, we can add only one event listener on the common ancestor of those elements and use event.target to identify where that event happened. This method is called event delegation.


PreventDefault() - stops browser's built in behavior of reacting to any kinda event. The event happens but the browser doesn't react to it.

StopPropagation() - We use it for stopping event bubbling to ancestor.
