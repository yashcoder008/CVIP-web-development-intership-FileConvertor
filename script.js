

let upload= document.getElementById('upload');

let show= document.getElementById('show');
let button=document.getElementById('butt');
let fileName=document.getElementById('fName')
let selMenu= document.querySelector('select');

upload.addEventListener("change",()=>
{
    let fr = new FileReader();

    fr.readAsText(upload.files[0]);

    fr.onload= ()=>
    {
        show.innerHTML= fr.result;
    }
})

selMenu.addEventListener("change",()=>
{
    document.querySelector("button").innerHTML=`Save As ${selMenu.value}`
})

button.addEventListener("click",()=>
{

    if(show.value==="")
    {
        alert("please choose OR enter text!")
    }
    else{
    const blob =new Blob([show.value],{type : selMenu.value});

    const url= URL.createObjectURL(blob);
    const link= document.createElement("a");
    link.download = fileName.value;
    link.href = url;
    link.click();
    }
})