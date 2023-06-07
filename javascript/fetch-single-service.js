try {
  
  const REST_API_SPTIPA = "http://localhost:1337";
  
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  function load_single_services() {
  
    var isFound = false;
      const lastWord = window.location.href.split(".").pop();
      if (lastWord != "html") {
        const service = window.location.href.split("?")[1].split("=")[1];
        fetch(REST_API_SPTIPA + "/api/services/?populate=*", requestOptions)
          .then((response) => response.json())
          .then((response) => {
            const {data} = response;
            data.forEach(element => {
              const {category} = element.attributes;
              if (category?.data?.attributes?.category == service) {
                isFound = true;
                const {name,main_description,sub_description ,service_img :{
                  data :{
                    attributes :{
                      url
                    }
                  }
                },service_icons :{
                  data :{
                    attributes :{
                      url :icon_url
                    }
                  }
                }} = element.attributes;
                console.log(name);
  
              console.log(main_description);
              console.log(sub_description);
              console.log(REST_API_SPTIPA+ url);
              console.log(REST_API_SPTIPA+ icon_url);
  
              document.getElementsByClassName('service_name')[0].innerHTML =  name;
              document.getElementsByClassName('service_name')[1].innerHTML =  name;
              document.getElementById('service_description').innerHTML =  main_description;
  
              document.getElementById('service_icons').setAttribute('src',`${REST_API_SPTIPA+icon_url}`);
              document.getElementById('service_img').setAttribute('src',`${REST_API_SPTIPA+url}`);
  
                var output_text = '';
                sub_description.split('.').forEach(sub_text =>{
                  output_text += ` <p class="text-1">${sub_text}</p>`
                });
                console.log(output_text);
  
              document.getElementById('sub_description').innerHTML = output_text;
             
  
              }
  
            });
  

            if(!isFound){
              document.getElementById('wrapper').innerHTML =  ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
              <div id="site-header-inner" class="main-header">
                <div class="wrap-inner container-fluid">
                  <div class="row justify-content-between">
                    <div class="col-auto">
                      <div class="main-header-logo" id="site-logo">
                        <a href="index.html">
                          <img src="images/top-growth-logo-2-2.png" alt="Hamela" width="160"
                            data-retina="images/top-growth-logo-2-2.png" data-width="170" data-height="40" />
                        </a>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="mobile-button">
                        <span></span>
                      </div>
                      <!-- /.mobile-button -->
                      <nav id="main-nav" class="main-nav">
                        <ul id="menu-primary-menu" class="menu">
                          <li class="menu-item menu-item-has-children">
                            <a class="menu-main " href="index.html">Home</a>
                          </li>
                          <li class="menu-item menu-item-has-children">
                            <a class="menu-main" href="about.html">About</a>
                          </li>
                          <li class="menu-item menu-item-has-children">
                            <a class="menu-main" href="service.html">Services</a>
                            <ul class="sub-menu">
                              <li class="menu-item current-item">
                                <a href="single-service.html?service=web_development">Web Development</a>
                              </li>
                              <li class="menu-item current-item">
                                <a href="single-service.html?service=social_media_marketing">Digital Markting</a>
                              </li>
                              <li class="menu-item current-item">
                                <a href="single-service.html?service=Branding_Identity">Branding</a>
                              </li>
            
                              <li class="menu-item current-item">
                                <a href="single-service.html?service=video_editing">Video Editing </a>
                              </li>
            
            
                            </ul>
                          </li>
                          <li class="menu-item menu-item-has-children">
                            <a href="projects.html" class="menu-main">Portfilio</a>
            
                          </li>
                          <li class="menu-item menu-item-has-children">
                            <a class="menu-main" href="internships.html">Internships</a>
                          </li>
                          <li class="menu-item menu-item-has-children">
                            <a class="menu-main" href="contact.html">Let's talk</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div class="col-auto">
                      <div class="main-header-contact">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </header>
            <!-- Section Work -->
            <section class="error-section tf-section section-work style-2 style-3 s1">
              <div class="container">
                <div class="row">
                  <div class="col error_div">
                    <h1>404</h1>
                    <h3>Opps</h3>
                    <p>We're Sorry, it looks like something wrong with server or the page that you lokking for isn't in our
                      system, <a href="index.html" class="prime">BACK TO HOME</a></p>
                  </div>
                </div>
            
            
              </div>
            </section>
            <footer class="footer" id="site-footer">
              <!-- Main Footer -->
              <section class="tf-section section-main-footer">
                <div class="overlay"></div>
                <div class="container z-index">
                  <div class="row">
                    <div class="list-footer">
                      <div class="widget-about">
                        <div class="logo">
                          <a href="index.html"><img src="images/footer-logo-whit.png" alt width="150" /></a>
                        </div>
                        <h6 class="text">
                          We create , plan and manage
                          top-performing digital campaigns for any
                          type of business to lead it towards its
                          goals and help it grow by offering
                          services tailored to your needs,
                          handling everything from A to Z
                        </h6>
                        <div class="location">
                          <div class="icon-location">
                            <img src="images/icon/email.png" alt width="40" />
                          </div>
                          <p class="title">Email Adrress</p>
                          <p class="info">hello.topgrowth@gmail.com</p>
                        </div>
                      </div>
                      <div class="widget-link v1">
                        <h6 class="widget-title">About Us</h6>
                        <ul class="list-wrap">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="projects.html">Our Projects</a></li>
                          <li><a href="service.html">Our Services</a></li>
                          <li><a href="teams.html">Our Team</a></li>
                        </ul>
                      </div>
                      <div class="widget-link v2">
                        <h6 class="widget-title">Portfilio </h6>
                        <ul class="list-wrap">
                          <li><a href="works-details/web-projects/web-projects.html">Web
                              Development</a></li>
                          <li><a href="works-details/digital-projects/digital-projects.html">Digital
                              Markting</a></li>
                          <li><a href="works-details/branding-projects/branding-projects.html">Branding</a></li>
            
                          <li><a href="works-details/video-projects/video-projects.html">Video
                              Editing</a></li>
                          <li><a href="works-details/content-projects/content-projects.html">Content
                              Market</a></li>
                        </ul>
                      </div>
                      <div class="widget-link v3">
                        <h6 class="widget-title">Support</h6>
                        <ul class="list-wrap">
                          <li><a href="service.html">Get Started</a></li>
                          <li><a href="contact.html">Contact Us</a></li>
                          <li><a href="internships.html">Join With
                              Us</a></li>
            
                        </ul>
                      </div>
            
                    </div>
                  </div>
                </div>
              </section>
              <!-- Bottom Footer -->
              <section class="bottom-footer">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="copyright">
                        <p>Copywright by <span>@TopGrowth</span>
                          Rights Reserved</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="flat-text-right">
                        <ul class="list">
                          <li class="li"><a href="#">Privacy</a></li>
                          <li class="li"><a href="#">Terms &
                              Conditions</a></li>
                          <li class="li"><a href="#">Blog</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </footer>
            
                  `;
            }
          })
          .catch((error) => {
            console.log(error);
            document.getElementById('wrapper').innerHTML =  ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
  <div id="site-header-inner" class="main-header">
    <div class="wrap-inner container-fluid">
      <div class="row justify-content-between">
        <div class="col-auto">
          <div class="main-header-logo" id="site-logo">
            <a href="index.html">
              <img src="images/top-growth-logo-2-2.png" alt="Hamela" width="160"
                data-retina="images/top-growth-logo-2-2.png" data-width="170" data-height="40" />
            </a>
          </div>
        </div>
        <div class="col-auto">
          <div class="mobile-button">
            <span></span>
          </div>
          <!-- /.mobile-button -->
          <nav id="main-nav" class="main-nav">
            <ul id="menu-primary-menu" class="menu">
              <li class="menu-item menu-item-has-children">
                <a class="menu-main " href="index.html">Home</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="about.html">About</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="service.html">Services</a>
                <ul class="sub-menu">
                  <li class="menu-item current-item">
                    <a href="single-service.html?service=web_development">Web Development</a>
                  </li>
                  <li class="menu-item current-item">
                    <a href="single-service.html?service=social_media_marketing">Digital Markting</a>
                  </li>
                  <li class="menu-item current-item">
                    <a href="single-service.html?service=Branding_Identity">Branding</a>
                  </li>

                  <li class="menu-item current-item">
                    <a href="single-service.html?service=video_editing">Video Editing </a>
                  </li>


                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="projects.html" class="menu-main">Portfilio</a>

              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="internships.html">Internships</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="contact.html">Let's talk</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-auto">
          <div class="main-header-contact">
          </div>
        </div>
      </div>
    </div>
  </div>

</header>
<!-- Section Work -->
<section class="error-section tf-section section-work style-2 style-3 s1">
  <div class="container">
    <div class="row">
      <div class="col error_div">
        <h1>404</h1>
        <h3>Opps</h3>
        <p>We're Sorry, it looks like something wrong with server or the page that you lokking for isn't in our
          system, <a href="index.html" class="prime">BACK TO HOME</a></p>
      </div>
    </div>


  </div>
</section>
<footer class="footer" id="site-footer">
  <!-- Main Footer -->
  <section class="tf-section section-main-footer">
    <div class="overlay"></div>
    <div class="container z-index">
      <div class="row">
        <div class="list-footer">
          <div class="widget-about">
            <div class="logo">
              <a href="index.html"><img src="images/footer-logo-whit.png" alt width="150" /></a>
            </div>
            <h6 class="text">
              We create , plan and manage
              top-performing digital campaigns for any
              type of business to lead it towards its
              goals and help it grow by offering
              services tailored to your needs,
              handling everything from A to Z
            </h6>
            <div class="location">
              <div class="icon-location">
                <img src="images/icon/email.png" alt width="40" />
              </div>
              <p class="title">Email Adrress</p>
              <p class="info">hello.topgrowth@gmail.com</p>
            </div>
          </div>
          <div class="widget-link v1">
            <h6 class="widget-title">About Us</h6>
            <ul class="list-wrap">
              <li><a href="about.html">About Us</a></li>
              <li><a href="projects.html">Our Projects</a></li>
              <li><a href="service.html">Our Services</a></li>
              <li><a href="teams.html">Our Team</a></li>
            </ul>
          </div>
          <div class="widget-link v2">
            <h6 class="widget-title">Portfilio </h6>
            <ul class="list-wrap">
              <li><a href="works-details/web-projects/web-projects.html">Web
                  Development</a></li>
              <li><a href="works-details/digital-projects/digital-projects.html">Digital
                  Markting</a></li>
              <li><a href="works-details/branding-projects/branding-projects.html">Branding</a></li>

              <li><a href="works-details/video-projects/video-projects.html">Video
                  Editing</a></li>
              <li><a href="works-details/content-projects/content-projects.html">Content
                  Market</a></li>
            </ul>
          </div>
          <div class="widget-link v3">
            <h6 class="widget-title">Support</h6>
            <ul class="list-wrap">
              <li><a href="service.html">Get Started</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="internships.html">Join With
                  Us</a></li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- Bottom Footer -->
  <section class="bottom-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="copyright">
            <p>Copywright by <span>@TopGrowth</span>
              Rights Reserved</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="flat-text-right">
            <ul class="list">
              <li class="li"><a href="#">Privacy</a></li>
              <li class="li"><a href="#">Terms &
                  Conditions</a></li>
              <li class="li"><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</footer>

      `;
          });
      } else {
        
        console.log("no services included");
        document.getElementById('wrapper').innerHTML =  ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
        <div id="site-header-inner" class="main-header">
          <div class="wrap-inner container-fluid">
            <div class="row justify-content-between">
              <div class="col-auto">
                <div class="main-header-logo" id="site-logo">
                  <a href="index.html">
                    <img src="images/top-growth-logo-2-2.png" alt="Hamela" width="160"
                      data-retina="images/top-growth-logo-2-2.png" data-width="170" data-height="40" />
                  </a>
                </div>
              </div>
              <div class="col-auto">
                <div class="mobile-button">
                  <span></span>
                </div>
                <!-- /.mobile-button -->
                <nav id="main-nav" class="main-nav">
                  <ul id="menu-primary-menu" class="menu">
                    <li class="menu-item menu-item-has-children">
                      <a class="menu-main " href="index.html">Home</a>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a class="menu-main" href="about.html">About</a>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a class="menu-main" href="service.html">Services</a>
                      <ul class="sub-menu">
                        <li class="menu-item current-item">
                          <a href="single-service.html?service=web_development">Web Development</a>
                        </li>
                        <li class="menu-item current-item">
                          <a href="single-service.html?service=social_media_marketing">Digital Markting</a>
                        </li>
                        <li class="menu-item current-item">
                          <a href="single-service.html?service=Branding_Identity">Branding</a>
                        </li>
      
                        <li class="menu-item current-item">
                          <a href="single-service.html?service=video_editing">Video Editing </a>
                        </li>
      
      
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="projects.html" class="menu-main">Portfilio</a>
      
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a class="menu-main" href="internships.html">Internships</a>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a class="menu-main" href="contact.html">Let's talk</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-auto">
                <div class="main-header-contact">
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </header>
      <!-- Section Work -->
      <section class="error-section tf-section section-work style-2 style-3 s1">
        <div class="container">
          <div class="row">
            <div class="col error_div">
              <h1>404</h1>
              <h3>Opps</h3>
              <p>We're Sorry, it looks like something wrong with server or the page that you lokking for isn't in our
                system, <a href="index.html" class="prime">BACK TO HOME</a></p>
            </div>
          </div>
      
      
        </div>
      </section>
      <footer class="footer" id="site-footer">
        <!-- Main Footer -->
        <section class="tf-section section-main-footer">
          <div class="overlay"></div>
          <div class="container z-index">
            <div class="row">
              <div class="list-footer">
                <div class="widget-about">
                  <div class="logo">
                    <a href="index.html"><img src="images/footer-logo-whit.png" alt width="150" /></a>
                  </div>
                  <h6 class="text">
                    We create , plan and manage
                    top-performing digital campaigns for any
                    type of business to lead it towards its
                    goals and help it grow by offering
                    services tailored to your needs,
                    handling everything from A to Z
                  </h6>
                  <div class="location">
                    <div class="icon-location">
                      <img src="images/icon/email.png" alt width="40" />
                    </div>
                    <p class="title">Email Adrress</p>
                    <p class="info">hello.topgrowth@gmail.com</p>
                  </div>
                </div>
                <div class="widget-link v1">
                  <h6 class="widget-title">About Us</h6>
                  <ul class="list-wrap">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="projects.html">Our Projects</a></li>
                    <li><a href="service.html">Our Services</a></li>
                    <li><a href="teams.html">Our Team</a></li>
                  </ul>
                </div>
                <div class="widget-link v2">
                  <h6 class="widget-title">Portfilio </h6>
                  <ul class="list-wrap">
                    <li><a href="works-details/web-projects/web-projects.html">Web
                        Development</a></li>
                    <li><a href="works-details/digital-projects/digital-projects.html">Digital
                        Markting</a></li>
                    <li><a href="works-details/branding-projects/branding-projects.html">Branding</a></li>
      
                    <li><a href="works-details/video-projects/video-projects.html">Video
                        Editing</a></li>
                    <li><a href="works-details/content-projects/content-projects.html">Content
                        Market</a></li>
                  </ul>
                </div>
                <div class="widget-link v3">
                  <h6 class="widget-title">Support</h6>
                  <ul class="list-wrap">
                    <li><a href="service.html">Get Started</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="internships.html">Join With
                        Us</a></li>
      
                  </ul>
                </div>
      
              </div>
            </div>
          </div>
        </section>
        <!-- Bottom Footer -->
        <section class="bottom-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="copyright">
                  <p>Copywright by <span>@TopGrowth</span>
                    Rights Reserved</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="flat-text-right">
                  <ul class="list">
                    <li class="li"><a href="#">Privacy</a></li>
                    <li class="li"><a href="#">Terms &
                        Conditions</a></li>
                    <li class="li"><a href="#">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      
            `;
      }
   
  }
  
  window.onload =  load_single_services();
  
}catch(error){
  document.getElementById('wrapper').innerHTML =  ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
  <div id="site-header-inner" class="main-header">
    <div class="wrap-inner container-fluid">
      <div class="row justify-content-between">
        <div class="col-auto">
          <div class="main-header-logo" id="site-logo">
            <a href="index.html">
              <img src="images/top-growth-logo-2-2.png" alt="Hamela" width="160"
                data-retina="images/top-growth-logo-2-2.png" data-width="170" data-height="40" />
            </a>
          </div>
        </div>
        <div class="col-auto">
          <div class="mobile-button">
            <span></span>
          </div>
          <!-- /.mobile-button -->
          <nav id="main-nav" class="main-nav">
            <ul id="menu-primary-menu" class="menu">
              <li class="menu-item menu-item-has-children">
                <a class="menu-main " href="index.html">Home</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="about.html">About</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="service.html">Services</a>
                <ul class="sub-menu">
                  <li class="menu-item current-item">
                    <a href="single-service.html?service=web_development">Web Development</a>
                  </li>
                  <li class="menu-item current-item">
                    <a href="single-service.html?service=social_media_marketing">Digital Markting</a>
                  </li>
                  <li class="menu-item current-item">
                    <a href="single-service.html?service=Branding_Identity">Branding</a>
                  </li>

                  <li class="menu-item current-item">
                    <a href="single-service.html?service=video_editing">Video Editing </a>
                  </li>


                </ul>
              </li>
              <li class="menu-item menu-item-has-children">
                <a href="projects.html" class="menu-main">Portfilio</a>

              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="internships.html">Internships</a>
              </li>
              <li class="menu-item menu-item-has-children">
                <a class="menu-main" href="contact.html">Let's talk</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-auto">
          <div class="main-header-contact">
          </div>
        </div>
      </div>
    </div>
  </div>

</header>
<!-- Section Work -->
<section class="error-section tf-section section-work style-2 style-3 s1">
  <div class="container">
    <div class="row">
      <div class="col error_div">
        <h1>404</h1>
        <h3>Opps</h3>
        <p>We're Sorry, it looks like something wrong with server or the page that you lokking for isn't in our
          system, <a href="index.html" class="prime">BACK TO HOME</a></p>
      </div>
    </div>


  </div>
</section>
<footer class="footer" id="site-footer">
  <!-- Main Footer -->
  <section class="tf-section section-main-footer">
    <div class="overlay"></div>
    <div class="container z-index">
      <div class="row">
        <div class="list-footer">
          <div class="widget-about">
            <div class="logo">
              <a href="index.html"><img src="images/footer-logo-whit.png" alt width="150" /></a>
            </div>
            <h6 class="text">
              We create , plan and manage
              top-performing digital campaigns for any
              type of business to lead it towards its
              goals and help it grow by offering
              services tailored to your needs,
              handling everything from A to Z
            </h6>
            <div class="location">
              <div class="icon-location">
                <img src="images/icon/email.png" alt width="40" />
              </div>
              <p class="title">Email Adrress</p>
              <p class="info">hello.topgrowth@gmail.com</p>
            </div>
          </div>
          <div class="widget-link v1">
            <h6 class="widget-title">About Us</h6>
            <ul class="list-wrap">
              <li><a href="about.html">About Us</a></li>
              <li><a href="projects.html">Our Projects</a></li>
              <li><a href="service.html">Our Services</a></li>
              <li><a href="teams.html">Our Team</a></li>
            </ul>
          </div>
          <div class="widget-link v2">
            <h6 class="widget-title">Portfilio </h6>
            <ul class="list-wrap">
              <li><a href="works-details/web-projects/web-projects.html">Web
                  Development</a></li>
              <li><a href="works-details/digital-projects/digital-projects.html">Digital
                  Markting</a></li>
              <li><a href="works-details/branding-projects/branding-projects.html">Branding</a></li>

              <li><a href="works-details/video-projects/video-projects.html">Video
                  Editing</a></li>
              <li><a href="works-details/content-projects/content-projects.html">Content
                  Market</a></li>
            </ul>
          </div>
          <div class="widget-link v3">
            <h6 class="widget-title">Support</h6>
            <ul class="list-wrap">
              <li><a href="service.html">Get Started</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="internships.html">Join With
                  Us</a></li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- Bottom Footer -->
  <section class="bottom-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="copyright">
            <p>Copywright by <span>@TopGrowth</span>
              Rights Reserved</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="flat-text-right">
            <ul class="list">
              <li class="li"><a href="#">Privacy</a></li>
              <li class="li"><a href="#">Terms &
                  Conditions</a></li>
              <li class="li"><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</footer>

      `;
};

