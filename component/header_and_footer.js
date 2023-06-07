


document.getElementById('site-header').innerHTML=`
<div id="site-header-inner" class="main-header">
  <div class="wrap-inner container-fluid">
    <div class="row justify-content-between">
      <div class="col-auto">
        <div class="main-header-logo" id="site-logo">
          <a href="index.html">
            <img
              src="images/top-growth-logo-2-2.png"
              alt="Hamela"
              width="160"
              data-retina="images/top-growth-logo-2-2.png"
              data-width="170"
              data-height="40"
            />
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
              <a href="projects.html" class="menu-main" >Portfilio</a>
             
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
`;

document.getElementById('site-footer').innerHTML=` <!-- Main Footer -->
<section class="tf-section section-main-footer">
    <div class="overlay"></div>
    <div class="container z-index">
        <div class="row">
            <div class="list-footer">
                <div class="widget-about">
                    <div class="logo">
                        <a href="index.html"><img
                                src="images/footer-logo-whit.png"
                                alt
                                width="150" /></a>
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
                            <img src="images/icon/email.png" alt
                                width="40" />
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
</section>`;
 
