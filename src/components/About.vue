<template>
 <div class="wrapper" id="about" :class="$t('code')">

          <h1>{{ $t("about_us") }}
                    <div class="seperator"></div>
</h1>

          <div class="flex one">
            <div class="er_photo">
              <div class="about_banner">
                <h3>( at least that's some of us.. )</h3>
              </div>
            </div>

            <div class="about">

              <span v-html="$t('about_content_1')">

              </span>
          
              <div class="arrow">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.1 85.9" style="enable-background:new 0 0 43.1 85.9;" xml:space="preserve">
  <path stroke-linecap="round" stroke-linejoin="round" class="st0 draw-arrow" d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1" />
  <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-1" d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58" />
  <path stroke-linecap="round" stroke-linejoin="round" class="draw-arrow tail-2" d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9" />
</svg>
              </div>
            </div>
          </div>

          <div class="flex two">
          
            <div class="about" v-html="$t('about_content_2')">

            </div>

              <div class="left">
              <h3>{{ $t("why") }} <br /><span class='highlight'>{{ $t("matter") }}</span></h3>
              <video
                src="../assets/network.mp4"
                autoplay="true"
                loop
                muted="true"
              ></video>
            </div>

          </div>

    </div>
</template>


<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        wheelControl: false,
        infiniteScroll: true,
        itemsToSlide: 3,
        centerMode: true,
        breakpoints: {
          800: {
          centerMode: false,
          itemsToShow: 3
          }
        }
      },
    };
  },
  components: {
    Hooper,
    HooperNavigation
  },
  props: ['cats'],
};
</script>
<style type="text/css" lang="scss">

@import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');

 #about {
    padding: 40px 65px 20px;
    display: inline-block;
    &.de {
    margin-top: 100px !important;
  }
    .seperator {
    background: url("data:image/svg+xml,%3Csvg width='269' height='14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M246.8 2.5l-17.6-.9-5.8-.1L211 1l-7-.1h-32.3l-12.2.2-13.8.2-22.3.6-13 .3-22.2.9-12.2.5L53 5l-12.3.7-22.9 2-5 .4L3 9.2h-.6a2.3 2.3 0 0 0-1 4c.4.4 1 .7 1.6.7 4-.5 8-1 12-1.3l11-1 12-1 5-.4 18.7-1 11.8-.7 4.8-.2 18.6-.7 11.3-.5L112 7l20.2-.5 11.2-.2 4-.1 20.8-.2 13-.1h22l4.3.2 12.2.3 9.1.3c2.2 0 4.3.2 6.5.3l19 1.1 4.9.4c1.7 0 3.4.2 5.1.4l.8.2c.7.1 1.4 0 2-.3.5-.3 1-.9 1.1-1.5.4-1.3-.4-2.7-1.7-3.1l-3.6-.6-2.4-.2-4.7-.4-9-.5' fill='orangered' fill-rule='evenodd'/%3E%3C/svg%3E") no-repeat;
    background-size: contain;
    width: 80%;
    margin: 0 auto;
    height: 20px;
    overflow: hidden !important;
    position: relative;
    &:after {
    width: 100%;
    height: 20px;
    background: white;
    display: inline-block;
    position: absolute;
    transform: translateX(0);
    top: 0;
    left: 0;
    content: '';
    transition: all 1s ease forwards 1s !important;
  }
  }
     h1 {
        color: orangered; 
        width: 240px;
        font-size: 2.3em !important;
margin: 0 auto 10px;    }
    h2 {
    margin: 0 !important;
  }
  p {
  margin: 10px 0 !important;
      font-size: 1.3em;

}

@keyframes draw {
 to {
    stroke-dashoffset: 0;
  }
}
 
    h1 {
      display: block;
      float: none !important;
      border: none;
      text-align: center;
    }
    .er_photo {
      transform: rotate(-1.2deg);
      float: left;
      flex-basis: 500px
    }
    .about_banner {
      background: url("../assets/edgeryders_group.jpg") no-repeat center 15px
        #f7f8f8;
      background-size: 90%;
      width: 100%;
      margin-top: 20px;
      position: relative;
      height: 250px;
      padding-bottom: 80px;
      padding: 10px;
      &:before,
      &:after {
        z-index: -1;
        position: absolute;
        content: "";
        bottom: 15px;
        left: 10px;
        width: 50%;
        top: 80%;
        max-width: 300px;
        background: #777;
        box-shadow: 0 15px 10px #777;
        transform: rotate(-3deg);
      }
      &:after {
        transform: rotate(3deg);
        right: 10px;
        left: auto;
      }
      h3 {
        position: relative;
        top: 80%;
        color: orangered;
        font-size: 1em;
        font-family: "Permanent Marker", Avenir, Helvetica, Arial, sans-serif;
        left: 0px;
        .highlight {
        background: blue;
      }
      }
    }
    .flex {
      display: inline-flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: auto;
      &.one {
      margin-bottom: 60px;
    }
    &.two {
      padding-bottom: 0px;
      margin-bottom: 0px;
      .about {
      margin: 10px 70px 10px 0px !important;
    }
    }
      .about {
        margin: 10px 0 10px 70px;
        position: relative;
        text-align: left;
        float: left;
        width: 50%;
         .arrow1 {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cpath d='M41.4 62.7a54.5 54.5 0 0 0 16.2 10.1 97 97 0 0 0 13.9 4.3c-5 .9-10 2.3-14.7 4.3-1.7.7 1.4 4.2 2.8 3.6 6.3-2.6 13-4.3 19.8-5 1.9-.2.1-2.9-1.4-3.5l-.3-.5a129 129 0 0 1-8-12.7c-.5-.9-1.5-1.9-2.6-1.9s-.9 1.1-.5 1.8c2.2 3.9 4.6 7.6 7.1 11.3a68.6 68.6 0 0 1-29.2-12.1 56.2 56.2 0 0 1-10.8-12.5A66.6 66.6 0 0 1 23.3 18c-.1-1.1-1.1-2.1-2-2.5-.7-.3-1.8-.5-1.7.6a70.1 70.1 0 0 0 21.8 46.6z' fill='%23000'/%3E%3C/svg%3E")
      no-repeat 0 0;
    width: 200px;
    display: block;
    height: 160px;
    background-size: 100px;
    position: relative !important;
    top: 00px;
    left: 0px;
    transform: rotate(26deg);
  }
      }
      .arrow {
        position: absolute !important;
        top: 100%;
        left: -15%;
        transform: scaleX(-1) rotate(-30deg) !important;
        svg {
  width: 130px;
  height: 130px; 
  margin: 0 auto;
  .draw-arrow {  
    stroke-width: 5;
    stroke: orangered; 
    fill: none;
    stroke-dasharray: 400;
    stroke-dashoffset: 400; 
    &.tail-1 {
      animation-delay: 1.8s;
    }
    &.tail-2 {
      animation-delay: 2s;
    }
  }
}
      }
      h2 {
        color: black;
        margin: 30px 0 10px;
      }
      .left {
        width: 40%;
        float: left;
        video {
          width: 340px !important;
          margin: -20px auto !important;
          display: block;
        }

        h3 {
          border: none;
          font-size: 1.5em;
          margin-top: -20px;
                  font-family: "Permanent Marker", sans-serif;

        }
      }
    }

  }

@keyframes slideup {
  0% {
  transform: translateY(20px);
  opacity: 0;
}
100% {
  transform: translateY(0px);
  opacity: 1;
}

}

  .aos-animate {
  .draw-arrow {
      animation-duration: 2.0s;
    animation-fill-mode: forwards;
    animation-name: draw;
    animation-delay: 1.5s;
}
  .seperator {
  &:after {
     transform: translateX(100%) !important;
    transition: transform .5s ease 1s  !important;

}

}

#about h1 {
animation: slideup 1.5s ease forwards .5s;
opacity: 1;


}
.flex {
  animation: slideup 1.5s ease forwards .5s;
opacity: 0;
&.two {
  animation-delay: 1.3s !important;
  opacity: 0;
}
}
}

@media (max-width: 860px) {
.active {

.flex {
  animation: none !important; 
opacity: 1 !important;
}
}
#about { 
    top: 0px;
    width: 92% !important;
  h1 {
  font-size: 2em !important;
  position: relative; 
  margin-top: 10px;
  margin-bottom: 20px;
}
      .flex {
            display: block !important;
  width: 100%;
  height: auto !important;
  float: none;

    .about {
  width: 84%;
  margin: 0;
  padding: 0 12% 0 8%  !important;

    }
  &.one {
  margin-bottom: 0px;
}
&.two {
  margin-bottom: 0px !important;
  padding-bottom: 0 !important;
  animation: none !important;
  opacity: 1 !important;
  display: inline-block !important;
    .left {
  display: none;
}
.about {
  padding-bottom: 0px !important;
}
}

    .arrow {
    display: none;
  }
  }
}
#about {
      display: block !important;
      position: relative;
padding: 15px 0 0px !important;
p {
  font-size: 1.15em !important;

}
      .er_photo {
        position: relative;
        display: block;
        width: 98%;
        margin: -10px 0 -10px -10px;
        .about_banner {
          margin: 0 0 30px 0;
                  border: 1px solid rgba(0,0,0,0.04);

          height: 155px;
          background-color: white !important;
          h3 {
          display: none;
        }
        }

      }
      #why {
        left: 0%;
        top: -5px;
        height: 100px;
        transform: rotate(-20deg) scaleX(-1) !important;
      }
 
    .why {
      display: inline-block;
      float: none;
     
      .left {
        width: 100%;
        display: inline-block;
        float: none;
        video {
          display: none !important;
        }
      }
    }
    .share_story {
      width: 100% !important;
      margin: 10px auto !important;
    }
       }
  }
</style>