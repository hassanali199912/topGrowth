window.onload= function () {
fetch('json-data/branding-projects.json')
.then(res => res.json()).then(function(data){
  let output_div="";
for (let index = 0; index < data.length; index+=3) {
  output_div += ` <div class="list-portfolio my-3">`;
  for (let j = index ; j < index + 3; j++) {
      if (j==data.length) {
        break
      }
          output_div +=`<div class="themesflat-portfolio wow fadeInUp" data-wow-delay="${j*100}ms">
          <div class="project-item">
              <div class="inner">
                  <div class="boxitem">
                      <div class="imgbox">
                          <img src="${data[j]['img-dark']}" alt="${data[j]['title']}">
                          <img class="light" src="${data[j]['img-light']}" alt="${data[j]['title']}">
                      </div>
                      <div class="box-item-content">
                          <div class="content-box">
                          <h5 class="title"> ${data[j]['subtitle']}</h5>
                          <h5 class="subtitle">
                                  <a href='works-details/projects-details.html?Project_id=${data[j]['id']}&Project_catrgory=${data[j]['category']}'>${data[j]['title']}</a></h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div><!-- /.themesflat-portfolio -->`;
    
  }
  output_div += ` </div>`;
  
}

  document.getElementById('project-display').innerHTML = output_div;
});

}
