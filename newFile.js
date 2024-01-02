document.querySelector(".ProfileName").innerHTML ="Udaya Sri"
var num=Math.floor(Math.random()*100)
document.querySelector(".nofposts").innerHTML=num
document.querySelector(".followerscount").innerHTML=Math.floor(Math.random()*10000)
fetch('https://randomuser.me/api/').then(response=>{ /*fetch means fetch data from internet and then perform the response*/
    response.json().then(data=>{
        let user=data.results[0];
        document.querySelector(".ProfileName").innerHTML =user.name.first
        document.querySelector(".bioname").innerHTML =user.name.first +"  "+user.name.last
        document.querySelector(".profilepicture").src=user.picture.medium/*medium,thumbnail,small names are in random user api*/
        for(let i=0;i<num;i++)
        {
            let img=document.createElement('img');
            img.src="https://picsum.photos/9"+i;
            document.querySelector('.posts').append(img);

        }
    })
})
    
