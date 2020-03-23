<template>
 <div class="wrapper hero" id="introduction">
      <div class="introduction">
          <div class="container">
            <h1 class="heading" :class="$t('code')"> {{ $t("title") }} </h1>

            <div class="metadata">
              <p><a href="http://edgeryders.eu/c/wellbeing" target="_blank">{{ categories }} {{ $t("topics") }}</a></p>
            </div>
          </div>

        <Paragraph
          variation="large"
          class="byline"
          :class="$t('code')"
          v-html="$t('inspire')"
        ></Paragraph>

        <div id="action" :class="$t('code')">
          <p v-html="$t('byline')">
          </p>

          <div>
            <a :href="$t('start_link')" class="call_to_action" id="apply" target="_blank">{{ $t("start") }}</a>
            <a :href="$t('virtual_cafe_link')" class="call_to_action" target="_blank" id="video"
              >{{ $t("cafe") }}</a
            >
          </div>
        </div>
      </div>
      <AnimatedLogo class="animated_logo" />
    </div>
</template>


<script>
import AnimatedLogo from "@/components/AnimatedHeader.vue";

export default {
  data() {
    return {
    };
  },
  components: {
    AnimatedLogo
  },
  props: ['categories', 'users', 'likes'],
};
</script>
<style type="text/css" lang="scss">
.hero {
     display: flex;
     overflow: hidden;
     justify-content: flex-start;
     padding: 0px 0 0 120px !important;
     background-size: 50%;
     width: 97% !important;
     margin: 0px auto 0 !important;
     position: relative;
     top: 70px;
     .container {
         background: linear-gradient( to top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 91%, rgba(237, 237, 237, 1) 100% );
         border-top: 6px solid #35a0da;
         border-bottom: 3px solid #efefef;
         z-index: -1;
         position: relative;
         display: flex;
         width: 500px;
         max-width: 850px;
         margin: -50px auto 0;
         justify-content: center;
         align-items: center;
         flex-direction: column;
         border-radius: 20px;
         opacity: 0;
         animation: scale-easeInElastic 1.2s ease reverse forwards .4s;
         &:before {
             background: url("../assets/logo.png") no-repeat center 0px;
             width: 110px;
             height: 110px;
             position: absolute;
             top: -65px;
             content: "";
             background-size: cover;
        }
         .heading {
             color: #2c86b8 !important;
             width: auto;
             margin: 0 !important;
             padding: 40px 40px 0px !important;
             margin: 8px auto 0 !important;
             border-radius: 15px;
             font-family: Fira Sans,Helvetica,Arial,sans-serif;
             letter-spacing: -1px !important;
             font-size: 40px !important;
             text-align: center;
             &.pl {
                 font-size: 31px !important;
            }
        }
    }
     .metadata {
         margin: 0px auto 10px;
         display: inline-block;
         width: auto;
         p {
             font-size: 18px;
             float: left;
             padding: 10px 15px !important;
             color: #2c86b8;
             font-weight: bold;
             background: #2c86b8;
             padding: 0 12px;
             border-right: 1px solid #ddd;
             a {
                 text-decoration: none;
                 color: #fff;
            }
             &:first-child {
                 margin-right: 0px;
                 border-right: 1px solid rgba(0,0,0,0.06);
                 border-radius: 10px !important;
            }
             &:last-child {
                 margin-right: 0px;
                 border-right: none;
                 border-radius: 0px 10px 10px 0px;
            }
        }
    }
     .introduction {
         width: 130%;
         margin: 130px 0 50px;
         justify-content: center;
         align-items: center;
         height: auto;
         text-align: left;
         display: flex;
         position: relative;
         flex-direction: column;
         z-index: 999;
         #action {
             display: flex;
             justify-content: center;
             align-items: center;
             flex-direction: column;
             p {
                 font-size: 1.35em !important;
                 margin: 0;
                 text-align: center;
            }
             &.de {
                 p {
                     font-size: 1.15em !important;
                     margin: 0;
                     text-align: center;
                }
            }
        }
         .byline {
             background: url("data:image/svg+xml,%0A%3Csvg width='268px' height='13px' viewBox='0 0 268 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M246.188,1.55 C240.341,1.208 234.486,0.964 228.635,0.67 C226.705,0.574 224.768,0.568 222.836,0.518 C218.646,0.411 214.455,0.304 210.265,0.197 C207.932,0.137 205.596,0.063 203.263,0.018 C202.587,0.005 201.911,0 201.234,0 C199.714,0 198.193,0.023 196.674,0.026 C189.761,0.033 182.849,0.041 175.935,0.049 C174.29,0.051 172.643,0.09 170.999,0.113 C166.924,0.165 162.851,0.218 158.776,0.273 C154.18,0.332 149.582,0.357 144.987,0.471 C137.549,0.655 130.112,0.839 122.674,1.024 C118.369,1.129 114.06,1.19 109.756,1.362 C102.339,1.657 94.923,1.95 87.506,2.242 C83.454,2.401 79.398,2.534 75.349,2.76 C67.68,3.186 60.012,3.614 52.342,4.043 C48.244,4.272 44.141,4.441 40.052,4.79 C32.417,5.44 24.782,6.091 17.146,6.742 C15.497,6.882 13.847,7.022 12.196,7.164 C8.899,7.444 5.614,7.88 2.326,8.251 C2.12,8.28 1.913,8.307 1.707,8.335 C1.314,8.446 0.972,8.644 0.681,8.934 C0.247,9.368 0,9.962 0,10.578 C0,11.192 0.247,11.789 0.681,12.222 C1.076,12.618 1.748,12.968 2.326,12.904 C6.293,12.457 10.254,11.983 14.231,11.646 C17.917,11.332 21.602,11.02 25.287,10.708 C29.309,10.367 33.33,10.026 37.351,9.686 C38.971,9.548 40.595,9.366 42.217,9.276 C48.488,8.928 54.758,8.585 61.03,8.241 C64.938,8.025 68.848,7.81 72.756,7.594 C74.371,7.505 75.986,7.394 77.601,7.33 C83.815,7.08 90.03,6.853 96.243,6.615 C100.01,6.47 103.776,6.328 107.542,6.183 C108.808,6.134 110.074,6.073 111.34,6.042 C118.051,5.887 124.76,5.735 131.47,5.583 C135.217,5.497 138.963,5.412 142.71,5.326 C144.045,5.295 145.378,5.25 146.712,5.237 C153.632,5.165 160.551,5.095 167.471,5.024 C171.789,4.979 176.102,4.938 180.42,4.949 C187.768,4.967 195.117,4.984 202.464,5.001 C203.914,5.004 205.363,5.065 206.812,5.107 C210.868,5.226 214.924,5.345 218.979,5.464 C222.021,5.554 225.064,5.643 228.107,5.732 C230.265,5.795 232.422,5.956 234.578,6.073 C240.927,6.416 247.274,6.77 253.622,7.166 C255.233,7.267 256.844,7.389 258.456,7.507 C260.182,7.632 261.914,7.754 263.635,7.949 C263.903,7.993 264.169,8.043 264.437,8.101 C265.115,8.244 265.768,8.205 266.377,7.847 C266.941,7.518 267.361,6.971 267.535,6.342 C267.899,5.018 267.098,3.611 265.776,3.245 C264.62,2.925 263.419,2.797 262.227,2.677 C261.411,2.594 260.595,2.511 259.779,2.43 C258.209,2.272 256.627,2.192 255.054,2.073 C252.103,1.851 249.143,1.722 246.188,1.55' id='Fill-35' fill='%23151514'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") no-repeat center 100%;
             padding-bottom: 30px;
             width: 90%;
             color: #152637;
             text-align: center;
             font-size: 1.6em !important;
             line-height: 1.3em !important;
             margin-top: 20px;
             margin-bottom: 20px;
             &.de {
                 font-size: 1.4em !important;
            }
        }
         &:after {
             height: 400px;
             width: 30px solid #000;
             position: absolute;
             left: 0%;
             top: 20px;
             content: "";
        }
         .wellbeing_logo {
             display: flex;
             width: 100%;
             position: absolute;
             top: -60px;
             left: 0%;
             justify-content: center;
             align-items: center;
             text-align: center;
             background: url("../assets/logo.png") no-repeat center 0px;
             background-size: 110px;
             height: 100px;
        }
    }
     .animated_logo {
         position: relative;
         top: 0px;
         right: 0vw;
         opacity: 0;
         width: 1300px !important;
         animation: slideleft 4.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards 1.2s;
    }
}
 @keyframes slideleft {
     0% {
         transform: translateY(300px);
         opacity: 0;
    }
     100% {
         transform: translateY(200px);
         opacity: 1;
    }
}
 a.call_to_action {
     color: white !important;
     text-decoration: none !important;
     padding: 12px;
     font-weight: bold !important;
     font-size: 1.15em;
     display: inline-block;
     border-radius: 4px;
     padding-right: 40px;
     margin: 20px 15px 0 0 !important;
     &#apply {
         background: orangered;
         background-size: 20px;
         position: relative;
         &:after {
             content: '';
             position: absolute;
             width: 40px;
             height: 40px;
             background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='white' d='M58.3 33a4.2 4.2 0 0 0-5.9 0 4.2 4.2 0 0 0 0 5.9l6.9 6.9H30.6c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2h28.7l-6.9 6.9a4.2 4.2 0 0 0 0 5.9c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l14-14.1a4.2 4.2 0 0 0 0-5.9L58.3 33z'/%3E%3Cpath fill='white' d='M74.6 2.5H25.4A23 23 0 0 0 2.5 25.4v49.2a23 23 0 0 0 22.9 22.9h49.2a23 23 0 0 0 22.9-22.9V25.4A23 23 0 0 0 74.6 2.5zm14.5 72.1c0 8-6.5 14.5-14.5 14.5H25.4c-8 0-14.5-6.5-14.5-14.5V25.4c0-8 6.5-14.5 14.5-14.5h49.2c8 0 14.5 6.5 14.5 14.5v49.2z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat center 10% ;
             background-size: 20px !important;
        }
    }
     &#write {
         background: orangered;
         background-size: 20px;
         width: auto !important;
         padding-right: 50px;
         position: relative;
         &:after {
             content: '';
             position: absolute;
             width: 40px;
             height: 40px;
             background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'%3E%3Cswitch%3E%3Cg%3E%3Cpath fill='white' d='M58.3 33a4.2 4.2 0 0 0-5.9 0 4.2 4.2 0 0 0 0 5.9l6.9 6.9H30.6c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2h28.7l-6.9 6.9a4.2 4.2 0 0 0 0 5.9c.8.8 1.9 1.2 3 1.2s2.1-.4 3-1.2l14-14.1a4.2 4.2 0 0 0 0-5.9L58.3 33z'/%3E%3Cpath fill='white' d='M74.6 2.5H25.4A23 23 0 0 0 2.5 25.4v49.2a23 23 0 0 0 22.9 22.9h49.2a23 23 0 0 0 22.9-22.9V25.4A23 23 0 0 0 74.6 2.5zm14.5 72.1c0 8-6.5 14.5-14.5 14.5H25.4c-8 0-14.5-6.5-14.5-14.5V25.4c0-8 6.5-14.5 14.5-14.5h49.2c8 0 14.5 6.5 14.5 14.5v49.2z'/%3E%3C/g%3E%3C/switch%3E%3C/svg%3E") no-repeat center 26% ;
             background-size: 22px !important;
        }
    }
     &#video {
         background:  #35a0da;
         background-size: 20px;
         padding-left: 17px !important;
         padding-right: 17px !important;
    }
     &#tweet {
         width: 120px !important;
         background: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='white' d='M24 4.6c-1 .4-1.9.6-2.9.7a5 5 0 0 0 2.2-2.7c-1 .6-2 1-3.1 1.2-1-1-2.2-1.6-3.6-1.6a5 5 0 0 0-4.8 6 14 14 0 0 1-10.2-5c-.4.7-.6 1.5-.6 2.4a5 5 0 0 0 2.2 4.1c-.8 0-1.6-.2-2.3-.6A5 5 0 0 0 5 14a5 5 0 0 1-2.2 0 5 5 0 0 0 4.6 3.5 9.9 9.9 0 0 1-7.3 2 14 14 0 0 0 7.6 2.3c9 0 14-7.5 14-14V7A10 10 0 0 0 24 4.6z'/%3E%3C/svg%3E") no-repeat 14% 50% #1da1f2;
         background-size: 20px;
         padding-left: 45px !important;
         padding-right: 17px !important;
    }
     &#facebook {
         min-width: 220px;
         background: url("data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fab' data-icon='facebook-square' class='svg-inline--fa fa-facebook-square fa-w-14' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='white' d='M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137V328h-63v-72h63v-55c0-62 37-96 94-96 27 0 55 5 55 5v61h-31c-31 0-40 19-40 38v47h69l-11 72h-58v152h137a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z'/%3E%3C/svg%3E") no-repeat 7% 50% #4267b2;
         background-size: 20px;
         padding-left: 45px !important;
         padding-right: 17px !important;
    }
}

</style>