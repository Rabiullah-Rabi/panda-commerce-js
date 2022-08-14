//add h2 teg color change
const h2Lists = document.getElementsByTagName('h2');
for (const h2 of h2Lists) {
    h2.style.color = 'lightblue';
}


document.getElementById('backpack').style.backgroundColor = 'tomato ';
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = "30px";
}


function btnClick() {
    console.log("CLicked");
}

const btns = document.getElementsByClassName('btn panda-btn-buy-now');
for (const btn of btns) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}

document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
    const inputText = event.target.value;
    if (inputText === 'email') {
        document.getElementById('submit').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit').setAttribute('disabled', true);
    }
})