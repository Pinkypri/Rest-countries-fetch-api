

 fetch("https://restcountries.eu/rest/v2/all").then(response=>response.json()).then(data=>{
      
    data.forEach((element) =>{


        const lat=element.latlng[0];
        const lon=element.latlng[1];
   
        const div=document.createElement("div");
        div.classList.add("container","row-1","card","inner","col-3" ,"border");
        div.setAttribute("style","height:500px;width:335px;");
       
        document.querySelector("body").appendChild(div);
        const title=document.createElement("h6");
        title.setAttribute('class',"card-title");
        title.innerHTML=element.name;
        div.appendChild(title);
        const image=document.createElement("img");
        image.classList.add("card-img-top");
        image.setAttribute("style","width:100%; height:220px;margin-bottom:2px;");
        image.setAttribute("src",element.flag);
        div.appendChild(image);
 
        const h5=document.createElement("p");
        h5.classList.add("card-text");
        h5.innerText="Capital : ";
        div.appendChild(h5);
        const span=document.createElement("span");
        span.setAttribute("style","width:150px;height:20px");
        span.innerHTML=element.capital;
        h5.appendChild(span);
        const h51=document.createElement("p");
        h51.classList.add("card-text");
        h51.innerHTML="Capital Code : ";
        div.appendChild(h51);
        const span1=document.createElement("span");
        span1.innerText=element.alpha2Code;
        const span2=document.createElement("span");
        span2.innerText=",";
        span1.appendChild(span2);
        const span3=document.createElement("span");
        span3.innerText=element.alpha3Code;
        span2.appendChild(span3);
        h51.appendChild(span1);

    const h52=document.createElement("p");
    h52.classList.add("card-text");
    h52.innerHTML="Region : ";
    div.appendChild(h52);
    const span4=document.createElement("span");
    span4.innerText=element.region;
    h52.appendChild(span4);

    const h59=document.createElement("p");
    h59.classList.add("card-text");
    h59.innerHTML="LatLong : ";
    div.appendChild(h59);
    const span12=document.createElement("span");
    span12.innerText=element.latlng;
    h59.appendChild(span12);
  
    const btn=document.createElement("button");
    btn.setAttribute("type","button");
    btn.setAttribute('class',"btn btn-outline-light");
    btn.setAttribute("data-bs-toggle","modal");
    btn.setAttribute("data-bs-target","#exampleModal");
    btn.innerText="check a weather";
    div.appendChild(btn);
    btn.addEventListener("click",weather)

    
async  function weather(){

  const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7fe7181a9a277132f406381c3c0980f`);
   const dat=await res.json();

   modal1(dat)

}

 function modal1(dat) {
  const icon=dat.weather[0].icon;
  console.log(icon)


  
  const div1=document.createElement("div");
  div1.setAttribute('class',"modal fade")
  div1.setAttribute('id',"exampleModal");
  div1.setAttribute("aria-labelledby","exampleModalLabel");
  div1.setAttribute("aria-hidden","true");
  div1.setAttribute("tabindex","-1");
  div.appendChild(div1)
  const div2=document.createElement("div");
  div2.setAttribute('class',"modal-dialog modal-dialog-centered");
  div1.appendChild(div2);
  const div3=document.createElement("div");
  div3.setAttribute('class',"modal-content fun");
  div2.appendChild(div3);
  const div4=document.createElement("div");
  div4.setAttribute('class',"modal-header");
  div3.appendChild(div4);
  const h4=document.createElement("h4");
  h4.setAttribute('class',"modal-title");
  h4.setAttribute('id',"exampleModalLabel");
  h4.innerHTML="Weather Report";
 div4.appendChild(h4);
 const btn1=document.createElement("button");
 btn1.setAttribute('class',"btn-close");
 btn1.setAttribute("type","button");
 btn1.setAttribute("data-bs-dismiss","modal");
 btn1.setAttribute("aria-label","Close");
 div4.appendChild(btn1);
 const div5=document.createElement("div");
 div5.setAttribute('class',"modal-body");
 const h41=document.createElement("p");
 h41.innerHTML="Country : ";
 div5.appendChild(h41);
 const span10=document.createElement("span");
 span10.innerHTML=element.name;
 
 h41.appendChild(span10);
 const span9=document.createElement("p");
 h41.appendChild(span9);
 span9.innerHTML="Temperature : "
 const span11=document.createElement("span");
 span11.innerHTML=(dat.main.temp-273).toFixed(0)+" ° "+"c";
 span9.appendChild(span11);

 div3.appendChild(div5);
 const spand=document.createElement("div");
 spand.innerHTML="Weather: ";
 div5.appendChild(spand);
 const spani=document.createElement("span");
 spani.innerHTML="moderate rain";
 spand.appendChild(spani);
const h5994=document.createElement("img");
h5994.setAttribute("src",`https://openweathermap.org/img/wn/${icon}.png`);

spani.appendChild(h5994);
 const div6=document.createElement("div");
 div6.setAttribute('class',"modal-footer");
 div3.appendChild(div6);
 
 const btn2=document.createElement("button");
 btn2.setAttribute('class',"btn-primary");
 btn2.setAttribute("data-bs-dismiss","modal");
 btn2.setAttribute("type","button");
 btn2.innerHTML="close";
 div6.appendChild(btn2);

   document.addEventListener("click",function(){
  div1.parentElement.removeChild(div1);
  div1.style.display="none";
   }) 
  }                
})
})