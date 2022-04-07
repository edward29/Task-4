window.onload = function () {
    const Num = document.querySelector("#inputNum");
    const btn = document.querySelector("#checkInput");

    btn.addEventListener("click", () => {
        if(Num.value % 2 === 0) {
            document.querySelector("#result").innerHTML = `<p>Your input value is <span>"${Num.value}"</span>  </p><p>And this is <span>ODD</span> Number</p> <p class='name'>Edward Joseph Caacbay, Grade 12 Chronus</p>`;
        }else{ 
            document.querySelector("#result").innerHTML = `<p>Your input value is <span>"${Num.value}"</span> </p><p>And this is <span>EVEN</span> Number</p> <p class='name'>Edward Joseph Caacbay, Grade 12 Chronus</p>`;
        }

        Num.value = "";
    });

}