
const finishedCards =[];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        finishedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return finishedCards;
}

writeCards(names,event);

console.log(finishedCards);

function countDown(number) {
    let i = number
    while (i >= 0) {
        console.log(i);
        i--;
    }
}