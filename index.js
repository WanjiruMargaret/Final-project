document.getElementById("userForm").addEventListener("submit",function(event){
    event.preventDefault()
    const userInfo= {
        name:document.getElementById("name").value,
        age:parseInt(document.getElementById("age").value),
        accounts:document.getElementById("accounts").value,
        number:document.getElementById("number").value,
        description:document.getElementById("description").value,
    }
 localStorage.setItem("userInfo", JSON.stringify(userInfo))
 displayUserInfo(userInfo)
 alert("info saved") 
 console.log(userInfo)  
})
const savedInfo=localStorage.getItem("userInfo")
if (savedInfo){
    displayUserInfo(JSON.parse(savedInfo))
}
function displayUserInfo(data){
    const display = document.getElementById("userInfoDisplay")
    display.innerHTML=`
    <h3>User Info</h3>
    <p>${data.name}</p>
    <p>${data.age}</p>
    <p>${data.accounts}</p>
    <p>${data.number}</p>
    <p>${data.description}</p> 
    `
}