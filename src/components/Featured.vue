<template>
  <div class="wrapper" id="stories">
          <h1>{{ $t("stories") }}</h1>

          <swiper
            :options="featuredStories"
            style="clear: both; display: block;"
            class="featuredStories"
          >
            <swiper-slide v-for="post in data">
              <div class="featured_post" :class="[post.image_url == null ? 'no-photo' : '']">
                <div
                  class="photo">
                <div class="image_fill" :style="{
                    background: 'url(' + post.image_url + ') no-repeat'
                  }">
                  </div>
                </div>
                <div class="summary">
                  <div class="excerpt-container">
                 <a :href="'https://edgeryders.eu/t/' + post.slug" target="_blank"> <h3>{{ post.title }}</h3></a>
                  <p
                    v-html="post.excerpt.replace(/ *\[[^\]]*]/, '')"
                    class="excerpt"
                  ></p>
                    </div>
                  <ul class="share">
                    <a class="tweet"></a>
                    <a class="fb"></a>
                    <a class="email"></a>
                  </ul>
                  
                  <div class="footer">
                    <p>Posted on {{ post.created_at | formatDate }}</p>
                    <p>{{ post.posts_count }} Comments</p>
                     <a :href="'https://edgeryders.eu/t/' + post.slug" target="_blank">Read more</a>
                  </div>

                </div>
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
      featuredStories: {
        spaceBetween: 120,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            spaceBetween:0,
            slidesPerColumnFill: "row",
          }
        }
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  filters: {
    formatDate: function(value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  },
  props: ['data', 'title']
};
</script>
<style type="text/css" lang="scss">



#stories {
  padding-top: 30px;
  padding-bottom: 0;
  h1 {
    text-align: center;
    color: black;
    width: 80% !important;
    padding: 12px;
    float: none;
    border-bottom: 1px solid #ddd !important;
    margin: 0px auto 20px !important;
    display: block !important;
  }
  .featuredStories {
  .swiper-button-prev, .swiper-button-next {
  top: 40% !important;
}
 .swiper-button-prev {
background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%232c86b8'%2F%3E%3C%2Fsvg%3E") no-repeat;
transform: none !important;
left: 30px;
}
 .swiper-button-next {
background: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%232c86b8'%2F%3E%3C%2Fsvg%3E") no-repeat;
transform: none !important;
right: 30px;
}
    .swiper-slide {
      display: flex;
      align-items: center;
    }
    .featured_post {
      width: 80% !important;
      margin: 0 auto;
      height: auto;
      display: inline-block !important;

      a {
      text-decoration: none;
          color: #2c86b8 !important;

          h3 { 
          color: #2c86b8 !important;
}
}
.excerpt a {
  text-decoration: underline !important

    }
      .footer {
        border-radius: 10px;
        display: inline-flex;
        width: auto !important;
        margin: 5px 0 0 0;
        overflow: hidden;
               box-shadow: 0 1px 0px rgba(0, 0, 0, 0.1);

        p {
          float: left;
          padding: 13px 20px 10px;
          margin: 0;
          height: 100%;
          font-size: .9em;
          background: rgba(0,0,0,0.02);
          border-right: 1px solid #efefef;

        }
           a {
           padding: 13px 20px 10px;
           height: 100%;
          font-size: .9em;
            border: none;
            background: orangered;
            color: white !important;

          }
      }
      .photo {
        width: 33%;
        float: left;
        margin-right: 4%;
        height: 400px;
        background-color: #DFDBE5;
        position: relative;
        overflow: hidden;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
.image_fill {
  width: 100%;
  height: 100%;
  background-size: cover !important;
  position: absolute;
  top: 0;
  left: 0;
}
      }
      .summary {
        width: 63%;
        float: left;
        text-align: left !important;
      }
      h3 {
        font-size: 1.7em;
        font-weight: bold;
        line-height: 1.4em;
        margin: 10px 0 0 0;
        color: black;
        width: 100%;
        text-align: left !important;
      }
      .excerpt {
        font-size: 1.1em;
        margin: 10px 0 0 0;
      }
    }
  }
  .other_stories {
  width: 80%;
  margin: -40px auto 0;
  padding: 0;
  .swiper-wrapper {
    width: 100% !important;
  }
  .swiper-slide {
    width: 31% !important;
    margin: 0% 1.1% 2%;
    .recent_post {
      width: 100% !important;
    }
  }
  h1 {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
}

}

@media (max-width: 860px) {
.section {
  .wrapper#stories {
    h1 {
    margin-top: 14px !important;
}
  .featuredStories {
.featured_post {
margin-bottom: 0 !important;
margin-top: 0px !important;
}
}
}
}


}

</style>