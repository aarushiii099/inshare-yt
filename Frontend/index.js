const dropZone=document.querySelector(".drop-zone");
const browseBtn=document.querySelector(".browseBtn");
const fileInput=document.querySelector("#fileInput");

const host="https://inshare.herokuapp.com/";
const uploadURL=`${host}+api/files`;


dropZone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    if(!dropZone.classList.contains("dragged")){
        dropZone.classList.add("dragged");
    }  
})

dropZone.addEventListener("dragleave", ()=>{
    dropZone.classList.remove("dragged");
})
dropZone.addEventListener("drop", ()=>{
    e.preventDefault();
    dropZone.classList.remove("dragged");
    // e.dataTransfer.files.length);
    const files=e.dataTransfer.files;
    if(files.length){
        fileInput.files=files;
        uploadFile();
    }
   
})

browseBtn.addEventListener("click",()=>{
    fileInput.click();
});

const uploadFile = ()=>{

    const file=fileInput.files[0];
    const formData=new FormData();
    formData.append(file);

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        xhr.readyState;
    }

    xhr.open('POST', uploadURL);
    xhr.send(formData)
}