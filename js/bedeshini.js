const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res=>res.json())
    .then(data=>displayUser(data))
}
const displayUser=user=>{
    const genderTag=document.getElementById('gender')
    genderTag.innerHTML=user.results[0].gender;

    const nameTag=document.getElementById('name')
    nameTag.innerHTML=user.results[0].name.title+'. '+user.results[0].name.first+' '+user.results[0].name.last;

    const locationTag=document.getElementById('location')
    locationTag.innerText=user.results[0].location.country;

    const imgTag=document.getElementById('image')
    imgTag.src=user.results[0].picture.medium

    console.log(user.results[0].picture.medium)
}
loadUser();