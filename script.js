window.onload = function () {
    const Num = document.querySelector("#inputNum");
    const btn = document.querySelector("#checkInput");

    btn.addEventListener("click", () => {
        if(Num.value % 2 === 0) {
            const val = document.querySelector("#result").innerHTML = `<p>Your input value is <span>"${Num.value}"</span> </p><p>And this is <span>ODD</span> Number</p> <p class='name'>Edward Joseph Caacbay, Grade 12 Chronus</p>`;


            // sir local storage nalang po ginamit ko kapalit ng database sana po ay ok lang hehehe

            if (localStorage.getItem('odd') == null) {
                localStorage.setItem('odd', '[]');
            }
            const space = " " + val;
            const oddData = JSON.parse(localStorage.getItem('odd'));
            oddData.push(space);
            localStorage.setItem('odd', JSON.stringify(oddData));
        }else{ 
            const val = document.querySelector("#result").innerHTML = `<p>Your input value is <span>"${Num.value}"</span> </p><p>And this is <span>EVEN</span> Number</p> <p class='name'>Edward Joseph Caacbay, Grade 12 Chronus</p>`;

            if (localStorage.getItem('even') == null) {
                localStorage.setItem('even', '[]');
            }
            const space = " " + val;
            const evenData = JSON.parse(localStorage.getItem('even'));
            evenData.push(space);
            localStorage.setItem('even', JSON.stringify(evenData));
        }

        Num.value = "";
    });


    // dinagdagan ko nalang po nito para sa makita yung kunwaring database hehehe 

    // showing history container
    const btnHistory = document.querySelector(".btnHistory");
    const historyBg = document.querySelector(".historyBg");

    btnHistory.addEventListener('click', () => {
        if (localStorage.getItem('odd') != null || localStorage.getItem('even') != null) {
            document.querySelector('.oddVal').innerHTML = JSON.parse(localStorage.getItem('odd'));
            document.querySelector('.evenVal').innerHTML = JSON.parse(localStorage.getItem('even'));
        }

        if (historyBg.classList.contains("hide")) {
            historyBg.classList.add("show");
            historyBg.classList.remove("hide");
        }
    })

    // Closing history container
    const historyClose = document.querySelector(".historyClose");
    historyClose.addEventListener('click', () => {
        if (historyBg.classList.contains("show")) {
            historyBg.classList.add("hide");
            historyBg.classList.remove("show");
        }
    });


    // clear history or clear local storage
    const clearHistory = document.querySelector(".clearHistory");
    clearHistory.addEventListener('click', () => {
        const al = "Are you sure\nYou want to clear history?";
        if (confirm(al) == true) {
            localStorage.clear()
            location.reload();
        } else{
            return false;
        }
    });

}