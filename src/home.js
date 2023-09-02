
const homeLoad = () => {
    const dadname = document.getElementById('welcome');
    dadname.textContent = 'Welcome to our Restaurant';
    const mainpage = document.getElementById('page');
    mainpage.textContent = '';

    const one = document.createElement('div');
   const two = document.createElement('div');
   const three = document.createElement('div');
   const four = document.createElement('div');
   const five = document.createElement('div');
    one.textContent = '"A sweet little restaurant in a chic neighbourhood,';
   two.textContent =  ' with tables on two different levels, as well as outside.';
    three.textContent = ' The décor is traditional and the place has a warm, cosy feel.';
    four.textContent = ' Menus offer great value family-style dishes made with fresh ingredients';
    five.textContent = ' and feature the likes of sardines, moussaka and octopus in vinegar."'
    
    mainpage.appendChild(one);
  mainpage.appendChild(two);
  mainpage.appendChild(three);
  mainpage.appendChild(four);
  mainpage.appendChild(five); 

}

export default homeLoad;