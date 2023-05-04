
let songIndex=0;
let audioElement= new Audio('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/df/b4/9f/dfb49f92-8fa6-0106-8244-c082826b3fa6/mzaf_3400194668177537122.plus.aac.ep.m4a');
let prev= document.querySelector("#prev");
let next= document.querySelector("#next");
let masterplay = document.querySelector("#master-play");
let myProgressBar= document.querySelector('#myprogressbar');
let greet=document.getElementsByClassName("greet");

let date=new Date();
let time = date.getHours();
console.log(time);
if(time<12 && time >4) greet.textContent="Good Morning!";
else if(time>=12 && time <16) greet.textContent="Good Afternoon!";
else if(time>=16 && time <4) greet.textContent="Good Evening!";

let songs=[
    {songname: "Be Alright ",singer:"Dean Lewis", filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/df/b4/9f/dfb49f92-8fa6-0106-8244-c082826b3fa6/mzaf_3400194668177537122.plus.aac.ep.m4a",coverPath:"/coverPics/be_alright_cover.jpg"},
    {songname: "Dandelions",singer:"Ruth B", filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/2a/bb/c5/2abbc54f-23c3-695f-2aa8-3f2c296f9750/mzaf_1021548816549170955.plus.aac.ep.m4a",coverPath:"/coverPics/dandelions.jpg"},
    {songname: "Give Me Your Forever", singer:"Zack Tabudlo",filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/ca/2b/20/ca2b201e-739c-6500-217a-ad6a7864b462/mzaf_10420386990566729274.plus.aac.ep.m4a",coverPath:"/coverPics/give_me_ur_4ever.jpg"},
    {songname: "If The World Was Ending",singer:"JP Saxe, Julia Michaels", filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/7b/a5/b0/7ba5b0ac-2968-0ef7-d1d6-5007c28116cd/mzaf_17686380584985880705.plus.aac.ep.m4a",coverPath:"/coverPics/world_wa_ending.jpg"},
    {songname: "Night Changes", singer:"One Direction",filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d0/94/c2/d094c26b-49a2-6fee-5f35-5d81c8d98548/mzaf_11438282302675708567.plus.aac.ep.m4a.mp3",coverPath:"/coverPics/night_changes.jpg"},
    {songname: "Story Of My Life",singer:"One Direction", filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f5/3b/6a/f53b6ae3-5b87-8fff-d1c3-2c03f10203d6/mzaf_10244324325312288768.plus.aac.ep.m4a",coverPath:"/coverPics/story_of_my_life.jpg"},
    {songname: "Memories",singer:"Maroon 5", filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/43/6b/d6/436bd6a3-cb6f-52a8-82fd-717cc757c40c/mzaf_10437375936427490672.plus.aac.ep.m4a",coverPath:"/coverPics/memories.jpg"},
    {songname: "Heat Waves",singer:"Glass Animals", filePath:"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/59/ad/93/59ad930a-5c2b-7111-3cee-cc5c45c2f7b4/mzaf_15876385621249228901.plus.aac.ep.m4a",coverPath:"/coverPics/Heat_Waves.png"},
   
]

for(let i=0;i<songs.length;i++){
    let names= document.querySelector(`.name${i}`);
    let imgs= document.querySelector(`.img${i}`);
    let singers= document.querySelector(`.singer${i}`);
    names.innerHTML= songs[i].songname;
         imgs.src= songs[i].coverPath;
    singers.innerHTML= songs[i].singer;
}


const makeallplay= ()=>{
    let list= Array.from(document.getElementsByClassName("small-play"));
    list.forEach(element => {
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    });
}

const to_play_master=()=>{
    audioElement.play();
  masterplay.classList.remove('fa-circle-play');
  masterplay.classList.add('fa-circle-pause');
  document.getElementById('gif').style.opacity=1;
//   let index=0;
//  for(let i=0;i<songs.length;i++){
//      let child_song= new Audio(songs[i].filePath);
//      if(child_song.src==audioElement.src){
//          index=i;
//      }
//  }

 let child = document.getElementById(songIndex);
 child.classList.remove("fa-circle-play");
 child.classList.add("fa-circle-pause");
 

}
const to_pause_master=()=>{
    makeallplay();
audioElement.pause();
masterplay.classList.remove('fa-circle-pause');
masterplay.classList.add('fa-circle-play');
document.getElementById('gif').style.opacity=0;
}


const play_child=(element)=>{
    element.classList.remove("fa-circle-play");
    element.classList.add("fa-circle-pause");
         audioElement.currentTime=0;
         to_play_master();
}

const pause_child=(element)=>{
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  
     to_pause_master();
   
}

const updation=(i)=>{
    let master_name=document.querySelector("#master-name");
    let master_singer=document.querySelector("#master-singer");
    master_name.textContent=songs[i].songname;
    master_singer.textContent=songs[i].singer;
}

Array.from(document.getElementsByClassName("small-play")).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        songIndex=i;
        // console.log(songIndex);
        // let index=e.target.id;
        // console.log(index);
        updation(i);

        if(e.target.classList.contains("fa-circle-play")){
          
            audioElement.src= songs[parseInt(i)].filePath;
        makeallplay();
       play_child(e.target);
        }
        else if(e.target.classList.contains("fa-circle-pause")){
          pause_child(e.target);
        
        }
    });
});



masterplay.addEventListener('click',()=>{

    if(audioElement.paused || audioElement.currentTime<=0){
     to_play_master();
    }
    else{
      to_pause_master();
    }
   
});


audioElement.addEventListener('timeupdate',()=>{
    if(audioElement.ended){  
        to_pause_master(); 
    audioElement.currentTime=0;
    songIndex+=1;
    updation(songIndex);
    audioElement.src=songs[songIndex].filePath;
    to_play_master();
       
    }
  let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);

   myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value* audioElement.duration)/100;

});


//back button function
prev.addEventListener('click',()=>{
    if(songIndex<=0){
      songIndex=songs.length-1;
    } 
    else{
        songIndex-=1;
    }
    updation(songIndex);
    audioElement.src=songs[songIndex].filePath;
    audioElement.play();
    makeallplay();
    let child= document.getElementById(songIndex);
    child.classList.remove("fa-circle-play");
    child.classList.add("fa-circle-pause");
to_play_master();

     
});

//next button function
next.addEventListener('click',()=>{
   if(songIndex>=songs.length-1){
       songIndex=0;
   }
   else songIndex+=1;
   updation(songIndex);
   audioElement.src=songs[songIndex].filePath;
   audioElement.play();
   makeallplay();
   let child= document.getElementById(songIndex);
   child.classList.remove("fa-circle-play");
   child.classList.add("fa-circle-pause");
to_play_master();

});