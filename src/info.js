
const infoLoad = () => {
    const dadname = document.getElementById('welcome');
    dadname.textContent = 'Contact Info';
    const mainpage = document.getElementById('page');
    mainpage.textContent = '';
    
    const owner = document.createElement('div');
    owner.textContent = 'Owner : Marry smith';
    const ownerEmail = document.createElement('div');
    ownerEmail.textContent = 'Email: MarrysSmith@gmail.com';
    const ownerTel = document.createElement('div');
    ownerTel.textContent = 'Telephone number: 03-645-444';

    const info = document.createElement('div');
    info.setAttribute('id', 'info');
    
    mainpage.appendChild(info);
    info.appendChild(owner);
    info.appendChild(ownerEmail);
    info.appendChild(ownerTel);
};

export default infoLoad;