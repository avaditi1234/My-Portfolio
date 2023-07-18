/* TOOGLE ICON NAVBAR */

let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* -> let - keyword used for a particular block(not for global)
    -> querySelectorAll -  object that allows you to select multiple elements 
*/ 

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

/*
The code sets up a function to be executed whenever the user scrolls the web page. This is done by assigning an anonymous arrow function to the window.onscroll event.

Inside the scroll event function, it loops through each element in the sections collection. These elements are typically sections of the webpage, such as different content areas.

For each section, it performs the following actions:

a. It gets the current vertical scroll position of the window using window.scrollY and assigns it to the variable top.

b. It calculates the offset of the section from the top of the document, subtracts 150 pixels from it, and assigns the result to the variable offset. This offset is used as a reference point to determine when the section is in view.

c. It gets the height of the section using sec.offsetHeight and assigns it to the variable height. This height is used to determine the range in which the section is considered in view.

d. It retrieves the value of the id attribute of the section element using sec.getAttribute('id') and assigns it to the variable id.

e. It checks if the current scroll position (top) is within the range of the section by comparing it to the offset and offset plus height. If it is, it proceeds to update the active state of the navigation links.

f. Inside the if block, it loops through each element in the navLinks collection, which represents the navigation links on the webpage.

g. For each navigation link, it removes the 'active' class from it using links.classList.remove('active').

h. It selects the specific navigation link associated with the current section using document.querySelector('header nav a[href*='+ id + ']') and adds the 'active' class to it using classList.add('active'). This highlights the active section's corresponding navigation link.

By using this code, as the user scrolls through the webpage, it dynamically updates the active state of the navigation links based on the currently visible section. This is achieved by checking the scroll position relative to each section's offset and height.
*/

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset&&top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        };
    });

    /*
In summary, this code dynamically applies or removes the 'sticky' class on the <header> element based on the user's scroll position. When the user scrolls beyond 100 pixels, the 'sticky' class is added to make the header stick to a fixed position on the page. When the user scrolls back to the top (scroll position 100 pixels or less), the 'sticky' class is removed, restoring the header to its original position.
    */

    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
    menuIcon.classList.remove('#menu-icon');
    navbar.classList.remove('active');
};


