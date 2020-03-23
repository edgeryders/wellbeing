<template>
 <div class="wrapper" id="projects">
            <h1>{{ $t("projects_title") }}</h1>

 <swiper
            :options="categoryOptions"
            style="clear: both; display: block;"
            class="categories"
          >
            <swiper-slide  class="category_slide"
                v-for="(category, indx) in data"
                :key="indx"
                :index="indx">
           
            <div
                  class="category"
                  :style="{ borderTop: '3px solid #' + category.color }"
                >
                  <a
                    :href="'https://edgeryders.eu/c/' + category.slug"
                    target="_blank"
                  >
                    <div class="category_header">
                      <div
                        v-if="category.uploaded_logo"
                        class="category_logo"
                        :style="{
                          background:
                            'url(https://edgeryders.eu' +
                            category.uploaded_logo.url +
                            ')',
                          border: '3px solid #' + category.color
                        }"
                      ></div>

                      <h3 :style="{ color: '#' + category.color }">
                        {{ category.name }}
                      </h3>
                    </div>
                  </a>

                  <div
                    class="category_description"
                    v-html="
                      category.description
                        .replace(/<\/?p[^>]*>/g, '')
                        .substring(0, 250) + '...'
                    "
                  ></div>

                  <a
                    :href="'https://edgeryders.eu/c/' + category.slug"
                    target="_blank"
                  >
                    <div class="category_info">
                      <p
                        :style="{
                          color: '#' + category.color,
                          border: '1px solid #' + category.color
                        }"
                      >
                        {{ category.topics_all_time }} Topics
                      </p>

                      <p :style="{ color: '#' + category.color }" class="updated">
                        Updated
                        {{ category.topics[0].last_posted_at | formatDate }} by
                        <b>@{{ category.topics[0].last_poster.username }}</b>
                      </p>
                    </div>
                  </a>
                </div>

            </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>

          </swiper>


    </div>
</template>


<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import moment from "moment";

export default {
  data() {
    return {
       categoryOptions: {
        slidesPerView: 3,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            slidesPerColumnFill: "row",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween: 120,
        centeredSlides: true,
            spaceBetween: 30,
            slidesPerColumnFill: "row",
          }
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  props: ['data'],
   filters: {
    formatDate: function(value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  }
};
</script><style type="text/css" lang="scss">
#projects {
  display: flex;
  padding-bottom: 30px;
  padding-top: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .swiper-container {
  width: 93% !important;
}
  .swiper-button-prev {
  top: 12px;
  width: 40px;
  opacity: 0.7;
  height: 50px;
  left: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='%23152637' d='M2.5 23v54c0 11.3 9.2 20.5 20.5 20.5h54c11.3 0 20.5-9.2 20.5-20.5V23c0-11.3-9.2-20.5-20.5-20.5H23A20.5 20.5 0 0 0 2.5 23zm51.3 1.9l15.4 15.4a5.4 5.4 0 0 1 1.6 3.8 5 5 0 0 1-1.6 3.8 5.5 5.5 0 0 1-7.7 0l-6.1-6.1v29.4c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4V41.9L38.4 48a5.5 5.5 0 0 1-7.7 0 5.5 5.5 0 0 1 0-7.7l15.4-15.4a5.5 5.5 0 0 1 7.7 0z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat ;
  background-size: cover;
  transform: rotate(-90deg) scale(.8);
}
  .swiper-button-next {
  top: 12px;
  width: 40px;
    opacity: 0.7;

  height: 50px;
  right: 0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='%23152637' d='M2.5 23v54c0 11.3 9.2 20.5 20.5 20.5h54c11.3 0 20.5-9.2 20.5-20.5V23c0-11.3-9.2-20.5-20.5-20.5H23A20.5 20.5 0 0 0 2.5 23zm51.3 1.9l15.4 15.4a5.4 5.4 0 0 1 1.6 3.8 5 5 0 0 1-1.6 3.8 5.5 5.5 0 0 1-7.7 0l-6.1-6.1v29.4c0 3-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4V41.9L38.4 48a5.5 5.5 0 0 1-7.7 0 5.5 5.5 0 0 1 0-7.7l15.4-15.4a5.5 5.5 0 0 1 7.7 0z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat ;
  background-size: cover;
  transform: rotate(90deg) scale(.8);
}
  h1 {
  float: none;
}
  .categories {
    width: 100%;
    margin-top: -58px;
    height: auto;
    display: inline-block;
    .category {
      height: 355px;
      .category_description {
        font-size: 1.1em;
      }
    }
    .hooper-prev {
      top: 60%;
      left: -45px;
      width: 40px;
      height: 40px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 100 125'%3E%3Cpath d='M36 53v-1l-2-1v-1h-1 1v-1l1-1 1-1 3-3 1-1 3-3 1-1 1-1 4-3v-1l2-2h1l1-2 1-1 2-2 1-1 2-3 4-3 2-3 1-1 1-1 1-1v-1l1-4h-1l-9 8v1l-1 1-1 1-2 2-7 7-11 11-2 3-2 2-2 2-4 3 4 3 3 4 1 1h1l2 2 2 3h1l5 6 7 6 1 1 1 2 1 1v-1 2l3 2v1l3 2 1 1 1 1 2 2 1 1 1 1 1 1v-2-2l-2-3-1-2-3-4-1-1-2-2h-1v-1l-2-1-1-1-2-3-2-1-1-1-4-4-1-1-3-3-1-1-1-1-1-1-4-4zm25-35h-1l1-1v1zm5 69zm-5-69h0zM33 45zm30-31h1-1z'/%3E%3C/svg%3E")
        no-repeat center;
      background-size: contain;
      svg {
        display: none;
      }
    }
    .hooper-next {
      top: 54%;
      right: -42px;
      width: 40px;
      height: 40px;
      background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1' viewBox='0 0 100 125'%3E%3Cpath d='M36 53v-1l-2-1v-1h-1 1v-1l1-1 1-1 3-3 1-1 3-3 1-1 1-1 4-3v-1l2-2h1l1-2 1-1 2-2 1-1 2-3 4-3 2-3 1-1 1-1 1-1v-1l1-4h-1l-9 8v1l-1 1-1 1-2 2-7 7-11 11-2 3-2 2-2 2-4 3 4 3 3 4 1 1h1l2 2 2 3h1l5 6 7 6 1 1 1 2 1 1v-1 2l3 2v1l3 2 1 1 1 1 2 2 1 1 1 1 1 1v-2-2l-2-3-1-2-3-4-1-1-2-2h-1v-1l-2-1-1-1-2-3-2-1-1-1-4-4-1-1-3-3-1-1-1-1-1-1-4-4zm25-35h-1l1-1v1zm5 69zm-5-69h0zM33 45zm30-31h1-1z'/%3E%3C/svg%3E")
        no-repeat center;
      transform: scaleX(-1);
      background-size: contain;
      svg {
        display: none;
      }
    }
    .swiper-button-next {
      right: 0;
    }
    .category_slide {
      display: flex;
      justify-content: center !important;
      align-items: center !important;
      transition: all 0.6s ease;
      &:hover {
        transform: scale(1.01);
        cursor: grab;
      }
      a {
        text-decoration: none;
      }
    }
    .category {
      width: 100% !important;
      padding: 14px;
      border: 2px solid #efefef;
      margin: 120px auto 20px !important;
      float: left;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      height: 320px;
      display: flex;
      position: relative;
      flex-direction: column;
      .category_header {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 3px auto 0;
        padding-top: 0px;
        text-align: center;
        background-position: -10% -20% !important;
        h3 {
          width: 100%;
          margin: 60px 0 0 0;
          line-height: 30px;
          font-size: 1.7em;
        }
      }
      .category_description {
        font-size: 16px;
        margin: 11px 5px 0;
        text-align: left;
      }
      .category_logo {
        width: 60px !important;
        height: 60px !important;
        border-radius: 100px;
        display: block;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        background-color: #fff !important;
        border: 2px solid #ddd;
        position: relative;
        margin: -50px auto;
      }
      .category_info {
        position: absolute;
        bottom: 0;
        height: 50px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 1) 0%,
          rgba(252, 252, 252, 1) 82%,
          rgba(237, 237, 237, 1) 99%,
          rgba(237, 237, 237, 1) 100%
        );

        border-radius: 8px;
        width: 95.5%;
        padding: 0 2% 0 3%;
        left: 0;
        p {
          float: left;
          font-size: 13px;
          margin-top: 5px;
          border-right: 1px solid #efefef;
          padding: 5px 10px 5px;
          &:first-child {
            font-weight: bold;
            border-radius: 5px !important;
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
    .project {
      width: 23%;
      padding: 14px;
      border: 2px solid #efefef;
      margin: 0 1% 2%;
      float: left;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
      height: 250px;
      display: flex;
      .description {
        h3 {
          font-weight: bold;
          color: black;
          font-size: 21px;
          width: 100%;
          border-bottom: 2px solid #ddd;
          padding-bottom: 7px;
          border-radius: 0;
          margin: 0;
        }
        p {
          margin: 7px 0 0 0;
          font-size: 16px;
        }
      }
    }
  }
}

@media (max-width: 860px) {
  .swiper-button-prev {
  display: none;
}
  .swiper-button-next {
display: none;
}
#projects {
  padding: 0px 0 0 !important;
  height: auto !important;
  display: inline-block !important;
.swiper-container {
  width: 100% !important;
  margin-top: 20px !important;
  }
 h1 {

color: RGBA(21, 38, 55, 1.00) !important;
font-size: 8.5vw !important;
 padding-bottom: 60px;
 max-width: 70vw;
 letter-spacing: -1px;
 line-height: 1.3em !important;
 margin: 10vw auto 0px;
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
          left: 26.5vw;
          bottom: 0px;
        }
}

.categories {
      padding-bottom: 0px;

  .category {
  height: auto !important;
  display: inline-block !important;
  width: 80% !important;
  margin: 40px auto 15px !important;
  background: white;
.category_info {
  left: 0px;
  p {
  margin-left: 8px;
}
}
  .category_description {
  margin: 11px 5px 45px !important;
  font-size: 1.05em;
  width: 100%;
}
.updated {
  display: none
}
}
}

}

}
</style>