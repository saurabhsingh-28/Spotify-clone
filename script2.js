const containers = document.querySelector(".container");
let prev= document.querySelector("#back");
let next= document.querySelector("#next");
let masterplay = document.querySelector("#master-play");
const bottombar= document.querySelector(".bottom-bar");
let myProgressBar= document.querySelector('#myprogressbar');
let audioitem=new Audio("");
let listindex=0;
let musicindex=0;

const songlist1=[
    {
        songname: "At my Worst",
        singer: "Pink Sweat",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/d8/f0/36/d8f03649-6b76-03fd-a649-003e43bb4ec2/mzaf_432397502619642778.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Perfect",
        singer: "Ed Sheeran",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/35/16/74/351674d5-8819-9c4d-fed5-ce6582a25004/mzaf_18427036374983089352.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Pride",
        singer: "Noah Kahan and Mxmtoon",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2b/c9/28/2bc9287a-d952-a070-0cae-abe6d908bb26/mzaf_11152780339686879342.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Circles",
        singer: "Bangers Only",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/68/79/38/687938fc-1ab8-3793-53f1-239dc8e0cad2/mzaf_9920815558316118157.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Let me down slowly",
        singer: "Alec Benjamin",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/19/93/5e/19935ee2-9eb6-2b99-397f-1dc3ab0da5e9/mzaf_4693244520913161702.plus.aac.ep.m4a",
        movie: "Album"
      },
      
     
    
]
const songlist2=[
    {
        songname: "Tu Hi Hai",
        singer: "Arijit Singh",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/90/97/31/909731b5-1a3f-47c3-953f-63fa61052768/mzaf_6309357501331709520.plus.aac.ep.m4a",
        movie: "Love You Zindagi"
      },
      {
        songname: "Rangi Saari",
        singer: "Kavita Seth, Kanishk Seth",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/51/3f/e6/513fe64c-1bf3-1322-e7f5-55946d40ab07/mzaf_17579348038799415117.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Safarnama",
        singer: "Lucky Ali",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/9b/df/c0/9bdfc0a8-dd42-28c7-59fe-b6d67c7a5c66/mzaf_5766131637802414455.plus.aac.ep.m4a",
        movie: "Tamasha"
      },
      {
        songname: "Kyon",
        singer: "Pritam, Papon ,Sunidhi Chauhan",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/dd/62/f5/dd62f599-af48-c5c3-0267-924e855fbc45/mzaf_8812088730523408017.plus.aac.ep.m4a",
        movie: "Barfi"
      },
      {
        songname: "Ranjha",
        singer: "Jasleen Royal, B Praak, Romy, Anvita dutt",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fb/e5/0c/fbe50c66-96c9-7254-ffd3-1f49324750a9/mzaf_803255888165232263.plus.aac.ep.m4a",
        movie: "Shershah"
      }
    
]
const songlist3=[
    {
        songname: "Rait Zara Si",
        singer: "AR Rahman, Arijit Singh",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/97/be/7b/97be7bba-d923-dced-543c-d1b00dd36284/mzaf_2355947627919614209.plus.aac.ep.m4a",
        movie: "Atrangi Re"
      },
      {
        songname: "Bandeya",
        singer: "Arijit Singh",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/37/d3/33/37d333d7-5eed-b1de-5c61-0a2533802471/mzaf_617590845203152149.plus.aac.ep.m4a",
        movie: "Dil Junglee"
      },
      {
        songname: "Rataan Lambiyan",
        singer: "Jubin Nautiyal, Asees Kaur",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e5/6a/51/e56a5191-22cd-0f29-7b9a-250ae917f654/mzaf_8050754861058790998.plus.aac.ep.m4a",
        movie: "Shershah"
      },
      {
        songname: "Enna sona",
        singer: "Arijit Singh",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview123/v4/59/ec/c8/59ecc8d6-7263-a006-de06-66788472e3ed/mzaf_8332212848674899592.plus.aac.ep.m4a",
        movie: "OK Jaanu"
      },
      {
        songname: "Chal Ghar Chalen",
        singer: "Arijit Singh",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/29/9f/be/299fbe45-21d2-75d1-4b3c-09033071436e/mzaf_1354281161381372731.plus.aac.ep.m4a",
        movie: "Malang"
      },
      {
        songname: "Dil Na Jaaneya",
        singer: "Rochal Ali, Lauv, Akasa",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ec/d9/41/ecd9419e-f17f-f42f-8609-85984b529c60/mzaf_104919625942250918.plus.aac.ep.m4a",
        movie: "Good Newwz"
      }
 
]
const songlist4=[
    {
        songname: "Chaand Baaliyan ",
        singer: "Aditya A",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/72/ca/7d/72ca7d7f-f73c-6a25-1342-7f16d6533a8d/mzaf_12885551598850893148.plus.aac.p.m4a",
        movie: "Album"
      },
      {
        songname: "Brown Munde ",
        singer: "AP Dhillion",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/84/42/bd/8442bd7f-22b9-61f1-aa8c-66ac14b6117c/mzaf_2918305926876985750.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "One Call Away ",
        singer: "Charlie puth",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/74/30/8e/74308ee1-0f8b-88f8-1bab-23b4e21cb6dd/mzaf_18267182966023542167.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Something Like This ",
        singer: "The Chainsmokers and Coldplay",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/15/ba/ac/15baacbc-42ed-430a-1c4c-c8e0d8402ed3/mzaf_5591441079334743408.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Talking To The Moon",
        singer: "Bruno Mars",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/04/2e/0b/042e0b54-86f6-9386-8f7e-9b1ec7faf0af/mzaf_7037272937469728472.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Mann Bharrayaa 2.0",
        singer: "B Praak",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/a7/50/4d/a7504d34-919b-28bd-3a31-5d873b3f8f02/mzaf_8547184179981524246.plus.aac.ep.m4a",
        movie: "Shershah"
      },
      {
        songname: "Peaches",
        singer: "Justin Bieber",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8f/a3/65/8fa365ea-51e6-71af-7afa-835745d139ad/mzaf_4979626867108862672.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "All Figured Out",
        singer: "44Phantom ",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview114/v4/8c/22/2b/8c222b6e-7ab3-e8de-c6a2-76324a124603/mzaf_15605368929222609763.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Liggi",
        singer: "Ritviz",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/06/68/c1/0668c1f1-bf2f-f454-ac4f-baa17bf50106/mzaf_10101797777433267294.plus.aac.ep.m4a",
        movie: "Album"
      }
   
]
const songlist5=[
    {
        songname: "Channa Mereya",
        singer: "Pritam, Arijit Singh",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/99/f9/22/99f92212-7e39-a1a2-25b0-7c609c039384/mzaf_1683622424730095866.plus.aac.ep.m4a",
        movie: "Remix by DJ Chetas"
      },
      {
        songname: "Party Monster ",
        singer: "The Weekend",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f6/24/aa/f624aaa6-32b5-021f-6c7d-1ee9ceb99224/mzaf_2995226288921259077.plus.aac.ep.m4a",
        movie: "Starboy"
      },
      {
        songname: "Taki Taki",
        singer: "DJ Snake ft. Cardi B, Selena Gomez",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9d/9d/0b/9d9d0b79-d309-c0d2-fb18-c1650b576d57/mzaf_16852644195543404949.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "Shape Of You ",
        singer: "Ed Sheeran",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4e/2e/da/4e2eda9b-7306-a0f3-aebd-48ba8503b0e8/mzaf_14380286742138479599.plus.aac.ep.m4a",
        movie: "Album"
      },
      {
        songname: "The Night",
        singer: "Avicii",
        filePath: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cf/a9/cd/cfa9cdf2-5265-8998-754f-62723c183b6a/mzaf_13624023722382162858.plus.aac.ep.m4a",
        movie: "Avicii by Avicii"
      }
   

]

const details=(songlist,index)=>{
    let master_name=document.querySelector("#master-name");
    let master_singer=document.querySelector("#master-singer");
    master_name.textContent=songlist[index].songname+ " - ";
    master_singer.textContent=songlist[index].singer;
}
const pause_master=()=>{
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    document.getElementById('gif').style.opacity=0;
}
const play_master=()=>{
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    document.getElementById('gif').style.opacity=1;
    audioitem.play();
}

const play_update=(songlist,index)=>{
    audioitem.pause();
    audioitem.src=songlist[index].filePath;
    play_master();
}

const make_white=(i)=>{
    Array.from(document.getElementsByClassName(`song-name${i}`)).forEach((element)=>{
        element.style.color="white";
    })
}


let grids=Array.from(document.getElementsByClassName("grid"));

grids.forEach((element,i)=> {
        element.addEventListener('click',(e)=>{
            listindex=i+1;
      let index= parseInt(element.id);
    //   console.log(index);
      containers.style.zIndex=0;
      let List=document.querySelector(`.list${index}`);
      List.style.zIndex=1;
     List.style.opacity=1;
     List.classList.add("trans");
     bottombar.classList.add("trans");
     bottombar.style.opacity=1;
        });
    });


    const cute=(i)=>{
        document.getElementById(`cute${i}`).style.opacity=1;
    }
    const nocute=(i)=>{
        document.getElementById(`cute${i}`).style.opacity=0;
    }
    
Array.from(document.getElementsByClassName("fa-xmark")).forEach((element,i)=>{

   element.addEventListener('click',(e)=>{
       element.parentElement.parentElement.parentElement.style.zIndex=0;
       element.parentElement.parentElement.parentElement.style.opacity=0;
       containers.style.zIndex=1;
       bottombar.style.opacity=0;
       audioitem.pause();
       audioitem.currentTime=0;
       audioitem.src="http://127.0.0.1:5500/menu.html";
       let master_name=document.querySelector("#master-name");
       let master_singer=document.querySelector("#master-singer");
       master_name.textContent= "";
       master_singer.textContent="";
        pause_master();
        make_white(i+1);
        nocute(listindex);
   })
})




masterplay.addEventListener('click',()=>{
    
    if(audioitem.src=="http://127.0.0.1:5500/menu.html") return;

   else if(audioitem.paused || audioitem.currentTime<=0){
        audioitem.play();
        cute(listindex);
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        document.getElementById('gif').style.opacity=1;

    }
    else{
        audioitem.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        nocute(listindex);
        document.getElementById('gif').style.opacity=0;
    }
   
});

const find_list=()=>{
    switch(listindex){
        case 1: return songlist1;
        case 2: return songlist2;
        case 3: return songlist3;
        case 4: return songlist4;
        case 5: return songlist5;
       
    }
}

prev.addEventListener('click',()=>{
if(audioitem.src=="http://127.0.0.1:5500/menu.html") return;

   else if(musicindex<=0 )
   musicindex= find_list().length-1;
   else musicindex-=1;

   make_white(listindex);
   document.getElementsByClassName(`song-name${listindex}`)[musicindex].style.color="#018901";
   
   play_update(find_list(),musicindex);
    details(find_list(),musicindex);

})

next.addEventListener('click',()=>{
if(audioitem.src=="http://127.0.0.1:5500/menu.html") return;

   else if(musicindex==find_list().length-1 )
   musicindex= 0;
   else musicindex+=1;

   make_white(listindex);
   document.getElementsByClassName(`song-name${listindex}`)[musicindex].style.color="#018901";
                                
   play_update(find_list(),musicindex);
    details(find_list(),musicindex);

})



for(let i=1;i<=5;i++){
    Array.from(document.getElementsByClassName(`song-name${i}`)).forEach((element,j)=>{
        element.addEventListener('click',(e)=>{
            make_white(i);
            musicindex=j;
            e.target.style.color="#018901";
           switch(i){
               case 1: play_update(songlist1,j);
               details(songlist1,j);
               cute(i);
               break;
               case 2: play_update(songlist2,j);
               details(songlist2,j);
               cute(i);
               break;
               case 3: play_update(songlist3,j);
               details(songlist3,j);
               cute(i);
               break;
               case 4: play_update(songlist4,j);
               details(songlist4,j);
               cute(i);
               break;
               case 5: play_update(songlist5,j);
               details(songlist5,j);
               cute(i);
               break;
               default: break;
           }
        })
    })
}

audioitem.addEventListener('timeupdate',()=>{
    if(audioitem.ended){  
         audioitem.currentTime=0;
       pause_master();
    }
  let progress= parseInt((audioitem.currentTime/audioitem.duration)*100);

   myProgressBar.value=progress;

})


myProgressBar.addEventListener('change',()=>{
    audioitem.currentTime=(myProgressBar.value* audioitem.duration)/100;

});
