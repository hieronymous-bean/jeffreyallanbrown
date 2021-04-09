<template>
<div>
  <div class="waxon_tm_all_wrap">

    <div class="waxon_tm_topbar">
      <div class="container">
        <div class="topbar_inner">
          <div class="logo">
            <a href="/">
              <img class="light" src="../../assets/img/logo.png" alt="jeffreyallanbrown" />
            </a>
          </div>
          <div class="menu">
            <div class="links">
              <ul class="anchor_nav">
                <li v-for="item in menu" :key="item">
                  <a :href="item.url">
                    <span class="first">{{ item.label }}</span>
                    <span class="second">{{ item.label }}</span>
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
              <li v-for="item in menu" :key="item">
                <a :href="item.url">{{ item.label }}</a>
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
              <ion-icon name="heart"></ion-icon>
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

    <div class="waxon_tm_about" id="about">
      <div class="container">
        <div class="about_inner">
          <div class="left">
            <img class="thumbnail" src="../../assets/img/glitch.png" alt="jeffreyallanbrown" />
          </div>
          <div class="right">
            <div class="name">
              <h3>Jeffrey Brown<span class="bg">About</span></h3>
              <span>Full-Stack Web Developer</span>
            </div>
            <div class="text">
              <p>I'm a life-long learner with a passion for trying new things and gaining new skills. Empowered by digital technology, I make use of the resources available to me to teach myself how to build useful tools and to interact with the world around me. I love solving problems, and am perpetually seeking out new opportunities to challenge myself and grow both personally and professionally.</p>
            </div>
            <div class="waxon_tm_button" data-position="left">
              <a href="./docs/resume.pdf" download>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="waxon_tm_portoflio" id="projects">
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

            <li v-for="project in projects" :key="project">
              <div class="list_inner">
                <div class="image">
                  <img :src="`./images/${project.name}.png`" :alt="project.name" />
                  <a class="full_link" :href="project.repository"></a>
                </div>
                <div class="title">
                  <h3><a :href="project.repository">{{ project.name }}</a></h3>
                  <span><a :href="project.repository">{{ project.category }}</a></span>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
    
    <div class="waxon_tm_copyright">
      <div class="container">
        <div class="copyright_inner">
          <ul>
            <li class="wow fadeInDown" data-wow-duration="0.8s">
              <span>JEFFREYALLANBROWN</span>
            </li>
            <li class="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <span>Cleveland Ohio, USA</span>
            </li>
            <li class="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.4s">
              <span><a href="mailto:jeffrey@jeffreyallanbrown.com">jeffrey@jeffreyallanbrown.com</a></span>
              <span><a href="mailto:jeffreybrown7193@gmail.com">jeffreybrown7193@gmail.com</a></span>
            </li>
            <li class="wow fadeInDown" data-wow-duration="0.8s" data-wow-delay="0.6s">
              <div class="social">
                <ul>
                  <li>
                    <a href="#">
                      <span class="first"><img class="svg" src="../../assets/img/svg/github.svg" alt="" /></span>
                      <span class="second"><img class="svg" src="../../assets/img/svg/github.svg" alt="" /></span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>

import menu from '../data/menu.json'
import projects from '../data/projects.json'
import resume from '../../assets/docs/resume.pdf'

import borges from '../../assets/img/projects/borges.png'
import doughnet from '../../assets/img/projects/doughnet.png'
import urchin from '../../assets/img/projects/urchin.png'
import exemplar from '../../assets/img/projects/exemplar.png'


export default {
  data: function () {
    return {
      menu: menu,
      projects: projects
    }
  },
  props: [

  ],
  methods: {

  },
  computed: {

  },
}
</script>
