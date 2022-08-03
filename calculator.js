const buttons = [
    "(",
    ")",
    "C",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
];

const key = [...document.querySelectorAll('.buttons')];
const keylist = key.map(key => key.dataset.key);
const screen = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
 const value = e.key;
console.log(value);
    
 });

document.addEventListener('click', (e) => {
    const value = e.target.dataset.key;
    console.log(value);

});

const calc= (value) => {
    if (keylist.includes(value)) {
      switch (value) {
        case "delete":
          Result.value = "";
          break;
        

          
           
        }
    }
}

          window.addEventListener("error", (e) => {
            alert("Something wrong : " + e.message);
          })
        
