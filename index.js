const dotenv = require('dotenv').config()
const fetch = require('node-fetch');
const express = require('express')

const ejs = require('ejs')
const bodyParser = require('body-parser')
const https = require('https')

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/imageDB', {useNewUrlParser: true, useUnifiedTopology: true});

// const Image = mongoose.model('Image', {
//     source: String, 
//     alt: String
// });


const sources = [
    {src:'/img/1.jpg',id:1,name:"Unicorn Hunter.",description:"I did this one for my friend in the picture, Assem. Its meaning is that even the rarest most beautiful creatures are not safe from the basic human instincts."},
    {src:'/img/2.png',id:2,name:"Cloudy Morning.", description:"This one is more of an eye candy than a meaninful picture. The original one wa taken in the dead sea, Jordan."},
    {src:'/img/3.png',id:3,name:"Coffee.",description:"I have been drinking coffee lately, and I could think of no better way to express my love for it than this one."},
    {src:'/img/4.png',id:4,name:"Dahmane El-Harrachi.",description:"I did this during my Dahmane El-Harrachi phase. In fact, I was listening to one of his songs while doing this."},
    {src:'/img/5.png',id:5,name:"Habibi Drake.",description:"This one followed Drakes single, Laugh Now Cry Later. I just felt like giving it an arab twist, following Drakes' arabic verse on Only You Freestyle."},
    {src:'/img/6.jpg',id:6,name:"Praise The Plant.",description:"What happens when you litterally get high."},
    {src:'/img/7.jpg',id:7,name:"The Last Hotbox.",description:"Nothing to see here, just 12 buddies having a smoke over what seems to be a very hot topic. The newspaper in the background has an article about the dangers of smoking, emphasizing on the fact that it KILLS."},
    {src:"/img/8.jpg",id:8,name:"Sheikh Bean",description:"Appearently, Mr.Bean took quite a life-changing trip to the Middle East."},
    {src:"/img/9.jpg",id:9,name:"Ottoman Rockstars",description:"Ottoman rockstars are my favorite, only problem is microphones were not invented at that time yet"},
    {src:"/img/10.jpg",id:10,name:"Hammoud Love",description:"Love in its purest form; a bottle of Hammoud after a long hot day out."},
    {src:"/img/11.png",id:11,name:"Skaul",description:"This one came about after the controversy in Algeria about the teenagers participating in a French documenary depicting the Algerian youth as hopeless, to which I reply with SKAUL"},
    {src:"/img/12.jpg",id:12,name:"Windows to the Soul",description:"This eye-candy piece came about by combining all my favorite things in one image; clouds, stars, and people."},
    {src:"/img/13.png",id:13,name:"I Can't Breathe!",description:"I made this Arabic pop art piece right after the unfortunate events that cause the BLM marches in 2020, depicting the Arab artist Oumm Kelthoum as a protester in the streets."},
    {src:"/img/14.png",id:14,name:"STUCK",description:"This one was a fun one, since it was just a result of experimenting around "},
    {src:"/img/15.png",id:15,name:"Escape Reality",description:"Sometimes when all becomes mundane and routine-like, you just gotta escape and leave this boring canvas."},
    {src:"/img/16.png",id:16,name:"Plato",description:"Ironically, Plato had always hated art and considered it to be 'false knowledge of reality'"}
]

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Instagram code after the Oembed issue:
app.get('/',function(req,res){

    res.render(__dirname+'/view/index.ejs')
})


app.get('/images/:index',function(req,res){
    const image = sources.filter(function(image){
        return image.id == req.params.index
    })


    res.render(__dirname+"/view/singleImage.ejs",{image:image[0]})
})

app.get("/images-collection",function(req,res){
    res.render(__dirname+"/view/imagesCollection.ejs",{images:sources})
})

app.listen(process.env.PORT || 3000,function(){
    console.log(`connected on port 3000`)
})