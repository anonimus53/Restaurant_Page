import pageLoad from './page_load';
import "./styles.css";
import menuLoad from './menu';
import homeLoad from './home';
import infoLoad from './info';


pageLoad; // this  works as expected!
pageLoad.home.addEventListener('click', function(){
    console.log('Went to Homepage');
    homeLoad();
})
pageLoad.menu.addEventListener('click', function(){
    console.log('Went to Menu');
    menuLoad();
})
pageLoad.contact.addEventListener('click', function(){
    console.log('Went to Contact Info');
    infoLoad();
})
// used Immediately Invoked Function Expression to display the home page.
//now i need to make the menu module and conctant... 

