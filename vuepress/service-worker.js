/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "41dac57f987648a8557e83088f3c049a"
  },
  {
    "url": "assets/css/0.styles.9a0cee9f.css",
    "revision": "4343806a8eca9fd50f3ea74cd4d5f35b"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/jiaolou.a9eb6fa0.jpg",
    "revision": "a9eb6fa056774b0255ff0409138de1c5"
  },
  {
    "url": "assets/img/sample.e7676694.jpg",
    "revision": "e7676694a578940f20a6bb3d50d1a667"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e8bd26c9.js",
    "revision": "1bb170aa58c17f603142226a6244f2a9"
  },
  {
    "url": "assets/js/10.574803c8.js",
    "revision": "3c8ab11beabf1bfb546d60c6acabf67e"
  },
  {
    "url": "assets/js/100.0ba1c1c3.js",
    "revision": "310836c52917bff315a7f2112d634cbc"
  },
  {
    "url": "assets/js/101.7cef64b7.js",
    "revision": "bcd8a9285aa0825de289d312fb9cce3a"
  },
  {
    "url": "assets/js/102.34250842.js",
    "revision": "a8475b6e003a0ca8ec74b1b6f224e175"
  },
  {
    "url": "assets/js/103.2446b8e5.js",
    "revision": "1e307d014144809235c5f67dc7abe9ad"
  },
  {
    "url": "assets/js/104.f5191572.js",
    "revision": "cc7575531b2c43e2f45fcfc527729fc2"
  },
  {
    "url": "assets/js/105.a9031c25.js",
    "revision": "02e04bef2517319c0ac8fe314b3194f9"
  },
  {
    "url": "assets/js/106.d5f78526.js",
    "revision": "80de2abebb3ca3f04985589a759280b0"
  },
  {
    "url": "assets/js/107.4904e047.js",
    "revision": "60a23391e70a35ab2773e188ff12c07f"
  },
  {
    "url": "assets/js/108.42aff882.js",
    "revision": "2ca8d02f06e9ea28f4b514ba9effaea3"
  },
  {
    "url": "assets/js/109.6f67fa6b.js",
    "revision": "979912c001b9a2fa53ef262cdda1ffd7"
  },
  {
    "url": "assets/js/11.a58c51ba.js",
    "revision": "c9ef889cc44450df332e4553933797dc"
  },
  {
    "url": "assets/js/110.c70d15c0.js",
    "revision": "2b3c143063dfb88475a43f0b16f4840a"
  },
  {
    "url": "assets/js/111.961d3baa.js",
    "revision": "948b1bf6be64136151e03136aab4db74"
  },
  {
    "url": "assets/js/112.2a8cfa82.js",
    "revision": "cf0d012c9dd574e8661be8849af98081"
  },
  {
    "url": "assets/js/113.31efc15a.js",
    "revision": "f484d1b38fa0ff1f305702e4e53438b9"
  },
  {
    "url": "assets/js/114.dd92eacb.js",
    "revision": "d55015230b87960d7f1e2ef769bdaa17"
  },
  {
    "url": "assets/js/115.debaffea.js",
    "revision": "994edab1ad628b8ad72baf9618975d41"
  },
  {
    "url": "assets/js/12.2804f2a6.js",
    "revision": "4e00ad71790dcc6f90c441e440daeb69"
  },
  {
    "url": "assets/js/13.f24a2cf5.js",
    "revision": "21c856c6f8e928323973edefb7fefbdd"
  },
  {
    "url": "assets/js/14.0362bfb2.js",
    "revision": "7a15bb08ac5f4412de94acad692f7ba1"
  },
  {
    "url": "assets/js/15.d51e6736.js",
    "revision": "78bfcc65a28889a8441e4395cf727ddf"
  },
  {
    "url": "assets/js/16.d9d07ae4.js",
    "revision": "cac4f2268eab009a6f3499dbd785bced"
  },
  {
    "url": "assets/js/17.2ecc4f15.js",
    "revision": "246b87934fbfa8a7a4197b073acd6cde"
  },
  {
    "url": "assets/js/18.3ea25d14.js",
    "revision": "10ebdcbe7554f13f5e0d0bec36efeff8"
  },
  {
    "url": "assets/js/19.be7df768.js",
    "revision": "e9ad2fe90b120400dcc3ac811f2aa99f"
  },
  {
    "url": "assets/js/20.c1db08af.js",
    "revision": "899e8129a37b0f25944563db69eed132"
  },
  {
    "url": "assets/js/21.46822465.js",
    "revision": "1932ba5f4f33223bcd329298e89a79e3"
  },
  {
    "url": "assets/js/22.2939826f.js",
    "revision": "9bfd467818e47bac67dbec3dc05f6678"
  },
  {
    "url": "assets/js/23.c0a1d316.js",
    "revision": "e3490d2304e5e5500db9f78f4fa7d040"
  },
  {
    "url": "assets/js/24.ba638cc8.js",
    "revision": "e5b3597931e756bc07cc27d58be04919"
  },
  {
    "url": "assets/js/25.1a88795b.js",
    "revision": "dac291cca5a4b3e51f2892630082a6e1"
  },
  {
    "url": "assets/js/26.e709d941.js",
    "revision": "8777ba700b40c27cf011727d1fa7af6e"
  },
  {
    "url": "assets/js/27.3e0f5548.js",
    "revision": "4e0d8227cff0807dcf00f0262a73632c"
  },
  {
    "url": "assets/js/28.5363b078.js",
    "revision": "f1aaf18f111983817df02a1fcd0d5eaf"
  },
  {
    "url": "assets/js/29.30f890c7.js",
    "revision": "71c086739a35457bbbb954b3d0a0592b"
  },
  {
    "url": "assets/js/30.5622a90d.js",
    "revision": "29a7f5a04c4a9f2933abb5765a91066c"
  },
  {
    "url": "assets/js/31.81d7747e.js",
    "revision": "fc382de77ae0e5dbcdc75529e23cd838"
  },
  {
    "url": "assets/js/32.43a1fd59.js",
    "revision": "a6ed889fc19c8627f626585a72b89009"
  },
  {
    "url": "assets/js/33.3b1acde0.js",
    "revision": "2b8193a42be0bbf706d59e1d36d98bcf"
  },
  {
    "url": "assets/js/34.ca0e9fd0.js",
    "revision": "69e3b75c14ab275c5938f7d317970bb4"
  },
  {
    "url": "assets/js/35.9d53a773.js",
    "revision": "44068e4c6a6f415baeca4344f4b0e13e"
  },
  {
    "url": "assets/js/36.e286f05e.js",
    "revision": "364d4510d23bed7a1de4bcc7368eeae2"
  },
  {
    "url": "assets/js/37.5a63acca.js",
    "revision": "e0562676c8a1bdea043293a3c8a34b3c"
  },
  {
    "url": "assets/js/38.407f1306.js",
    "revision": "b435c8bd4ef7868165ea77903f9100b6"
  },
  {
    "url": "assets/js/39.7977d311.js",
    "revision": "9f8073606e8fffbc2505876513ed973c"
  },
  {
    "url": "assets/js/4.04d9dabe.js",
    "revision": "351a0645068cf1b8a44d645e9eb6789c"
  },
  {
    "url": "assets/js/40.9976d936.js",
    "revision": "9fb65f7e5621ffdb129a65b61789b844"
  },
  {
    "url": "assets/js/41.c2266866.js",
    "revision": "ce5409f7301e15cf4e70cfd517ab6310"
  },
  {
    "url": "assets/js/42.f1eda770.js",
    "revision": "b3ffcadc50f01bd8dc7f5c6ae8cf7825"
  },
  {
    "url": "assets/js/43.75708b12.js",
    "revision": "cd9c4f67206e633f2a11eecd27d81fba"
  },
  {
    "url": "assets/js/44.1bd28aa9.js",
    "revision": "8ee6fbb4424d83afb965ee7ed3e1f3e6"
  },
  {
    "url": "assets/js/45.cdc7f9e4.js",
    "revision": "b7a1891a7a87368858e07702a71278a9"
  },
  {
    "url": "assets/js/46.acfb2788.js",
    "revision": "0ea298c45d16201dfc832c62e6d24677"
  },
  {
    "url": "assets/js/47.c4c9e2d0.js",
    "revision": "46acf310ac6f45952671ed3f461d5205"
  },
  {
    "url": "assets/js/48.8d8b580c.js",
    "revision": "79e9827081c4404a8f2eb840865f56df"
  },
  {
    "url": "assets/js/49.c1467d38.js",
    "revision": "689bf2d3b8c9d612622d76eef7c66127"
  },
  {
    "url": "assets/js/5.68b3e0b4.js",
    "revision": "4a28aca2bc9b292511a6218fcff19420"
  },
  {
    "url": "assets/js/50.cf5406cb.js",
    "revision": "eab9d4b51e102cfa8ea3eafb77699e7f"
  },
  {
    "url": "assets/js/51.547e3c96.js",
    "revision": "7d500c1e6db959146fc9cb6ee13ed1bb"
  },
  {
    "url": "assets/js/52.c9bf2d1b.js",
    "revision": "4b99924e6a59c0a78834c68fd07f0750"
  },
  {
    "url": "assets/js/53.54933755.js",
    "revision": "80f340721330a6cae5902ca8951fb476"
  },
  {
    "url": "assets/js/54.831deced.js",
    "revision": "07a9663bd6f25ef5eecc833f0f0e9971"
  },
  {
    "url": "assets/js/55.18c26f97.js",
    "revision": "9c944e909cdd7baf456038a878d297ff"
  },
  {
    "url": "assets/js/56.231fb3bc.js",
    "revision": "3f53b8e082ee086cfb7c149169e33631"
  },
  {
    "url": "assets/js/57.d530da83.js",
    "revision": "a9fc9308c9cc842f6713abd9dfbdfe8e"
  },
  {
    "url": "assets/js/58.853007bb.js",
    "revision": "4e269faee3ca44da83805eabf141cc32"
  },
  {
    "url": "assets/js/59.a6dd98f2.js",
    "revision": "9a4f2c5fa5fca91230dd0dbe8735d6a1"
  },
  {
    "url": "assets/js/6.5be46806.js",
    "revision": "9212616cf5c13b29a9a03213d9fc2459"
  },
  {
    "url": "assets/js/60.5756cce1.js",
    "revision": "aba20a2e3cadd8624b43e6730a13e944"
  },
  {
    "url": "assets/js/61.30bebe8b.js",
    "revision": "ce448edbf5758fc568149c85be12aaba"
  },
  {
    "url": "assets/js/62.88f59d4c.js",
    "revision": "5b63c788362c6692dcb9f35d2fab757b"
  },
  {
    "url": "assets/js/63.5a15bc3b.js",
    "revision": "75fb634c9daba1d050df7e3e1f097213"
  },
  {
    "url": "assets/js/64.dadcf0ae.js",
    "revision": "acbca0259579b2dab4114b7facc2438a"
  },
  {
    "url": "assets/js/65.e9f2cd01.js",
    "revision": "6accd192f0e9f92bf0051ea7fea4b41f"
  },
  {
    "url": "assets/js/66.c1b0f295.js",
    "revision": "9f28211a098a3b10b6feadbd23498d76"
  },
  {
    "url": "assets/js/67.b4b44da1.js",
    "revision": "d3c9dee2b6e13428b93965dd6a739169"
  },
  {
    "url": "assets/js/68.bbddd340.js",
    "revision": "b814e45155e3c094e00df659817f2e16"
  },
  {
    "url": "assets/js/69.c74005e1.js",
    "revision": "1ac96df80cf0029b9b94c0aa5f79710c"
  },
  {
    "url": "assets/js/7.cc0216db.js",
    "revision": "d914bedd7c4b675ca68589bb0560d58e"
  },
  {
    "url": "assets/js/70.9800f565.js",
    "revision": "bb33dedc086f57a7a13164542fa51de4"
  },
  {
    "url": "assets/js/71.8e5dc553.js",
    "revision": "ee41b1e8ad244b8fc1fd79a30aac34be"
  },
  {
    "url": "assets/js/72.6b0317cb.js",
    "revision": "e93d2507e2b533f3a0172025e6ba5966"
  },
  {
    "url": "assets/js/73.04d7758b.js",
    "revision": "6e3573a403bc29624c28551414c691a9"
  },
  {
    "url": "assets/js/74.ef9f8768.js",
    "revision": "4bdfdc2f0516668ffea31368862cf468"
  },
  {
    "url": "assets/js/75.6caa9719.js",
    "revision": "50f9b4ff452f47498d2c7e112bb65056"
  },
  {
    "url": "assets/js/76.312e3b01.js",
    "revision": "9a6d9836181a54dc26db27b4c0d58a8f"
  },
  {
    "url": "assets/js/77.9d9192b7.js",
    "revision": "eb56c652b858f1bf33fbe9a9b7194a73"
  },
  {
    "url": "assets/js/78.8e147740.js",
    "revision": "d205293327dd49e4dbdf52d07da38843"
  },
  {
    "url": "assets/js/79.ffb0bc20.js",
    "revision": "0edaf9022eadc21975bfc2d9ff510c25"
  },
  {
    "url": "assets/js/8.740e5f25.js",
    "revision": "b242cf82b520ff107507d5b9896cffb2"
  },
  {
    "url": "assets/js/80.980e242e.js",
    "revision": "7a223120498fbf7a83378fa3c04fe757"
  },
  {
    "url": "assets/js/81.62897024.js",
    "revision": "49e5c2342da377be8d472516362d7148"
  },
  {
    "url": "assets/js/82.2f512384.js",
    "revision": "2367ad67fa5bc99b4c98130b1fb9b004"
  },
  {
    "url": "assets/js/83.41088249.js",
    "revision": "8f3f0c42b4e494cb0804f54e12fc4b0a"
  },
  {
    "url": "assets/js/84.877bb37d.js",
    "revision": "92961fd4aa76473bb03eeef036629559"
  },
  {
    "url": "assets/js/85.60ec0abb.js",
    "revision": "41421597fd1a8671220d08eae2f89607"
  },
  {
    "url": "assets/js/86.b5895e9d.js",
    "revision": "7902e1edbc2db405aba6208b16fa49b6"
  },
  {
    "url": "assets/js/87.28b7dbd2.js",
    "revision": "e9e3d8a071e0457e28d92b3b74c86f54"
  },
  {
    "url": "assets/js/88.7b146985.js",
    "revision": "46bbd4329702361473f5792d2d1d851a"
  },
  {
    "url": "assets/js/89.4a319ee5.js",
    "revision": "5c24056ed91abe4d497a95c895ee935b"
  },
  {
    "url": "assets/js/9.d684cd49.js",
    "revision": "2622b2d79d89e27cce4fd7a4a38633e6"
  },
  {
    "url": "assets/js/90.227d812c.js",
    "revision": "19085b6f9fd24985eb2f0ac14b6f3331"
  },
  {
    "url": "assets/js/91.25ed94b6.js",
    "revision": "c3b545e6423415c41540496e0e4d36a4"
  },
  {
    "url": "assets/js/92.f1e69ede.js",
    "revision": "56aa9802dca7c97d5c4e0e46e162d091"
  },
  {
    "url": "assets/js/93.291796d3.js",
    "revision": "b00fb10dfc3270d75e9c888a4c42724d"
  },
  {
    "url": "assets/js/94.bc4b087a.js",
    "revision": "bedec73cd5c70cef93b928031098670f"
  },
  {
    "url": "assets/js/95.228415dd.js",
    "revision": "c64209d0f6aadc490ab7a009eab96e76"
  },
  {
    "url": "assets/js/96.2d66e72e.js",
    "revision": "efe2a338db48aa85cbfc7787a95b606f"
  },
  {
    "url": "assets/js/97.7c33cd44.js",
    "revision": "b5302a3a2e93f82c3c4e65daa43f7280"
  },
  {
    "url": "assets/js/98.18aa172d.js",
    "revision": "e8542e0e3027674cfa4a333c7eba2a13"
  },
  {
    "url": "assets/js/99.a32ec63d.js",
    "revision": "51206a17b5cc059b800d485395ec4aba"
  },
  {
    "url": "assets/js/app.f02a9d9e.js",
    "revision": "daa56ea8005f6270ff8ca63752b24b20"
  },
  {
    "url": "assets/js/vendors~notification.d5e78cba.js",
    "revision": "a8a265705d3149c734372cd62eccc21a"
  },
  {
    "url": "css/clip_path.html",
    "revision": "c293c9864884fa9ef037b24ebfa97ba4"
  },
  {
    "url": "css/columns.html",
    "revision": "4cd146076b270cbc92506ef94ef8dcf1"
  },
  {
    "url": "css/grid_layout.html",
    "revision": "4a437c7972357a1ffea404c17ce1c7a5"
  },
  {
    "url": "css/index.html",
    "revision": "3ee88acb20f5d1b8608a2ea0c552a5ef"
  },
  {
    "url": "css/styled_switch.html",
    "revision": "159957fc44f88ee31485a9ab30757126"
  },
  {
    "url": "css/svg_path_animation.html",
    "revision": "6b84ce3feb74fb7d49385b1dd5c4bfeb"
  },
  {
    "url": "css/use_of_checkbox.html",
    "revision": "497679af677a1c4b831cc7e46aca0ca1"
  },
  {
    "url": "else/index.html",
    "revision": "9e5ad82a20166ad2d28fbdd22351cd29"
  },
  {
    "url": "else/miao.html",
    "revision": "0598f8991a4170a3f014225833b05af7"
  },
  {
    "url": "hero.gif",
    "revision": "aefbc8b54f167d7eacea3e4c65e865cc"
  },
  {
    "url": "html/canvas_pixel_pick.html",
    "revision": "19f796bb3bf4479563ac08d8a8a8ed83"
  },
  {
    "url": "html/canvas_video_green_screen_cutout.html",
    "revision": "29d544944698163de496591263749ba3"
  },
  {
    "url": "html/dialog_element.html",
    "revision": "2edf278ac935d7bd2f75f5418d820da0"
  },
  {
    "url": "html/index.html",
    "revision": "9df1060a7fe6f3412b2ff17e007ad915"
  },
  {
    "url": "html/web_components.html",
    "revision": "3f377b4b9454f1e951e410a912878668"
  },
  {
    "url": "images/jiaolou.jpg",
    "revision": "a9eb6fa056774b0255ff0409138de1c5"
  },
  {
    "url": "index.html",
    "revision": "68166f62aebc67ffd3508a512db383e4"
  },
  {
    "url": "js/camera_in_js_trial.html",
    "revision": "8ed572dde5cd2027475ab452177c0032"
  },
  {
    "url": "js/communication_using_postmessage.html",
    "revision": "d4d7a583ae007e0a951064f9b480897b"
  },
  {
    "url": "js/editable_dom.html",
    "revision": "566d585dc0d93dca23b5230393ccd9d5"
  },
  {
    "url": "js/four_kinds_of_observers.html",
    "revision": "3ccaa138e486beee972482a6627228e6"
  },
  {
    "url": "js/index.html",
    "revision": "ab8a4f672bba8b5b14b273837b0c20e7"
  },
  {
    "url": "js/kinds_of_xs_and_ys.html",
    "revision": "6312d984bade7e7481d09455facde494"
  },
  {
    "url": "js/scroll_behaviors.html",
    "revision": "240a610cfc375a83d69dbb28b1623f01"
  },
  {
    "url": "js/shape_detection_api_trial.html",
    "revision": "f617282722c2ef4c1e8674afed90716f"
  },
  {
    "url": "js/simple_chatroom_using_socketio.html",
    "revision": "ec551deed67e73eb9bad193c508187fe"
  },
  {
    "url": "js/simple_code_preview.html",
    "revision": "715c4ffc415de83bb3ce5b30d78f5619"
  },
  {
    "url": "js/speech_in_js_recognition.html",
    "revision": "69f0da5c18d77d3c11b028813dfcf328"
  },
  {
    "url": "js/speech_in_js_synthesis.html",
    "revision": "654f5cc3b12e92906189941b3882ece3"
  },
  {
    "url": "js/upload_using_filereader_createobjecturl.html",
    "revision": "bad098349c097026e09151171e27ec1e"
  },
  {
    "url": "js/useful_webapis_audiocontext.html",
    "revision": "fe196cf8826ca0b837ef91e77ab98630"
  },
  {
    "url": "js/useful_webapis_connection.html",
    "revision": "a5a3d5231d012fbe1d41cd075064de27"
  },
  {
    "url": "js/useful_webapis_fullscreen.html",
    "revision": "a30be104e19fbaf4881af02cd92d1e60"
  },
  {
    "url": "js/useful_webapis_geolocation.html",
    "revision": "1baf4a4926bebad0871def218e71a8a3"
  },
  {
    "url": "js/useful_webapis_mediarecorder.html",
    "revision": "f843bafd3cd8e67b97e21d32d2a0b8c9"
  },
  {
    "url": "js/useful_webapis_notification.html",
    "revision": "d70d794e4374f2a7293cb2131d0298c7"
  },
  {
    "url": "logo.png",
    "revision": "fe74ab6d2c004ff8a8257c397bcaa058"
  },
  {
    "url": "study/algorithm.html",
    "revision": "5ee171c052ee2e07d6f6e772eaf68a3c"
  },
  {
    "url": "study/api.html",
    "revision": "22a8558d3f312b57cbdefeab2af83af0"
  },
  {
    "url": "study/browser.html",
    "revision": "97a9a7abf0a5594a2d51058ef965be3b"
  },
  {
    "url": "study/conception.html",
    "revision": "5ea994db6f7b8b11bb09e67e5f99b9a4"
  },
  {
    "url": "study/css_A.html",
    "revision": "2e71ee4896a2301e465fa0c7efc75488"
  },
  {
    "url": "study/css_AA.html",
    "revision": "2e6ac8ecc5fe282ed08c0552e893abd1"
  },
  {
    "url": "study/css_AAA.html",
    "revision": "72b25139d408acdda0c7c8c4422ac7b7"
  },
  {
    "url": "study/css_technics.html",
    "revision": "9dea5543a1708e7e41175f01d6865063"
  },
  {
    "url": "study/diy.html",
    "revision": "7cbaea95b92de6ea576d1e56bfecfab9"
  },
  {
    "url": "study/DOM.html",
    "revision": "f9cb71e6972a621bd4aa6a8bf72d85a6"
  },
  {
    "url": "study/engineering.html",
    "revision": "d132d003eb8aca3b9e6b7f5caffdcdfe"
  },
  {
    "url": "study/es6.html",
    "revision": "812d1bc42e997ad992fd5a27899b108c"
  },
  {
    "url": "study/http.html",
    "revision": "04f1b56a0ebd36405432f9592364d180"
  },
  {
    "url": "study/index.html",
    "revision": "9aaae38ec69ec06bf0bfa3d542c58605"
  },
  {
    "url": "study/js_A.html",
    "revision": "191ceca00479e2bdd076f4438ae3066f"
  },
  {
    "url": "study/js_AA.html",
    "revision": "14424a1523bd8af332d69a80f5a0e8a6"
  },
  {
    "url": "study/js_AAA.html",
    "revision": "301b9124b1576dc123967db2580f5d7a"
  },
  {
    "url": "study/mobile.html",
    "revision": "7838e9f1f52427aad349a3067ca4a911"
  },
  {
    "url": "study/performance.html",
    "revision": "50b027f73d028530f220914553b38709"
  },
  {
    "url": "study/questions.html",
    "revision": "2888e134402d589d67f5c1a1a99acd59"
  },
  {
    "url": "study/vue_code.html",
    "revision": "f6aad16bbcbf01a7e1ba49aefad246d3"
  },
  {
    "url": "study/vue.html",
    "revision": "59587522ba4cf29129a8d12947fbca7d"
  },
  {
    "url": "study/webpack.html",
    "revision": "be008d09c314de94f6c6a03ffe9c6d8d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
