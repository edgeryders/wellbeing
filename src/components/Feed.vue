<template>
 <swiper :options="stories_options" class="slides_stories">
      <swiper-slide>
        <div class="testimonial">
          <div class="speech-bubble">
            <a
              href="https://edgeryders.eu/t/dlaczego-zostalam-edukatorka-seksualna/9857/6"
              >what to do about sex education in Poland?
            </a>
            <ul class="share">
              <a class="tweet"></a>
              <a class="fb"></a>
              <a class="email"></a>
            </ul>
          </div>
          <div class="user">
            <a href="https://edgeryders.eu/u/pwawrzynczyk/summary"
              ><img
                src="https://edgeryders.eu/letter_avatar_proxy/v3/letter/p/67e7ee/90.png"
            /></a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="testimonial">
          <div class="speech-bubble">
            how to be OK outside of traditional Church values
            <a
              href="https://edgeryders.eu/t/da-li-u-21-veku-mozemo-govoriti-o-nacionalnom-kodu-ili-samo-o-pojedinacnom/10105"
              >in Serbia and the former Yugoslav space</a
            >
            <ul class="share">
              <a class="tweet"></a>
              <a class="fb"></a>
              <a class="email"></a>
            </ul>
          </div>
          <div class="user">
            <a href="https://edgeryders.eu/u/Savana"
              ><img
                src="https://edgeryders.eu/letter_avatar_proxy/v3/letter/s/87869e/90.png"
            /></a>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="testimonial">
          <div class="speech-bubble">
            <a
              href="https://edgeryders.eu/t/lekaruv-pacient-nebo-pacientuv-lekar/"
              target="_blank"
              >what do you risk going to the doctor, as a Czech?</a
            >
            <ul class="share">
              <a class="tweet"></a>
              <a class="fb"></a>
              <a class="email"></a>
            </ul>
          </div>
          <a href="https://edgeryders.eu/u/jirka_kocian/summary">
            <div class="user">
              <img
                src="https://edgeryders.eu/user_avatar/edgeryders.eu/jirka_kocian/240/9877_2.png"
              />
            </div>
          </a>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="testimonial">
          <div class="speech-bubble">
            <a
              href="https://edgeryders.eu/t/care-for-the-neighborhood-don-t-complain-and-do-it-yourself/10078"
              >how do people find the energy to volunteer and take care of their
              neighborhood?</a
            >
            <ul class="share">
              <a class="tweet"></a>
              <a class="fb"></a>
              <a class="email"></a>
            </ul>
          </div>
          <div class="user">
            <a href="https://edgeryders.eu/u/emily/summary"
              ><img
                src="https://edgeryders.eu/letter_avatar_proxy/v3/letter/e/8c91f0/90.png"
            /></a>
          </div>
        </div>
      </swiper-slide>
    </swiper>
</template>


<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";


export default {
  data() {
    return {
      stories_options: {
        speed: 25000,
        resistance: false,
        freeMode: true,
        spaceBetween: 30,
        freeModeMomentum: true,
        pauseOnEnter: false,
        slidesPerView: 4,
        loop: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        }
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  props: ['data'],
};
</script>
<style type="text/css" lang="scss">
     .slides_stories {
      display: block;
      padding-top: 60px;
      width: 100%;
      left: 0vw;
    }

    
.speech-bubble {
  position: relative;
  color: white !important;
  background: #001021;
  border-radius: 0.4em;
  font-size: 1.15em;
  font-weight: bold;
  padding: 20px;
  display: inline-block;
  padding-bottom: 60px;
  width: 100%;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #1b2939;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
  .share {
    position: absolute;
    bottom: 0;
    padding: 0px 5px;
    width: 100%;
    background: #1b2939;
    border-radius: 0 0 0.4em 0.4em;
    height: 40px;
    left: 0;
    a {
      border-right: 0.4px solid rgba(255, 255, 255, 0.2);
      width: 50px;
      height: 40px;
      float: left;
      &.tweet {
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M24 4.6c-1 .4-1.9.6-2.9.7a5 5 0 0 0 2.2-2.7c-1 .6-2 1-3.1 1.2-1-1-2.2-1.6-3.6-1.6a5 5 0 0 0-4.8 6 14 14 0 0 1-10.2-5c-.4.7-.6 1.5-.6 2.4a5 5 0 0 0 2.2 4.1c-.8 0-1.6-.2-2.3-.6A5 5 0 0 0 5 14a5 5 0 0 1-2.2 0 5 5 0 0 0 4.6 3.5 9.9 9.9 0 0 1-7.3 2 14 14 0 0 0 7.6 2.3c9 0 14-7.5 14-14V7A10 10 0 0 0 24 4.6z'/%3E%3C/svg%3E")
          no-repeat center;
        background-size: 20px;
      }
      &.fb {
        background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fab' data-icon='facebook-square' class='svg-inline--fa fa-facebook-square fa-w-14' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='white' d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137V328h-63v-72h63v-55c0-62 37-96 94-96 27 0 55 5 55 5v61h-31c-31 0-40 19-40 38v47h69l-11 72h-58v152h137a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'/%3E%3C/svg%3E")
          no-repeat center;
        background-size: 18.5px;
        width: 50px;
      }
      &.email {
        background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='envelope' class='svg-inline--fa fa-envelope fa-w-16' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='white' d='M502 191c4-3 10 0 10 5v204c0 27-21 48-48 48H48c-26 0-48-21-48-48V196c0-5 6-8 10-5l154 114c21 15 56 47 92 47s72-33 92-47l154-114zM256 320c23 0 57-29 73-41 133-97 143-105 174-129 6-5 9-12 9-19v-19c0-26-22-48-48-48H48C22 64 0 86 0 112v19c0 7 3 14 9 19 31 24 41 32 174 129 16 12 50 41 73 41z'/%3E%3C/svg%3E")
          no-repeat center;
        background-size: 20px;
        width: 53px;
      }
    }
  }
}

.testimonial {
  display: inline-block;
  width: 100% !important;
  a {
    text-decoration: none !important;
    color: white;
  }
  .user {
    display: flex;
    width: auto !important;
    align-items: center;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      margin: 0 5px auto !important;
    }
    p {
      font-size: 15px !important;
      height: 12px;
      text-decoration: none !important;
      display: inline-block;
      margin: -10px 0 0 10px !important;
      align-items: center;
    }
  }
}
</style>