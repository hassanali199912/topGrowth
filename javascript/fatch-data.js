console.log("jellllo");



let http = new XMLHttpRequest();

http.open('get','json-data/web-projects.json',true);

http.send();

http.onload = function () {
    if (this.readyState ==4 && this.status ==200) {
        let projects = JSON.parse(this.responseText);

        let output =`<div class="list-portfolio my-4 ">`;
        for(let item of projects){

            console.log(String(item.lightImg));



            // console.log(`id: ${item.id}`);
            // console.log(`darkImg: ${String(item.darkImg)}`);
            // console.log(`lightImg: ${item.lightImg}`);
            // console.log(`title: ${item.title}`);
            // console.log(`subtitle: ${item.subtitle}`);
            
            output +=`<div class="themesflat-portfolio wow fadeInUp">
            <div class="project-item">
                <div class="inner">
                    <div class="boxitem">
                        <div class="imgbox">
                            <img src="${item.darkImg}" alt="${item.title}">
                            <img class="light" src="${item.lightImg}" alt="${item.title}">
                        </div>
                        <div class="box-item-content">
                            <div class="content-box">
                                <h6 class="subtitle"> ${item.subtitle}</h6>
                                <h5 class="title">
                                    <a href="projects-details.html">${item.title}</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.themesflat-portfolio -->`;

        }
        output+= `</div>`;

        document.getElementById('project-display').innerHTML = output;
    }
}
