function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbzknMy3YxOC2kB0txl5A5KjvV5m20oJDgHlLqiHZN18jWhxEJuw-GN9TyoyW95jSrvS/exec";
    fetch(url)
    .then(d => d.json())
    .then(d => {
        document.getElementById("app").textContent=d[0].status;
    
    });
}
document.getElementById("btn").addEventListener("click",testGS);