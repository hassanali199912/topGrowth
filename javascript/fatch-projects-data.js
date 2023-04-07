console.log("hello form js");


function load_projects_data(){
    fetch('json-data/digital-data.json').then(res => res.json()).then((data)=>{
        let output =""; 
        output +=`<h4 class="card-title"><span>Social Media Marketing
        </span></h4> <div id="card-contaner-grid">
        `;
        data.forEach(element => {
            output+=`<div class=" themesflat-portfolio wow fadeInUp pt-2 " data-wow-delay="100ms">
            <div class="project-item">
                <div class="inner">
                    <div class="boxitem">
                        <div class="imgbox">
                            <img src="${element['imgurls'][0]}" alt="${element['title']}">
                            <img class="light" src="${element['imgurls'][1]}" alt="${element['title']}">
                        </div>
                        <div class="box-item-content">
                            <div class="content-box">
                                <h5 class="title">${element['title']}</h6>
                                <h5 class="subtitle">
                                    <a href="projects-details.html?id=${element['id']}&category=${element['category']}">${element['subtitle']}.</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        });
        output+="</div>"
        
        document.getElementById('digital-market-section').innerHTML= output;


    })
}


function load_project_details_data() {
    let project_data = window.location.href.split('?')[1].split('&');

    let project_id = project_data[0].split('=')[1];
    let project_category = project_data[1].split('=')[1];
    
fetch('json-data/digital-data.json').then(res =>res.json()).then((data)=>{
    data.forEach(element => {
        if (element.id == project_id) {
            document.getElementById('subtitle_span').innerHTML = element.title;
            document.getElementById('title_span').innerHTML = element.subtitle;
            document.getElementById('aother_img').setAttribute('src',element.author_details.img_url);
            document.getElementById('author_name').innerHTML = element.author_details.name;
            document.getElementById('author_description').innerHTML = element.author_details.description;
            document.getElementById('project_description').innerHTML = element.description;
            let img_output = "";
                element.imgurls.forEach((url,index)=>{
                    console.log(url);
                    if(index==0){
                        img_output+=`<div class="carousel-item active">
                        <img src="${url}" class="d-block" alt="e${element.title}">
                      </div>`;
                    }else{
                    img_output+=`<div class="carousel-item">
                    <img src="${url}" class="d-block" alt="${element.title}">
                  </div>`;
                }
                });
                document.getElementById('carousel-inner-imgs').innerHTML = img_output;
            let buttoms_output = "";
                element.imgurls.forEach((url,index)=>{
                    console.log(url);
                    if(index ==0){
                        buttoms_output +=` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${index+1}" style="background-image:url('${url}') ;"></button>`
                    }else{
                    buttoms_output +=` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" aria-current="true" aria-label="Slide ${index+1}" style="background-image:url('${url}') ;"></button>`
                }
                });
                document.getElementById('carousel-indicators-buttoms').innerHTML = buttoms_output;


        }
    });
})

}