

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
          case "=":
            const somme = (str) => {
                return Function("return " + str)();
              };
              Result.value = somme(Result.value);
            break;       
            }}
        else {
            const indexkeylist = keylist.indexOf(value);
            const key = key[indexkeylist];
            Result.value += key.innerHTML;
    }
}

          window.addEventListener("error", (e) => {
            alert("Something wrong : " + e.message);
          })
        
