<template>
  <div class="home">
    <Nav v-on:slide="slideTo" :navItems="$t('navigation')" />

      <div class="section fp-auto-height" id="one introduction">
        <div v-if="postsLoading">
         <Loader />
        </div>
        <div v-else data-aos="fade-in">
        <Hero
          :categories="wellbeingCategory[0].topics_all_time"
          :users="users.length"
        />
       </div>
      </div>

      <div class="section" id="two stories">
        <div v-if="featuredLoading">
        </div>
        <div v-else data-aos="fade-in">
        <Featured :data="allFeatured"  />
      </div>
      </div>

      <div class="section" id="three">
      <div v-if="postsLoading">
        </div>
        <div v-else data-aos="fade-in">
        <Stories :data="allPosts" />
      </div>
      </div>

      <div class="section" id="four">
        <div id='edgeryders'>
        <About data-aos="fade-in" />
      </div>
      </div>

      <div class="section" id="five">
        <Action />
      </div>

      <div class="section fp-auto-height" id="six">
                  <div v-if="catsLoading">
</div>
<div v-else data-aos="fade-in">
        <Projects :data="categories" />
      </div>
      </div>

      <div class="section fp-auto-height" id="seven">
        <Press :data="press" />
      </div>

      <div class="section fp-auto-height" id="eight organisers">
        <Organizers :data="bios" />
      </div>

  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import moment from "moment";

import Nav from "@/components/Navigation.vue";
import AnimatedLogo from "@/components/AnimatedHeader.vue";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

import Loader from "@/components/Loader.vue";
import Hero from "@/components/Hero.vue";
import Featured from "@/components/Featured.vue";
import Stories from "@/components/Stories.vue";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Press from "@/components/Press.vue";
import Action from "@/components/Action.vue";
import Organizers from "@/components/Organizers.vue";
import Feed from "@/components/Feed.vue";

import matthiasProfile from '../assets/matthias_ansorg.jpg'
import mikolajProfile from '../assets/mikolaj_szwarc.jpeg'
import ameliaProfile from '../assets/amelia_hassoun.jpg'
import askaProfile from '../assets/aska_bednarczyk.jpeg'
import janProfile from '../assets/jan_kubik.jpg'
import jirkaProfile from '../assets/jirka_kocian.jpg'
import richardProfile from '../assets/richard_mole.jpg'


export default {
  name: "polish",
  data() {
    return {
      matthiasProfile,
      mikolajProfile,
      ameliaProfile,
      askaProfile,
      janProfile,
      jirkaProfile,
      richardProfile,
      options: {
        scrollOverflow: true,
        paddingTop: '70px',
        touchSensitivity: 20,
        normalScrollElements: '.element2',
      },
      allFeatured: null,
      allPosts: null,
      wellbeingCategory: null,
      featuredLoading: false,
      postsLoading: false,
      catsLoading: false,
      categories: null,
      press: [
        {
          title: "DIY and Open Source care solutions",
          outlet: "IlSole",
          date: "7 May 2017",
          source:
            "http://nova.ilsole24ore.com/progetti/soluzioni-di-cura-in-co-design/",
          logo: "ilsole24ore.png",
          excerpt:
            "Whether it is a ramp for disabled people or self-produced insulin, OpenCare's projects arise from collaboration between users and innovators"
        },
        {
          title: "DIY and Open Source care solutions",
          outlet: "Nesta",
          date: "11 April 2016",
          source: "http://www.nesta.org.uk/blog/era-development-mutants",
          logo: "nesta.png",
          excerpt:
            "Social movements led by self-organising citizens are becoming the cutting edge of development. Establishing effective partnerships with them requires abandoning much of the implicit paternalism that informs development work"
        },
        {
          title:
            "Eleven tips for councils on thinking creatively about adult social care",
          outlet: "The Guardian",
          date: "28 April 2014",
          source:
            "https://www.theguardian.com/local-government-network/2014/apr/28/eleven-tips-councils-thinking-creatively-adult-social-care",
          logo: "guardian.jpg",
          excerpt:
            "They have brought together a whole range of people mainly (but not all!) young and radical. They are doing some incredible work there. Am sorely tempted to head off there and alter the age demographic."
        },
        {
          title:
            "Can Monasteries Be a Model for Reclaiming Tech Culture for Good?",
          outlet: "The Nation",
          date: "27 August 2014",
          source:
            "https://www.thenation.com/article/can-monasteries-be-model-reclaiming-tech-culture-good/",
          logo: "nation.png",
          excerpt:
            "What united [Edgeryders] was not a political ideology, but the dead-end conditions of austerity and the hope of figuring out better ways forward."
        },
        {
          title:
            "Eleven tips for councils on thinking creatively about adult social care",
          outlet: "The New Yorker",
          date: "27 April 2015",
          source:
            "https://www.newyorker.com/magazine/2015/04/27/a-cave-with-a-view",
          logo: "newyorker.jpg",
          excerpt:
            "a group of self-described 'civic hackers' who run a 'social clinic' that embeds 'skilled individuals within communities that could benefit from their presence'."
        },
        {
          title: "When hacktivists live like monks",
          outlet: "Krautreporter",
          date: "12 November 2014",
          source:
            "https://krautreporter.de/111--wenn-hacktivisten-wie-monche-leben",
          logo: "krautreporter.png",
          excerpt:
            "..steps towards solving the major problems plaguing small towns such as Matera: massive land run-off, reduction of social services in the wake of European austerity measures, and not least unused housing stock."
        },
        {
          title: "Mutiny at UnMonastery, coworking in the land of Edgeryders",
          outlet: "Mutinerie",
          date: "11 November 2013",
          source:
            "http://magazine.mutinerie.org/edgeryders-unmonastery-coworking/",
          logo: "mutinerie.png",
          excerpt:
            "..an agile organization of individuals pooling know-how and professional networks at the service of social innovation."
        },
        {
          title:
            "Care by communities: non-zero sum provision of health and social care",
          outlet: "Re:publica",
          date: "4 May 2016",
          source:
            "https://16.re-publica.de/16/session/care-communities-non-zero-sum-provision-health-and-social-care",
          logo: "republica.png",
          excerpt:
            "We explore amazing care services that communities are providing - right now - to people that the state and private business have let down."
        },
        {
          title: "The unMonastery: a commune for the internet age",
          outlet: "Dazed",
          date: "25 November 2014",
          source:
            "http://www.dazeddigital.com/artsandculture/article/22717/1/the-unmonastery-a-commune-for-the-internet-age",
          logo: "dazed.png",
          excerpt:
            "Edgeryders built an Internet commune in Matera, a city similar to Petra in Jordan. They are both among the oldest inhabited settlements in the world."
        },
        {
          title:
            "UNDP Innovation Facility driving multiple projects in Indonesia through broad partnerships",
          outlet: "OpenGov",
          date: "18 July 2017",
          source:
            "http://www.opengovasia.com/articles/7815-undp-innovation-facility-driving-multiple-projects-in-indonesia-through-broad-partnerships",
          logo: "opengov.png",
          excerpt:
            "Edgeryders is a leading innovation partner of UNDP for testing new ways of working."
        },
        {
          title:
            "'No patriarchy. No hierarchy. No God.' - unMonastery is a monastery for tech utopians",
          outlet: "Wired",
          date: "29 January 2015",
          source:
            "https://www.wired.de/collection/life/das-kommt-heraus-wenn-tech-utopisten-ein-kloster-grunden",
          logo: "wired.png",
          excerpt: ""
        },
        {
          title: "New Thinker's Dream Government",
          outlet: "Di",
          date: "10 April 2014",
          source:
            "http://www.di.se/artiklar/2014/4/10/nytankarens-dromregering/",
          logo: "di.png",
          excerpt:
            "Our co-founder Nadia EL-Imam was named Minister of Labour in an ideal government for Sweden in the country's leading financial newspaper."
        },
        {
          title: "La Politica Tecnologica",
          outlet: "HuffPost",
          date: "4 June 2013",
          source:
            "http://www.huffingtonpost.it/andrea-latino/la-politica-tecnologica_b_3382521.html",
          logo: "huffpost.jpg",
          excerpt:
            "Now imagine those data available to ministries, entrusted to qualified young people of our best faculties, and listening to citizens through massive open collaboration, on the model of the European Edgeryders project."
        }
      ],
      bios: [
        {
          name: "Natalia Skoczylas",
          username: "natalia_skoczylas",
          avatar:
            "https://edgeryders.eu/user_avatar/edgeryders.eu/natalia_skoczylas/240/9860_2.png",
          byline: "Community Organiser, Edgeryders",
          bio:
            "Natalia Skoczylas is a political scientist by training, deeply interested in politics, equality, solidarity, social justice, feminism, contemporary art, and libre technologies. She is a community mobilizer at Edgeryders, a storyteller (OpenCare, POPRebel and others) and event producer (LOTE, Open Village, Culture Culture). She works independently in various fields: artistic curator and organiser at Endlich festival in Berlin, artist at Biennale of Design Ljubljana 2019, music critic and freelance journalist, project manager, cultural worker (independent event producer for Tektura squat in Lublin, communication for CODES festival in Lublin and Biennale of Design Ljubljana), museum curator (Music Instruments Museum in Indonesia), advisor (Artist Run Alliance), speaker and trainer."
        },
        {
          name: "Noemi Salantiu",
          username: "noemi",
          avatar:
            "https://edgeryders.eu/user_avatar/edgeryders.eu/noemi/240/4_2.png",
          byline: "Co-Founder and Community Manager, Edgeryders",
          bio:
            "A social scientist by education, for the longest time I wanted to stay and possibly work in my own country. I was one of the last 'Romanian patriots'. Too curious about the world and drawn by places with freedom and diversity, I decided to leave and keep two homes in two different countries. My work in Edgeryders, a network organisation of over 5000 members, allows me to build and grow relationships everywhere I go, keep an open mind, and still have the place where I can 'always go back'."
        },
        {
          name: "Maria Euler",
          username: "MariaEuler",
          avatar:
            "https://edgeryders.eu/user_avatar/edgeryders.eu/mariaeuler/240/9955_2.png",
          byline: "Community Manager, Edgeryders",
          bio:
            "Interdisciplinary artist and design researcher as well as a community manager for edgeryder with a background in physics, fine art and a Master in Information Experience Design from the Royal Collge of Art. She searches for points of connection and entry, between disciplines, complex scientific concepts, discussion, emotional and tangible experiences and people. She worked with the Helen Hamlyn Centre for Inclusive Design and the Financial Education startup Gimi as a researcher and UX Designer. She also was part of multiple successful art-science collaborations as for example with the Bristol Laboratory for Quantum Computing and exhibited interactive installations at venues and festivals across Europe such as Sonar+D, I-Gem and VrSci. Her goal is to enable different approaches and connections to increase the diversity and creativity of the discourse on art, science and technology."
        },
        {
          name: "John Coate",
          username: "johncoate",
          avatar:
            "https://edgeryders.eu/user_avatar/edgeryders.eu/johncoate/240/9859_2.png",
          byline: "Co-Director and Community Manager, Edgeryders",
          bio:
            "John was employee number two at The WELL, where he was instrumental in creating the online community that Wired Magazine called the “world’s most influential”. There he was the first to work as what is now known as an “online community manager” and he wrote the first treatise on building online community. He co-founded the first major news website, sfgate.com, which today has more than thirty million monthly visitors and more than 340K Twitter followers. He was the online manager of a teen social network and game site that had thousands of members. He managed a regional media organisation that combined terrestrial radio and the internet in innovative ways. Through it all the core of his community knowledge comes from direct personal experience living and working with others who are consciously building lasting relationships as the building blocks of community."
        },
        {
          name: "Maria Asavei",
          username: "mariaalinaasavei",
          avatar:
            "https://edgeryders.eu/user_avatar/edgeryders.eu/mariaalinaasavei/240/10457_2.png",
          byline:
            "Lecturer and Scientist-in-charge, Institute of International Studies, Charles University﻿",
          bio:
            "I’m here because I’m deeply interested in how communities produce particular knowledge or clusters of knowledge, which would be difficult to find elsewhere. It is experiential knowledge in the sense that it emerges from interaction with others. I am also interested in the participatory platform as I want to understand how communities work in a truly participatory manner – how they collaborate as a group and how this can be fostered, while avoiding pre-contested ideas about the definition of populism or why people are attracted to these ideas"
        },
        {
          name: "Mikołaj Szwarc",
          username: "Mikoman",
          avatar: mikolajProfile,
          bio:
            "I try to take my life myth seriously as little as possible. Unfortunately, it does NOT work out too much, as a result of which my spine and knees hurt. My fiancée would say that it is from excess calories (beer and chips) and lack of exercise, but I think that it is from excess calorie thoughts, which is why I try hard to follow a proper diet. Miracle diet. That's why I believe in miracles the most. I also believe that one day I will lose weight so much that I will disappear. At least my EGO will disappear. What I wish you and us."
        },
        {
          name: "Jirka Kocian",
          username: "jirka_kocian",
          avatar: jirkaProfile,
          bio:
            "An ethnographer and community manager for the Czech Republic. Studying and teaching at Charles University, Prague. I am very much interested in music and I’ve been doing music my whole life, still being an active musician at the moment. I can feel that political division emerges in the sphere of underground music as well…"
        },
        {
          name: "Richard Mole",
          username: "",
          avatar: richardProfile,
          bio:
            "Professor of Political Sociology at UCL School of Slavonic and East European Studies. Richard is interested in a community building approach to research, and he’s with us as an ethnographer and coordinator for the German community"
        },
         {
          name: "Aśka Bednarczyk",
          username: "",
          avatar: askaProfile,
          bio:
            "An activist from Lublin who has recently moved to Warsaw - she is now working for the Congress of Women and one of the elements of her work are visits to various parts of Mazovia and meetings with women activists. Aśka is also a veteran of the cultural scene in Lublin and has organised concerts, festivals, meetings. 'Demakijaż', the only feminist film festival in Poland, is one of her most important ideas and successfully growing projects."
        },
        {
          name: "Amelia Hassoun",
          username: "amelia",
          avatar: ameliaProfile,
          bio:
            "An anthropologist with a research focus on the social impacts of digital technologies. Has extensive ethnographic research experience both online and offline, in both public and private sector, focusing on the power of participatory communities to facilitate transparent, efficient solutions to public problems."
        },
        {
          name: "Matthias Ansorg",
          username: "matthias",
          avatar: matthiasProfile,
          bio:
            "A social innovator and digital entrepreneur who has studied alternative value measurement and non-monetary economic exchange mechanisms extensively. Matthias has built the edgeryders.eu online platform."
        },
        {
          name: "Jan Kubik",
          username: "",
          avatar: janProfile,
          bio:
            "Professor at UCL School of Slavonic and East European Studies. As an anthropologist, I am trying to figure out how people’s understandings of the world influence their political affiliations and actions."
        },
      ]
    };
  },
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  },
  methods: {
     changeLocale(locale) {
        this.i18n.locale = locale;  
    },
    slideTo: function(slide) {
      this.$refs.fullpage.api.moveTo(slide);
    },
    getPosts() {
          this.postsLoading = true
          
          axios.get("https://api.particip.io/get-data?endpoint=https://edgeryders.eu/c/wellbeing/pl")
              .then(({ data }) => {
                  this.users = data.users;

                   function sortPosts(postsdata) {
                return postsdata.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
            }

             this.allPosts = sortPosts(data.topic_list.topics);
                  this.postsLoading = false

              })
              .catch(err => this.postsLoading = false)
      },
      getCategories() {
          this.catsLoading = true
          
          axios.get("https://api.particip.io/get-data?endpoint=https://edgeryders.eu/categories")
              .then(({ data }) => {
                  this.catsLoading = false

          this.wellbeingCategory = data.category_list.categories.filter(
            function(e) {
              return (e.name == "Wellbeing in Europe");
            }
          );

          let categoryArray = data.category_list.categories.filter(
            function(e) {
              return (
                e.name !== "Campfire" &&
                e.name !== "Workspaces" &&
                e.name !== "Knowledge Collection" &&
                e.name !== "Documentation & Support"
              );
            }
          );

          function sortCats(catdata) {
            return catdata.sort((a, b) =>
            a.topics[0].last_posted_at < b.topics[0].last_posted_at ? 1 : -1
            );
          }

          this.categories = sortCats(categoryArray);

              })
              .catch(err => this.catsLoading = false)
      },
      getFeatured() {
          this.featuredLoading = true
          
          axios.get("https://api.particip.io/get-data?endpoint=https://edgeryders.eu/tags/webcontent-wellbeing-featured-polish")
              .then(({ data }) => {
                  this.featuredLoading = false

                   function sortPosts(postsdata) {
                return postsdata.sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
            }

                  this.allFeatured = sortPosts(data.topic_list.topics);

              })
              .catch(err => this.featuredLoading = false)
      }
  },
   created: function () {
    this.$i18n.locale = 'pl';
      this.getPosts();
      this.getCategories();
      this.getFeatured();
  },
  components: {
    Loader,
    Nav,
    Hero,
    About,
    Featured,
    Stories,
    Press,
    Action,
    Projects,
    Organizers,
    AnimatedLogo,
    swiper,
    swiperSlide,
    Hooper,
    HooperNavigation,
    Slide
  }
};
</script>
