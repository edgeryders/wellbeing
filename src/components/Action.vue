<template>
 <div class="wrapper" id="take_action">

          <div class="share_story">
            <h1>{{ $t("why_title") }}</h1>

            <div class="about" v-html="$t('why_content')">

              
            </div>
          </div>

    </div>
</template>


<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import moment from "moment";

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
    Slide,
    HooperNavigation
  },
  props: ['data'],
   filters: {
    formatDate: function(value) {
      return moment(String(value)).format("MM/DD/YYYY");
    }
  }
};
</script><style type="text/css" lang="scss">
#take_action {
padding-top: 0;
width: 100%;
padding: 0px 0 0 !important;
display: flex !important;
justify-content: center !important;
align-items: center !important;
}
    .share_story {
      background: rgba(0, 0, 0, 0.02);
      padding: 20px 40px;

      border-radius: 10px;
      width: 60%;
      display: block;
      opacity: 0;
      position: relative;
      padding-bottom: 40px;
      border: 1px solid #efefef;
      border-bottom: 1px solid rgba(255,255,255,.4);

      margin: 90px auto 0 !important;
      transform: rotate(17deg) translateY(100px);
transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) .2s;
transform: rotate(-.5deg) translateY(0px);
opacity: 1;
      h1 {
        border: none;
        color: orangered;
        display: block;
        width: 100%;
        margin: 0 auto 0px !important;
        background: none;
        padding-bottom: 10px;
      }
      p {
      font-size: 1.2em;
      text-align: left;
    }
    .call_to_action {
    margin: 0 auto !important;
    float: none !important;
    position: absolute;
    bottom: -15px;
    left: 0%;
    padding-left: 20px !important;
  }
      .about {
        h1 {
          float: left !important;
          width: 40%;
          color: black;
          margin: 10px 20px 40px 0 !important;
        }
        a {
          float: left;
          width: 200px;
          margin-top: 0px !important;
        }
      }
    }


  @media (max-width: 860px) {
  #take_action {
  height: auto !important;
  display: block !important;
  background:  url("../assets/doodle.png") orangered no-repeat;
  background-size: 320px;
  background-position: center -30px;
  margin: 0px auto 0 !important;
border-radius: 10px;
  width: 94%;
  position: relative;
  padding: 85px 0px 0px !important;

.share_story {
  transition: none !important;
  transform: none !important;
  opacity: 1 !important;

.about {
  p {
  color: white; 
  width: 87%;
  font-size: 1.1em;
  margin: 0 auto 12px;
  text-align: center;
}
a.call_to_action#write {
  position: absolute;
  bottom: 0px !important;
  left: 0 !important;
  text-align: center;
  padding: 10px 0 !important;
  margin: 0 !important;
  width: 100% !important;
  background: rgba(255,255,255,0.08);
}
}
  h1 {
  line-height: 1.25em !important;
  text-align: center !important;
  margin: 0px auto 8px !important;
  padding: 0px !important;
  color: white;
  width: 95%;
  font-size: 1.75em !important;
}
background: none !important;
border: none !important;
width: 100% !important;
margin: 0px auto !important;
  padding: 5px 0 50px !important

}
}
}

</style>