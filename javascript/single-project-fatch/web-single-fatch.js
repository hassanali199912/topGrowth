console.log('This is Work');


window.onload = function() {

  console.log("this is work");
  
let project_id  = document.location.href.split('=')[1];

fetch('json-data/web-projects.json')
.then(res => res.json()).then(function(data){

    data.forEach(element => {
        if (element.id == project_id) {

          
            document.getElementById("title_span").innerHTML = element.title;
            document.getElementById("subtitle_span").innerHTML = element.subtitle;
            
            document.getElementById("title").innerHTML = element.title;
            document.getElementById("subtitle").innerHTML = element.subtitle;
            document.getElementById("project_img_cover").setAttribute('src',element["single-page-data"].imgboxurl);
            document.getElementById("project_img_cover").setAttribute('alt',element.title);

            let pharagraph = document.querySelectorAll('.project-content p');
            for (const [index,item] of element["single-page-data"]["pharagraphs"].entries()) {
                console.log(item);
                pharagraph[index].innerHTML = item;
            }

            let img_detail = document.querySelectorAll('.img-detail img');
            for (const [index,item] of element["single-page-data"]["img-details"].entries()) {
                img_detail[index].setAttribute('src',item);
                img_detail[index].setAttribute('alt',element.title);
            }

            document.getElementById('video_fram').setAttribute('href',element["single-page-data"]["box-videourl"])
            
        }
    });

});

}