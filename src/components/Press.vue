<template>
 <div class="wrapper" id="press">
            <h1>{{ $t("press") }}</h1>

 <hooper :settings="pressSettings" class="categories">
              <slide
                class="press_slide"
                v-for="(mention, indx) in data"
                :key="indx"
                :index="indx"
              >
                <div
                  class="mention"
                >
                  <a
                    :href="mention.source"
                    target="_blank"
                  >
                    <img :src="getImg(mention.logo)" />
                  </a>
                </div>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>

    </div>
</template>


<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import moment from "moment";

export default {
  data() {
    return {
      pressSettings: {
        itemsToShow: 1,
        wheelControl: false,
        infiniteScroll: true,
        itemsToSlide: 1,
        infiniteScroll: true,
        transition: 200,
                autoPlay: true,
        playSpeed: 2000,
        transition: 2500,
        breakpoints: {
          800: {
            itemsToShow: 4,
            itemsToSlide: 4
            
          }
        }
      },
    };
  },
  methods: {
 getImg(value) {
      return require("../assets/press/" + value);
      // The path could be '../assets/img.png', etc., which depends on where your vue file is
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  props: ['data']
};
</script><style type="text/css" lang="scss">

#press {
text-align: center;
height: auto;
display: flex;
padding-top: 60px !important;
padding-bottom: 40px !important;
justify-content: center;
flex-direction: column;
  .mention {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 300px;
    border-right: 1px solid #ddd;
    img {
      width: 70%;
      margin: 0px auto;
    }
    &#Di,
    &#OpenGov {
      img {
        width: 35%;
      }
    }
    &#Nesta {
      img {
        width: 55%;
      }
    }
    &#IlSole {
      img {
        width: 65%;
      }
    }
  }
    h3 {
      font-size: 1.8em !important;
      margin: 20px 0 60px;
    }
    .hooper {
      height: 200px !important;
      margin-top: 30px;
      width: 80% !important;
      margin: 0 auto !important;
    }
    .press_slide {
      .mention {
        height: 200px;
      }
    }
    .hooper-navigation {
     .hooper-prev {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='%23152637' d='M2.5 23v54c0 11.3 9.2 20.5 20.5 20.5h54c11.3 0 20.5-9.2 20.5-20.5V23c0-11.3-9.2-20.5-20.5-20.5H23A20.5 20.5 0 0 0 2.5 23zm51.3 1.9l15.4 15.4a5.4 5.4 0 0 1 1.6 3.8 5 5 0 0 1-1.6 3.8 5.5 5.5 0 0 1-7.7 0l-6.1-6.1v29.4c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4V41.9L38.4 48a5.5 5.5 0 0 1-7.7 0 5.5 5.5 0 0 1 0-7.7l15.4-15.4a5.5 5.5 0 0 1 7.7 0z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat 0px 0px;
  background-size: 100%;
        left: -50px;
  top: 40%;
  transform: rotate(-90deg) scale(1.3);
  svg {
  display: none
}
}
 .hooper-next {
  right: -50px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='%23152637' d='M2.5 23v54c0 11.3 9.2 20.5 20.5 20.5h54c11.3 0 20.5-9.2 20.5-20.5V23c0-11.3-9.2-20.5-20.5-20.5H23A20.5 20.5 0 0 0 2.5 23zm51.3 1.9l15.4 15.4a5.4 5.4 0 0 1 1.6 3.8 5 5 0 0 1-1.6 3.8 5.5 5.5 0 0 1-7.7 0l-6.1-6.1v29.4c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4V41.9L38.4 48a5.5 5.5 0 0 1-7.7 0 5.5 5.5 0 0 1 0-7.7l15.4-15.4a5.5 5.5 0 0 1 7.7 0z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat 0px 0px;
  background-size: 100%;
  top: 40%;
  transform: rotate(90deg) scale(1.3);
    svg {
  display: none
}
}

    }
  }

  @media (max-width: 860px) {

#press {
  margin-bottom: 0 !important;
  padding-bottom: 20px !important;
  padding-top: 20px !important;
  h1 {
  font-size: 1.6em !important;
}
    .hooper-navigation {
    display: none;
  .hooper-prev {
  left: -40px !important;
}
.hooper-next {
  right: -40px;
}
}
  .mention {
    border-right: none !important;
    width: 100%;
    img {
    width: 85%;
  }

}
.hooper {
  width: 100% !important;
}
}
}

</style>