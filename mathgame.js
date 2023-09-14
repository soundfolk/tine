let times = document.getElementById("satra")
stars = 4
dine = []

function wrong(ring) {
    let sound = new Audio(ring)
    sound.play()
}
function right(tick) {
    let pound = new Audio(tick)
    pound.play()
}
function tine() {
    if (stars >= 0) {
        stars -= 1
        times.innerHTML = `Game starts in ${stars}`
    }
    if (stars == 0) {
        times.innerHTML = ""
        clearInterval(lio)
        games()
    }

}
lio = setInterval(tine, 1000)

tip = []
function games() {
    let count = 100
    let cdown = 3
    let num1 = document.getElementById("bib")
    let num2 = document.getElementById("bibs")
    let sing = document.getElementById("sign")
    let test = document.getElementById("bit")
    let arr = []
    bonus = 0
    game_over = false
    function counts(pins) {
        count -= 1
        if (count >= 0) {
            time = document.getElementById("time").innerHTML = `    Time remaining - ${count}s `
        }

        if (count == 0) {
            pins = Math.random() * 100
            tip.push(bonus)
            vv = localStorage.setItem(pins, tip)
            document.getElementById("pan").innerHTML += `${localStorage.getItem(pins)}`

            time = document.getElementById("time").innerHTML = `game over`
            game_over = true
            document.getElementById("dine").innerHTML = `<h1>game over</h1><br><h2>Your Score is ${bonus}</h2>`
        }

    }
    setInterval(counts, 1000)



    function randm() {

        let maths = Math.ceil(Math.random() * 10);
        let mm = Math.ceil(Math.random() * 10);
        let num1 = document.getElementById("bib").innerHTML = maths;
        let num2 = document.getElementById("bibs").innerHTML = mm;
        let sum = num1 + num2
        let sub = num1 - num2
        let mult = num1 * num2
        let list = [sum, sub, mult]
        let num = Math.floor(Math.random() * list.length)
        if (num == 0) {
            document.getElementById("sign").innerHTML = "+"
        }
        else if (num == 2) {
            document.getElementById("sign").innerHTML = "X"
        }
        else if (num == 1) {
            document.getElementById("sign").innerHTML = "-"
        }

        let answer = list[num]
        pip(answer)

    }


    function pip(answer) {
        text = document.getElementById("bit");
        vb = text.value
        text.value = vb.slice(0, -1)
        if (text.value == "") {
            clearInterval(clear); // Clear the interval before starting a new one
            clear = setInterval(randm, 2000);
            document.getElementById("bn").innerHTML = `Your Score ${bonus}`;
        }
        document.getElementById("submit").onclick = function ss() {
            if (text.value == "") {
                bonus == bonus
            }
            if (text.value == answer) {
                right("correct.mp3")
                bonus += 50;
                document.getElementById("bn").innerHTML = `Your Score ${bonus}`;
                setTimeout(randm, 5); // Generate the next random number immediately
                clearInterval(clear); // Clear the interval before starting a new one
                clear = setInterval(randm, 2000);

            } else if (text.value != answer) {
                wrong("inc.mp3")
                bonus -= 50;
                document.getElementById("bn").innerHTML = `Your Score ${bonus}`;
            }
        };
    }


    clear = setInterval(randm, 2000)

    text = document.getElementById("bit");

    window.addEventListener("keydown", puts)
    window.addEventListener("keypress", enter)
    function puts(event) {

        switch (event.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                text.value += event.key;
                break
            case "Backspace" || keyCode === 8:
                event.preventDefault();
                vb = text.value
                text.value = vb.slice(0, -1)
                break
        }

    }
    function enter(event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            document.getElementById("submit").click()
            test.value = ""
        }
        if (event.key === "-") {
            test.value = "-"
        }
        if (event.key === "Backspace" || event.keyCode === 8) {
            alert("ok")
        }
    }
}
