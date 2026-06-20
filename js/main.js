// body tag
var page = document.querySelector("body");
// nav tag

// track tag
var track = document.getElementById("track");
//var img
var img = document.querySelector("img");
// hero section
var hero = document.getElementById("hero")
// button dark mode
var btn = document.getElementById("btn");
// Contact
var contact = document.getElementById("contact");

//item lang skills
var item = document.getElementById("item");
var item2 = document.getElementById("item2");
var item3= document.getElementById("item3");
var item4= document.getElementById('item4');
////////////////////////////////////////////////////////////////
              //section-about-me
var aboutMe = document.getElementById("about");
var me= document.getElementById("me");
var change = document.getElementById("change");

var top = document.getElementById("top");
var edu = document.getElementById("edu");
var pro = document.getElementById("pro");
var servies= document.getElementById("servies");

           ////////////////////////////////////////////////////
var ContactMe = document.getElementById("contact-me");
var form =document.getElementById("form");
var input = document.querySelector("input");
var client= document.getElementById("Testmonials");

//skills section

        var skills= document.getElementById("skills");
        var skill = document.getElementById("skill");

   var cards = document.querySelectorAll(".skill-card");

//footer tag
var footer = document.getElementById("footer");

// icon setting Event
var setting = document.getElementById("setting");

// light-mode tag
var light =document.getElementById("light-mode");
//dark-mode icon
var dark = document.getElementById("dark-mode");

//Sidebar Setting
var aside = document.getElementById("aside");

// icon close sidebar setting
var close = document.getElementById("closeSidebar");


var col = document.getElementById("col");








//event
btn.addEventListener("click",function()
  {
      //
      page.classList.toggle("dark-mode");

    let isDark = page.classList.contains("dark-mode");

    if (isDark) {
        dark.classList.remove("d-none");
        light.classList.add("d-none");

    } else {
        light.classList.remove("d-none");
        dark.classList.add("d-none");

    }
      //
      contact.style.border="1px solid var(--color-slate-800)";
      contact.classList.toggle("text-white")
      contact.classList.remove("bg-white");
      contact.classList.toggle("bg-track")


      //
      item2.classList.toggle("bg-track");
      item3.classList.toggle("bg-track");
      item4.classList.toggle("bg-track");
      item.classList.toggle("bg-track");
      item.classList.toggle("text-white");
      //

      track.classList.remove("bg-white");
      track.classList.toggle("bg-track")
      //
      img.style.border= "8px solid  rgb(53, 51, 51)   ";
//section-hero
      hero.classList.toggle("section-dark");
// contact me
      ContactMe.classList.toggle("dark2");
      form.classList.add("dark3");
      form.style.color="oklch(55.4% .046 257.417)";
      input.style.backgroundColor=" dark2";


         col.classList.toggle("dark3");
//about-me

       aboutMe.classList.remove("bg-white");
       aboutMe.classList.toggle("dark3");
        me.classList.remove("black");
       me.classList.toggle("text-white");
       change.classList.remove("black");
       change.classList.toggle("text-white");


//skills section

       skills.classList.remove("slate-300");
       skills.classList.toggle("section-dark");
       skill.classList.remove("black");
       skill.classList.add("text-white");

// client section
client.classList.remove("bg-slate-300");

client.classList.add("section-dark");
client.style.color = "oklch(55.4% .046 257.417)";



      // footer
      footer.classList.remove("bg-slate-300");
      footer.classList.add("section-dark");
      footer.style.color="oklch(55.4% .046 257.417)";
      //
      aside.classList.remove("bg-white")
      aside.classList.toggle("section-dark");
      aside.style.color= "white";
      aside.style.border= "2px solid var(--color-slate-800)";
      //


       cards.forEach(function (card) {
        card.classList.remove("bg-white");
    card.classList.toggle("dark3");
    card.classList.add("text-white");
  });


  document.body.classList.toggle("section-dark");



});


// Event icon setting
setting.addEventListener("click", function ()
{
   aside.classList.remove("d-none");



})

close.addEventListener("click",function(){
  aside.classList.add("d-none")

}) ;
////////////////////////////////////////////////////////////////////////



          // section my projects
  //action all project
var all =document.getElementById("all");
  //action web project
var web = document.getElementById("web");
  //action design project
var designing = document.getElementById("designing");

  //action app project
var app = document.getElementById("app");
    // cards
var cardWeb =document.getElementById("website");
var cardApp = document.getElementById("appSystem");
var cardGame = document.getElementById("designGame");
var  cardUl = document.getElementById("designUl");
var cardKinder =document.getElementById("kinder");
var storeApp  =document.getElementById("storeApp");
////////////////////////////////////////////////////////////////////////

          // Event section projects


//event web action
web.addEventListener("click",function(){
  cardApp.classList.add("d-none");
  cardUl.classList.add("d-none");
  storeApp.classList.add("d-none");

});
all.addEventListener("click",function () {
   cardApp.classList.remove("d-none");
  cardUl.classList.remove("d-none");
  storeApp.classList.remove("d-none");

});
designing.addEventListener("click",function(){






  cardUl.classList.remove("d-none");
  cardGame.classList.remove("d-none");
  cardWeb.classList.add("d-none");
  cardKinder.classList.add("d-none")





});
app.addEventListener("click",function () {
   storeApp.classList.remove("d-none");
 cardApp.classList.remove("d-none");

 cardGame.classList.add("d-none");
 cardKinder.classList.add("d-none");
 cardUl.classList.add("d-none");
 cardWeb.classList.add("d-none");
})


//aside fonts
// font Alex
var fontAlex= document.getElementById("font1");
//font cairo
var fontCairo = document.getElementById("font2");
//font taj
var fontTaj = document.getElementById("font3");


fontAlex.addEventListener("click", function () {

});

// client action
var right= document.getElementById("right");
var left = document.getElementById('left');

var client1= document.getElementById("client1");
var client4=document.getElementById("client4");
var client3=document.getElementById("client3")
var client6 = document.getElementById("client6")




right.addEventListener("click", function () {
  client1.classList.add("d-none");
  client4.classList.remove("d-none");

});
left.addEventListener("click", function () {
  client6.classList.remove("d-none");
  client3.classList.add("d-none");

})