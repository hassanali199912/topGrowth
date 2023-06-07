try {
  console.log("hello form sgfsgdfgs");

  const REST_API_SPTIPA = "http://localhost:1337";

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  function load_projects_data() {
    fetch(REST_API_SPTIPA + "/api/projectes/?populate=*", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.data == null) {
          document.getElementById(
            "wrapper"
          ).innerHTML = ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
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
        } else {
          console.log("its Work");
          let output = "";
          output += `<h4 class="card-title"><span>Social Media Marketing
          </span></h4> <div id="card-contaner-grid">
          `;

          result?.data.forEach((element) => {
            output += `<div class=" themesflat-portfolio wow fadeInUp pt-2 " data-wow-delay="100ms">
            <div class="project-item">
                <div class="inner">
                    <div class="boxitem">
                        <div class="imgbox" onclick="window.location.href='projects-details.html?id=${
                          element.id
                        }&category=${encodeURIComponent(
              element?.attributes?.categories?.data[0]?.attributes?.category
            )}'">
                            <img src="${
                              REST_API_SPTIPA +
                              element?.attributes?.project_img?.data[0]
                                ?.attributes?.url
                            }" alt="${element?.attributes?.title}">
                            <img class="light" src="${
                              REST_API_SPTIPA +
                              element?.attributes?.project_img?.data[1]
                                ?.attributes?.url
                            }" alt="${element?.attributes?.title}">
                        </div>
                        <div class="box-item-content">
                            <div class="content-box" onclick="window.location.href='projects-details.html?id=${
                              element.id
                            }&category=${encodeURIComponent(
              element?.attributes?.categories?.data[0]?.attributes?.category
            )}'">
                                <h5 class="title">${
                                  element?.attributes?.title
                                }</h6>
                                <h5 class="subtitle">
                                    <a href="projects-details.html?id=${
                                      element.id
                                    }&category=${encodeURIComponent(
              element?.attributes?.categories?.data[0]?.attributes?.category
            )}">${
              element?.attributes?.categories?.data[0]?.attributes?.category
            }.</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
          });
          output += "</div>";
          document.getElementById("digital-market-section").innerHTML = output;
        }
      })
      .catch((error) => {
        document.getElementById(
          "wrapper"
        ).innerHTML = ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
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
  }

  function load_project_details_data() {
    let project_data = window.location.href.split("?")[1].split("&");

    let project_id = project_data[0].split("=")[1];
    let project_category = decodeURIComponent(project_data[1].split("=")[1]);

    fetch(
      REST_API_SPTIPA + `/api/projectes/${project_id}?populate=*`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.data == null) {
          document.getElementById(
            "wrapper"
          ).innerHTML = ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
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
        } else {
          document.getElementById("subtitle_span").innerHTML =
            result?.data?.attributes?.title;
          document.getElementById("title_span").innerHTML = project_category;
          document.getElementById("project_description").innerHTML =
            result?.data?.attributes?.description;

          let img_output = "";
          result?.data?.attributes?.project_img?.data.forEach(
            (element, index) => {
              console.log(REST_API_SPTIPA + element?.attributes?.url);
              console.log(element.attributes.name);
              if (index == 0) {
                img_output += `<div class="carousel-item active">
                    <img src="${
                      REST_API_SPTIPA + element?.attributes?.url
                    }" class="d-block" alt="e${element.attributes.name}">
                  </div>`;
              } else {
                img_output += `<div class="carousel-item">
                <img src="${
                  REST_API_SPTIPA + element?.attributes?.url
                }" class="d-block" alt="${element.attributes.name}">
              </div>`;
              }
            }
          );
          document.getElementById("carousel-inner-imgs").innerHTML = img_output;

          let buttoms_output = "";
          result?.data?.attributes?.project_img?.data.forEach(
            (element, index) => {
              if (index == 0) {
                buttoms_output += ` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${
                  index + 1
                }" style="background-image:url('${
                  REST_API_SPTIPA + element?.attributes?.url
                }') ;"></button>`;
              } else {
                buttoms_output += ` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" aria-current="true" aria-label="Slide ${
                  index + 1
                }" style="background-image:url('${
                  REST_API_SPTIPA + element?.attributes?.url
                }') ;"></button>`;
              }
            }
          );
          document.getElementById("carousel-indicators-buttoms").innerHTML =
            buttoms_output;
        }
      })
      .catch((error) => {
        document.getElementById(
          "wrapper"
        ).innerHTML = ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
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
  }
} catch (error) {
  document.getElementById(
    "wrapper"
  ).innerHTML = ` <header id="site-header" class="header" style="width: 100%; background-color: darkgrey;">
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

// function load_projects_data() {
//   fetch("json-data/digital-data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       let output = "";
//       output += `<h4 class="card-title"><span>Social Media Marketing
//         </span></h4> <div id="card-contaner-grid">
//         `;
//       data.forEach((element) => {
//         output += `<div class=" themesflat-portfolio wow fadeInUp pt-2 " data-wow-delay="100ms">
//             <div class="project-item">
//                 <div class="inner">
//                     <div class="boxitem">
//                         <div class="imgbox">
//                             <img src="${element             element.attributes.project_img.data[0].attributes.urllt="${element["title"]}">
//                             <img class="light" src="${element["imgurls"][1]}" alt="${element["title"]}">
//                         </div>
//                         <div class="box-item-content">
//                             <div class="content-box">
//                                 <h5 class="title">${element["title"]}</h6>
//                                 <h5 class="subtitle">
//                                     <a href="projects-details.html?id=${element["id"]}&category=${element["category"]}">${element["subtitle"]}.</a></h5>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//       });
//       output += "</div>";

//       document.getElementById("digital-market-section").innerHTML = output;
//     });
// }

// function load_project_details_data() {
//   let project_data = window.location.href.split("?")[1].split("&");

//   let project_id = project_data[0].split("=")[1];
//   let project_category = project_data[1].split("=")[1];

//   fetch("json-data/digital-data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       data.forEach((element) => {
//         if (element.id == project_id) {
//           document.getElementById("subtitle_span").innerHTML = element.title;
//           document.getElementById("title_span").innerHTML = element.subtitle;
//           document
//             .getElementById("aother_img")
//             .setAttribute("src", element.author_details.img_url);
//           document.getElementById("author_name").innerHTML =
//             element.author_details.name;
//           document.getElementById("author_description").innerHTML =
//             element.author_details.description;
//           document.getElementById("project_description").innerHTML =
//             element.description;
//           let img_output = "";
//           element.imgurls.forEach((url, index) => {
//             console.log(url);
//             if (index == 0) {
//               img_output += `<div class="carousel-item active">
//                         <img src="${url}" class="d-block" alt="e${element.title}">
//                       </div>`;
//             } else {
//               img_output += `<div class="carousel-item">
//                     <img src="${url}" class="d-block" alt="${element.title}">
//                   </div>`;
//             }
//           });
//           document.getElementById("carousel-inner-imgs").innerHTML = img_output;
//           let buttoms_output = "";
//           element.imgurls.forEach((url, index) => {
//             console.log(url);
//             if (index == 0) {
//               buttoms_output += ` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide ${
//                 index + 1
//               }" style="background-image:url('${url}') ;"></button>`;
//             } else {
//               buttoms_output += ` <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" aria-current="true" aria-label="Slide ${
//                 index + 1
//               }" style="background-image:url('${url}') ;"></button>`;
//             }
//           });
//           document.getElementById("carousel-indicators-buttoms").innerHTML =
//             buttoms_output;
//         }
//       });
//     });
// }
