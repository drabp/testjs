function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbxbzZtBxcoH0Lh6XkZur4DTY4MvPbiSGg6yRkOOsxt8GAB2XJsfM4UgkCPy9lY1bkAS/exec";
    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent=d[0].status;
    
    });
}

function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbxbzZtBxcoH0Lh6XkZur4DTY4MvPbiSGg6yRkOOsxt8GAB2XJsfM4UgkCPy9lY1bkAS/exec";
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({name:"Deepak"}) // body data type must match "Content-Type" header

    });
    console.log('done');
}
document.getElementById("btn2").addEventListener("click",addGS);
document.getElementById("btn").addEventListener("click",testGS);
