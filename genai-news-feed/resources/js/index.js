/*<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
</svg>*/

// ---- Data fetch for news from rss feed---\\

console.log(magazines, "rss feed API end points")

const  fetchData = async (URL)=>{
    //console.log(URL)
   try{
    let response = await fetch(URL);
    if(response.ok){
        //console.log("fetching.....");
        response = await response.json();
        return response.items;
    }
    else{
        console.error("Fetching technology failed")
    }
    }
    catch(error){
        console.log("an error accured when fetching data")
        return null;
    }   
}
 // ---- DOM update for technology----\\
function updateTechnologyDOM(techData){
 techData.forEach((data,i) => {
  const {title, link, pubDate, author, description, enclosure}= data;
  const techGridElement = document.getElementById("tech-carousel-news");
  let date = new Date(pubDate);
 date = date.toLocaleDateString();
  techGridElement.innerHTML +=`
  <div class="carousel-item ${i==0?"active":''}">
    <div class="news-card">
    
            <div class = "news-image ">
                    <img src="${enclosure.link}" class="img-fluid" alt="${title}"/>
            </div>
            <div class="news-body">
            <a href="${link}">
                    <h5>${title}</h5>
                    </a>
                    <p>${author} <span></span>${date}<p>
                    <p>${description}</p> 
            </div>
   
    </div>
  </div>`
    
 });
  

}
// --DOM update for politics-----\\
function updatePoliticsDOM(techData){
    techData.forEach((data,i) => {
     const {title, link, pubDate, author, description, enclosure}= data;
     const techGridElement = document.getElementById("politics-carousel-news");
     let date = new Date(pubDate);
    date = date.toLocaleDateString();
     techGridElement.innerHTML +=`
     <div class="carousel-item ${i==0?"active":''}">
       <div class="news-card">
       
               <div class = "news-image ">
                       <img src="${enclosure.link}" class="img-fluid" alt="${title}"/>
               </div>
               <div class="news-body">
               <a href="${link}">
                       <h5>${title}</h5>
                       </a>
                       <p>${author} <span></span>${date}<p>
                       <p>${description}</p> 
               </div>
      
       </div>
     </div>`
       
    });   
   
   }
// --DOM update for sports-----\\   
   function updateSportsDOM(techData){
    techData.forEach((data,i) => {
     const {title, link, pubDate, author, description, enclosure}= data;
     const techGridElement = document.getElementById("sports-carousel-news");
     let date = new Date(pubDate);
    date = date.toLocaleDateString();
     techGridElement.innerHTML +=`
     <div class="carousel-item ${i==0?"active":''}">
       <div class="news-card">
       
               <div class = "news-image ">
                       <img src="${enclosure.link}" class="img-fluid" alt="${title}"/>
               </div>
               <div class="news-body">
               <a href="${link}">
                       <h5>${title}</h5>
                       </a>
                       <p>${author} <span></span>${date}<p>
                       <p>${description}</p> 
               </div>
      
       </div>
     </div>`
       
    });
     
   
   }
   
   
// Function  to be added fro pure DOM manipulation for every Accordions
/**----Dom manipilation funtion for tech-accordion-item which adds the 
 * Generate a dynamic ids 
 * fetch with itaration of magzeins object
 * accordion header div
 * collapsible container
 * * inside above container accordion body append the carouselExample container
 * * * have a function for carousel inner-item and append to carouselExample div, append iteratively based on news objects fetch for each api end point
 * have function fro navigaiton controls dom function for every news type*/ 

export { fetchData, updateTechnologyDOM, updateSportsDOM, updatePoliticsDOM};

