
let count=0
let count_el=document.getElementById("count")
let save_el=document.getElementById("save-el")
function increment()
{
    count+=1
    count_el.textContent=count
}
function save()
{
    let dash=count+" - "
    save_el.textContent+=dash
    count=0
    count_el.textContent=count
}
function reset()
{
    save_el.textContent="Previous entries: "
}
let welcomeEl=document.getElementById("welcome-el")
let name="Nithin"
let greeting="Welcome back "
welcomeEl.innerText=greeting+name+" 👋"


