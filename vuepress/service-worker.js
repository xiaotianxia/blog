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
    "revision": "ab710fb994cf2f9cb7cd36d442a7e1a3"
  },
  {
    "url": "assets/css/0.styles.d70e1692.css",
    "revision": "1edee38df723c7ce2c01f0af05a6966b"
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
    "url": "assets/js/1.269b3478.js",
    "revision": "4ccf96231faf6cc83aac16b632f8ec42"
  },
  {
    "url": "assets/js/10.574803c8.js",
    "revision": "3c8ab11beabf1bfb546d60c6acabf67e"
  },
  {
    "url": "assets/js/100.bc658f79.js",
    "revision": "c36dbf3073e79dc5044e22d3ac34fab9"
  },
  {
    "url": "assets/js/101.4bb730ee.js",
    "revision": "d091740db32e345dddc72931363d6a5c"
  },
  {
    "url": "assets/js/102.ca8e5612.js",
    "revision": "06526d133650e29b956919d19347f126"
  },
  {
    "url": "assets/js/103.954f966a.js",
    "revision": "bfd9cd2c2d7280a4abf63df343f5dbe4"
  },
  {
    "url": "assets/js/104.15334917.js",
    "revision": "f0ca2ce7405c6d39a3a51615b82235c3"
  },
  {
    "url": "assets/js/105.a9031c25.js",
    "revision": "02e04bef2517319c0ac8fe314b3194f9"
  },
  {
    "url": "assets/js/106.2a6335ba.js",
    "revision": "b887d72fbc2805a5e55bcd4cd2d00fd4"
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
    "url": "assets/js/109.4bf7108c.js",
    "revision": "0cdfad8872c42b89aa93e3417be0628c"
  },
  {
    "url": "assets/js/11.2358174b.js",
    "revision": "d822f68cb53dc7609eeb2f7798220dd6"
  },
  {
    "url": "assets/js/110.68a96d91.js",
    "revision": "3a99ded704ab9138de3edeefa14241e6"
  },
  {
    "url": "assets/js/111.961d3baa.js",
    "revision": "948b1bf6be64136151e03136aab4db74"
  },
  {
    "url": "assets/js/112.cf06a7cd.js",
    "revision": "a59efca09b11c015099fd9e7754d9cc1"
  },
  {
    "url": "assets/js/113.0dab39c8.js",
    "revision": "3645925ddd44a9d6c3642fea09118af5"
  },
  {
    "url": "assets/js/114.b4df50d0.js",
    "revision": "28c3aa35c83a3e8150e345f3047e3d80"
  },
  {
    "url": "assets/js/115.debaffea.js",
    "revision": "994edab1ad628b8ad72baf9618975d41"
  },
  {
    "url": "assets/js/12.106d7501.js",
    "revision": "f8804d2af5564abb7e9e2367ef79fa9c"
  },
  {
    "url": "assets/js/13.5583180e.js",
    "revision": "0979898b60b6cc98c95ceb32242e60d8"
  },
  {
    "url": "assets/js/14.c7d30945.js",
    "revision": "74594fb20e3cc69e13e12e07566ea025"
  },
  {
    "url": "assets/js/15.f049c90d.js",
    "revision": "aaf7b1bb5f8147987523af57ea109f68"
  },
  {
    "url": "assets/js/16.bd9d1e01.js",
    "revision": "50f547b27392bc337372dae309665c3b"
  },
  {
    "url": "assets/js/17.4216ed88.js",
    "revision": "3d5474de5483a0194e1160a4527f1531"
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
    "url": "assets/js/21.8fe16551.js",
    "revision": "26b88dec4d0b29c14ff6a9e87dd92f8c"
  },
  {
    "url": "assets/js/22.d9367976.js",
    "revision": "7f8335c1186dde6126395057fc49fcd9"
  },
  {
    "url": "assets/js/23.c0a1d316.js",
    "revision": "e3490d2304e5e5500db9f78f4fa7d040"
  },
  {
    "url": "assets/js/24.de2a39db.js",
    "revision": "19ea84ad57d24bf20eb1c172879f1a15"
  },
  {
    "url": "assets/js/25.058fab7d.js",
    "revision": "035313e8c3310a21e61f8f4d02a399bc"
  },
  {
    "url": "assets/js/26.c2d36b96.js",
    "revision": "ae21cb06b308052bb9f38b5c691c0642"
  },
  {
    "url": "assets/js/27.3e0f5548.js",
    "revision": "4e0d8227cff0807dcf00f0262a73632c"
  },
  {
    "url": "assets/js/28.1fb9784f.js",
    "revision": "35a68eff2849f609cf11d9be0449f596"
  },
  {
    "url": "assets/js/29.30f890c7.js",
    "revision": "71c086739a35457bbbb954b3d0a0592b"
  },
  {
    "url": "assets/js/30.3a4789da.js",
    "revision": "1e89c2911f50167b0dfb5e78e55490a5"
  },
  {
    "url": "assets/js/31.86af5f73.js",
    "revision": "f40de2e46687572ce4d43297cfa9b6a0"
  },
  {
    "url": "assets/js/32.4f4e638b.js",
    "revision": "0fb308361492ffb7934e4ffcfff4d993"
  },
  {
    "url": "assets/js/33.3ee4a973.js",
    "revision": "f05db324ba2fd736cf2ce0e0a73e0727"
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
    "url": "assets/js/36.ad4d67c0.js",
    "revision": "8daeebd57e0fd2b866c703ee3a04f2d5"
  },
  {
    "url": "assets/js/37.26e83d02.js",
    "revision": "05de194054b40fad31794f30b8e39f7b"
  },
  {
    "url": "assets/js/38.3e0debe9.js",
    "revision": "bc77bcc976e76021577e64d87bf5bf60"
  },
  {
    "url": "assets/js/39.ae4f9f44.js",
    "revision": "df1571a0ed7c4fa8f3ee940958cdd3c2"
  },
  {
    "url": "assets/js/4.04d9dabe.js",
    "revision": "351a0645068cf1b8a44d645e9eb6789c"
  },
  {
    "url": "assets/js/40.8eacd7f5.js",
    "revision": "7bf9fd48f6a4c8cf5bff1c7b614e669a"
  },
  {
    "url": "assets/js/41.d053758b.js",
    "revision": "9339b14a0abb8f8285a69b4b2ff7f1a4"
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
    "url": "assets/js/44.28624497.js",
    "revision": "71dc53af2cfd40dff1b5619541f30a32"
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
    "url": "assets/js/5.2b9d27df.js",
    "revision": "500045b577efc0bc6a49b58a4ab4b2dd"
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
    "url": "assets/js/55.1f77b722.js",
    "revision": "f097ad4b77ae99b55ce287f7fab8af08"
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
    "url": "assets/js/59.b259c47d.js",
    "revision": "d54d0dce68e3108c89161fe2c1d1f6c7"
  },
  {
    "url": "assets/js/6.6a25eb2a.js",
    "revision": "fc9c39875f8e67494b982937530ee42d"
  },
  {
    "url": "assets/js/60.7ab3a953.js",
    "revision": "cf64466a59ac88d9130384877f128e60"
  },
  {
    "url": "assets/js/61.2ca1c730.js",
    "revision": "e818994bb05e0ce8f16cb256e2dbe4f5"
  },
  {
    "url": "assets/js/62.7676e73a.js",
    "revision": "1eb2dc2008f93ed85c9c4f1f02071a71"
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
    "url": "assets/js/65.dc5afc85.js",
    "revision": "8600717a1bfa2063d2ddd31162aa94a1"
  },
  {
    "url": "assets/js/66.c1b0f295.js",
    "revision": "9f28211a098a3b10b6feadbd23498d76"
  },
  {
    "url": "assets/js/67.76851a46.js",
    "revision": "1dc5f291bb9e24e8710331a42cc1e08b"
  },
  {
    "url": "assets/js/68.d182f4e5.js",
    "revision": "b9bbb087af4f81590fb3632e9c68e9ed"
  },
  {
    "url": "assets/js/69.144facb1.js",
    "revision": "037e03a8ef6b0d586e95a9940bcdfeae"
  },
  {
    "url": "assets/js/7.4eab58d2.js",
    "revision": "35b04dfce7155aaca5a2fe446daf5b14"
  },
  {
    "url": "assets/js/70.b720889b.js",
    "revision": "9a2c2993d03dabe92d52216bef816ddc"
  },
  {
    "url": "assets/js/71.4a36bd4b.js",
    "revision": "6b72b7a80f82fd0f7f3ee833979542af"
  },
  {
    "url": "assets/js/72.6b0317cb.js",
    "revision": "e93d2507e2b533f3a0172025e6ba5966"
  },
  {
    "url": "assets/js/73.5d8d317e.js",
    "revision": "1ec68c4db6f7d0e0ba2ff0e3f37df4cb"
  },
  {
    "url": "assets/js/74.1ccee96e.js",
    "revision": "a82ff0bf65a197c6176e3d59b2bc8ed3"
  },
  {
    "url": "assets/js/75.738ce8e5.js",
    "revision": "b55c45c70e1ed93c8508b356f2fa320e"
  },
  {
    "url": "assets/js/76.02de7fa1.js",
    "revision": "9db3563288d5b13a5570c58ffcda8bb6"
  },
  {
    "url": "assets/js/77.9d9192b7.js",
    "revision": "eb56c652b858f1bf33fbe9a9b7194a73"
  },
  {
    "url": "assets/js/78.79f6c80d.js",
    "revision": "4343771e5e3b6f1397b0bd09727f00bc"
  },
  {
    "url": "assets/js/79.490c2312.js",
    "revision": "721a776f5b0207d58f75e2cdb33be2fa"
  },
  {
    "url": "assets/js/8.740e5f25.js",
    "revision": "b242cf82b520ff107507d5b9896cffb2"
  },
  {
    "url": "assets/js/80.a584463a.js",
    "revision": "7207ca49a4818a89e0b9bf4cc145f7f5"
  },
  {
    "url": "assets/js/81.e46f8ee2.js",
    "revision": "59ef31b760e6d6846605baa28627aa59"
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
    "url": "assets/js/88.57f4ac9a.js",
    "revision": "bb030d9dc3de9ffbd60b8c7f4acf06c6"
  },
  {
    "url": "assets/js/89.60b775f9.js",
    "revision": "e5629d8d31f326f8aa3fbbd62b69909c"
  },
  {
    "url": "assets/js/9.26c0dc9a.js",
    "revision": "688401c859e7922f1ef53197f291e6c5"
  },
  {
    "url": "assets/js/90.ff8c98db.js",
    "revision": "20048fd7b11aebcb56f2867e3d8ab3b0"
  },
  {
    "url": "assets/js/91.8842bf89.js",
    "revision": "2a8d25621d5f969e889e5881e4b0b6c5"
  },
  {
    "url": "assets/js/92.f5a6670e.js",
    "revision": "220bf8b4d08f6653646cb68af3ee1e91"
  },
  {
    "url": "assets/js/93.043ba7c4.js",
    "revision": "0e78151ca64d255c87f939abe915ab27"
  },
  {
    "url": "assets/js/94.771a6a98.js",
    "revision": "2dc1eb8b2bedb1eea435523552162876"
  },
  {
    "url": "assets/js/95.54ba10eb.js",
    "revision": "b023491c9d33eb1c759bafe264b5606d"
  },
  {
    "url": "assets/js/96.d365624e.js",
    "revision": "aa4514fe5ac01d9816406762479dbb41"
  },
  {
    "url": "assets/js/97.c6d28367.js",
    "revision": "590110a21b2c9ea5086dbbf93321c1c7"
  },
  {
    "url": "assets/js/98.9c69cae1.js",
    "revision": "35adb2a0760cdb077abe0aa6ab5063d8"
  },
  {
    "url": "assets/js/99.a32ec63d.js",
    "revision": "51206a17b5cc059b800d485395ec4aba"
  },
  {
    "url": "assets/js/app.9187f568.js",
    "revision": "5b0556cc5733577f098e6828ef1719d8"
  },
  {
    "url": "assets/js/vendors~notification.d5e78cba.js",
    "revision": "a8a265705d3149c734372cd62eccc21a"
  },
  {
    "url": "css/clip_path.html",
    "revision": "c17c5a49734f688910d906e771bb33f5"
  },
  {
    "url": "css/columns.html",
    "revision": "99250352fdf891f8f78e9001cfd0c1f0"
  },
  {
    "url": "css/grid_layout.html",
    "revision": "0023df343d2d3dfc7b70aa248cb3ca1e"
  },
  {
    "url": "css/index.html",
    "revision": "40562d25efed13d520a89975db11b0f9"
  },
  {
    "url": "css/styled_switch.html",
    "revision": "6b40602df8f367c6f23d81a044ca78a8"
  },
  {
    "url": "css/svg_path_animation.html",
    "revision": "84943732f536d6409009c11c8033bb34"
  },
  {
    "url": "css/use_of_checkbox.html",
    "revision": "4048c13bd190be1a6ff1252224b18345"
  },
  {
    "url": "else/index.html",
    "revision": "b0ad60492e7582953021a7d42738f7dd"
  },
  {
    "url": "else/miao.html",
    "revision": "a2501550a6292065bd467f8b96283f47"
  },
  {
    "url": "hero.gif",
    "revision": "aefbc8b54f167d7eacea3e4c65e865cc"
  },
  {
    "url": "html/canvas_pixel_pick.html",
    "revision": "f3d97be467f7d01208e2236c72817eb5"
  },
  {
    "url": "html/canvas_video_green_screen_cutout.html",
    "revision": "88e601809ef92b4c1592edb01dc59262"
  },
  {
    "url": "html/dialog_element.html",
    "revision": "5968b9fd9a057c311647094dde89ddf0"
  },
  {
    "url": "html/index.html",
    "revision": "40c16b4ce119429121cca56504ac4760"
  },
  {
    "url": "html/web_components.html",
    "revision": "059373c6210d672059539d66fdc7754b"
  },
  {
    "url": "images/jiaolou.jpg",
    "revision": "a9eb6fa056774b0255ff0409138de1c5"
  },
  {
    "url": "index.html",
    "revision": "f0e6ae9bdfbc2dd44d39c17926f3f315"
  },
  {
    "url": "js/camera_in_js_trial.html",
    "revision": "c377698cdf59e9e2d4b3cbd9f3ba099b"
  },
  {
    "url": "js/communication_using_postmessage.html",
    "revision": "17cbdbb58c6db7b4643f0cad14232ce5"
  },
  {
    "url": "js/editable_dom.html",
    "revision": "310ba7869633862ade80f3f797b9faea"
  },
  {
    "url": "js/four_kinds_of_observers.html",
    "revision": "ff7b5c441d9a488d9d9d795c0f0c44b6"
  },
  {
    "url": "js/index.html",
    "revision": "dabcec4ffeb97c3d6d3e725737282c91"
  },
  {
    "url": "js/kinds_of_xs_and_ys.html",
    "revision": "6029b09050e433e9aedb925009202e73"
  },
  {
    "url": "js/scroll_behaviors.html",
    "revision": "e8a6aa027551698ebecd8a8b433a4a41"
  },
  {
    "url": "js/shape_detection_api_trial.html",
    "revision": "dc347455f3e0a076da49890f9c41c690"
  },
  {
    "url": "js/simple_chatroom_using_socketio.html",
    "revision": "69e19edf0a8077de1bfccf146bffe2fd"
  },
  {
    "url": "js/simple_code_preview.html",
    "revision": "7825033e2184cb891b2b8e0d6861ed4a"
  },
  {
    "url": "js/speech_in_js_recognition.html",
    "revision": "c4e9d50eb2996468a75558490070019f"
  },
  {
    "url": "js/speech_in_js_synthesis.html",
    "revision": "326205e3e87cabda65f9e767a2fcc7ae"
  },
  {
    "url": "js/upload_using_filereader_createobjecturl.html",
    "revision": "f19ab14fced2343fbd87c5abd9de0eb4"
  },
  {
    "url": "js/useful_webapis_audiocontext.html",
    "revision": "07ce6d2119f4f32a96be0b6dca5f0ed3"
  },
  {
    "url": "js/useful_webapis_connection.html",
    "revision": "f8a16e82b2bc51b1987897a27b8d6fd2"
  },
  {
    "url": "js/useful_webapis_fullscreen.html",
    "revision": "20b25296929c0c034817b60289580162"
  },
  {
    "url": "js/useful_webapis_geolocation.html",
    "revision": "e548dd8840730a5b8d50922554f9c185"
  },
  {
    "url": "js/useful_webapis_mediarecorder.html",
    "revision": "d43aae0c616aaa168a7d8532428c9c60"
  },
  {
    "url": "js/useful_webapis_notification.html",
    "revision": "c98c821055d862bdd17bdf489e429aec"
  },
  {
    "url": "logo.png",
    "revision": "fe74ab6d2c004ff8a8257c397bcaa058"
  },
  {
    "url": "study/algorithm.html",
    "revision": "ae03463ff0483fa1064e68b43e7935c2"
  },
  {
    "url": "study/api.html",
    "revision": "d88ccc7b101be64c22d49c42c44d1317"
  },
  {
    "url": "study/browser.html",
    "revision": "c1d0c1587527bf15fdce438509329f94"
  },
  {
    "url": "study/conception.html",
    "revision": "e8d44fe571a65ce6cfd54449e74f30cd"
  },
  {
    "url": "study/css_A.html",
    "revision": "b5dbd63c48181019f4e6c4c6a4686bf9"
  },
  {
    "url": "study/css_AA.html",
    "revision": "a3681349011b1e21003de054b1f09768"
  },
  {
    "url": "study/css_AAA.html",
    "revision": "57880a2069bad47e302510995020b384"
  },
  {
    "url": "study/css_technics.html",
    "revision": "b1645c8e84a21067aa96e64a9e3462e7"
  },
  {
    "url": "study/diy.html",
    "revision": "540c237c75efa68cc79df7e40b356f49"
  },
  {
    "url": "study/DOM.html",
    "revision": "3655d206265bb0253a7c28409fc48511"
  },
  {
    "url": "study/engineering.html",
    "revision": "72aaf36312652ccc6d00a13b642cc45f"
  },
  {
    "url": "study/es6.html",
    "revision": "dbf6e55b8aacef4d0a17481e5732ffad"
  },
  {
    "url": "study/http.html",
    "revision": "32b0d4c78ee6a907b36ea3114f471087"
  },
  {
    "url": "study/index.html",
    "revision": "7f0caa1a1f2c27d7a3172bed7039aca5"
  },
  {
    "url": "study/js_A.html",
    "revision": "a8a3c614ab3d961c3b3c06cbc3d3f158"
  },
  {
    "url": "study/js_AA.html",
    "revision": "6207c13468a401f6fd678cac8e315d8f"
  },
  {
    "url": "study/js_AAA.html",
    "revision": "9b82f3a54b3802874b81f75064c1c3d9"
  },
  {
    "url": "study/mobile.html",
    "revision": "4b50b8558be86e20dc040e0574d9c342"
  },
  {
    "url": "study/performance.html",
    "revision": "70e4c720c37499a824111482033ec7fd"
  },
  {
    "url": "study/questions.html",
    "revision": "8515eb39c61eb555d9a2299f7e265744"
  },
  {
    "url": "study/vue_code.html",
    "revision": "98c0e0b278da13c9655d8028a51e3c19"
  },
  {
    "url": "study/vue.html",
    "revision": "34bd308bec8885870a0f03b03be376a0"
  },
  {
    "url": "study/webpack.html",
    "revision": "63d9392f9f00fa4c0d4374a6da365c9c"
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
