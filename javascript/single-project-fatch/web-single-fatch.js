console.log('This is Work');


window.onload = function () {

    let project_info = document.location.href.split('?')[1].split('&');

    let project_id = project_info[0].split('=');
    let project_category = project_info[1].split('=');
    console.log(project_id[1]);
    console.log(project_category[1]);

    if (project_category[1] === "web_development") {


        fetch('json-data/web-projects.json')
            .then(res => res.json()).then(function (data) {
                console.log(data
                );
                fatch_single_project_data(data);
            });

    } else if (project_category[1] === "videos_editing") {

        fetch('json-data/video-projects.json')
            .then(res => res.json()).then(function (data) {
                console.log(data
                );
                fatch_single_project_data(data);
            });
    } else if (project_category[1] === "motion_graphic") {
        fetch('json-data/motion-projects.json')
            .then(res => res.json()).then(function (data) {
                console.log(data
                );
                fatch_single_project_data(data);
            });
    }

    else if (project_category[1] === "digital_marketing") {
        fetch('json-data/digital-projects.json')
            .then(res => res.json()).then(function (data) {
                console.log(data
                );
                fatch_single_project_data(data);
            });
    }

    else if (project_category[1] === "content_market") {
        fetch('json-data/content-projects.json')
            .then(res => res.json()).then(function (data) {
                console.log(data
                );
                fatch_single_project_data(data);
            });
    }else{
        fetch('json-data/branding-projects.json')
        .then(res => res.json()).then(function (data) {
            console.log(data
            );
            fatch_single_project_data(data);
        });
    }







    function fatch_single_project_data(data) {

        data.forEach(element => {
            if (element.id == project_id[1]) {


                //Author Details Edit Information 
                document.getElementById("author_name").innerHTML = element['single-page-data']['author_details']['name'];
                document.getElementById("author_des").innerHTML = element['single-page-data']['author_details']['description'];
                document.getElementById("author_img").setAttribute('src', element['single-page-data']['author_details']['img_url']);
                document.getElementById("author_img").setAttribute('alt', element['single-page-data']['author_details']['name']);
                // Project Details Edit Information 
                document.getElementById("title_span").innerHTML = element.title;
                document.getElementById("subtitle_span").innerHTML = element.subtitle;
                document.getElementById("title").innerHTML = element.title;
                document.getElementById("subtitle").innerHTML = element.subtitle;
                document.getElementById("project_img_cover").setAttribute('src', element["single-page-data"].imgboxurl);
                document.getElementById("project_img_cover").setAttribute('alt', element.title);

                let pharagraph = document.querySelectorAll('.project-content p');
                for (const [index, item] of element["single-page-data"]["pharagraphs"].entries()) {
                    console.log(item);
                    pharagraph[index].innerHTML = item;
                }

                let img_detail = document.querySelectorAll('.img-detail img');
                for (const [index, item] of element["single-page-data"]["img-details"].entries()) {
                    img_detail[index].setAttribute('src', item);
                    img_detail[index].setAttribute('alt', element.title);
                }

                document.getElementById('video_fram').setAttribute('href', element["single-page-data"]["box-videourl"])

            }
        });

    }
}