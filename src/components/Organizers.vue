<template>
  <div class="wrapper" id="organisers">
      <h1>{{ $t("organisers") }}</h1>

      <div class="grid">
        <div class="table">
            <div
              v-for="(organiser, index) in data"
              class="bio element2"
              :class="{ active: activeTab === index }"
              :style="{
                background: 'url(' + organiser.avatar + ') no-repeat #000'
              }"
              @click="
                activeTab = index;
                slide = !slide;
              "
            >
              <h3>{{ organiser.name }}</h3>
            </div>
        </div>
        <div class="sidebar" :class="{ active: slide }">
          <div class="mobile_nav" @click="slide = !slide">< Go back</div>
          <h2><a :href="'https://edgeryders.eu/u/' + data[activeTab].username" target="_blank">{{ data[activeTab].name }}</a></h2>
          <p class="byline">{{ data[activeTab].byline }}</p>
          <p>{{ data[activeTab].bio }}</p>
        </div>
      </div>

 <swiper
            :options="featuredStories"
            style="clear: both; display: block;"
            class="organiserSwiper"
          >
            <swiper-slide v-for="(organiser, index) in data">
              <div class="featured_organiser">
                <div class="organiser_name">
                  <div class="avatar" :style="{
                background: 'url(' + organiser.avatar + ') no-repeat'
              }">
            </div>
                <h4><a :href="'https://edgeryders.eu/u/' + organiser.username" target="_blank"> {{organiser.name }}</a></h4>
              </div>
             <p class="bio"> {{organiser.bio
              }} </p>
              </div>
            </swiper-slide>
          </swiper>


    </div>
</template>


<script>

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      featuredStories: {
        spaceBetween: 120,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      activeBio: null,
      activeKey: null,
      activeTab: 0,
      slide: false
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  props: ['data'],
};
</script>
<style type="text/css" lang="scss">

 #organisers {
  padding-top:60px;
  h1 {
  text-align: left;
  display: block;
  width: 100%;
  float: none;
  margin: 30px 10px 20px 40px;
}
  .organiserSwiper {
  display: none !important
}
#title {
  text-align: left !important;
  padding-left: 15px;

}
  .grid {
    display: inline-block;
    width: 96%;
  }
  .sidebar {
    flex-basis: 40%;
    flex-shrink: 0;
    margin: 1% 0 0 2% !important;
    align-self: flex-start;
    flex-grow: 0;
    margin-top: 0px;
    border-radius: 10px;
    padding: 0px 0 20px 0;
    border: 3px solid #efefef;
    overflow: hidden;
.mobile_nav {
  display: none
}
    h2 {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(246, 246, 246, 1) 91%,
        rgba(237, 237, 237, 1) 100%
      );
      padding: 12px 12px 12px 23px !important;
      margin-top: 0px;
      text-align: left;
      a {
      color: #2c3e50;
      padding-right: 38px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='%232c3e50' d='M59 33c-2-3-6-3-8 0-2 2-2 5 0 7l4 4H31c-3 0-5 3-5 6s2 5 5 5h24l-4 4c-2 3-2 6 0 8l4 2 4-2 14-13c2-3 2-6 0-8L59 33z'/%3E%3Cpath fill='%232c3e50' d='M74 3H26C13 3 3 13 3 26v48c0 13 10 23 23 23h48c13 1 23-10 23-23V26C99 13 88 3 75 3zm12 71c0 7-5 12-12 12H26c-7 0-12-5-12-12V26c0-7 5-12 12-12h48c7 0 12 5 12 12v48z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat;
      background-position: 95% 6.2px !important;
      background-size: 20px;
      letter-spacing: -1px;
      text-decoration: none !important;
    }
    }

    p {
      margin: 0 20px;
      text-align: left;
      clear: both;
      float: none;
      &.byline {
        display: inline-block;
        float: left;
        width: 90%;
        font-size: 1.2em;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
        text-align: left;
        padding-bottom: 10px;
        margin: 0px 20px 15px !important;
      }
    }

    &.active {

    }
  }
  .table {
    padding-top: 10px;
    display: inline-block;
    width: 47%;
    margin-right: 2%;
    float: left;
    .bio {
width: 23%; 
float: left;
margin: 0 1% 2.6% !important;
      height: 10vw;
      -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
      filter: grayscale(100%);
      background-size: cover !important;
      background-position: center !important;
      border-radius: 10px;
      overflow: hidden;
position: relative;
      &.active {
        -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%);
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
border: none !important;
      }
      &:hover {
      }
      &:hover {
        cursor: pointer;
      }
      h3 {
        position: absolute;
        bottom: -14px;
        background: rgba(0, 0, 0, 0.8);
        width: 96%;
        color: white;
        font-size: 12px;
        height: auto;
        padding: 4px 2% 7px;
      }
      &.no_avatar {
        background: #000;
        -webkit-filter: none; /* Safari 6.0 - 9.0 */
        filter: none;
        h3 {
          height: 120px;
          background: none;
          color: white;
          text-align: left;
          padding: 0 15px 0 20px;
          width: 80%;
          line-height: 25px !important;
          font-size: 1.35em;
        }
      }
      &.active {
      }
    }
  }
}

  @media (max-width: 860px) {
    .organiserSwiper {
  display: inline-block !important
}
  .section .wrapper#organisers {
  margin: 0 auto !important;
  width: 86% !important;
  padding: 2% 2%  !important;
h1 {
color: RGBA(21, 38, 55, 1.00) !important;
font-size: 1.5em !important;
display: block;
width: 90%;
 padding-bottom: 65px;
text-align: center;
margin: 20px auto 0px !important;
 position: relative;
        &:after {
          width: 50px;
          height: 50px;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cg color='%23000'%3E%3Cpath fill='%23fff' d='M45 20c-5 0-9 4-9 9v24.3c-1.5-2-3.1-3.5-5-4-2.6-.7-5 .2-6.5 1.1-1.9 1.5-3.6 2.7-4.2 5.1-.6 2.3-.2 4.7 1 7.6A126.6 126.6 0 0 0 40.6 97a3 3 0 0 0 2.3 1h27a3 3 0 0 0 1.8-.6c3.1-2.3 5.5-6 7.4-10.5 2-4.4 3.5-9.5 4.2-14.5.8-5 .9-10-.3-14-1.1-4.2-4.2-7.9-8.8-8.4l-2.2.2c-.6-1.1-1.4-2-2.3-2.7A8 8 0 0 0 65 46c-1 0-2 .4-2.9.9l-1-1.3a8.2 8.2 0 0 0-7-1.3V29c0-5-4-9-9-9zm0 6a3 3 0 0 1 3 3v21a3 3 0 0 0 2.3 3 3 3 0 0 0 3.4-1.7c1.1-1.4 2.2-1.4 3.7-.9.3.3.6.4.6 1.6 0 1.3 1 2.6 2.3 3a3 3 0 0 0 3.4-1.7c.8-1.6 1.3-1.4 2.6-.9.5.3.7.5.7 1.6a3 3 0 0 0 1.8 2.7 3 3 0 0 0 3.2-.5s1.4-.4 1.8-.2c1.9.3 2.8 1.3 3.6 4 .8 2.8.8 7 .1 11.5-.7 4.4-2 9-3.8 13a23 23 0 0 1-5 7.5H44.5C38.9 84.4 26 64 26.1 57.1c.8-1.3 2-2.2 3.3-2 1.6.8 2 1.6 3 3.3l4 8a3 3 0 0 0 3.3 1.5A3 3 0 0 0 42 65V29a3 3 0 0 1 3-3z' overflow='visible' style='text-indent:0;text-transform:none;block-progression:tb'/%3E%3Cpath fill='%23fff' d='M25.9 2.9l-9 9c-.5.4-.9 1.3-.9 2 0 .9.2 1.6.9 2.2l9 9c1 1.2 3.2 1.1 4.4.1 1.2-1 1-3.3-.2-4.3l-3.9-4h37.6l-3.9 4c-1.2 1-1.4 3.3-.2 4.3s3.4 1.1 4.4 0l9-9a3.1 3.1 0 0 0 0-4.3l-9-9c-1-1-3.2-1.3-4.3-.2-1.2 1.2-1.1 3.3.1 4.4l3.9 3.9H26.2L30.1 7c1.2-1 1.3-3.2.2-4.4-1.4-1-3-.8-4.4.2z' overflow='visible' style='text-indent:0;text-transform:none;block-progression:tb'/%3E%3C/g%3E%3C/svg%3E")
            no-repeat center 73% RGBA(21, 38, 55, 0.4);
          border-radius: 100px;
          content: "";
          background-size: 26px !important;
          position: absolute;
          left: 33vw;
          bottom: 0px;
        }
}
}
.featured_organiser {
  background: #fff;
  width: 95%;
  margin: 20px auto 30px;
  border-radius: 10px;
  padding-bottom: 10px;
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
  .bio {
  text-align: left;
  width: 85%;
  margin: 15px auto;
}
  .organiser_name {
  width: 100%;

  background: RGBA(21, 38, 55, 1.00);
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: center;
   border-radius: 10px 10px 0 0;
   overflow: hidden;
  .avatar {
  width: 54px;
  height: 57px;
  margin-right: 15px;
  float: left;
  background-size: cover !important;
}
h4 {
  float: left;
  text-align: left;
  color: white;
    margin: 2px 0 0 0 !important;

  font-size: 1.3em !important;
  a {
    color: white;
text-decoration: none;
&:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='white' d='M58.3 33a4.2 4.2 0 0 0-5.9 0 4.2 4.2 0 0 0 0 5.9l6.9 6.9H30.6c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2h28.7l-6.9 6.9a4.2 4.2 0 0 0 0 5.9c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l14-14.1a4.2 4.2 0 0 0 0-5.9L58.3 33z'/%3E%3Cpath fill='white' d='M74.6 2.5H25.4A23 23 0 0 0 2.5 25.4v49.2a23 23 0 0 0 22.9 22.9h49.2a23 23 0 0 0 22.9-22.9V25.4A23 23 0 0 0 74.6 2.5zm14.5 72.1c0 8-6.5 14.5-14.5 14.5H25.4c-8 0-14.5-6.5-14.5-14.5V25.4c0-8 6.5-14.5 14.5-14.5h49.2c8 0 14.5 6.5 14.5 14.5v49.2z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat center 30%;
    background-size: 22px !important;
}
}
}
}
  
}
 #organisers {
  padding-top: 140px !important;
  padding-bottom: 0 !important;
   .grid {
  display: none !important
}

.organiserSwiper {
  display: block !important;
 height: auto;
}

}

}

</style>