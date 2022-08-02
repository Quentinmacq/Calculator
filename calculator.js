const key = [...document.querySelectorAll('.buttons')];
const keylist = key.map(key => key.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const value = e.keylist.toString();
    console.log(value,typeof value)
    //calc(value);

})
