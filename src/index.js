import pageLoad from './page_load';
import "./styles.css"

pageLoad; // this  works as expected!
pageLoad.home.addEventListener('click', function(){
    console.log('Went to Homepage');
    location.reload();
})
pageLoad.menu.addEventListener('click', function(){
    console.log('Went to Menu');
})
pageLoad.contact.addEventListener('click', function(){
    console.log('Went to Contact Info');
})
// used Immediately Invoked Function Expression to display the home page.
//now i need to make the menu module and conctant... 

