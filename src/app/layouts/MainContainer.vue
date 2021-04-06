<template>
<div>

<!--   <div class="waxon_tm_preloader">
    <div class="spinner_wrap">
      <div class="spinner"></div>
    </div>
  </div> -->

  <div class="waxon_tm_all_wrap">

    <div class="waxon_tm_topbar">
      <div class="container">
        <div class="topbar_inner">
          <div class="logo">
            <a href="#">
              <img class="light" src="../../assets/img/logo.png" alt="jeffreyallanbrown" />
            </a>
          </div>
          <div class="menu">
            <div class="links">
              <ul class="anchor_nav">
                <li v-for="item in navigation" :key="item">
                  <a :href="item.url">
                    <span class="first">{{item.label}}</span>
                    <span class="second">{{item.label}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="waxon_tm_mobile_menu">
      <div class="topbar_inner">
        <div class="container bigger">
          <div class="topbar_in">
            <div class="logo">
              <a href="#"><img src="img/logo/dark.png" alt="" /></a>
            </div>
            <div class="my_trigger">
              <div class="hamburger hamburger--collapse-r">
                <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <div class="container">
          <div class="dropdown_inner">
            <ul class="anchor_nav">
              <li v-for="item in navigation" :key="item">
                <a :href="item.url">{{item.label}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="waxon_tm_hero" id="home">
      <div class="background">
        <div class="leftpart">
        </div>
        <div class="rightpart">
          <div class="inner">
            <div class="image" data-img-url="../../assets/img/bg/black-11.jpg"></div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="content_inner">
            <div class="name">
              <h3 class="stroke">Jeffrey</h3>
              <h3>Brown</h3>
              <span>Full-Stack Web Developer</span>
            </div>
          </div>
          <div class="waxon_tm_down" data-skin="dark" data-position="">
            <div class="line_wrapper">
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /HERO -->
    
    <!-- ABOUT -->
    <div class="waxon_tm_about" id="about">
      <div class="container">
        <div class="about_inner">
          <div class="left">
            <img class="thumbnail" src="https://via.placeholder.com/500" alt="jeffreyallanbrown" />
          </div>
          <div class="right">
            <div class="name">
              <h3>Jeffrey Brown<span class="bg">About</span></h3>
              <span>Full-Stack Web Developer</span>
            </div>
            <div class="text">
              <p>I'm a life-long learner with a passion for trying new things and gaining new skills. Empowered by digital technology, I make use of the resources available to me to teach myself how to build useful tools and to interact with the world around me. I love solving problems, and am perpetually seeking out new opportunities to challenge myself and grow both personally and professionally.</p>
            </div>
            <div class="waxon_tm_button" data-position="right">
              <a href="" download>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /ABOUT -->
    
    <!-- SERVICES -->
    <!-- <div class="waxon_tm_service">
      <div class="container">
        <div class="service_inner">
          <ul class="owl-carousel">
            <li class="item">
              <div class="list_inner">
                <img class="svg" src="img/svg/code.svg" alt="" />
                <div class="details">
                  <h3>Web Development</h3>
                  <p>Web design is a similar process of creation, with the intention of presenting...</p>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="list_inner">
                <img class="svg" src="img/svg/creativity.svg" alt="" />
                <div class="details">
                  <h3>Creative Design</h3>
                  <p>Web design is a similar process of creation, with the intention of presenting...</p>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="list_inner">
                <img class="svg" src="img/svg/telegram.svg" alt="" />
                <div class="details">
                  <h3>Brand Identity</h3>
                  <p>Web design is a similar process of creation, with the intention of presenting...</p>
                </div>
              </div>
            </li>
            <li class="item">
              <div class="list_inner">
                <img class="svg" src="img/svg/photoshop.svg" alt="" />
                <div class="details">
                  <h3>Adobe Photoshop</h3>
                  <p>Web design is a similar process of creation, with the intention of presenting...</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <!-- /SERVICES -->
    
    <!-- PORTFOLIO -->
    <div class="waxon_tm_portoflio" id="portfolio">
      <div class="container">
        <div class="waxon_tm_main_title">
          <div class="title">
            <h3>Featured Projects<span class="bg">Projects</span></h3>
          </div>
          <div class="portfolio_filter">
            <ul>
              <li>
                <a href="#" class="current" data-filter="*">
                  <span class="first">Category</span>
                  <span class="second">Category</span>
                </a>
              </li>
            </ul>
            <div class="wrapper">
              <a href="#"><span class="trigger"></span></a>
            </div>          
          </div>
        </div>
        <div class="portfolio_inner">
          <ul class="gallery_zoom">

            <li v-for="project in projects" :key="project" class="">
              <div class="list_inner">
                <div class="image">
                  <img src="img/portfolio/1-1.jpg" alt="" />
                  <div class="main" data-img-url="img/portfolio/7.jpg"></div>
                  <div class="overlay">
                    <img class="myimage" src="img/youtube.png" alt="" />
                  </div>
                  <a class="full_link popup-youtube" href="https://www.youtube.com/watch?v=iIrSCm_0Sj4"></a>
                </div>
                <div class="title">
                  <h3><a href="#">{{ project.name }}</a></h3>
                  <span><a href="#">YouTube</a></span>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div class="waxon_tm_button" data-position="center">
        <a href="portfolio.html">
          <span>View All Works</span>
        </a>
      </div>
    </div>
    <!-- /PORTFOLIO -->
    
    <!-- PARTNERS -->
    <!-- <div class="waxon_tm_partners">
      <div class="container">
        <div class="partners_inner">
          <ul>
            <li>
              <div class="list_inner">
                <img src="img/partners/1.png" alt="" />
                <a class="full_link" a href="#"></a>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <img src="img/partners/2.png" alt="" />
                <a class="full_link" a href="#"></a>
              </div>
            </li>
            <li>
              <div class="list_inner">
                <img src="img/partners/3.png" alt="" />
                <a class="full_link" a href="#"></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <!-- /PARTNERS -->
    
    <!-- TESTIMONIALS -->
    <!-- <div class="waxon_tm_testimonials">
      <div class="container">
        <div class="waxon_tm_main_title">
          <div class="title">
            <h3>What Clients Say<span class="bg">Testimonial</span></h3>
          </div>
        </div>
        <div class="testi_inner">
          <div class="left">
            <div class="quote_list">
              <ul>
                <li class="active">
                  <img class="svg" src="img/svg/quote-1.svg" alt="" />
                  <p class="text">Good overall template. I am getting back into coding and had a simple question for the author. They responded within 30 minutes and answered my question. Highly recommend.</p>
                  <div class="details">
                    <div class="image">
                      <div class="main" data-img-url="img/about/1.jpg"></div>
                    </div>
                    <div class="short">
                      <h3 class="author"><span>Nelly Furtado</span></h3>
                      <h3 class="job"><span>App Developer</span></h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="image_list">
              <ul class="masonry">
                <li class="active masonry_item">
                  <div class="image">
                    <img src="img/portfolio/3-4.jpg" alt="" />
                    <div class="main" data-img-url="img/about/1.jpg"></div>
                  </div>
                </li>
                <li class="masonry_item">
                  <div class="image">
                    <img src="img/portfolio/4-3.jpg" alt="" />
                    <div class="main" data-img-url="img/about/2.jpg"></div>
                  </div>
                </li>
                <li class="masonry_item">
                  <div class="image">
                    <img src="img/portfolio/1-1.jpg" alt="" />
                    <div class="main" data-img-url="img/about/3.jpg"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- /TESTIMONIALS -->
    
    <!-- NEWS -->
    <!-- <div class="waxon_tm_news" id="news">
      <div class="container">
        <div class="waxon_tm_main_title">
          <div class="title">
            <h3>Latest News<span class="bg">News</span></h3>
          </div>
        </div>
        <div class="news_inner">
          <ul>
            <li>
              <div class="list_inner">
                <div class="image">
                  <img src="img/portfolio/4-3.jpg" alt="" />
                  <div class="main" data-img-url="img/news/1.jpg"></div>
                  <a class="full_link" a href="news-single.html"></a>
                </div>
                <div class="details">
                  <h3 class="title"><a href="news-single.html">What is the Difference between Web and Brand Design</a></h3>
                  <div class="waxon_tm_read_more">
                    <a href="news-single.html">Read More</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <!-- /NEWS -->
    
    <!-- CONTACT -->
    <div class="waxon_tm_contact" id="contact">
      <div class="bg_image"></div>
      <div class="container">
        <div class="contact_inner">
          <div class="waxon_tm_main_title">
            <div class="title">
              <h3>Get in Touch<span class="bg">Contact</span></h3>
            </div>
          </div>
          <div class="desc">
            <p>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
          </div>
          <div class="wrapper">
            <div class="left">
              <div class="fields">
                <form action="/" method="post" class="contact_form" id="contact_form">
                  <div class="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                  <div class="empty_notice"><span>Please Fill Required Fields</span></div>
                  <div class="first">
                    <ul>
                      <li>
                        <input id="name" type="text" placeholder="Name">
                      </li>
                      <li>
                        <input id="email" type="text" placeholder="Email">
                      </li>
                    </ul>
                  </div>
                  <div class="last">
                    <textarea id="message" placeholder="Message"></textarea>
                  </div>
                  <div class="waxon_tm_button" data-position="left">
                    <a id="send_message" href="#">
                      <span>Send Message</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div class="right">
              <div class="map_wrap">
                <div class="map" id="ieatmaps"></div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <!-- /CONTACT -->
    
    <!-- COPYRIGHT -->
    <div class="waxon_tm_copyright">
      <div class="container">
        <div class="copyright_inner">
          <ul>
            <li class="wow fadeInDown" data-wow-duration="0.8s">
              <span>WAXON</span>
              <span>PORTFOLIO TEMPLATE</span>
            </li>
            <li class="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <span>Brook 103,</span>
              <span>90021 New York, USA</span>
            </li>
            <li class="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <span><a href="#">hi@waxon.com</a></span>
              <span>+77 033 442 55 57</span>
            </li>
            <li class="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.6s">
              <div class="social">
                <ul>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="img/svg/social/facebook.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="img/svg/social/facebook.svg" alt="" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="img/svg/social/twitter.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="img/svg/social/twitter.svg" alt="" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="img/svg/social/instagram.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="img/svg/social/instagram.svg" alt="" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="img/svg/social/soundcloud.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="img/svg/social/soundcloud.svg" alt="" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="img/svg/social/youtube.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="img/svg/social/youtube.svg" alt="" /></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="img/svg/social/vk.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="img/svg/social/vk.svg" alt="" /></span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- /COPYRIGHT -->
    
    <!-- CURSOR -->
    <div class="mouse-cursor cursor-outer"></div>
    <div class="mouse-cursor cursor-inner"></div>
    <!-- /CURSOR -->
  </div>
</div>
</template>

<script>

import menu from '../data/menu.json'
import portfolio from '../data/projects.json'

export default {
  data: function () {
    return {
      navigation: menu,
      projects: portfolio
    }
  },
  props: [

  ],
  methods: {

  },
  computed: {
    ProcessMenu: function() {

    }
  }
}
</script>
