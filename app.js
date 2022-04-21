// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
//1a
const stringJSON =`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(stringJSON);
//1b
p1.innerText = jokeJS1.setup;
//1c
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);
//2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
//2b
.then(res => {
    const friendsJS2 = res.data.quote;
    //2c
    p3.innerText = res.data.character;
    p4.innerText = friendsJS2
})
//2d
.catch(err => {
    console.log(`You've made a mistake.`);
    console.log(err);
    alert(`LOSER!`)
})


// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);
//3a
const baseURL1 = `https://friends-quotes-api.herokuapp.com`;
const endpoint1 = `/quotes/`;
const fullEndpoint1 = baseURL1 + endpoint1;
//3b
async function quoteFunc

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);