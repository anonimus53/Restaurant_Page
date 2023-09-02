

//write a function to load the page 
 const pageLoad = (() => {
   //we append everythin in here 
   const mainDiv = document.getElementById('content');
   //header div, title
   const header = document.createElement('div');
   header.setAttribute('id', 'pageHeader')
   const greco = document.createElement('h1');
   greco.textContent = 'Greco Restaurant';
   header.appendChild(greco);
   //header done and added
   mainDiv.appendChild(header);

   //navigation bar
   const navbar = document.createElement('div');
   navbar.setAttribute('id', 'navbar');
   //home link
   const home = document.createElement('button');
   home.textContent = 'Home';
   
   //menu link
   const menu = document.createElement('button');
   menu.textContent = 'Menu';
   
   //contact link
   const contact = document.createElement('button');
   contact.textContent = 'Contact';
   
   //dadtab he we append it's tab's content
   const dadtab = document.createElement('div');
   dadtab.setAttribute('id', 'dad');
   const dadname = document.createElement('h3');
   dadname.setAttribute('id', 'welcome');
   dadname.textContent = 'Welcome to our Restaurant';
   
   const mainpage = document.createElement('div');
   mainpage.setAttribute('id', 'page');
   const one = document.createElement('div');
   const two = document.createElement('div');
   const three = document.createElement('div');
   const four = document.createElement('div');
   const five = document.createElement('div');
    one.textContent = 'A sweet little restaurant in a chic neighbourhood,';
   two.textContent =  ' with tables on two different levels, as well as outside.';
    three.textContent = ' The décor is traditional and the place has a warm, cosy feel.';
    four.textContent = ' Menus offer great value family-style dishes made with fresh ingredients';
    five.textContent = ' and feature the likes of sardines, moussaka and octopus in vinegar.'
   
   //footer
   const foot = document.createElement('footer');
   const bigtoe = document.createElement('div');
   bigtoe.textContent = 'Location: Eastern Mediterranean';
   const smalltoe = document.createElement('div');
   smalltoe.textContent = 'Time Zone: GMT+2';

  mainDiv.appendChild(navbar);
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);
  mainDiv.appendChild(dadtab);
  mainpage.appendChild(one);
  mainpage.appendChild(two);
  mainpage.appendChild(three);
  mainpage.appendChild(four);
  mainpage.appendChild(five);
  dadtab.appendChild(dadname);
  dadtab.appendChild(mainpage);
  mainDiv.appendChild(foot);
  foot.appendChild(bigtoe);
  foot.appendChild(smalltoe);
    return {home, menu, contact};
})();
export default pageLoad;
// 