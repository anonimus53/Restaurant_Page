
const menuLoad = () => {
    const dadname = document.getElementById('welcome');
    dadname.textContent = 'Our 3 Best Dishes';
    const mainpage = document.getElementById('page');
    mainpage.textContent = '';

    const menuBest = document.createElement('div');
     menuBest.setAttribute('id', 'bestmenu');

    const greekSalad = document.createElement('div');
    const salad = document.createElement('div');
    salad.textContent = '1.CHORIATIKI';
    greekSalad.textContent = '#Greek salad is a must have for every meal.'
    
    const pita = document.createElement('div');
    pita.textContent = '2.PITOGYRO';
    const guros = document.createElement('div');
    guros.textContent = '#Gyros are an economical meal choice and so yummy!';
    const mou = document.createElement('div');
    mou.textContent = '3.MOUSSAKAS';
    const moussaka = document.createElement('div');
    moussaka.textContent = '#A legendary, traditional dish that is creamy and juicy. '
    
    mainpage.appendChild(menuBest);
    menuBest.appendChild(salad)
    menuBest.appendChild(greekSalad);
    menuBest.appendChild(pita);
    menuBest.appendChild(guros);
    menuBest.appendChild(mou);
    menuBest.appendChild(moussaka);
};

export default menuLoad;