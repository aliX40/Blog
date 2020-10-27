let news = document.getElementById("newss");
// news.innerText = "bla bla";
// console.log(mygame);
setInterval(async () => {
    await fetch('http://localhost:3000/new').then( async function (response) {
        console.log(response);
        return response.text();
    }).then(  (data)=> {
        console.log(data);
        news.innerText =data;

    })
    .catch(() =>
        console.log("error my man"))

}, 10000);