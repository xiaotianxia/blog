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
    "revision": "1ce60686d23d5361f1eb18835dc5f615"
  },
  {
    "url": "assets/css/0.styles.51ca61eb.css",
    "revision": "9ccc00520a3892c0d29f6f272a6340e8"
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
    "url": "assets/js/109.6f67fa6b.js",
    "revision": "979912c001b9a2fa53ef262cdda1ffd7"
  },
  {
    "url": "assets/js/11.d5594752.js",
    "revision": "150ed98af6acde5f6bdcdb6fa808fd21"
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
    "url": "assets/js/113.0dab39c8.js",
    "revision": "3645925ddd44a9d6c3642fea09118af5"
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
    "url": "assets/js/12.106d7501.js",
    "revision": "f8804d2af5564abb7e9e2367ef79fa9c"
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
    "url": "assets/js/17.d802c433.js",
    "revision": "259f5a306268aa1f33364619c50098a3"
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
    "url": "assets/js/24.a9e44d6e.js",
    "revision": "9dbe9f4be3bfa358354939081dc45f8c"
  },
  {
    "url": "assets/js/25.e4b67371.js",
    "revision": "27a077833b498956be759478abc93e94"
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
    "url": "assets/js/5.df1e7981.js",
    "revision": "5c0a2e2deb984e94f401cf2395dfa9db"
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
    "url": "assets/js/59.b259c47d.js",
    "revision": "d54d0dce68e3108c89161fe2c1d1f6c7"
  },
  {
    "url": "assets/js/6.6a25eb2a.js",
    "revision": "fc9c39875f8e67494b982937530ee42d"
  },
  {
    "url": "assets/js/60.5756cce1.js",
    "revision": "aba20a2e3cadd8624b43e6730a13e944"
  },
  {
    "url": "assets/js/61.f72cba1a.js",
    "revision": "2cac6e88fcda6743233539c0fa9f84c5"
  },
  {
    "url": "assets/js/62.2d581a5a.js",
    "revision": "140517274891987b25fad144316d565b"
  },
  {
    "url": "assets/js/63.6ef4dc19.js",
    "revision": "e7276acf51b0b55f277c89f7d76e813d"
  },
  {
    "url": "assets/js/64.b74ca2d5.js",
    "revision": "bd6c0f37710e5d7166df1dfd2994eb9d"
  },
  {
    "url": "assets/js/65.dc5afc85.js",
    "revision": "8600717a1bfa2063d2ddd31162aa94a1"
  },
  {
    "url": "assets/js/66.ff25078a.js",
    "revision": "09628011dd636f1abb6f76e9dc8198e9"
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
    "url": "assets/js/69.144facb1.js",
    "revision": "037e03a8ef6b0d586e95a9940bcdfeae"
  },
  {
    "url": "assets/js/7.4eab58d2.js",
    "revision": "35b04dfce7155aaca5a2fe446daf5b14"
  },
  {
    "url": "assets/js/70.9800f565.js",
    "revision": "bb33dedc086f57a7a13164542fa51de4"
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
    "url": "assets/js/73.04d7758b.js",
    "revision": "6e3573a403bc29624c28551414c691a9"
  },
  {
    "url": "assets/js/74.be666e15.js",
    "revision": "5fa070c540d3e91497304891ad725808"
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
    "url": "assets/js/79.51ff1f0a.js",
    "revision": "303474d0171261a085dfb0cf63529e3a"
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
    "url": "assets/js/81.62897024.js",
    "revision": "49e5c2342da377be8d472516362d7148"
  },
  {
    "url": "assets/js/82.bbe6bda0.js",
    "revision": "7c6b537c12a1ddf58e00024d3158a0ef"
  },
  {
    "url": "assets/js/83.f996b69b.js",
    "revision": "19eea4958acf030f413a05d3851860d8"
  },
  {
    "url": "assets/js/84.c9a2fa02.js",
    "revision": "9771ba4281cf5d11354037827ad9588c"
  },
  {
    "url": "assets/js/85.dd67a87f.js",
    "revision": "cd31dfd612d565191afa6b84495f54c8"
  },
  {
    "url": "assets/js/86.b5895e9d.js",
    "revision": "7902e1edbc2db405aba6208b16fa49b6"
  },
  {
    "url": "assets/js/87.2a192a39.js",
    "revision": "30741e162228ed37addbbc96e0dfdd7a"
  },
  {
    "url": "assets/js/88.7040851e.js",
    "revision": "924ec82cc591d093d0bcfa60c6027a1f"
  },
  {
    "url": "assets/js/89.016935bd.js",
    "revision": "4a5cb1e58b9e8e8a1d50d062f80be8b8"
  },
  {
    "url": "assets/js/9.26c0dc9a.js",
    "revision": "688401c859e7922f1ef53197f291e6c5"
  },
  {
    "url": "assets/js/90.859f90ee.js",
    "revision": "bec16165971a6caa79fccb3474d55edb"
  },
  {
    "url": "assets/js/91.877fffa1.js",
    "revision": "b30cb35961bb338101079597060cb879"
  },
  {
    "url": "assets/js/92.7b2c20d7.js",
    "revision": "276faafba086073c93308fe9fddc65f1"
  },
  {
    "url": "assets/js/93.043ba7c4.js",
    "revision": "0e78151ca64d255c87f939abe915ab27"
  },
  {
    "url": "assets/js/94.bc4b087a.js",
    "revision": "bedec73cd5c70cef93b928031098670f"
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
    "url": "assets/js/97.7c33cd44.js",
    "revision": "b5302a3a2e93f82c3c4e65daa43f7280"
  },
  {
    "url": "assets/js/98.f5c0b6f2.js",
    "revision": "64a0b773ec096c45be01fbed136bbe23"
  },
  {
    "url": "assets/js/99.902ff5c1.js",
    "revision": "6d308d85e16ddf1749f0158e55c4f819"
  },
  {
    "url": "assets/js/app.e5bf6791.js",
    "revision": "83748be274fc960055ff90cd2cac643c"
  },
  {
    "url": "assets/js/vendors~notification.d5e78cba.js",
    "revision": "a8a265705d3149c734372cd62eccc21a"
  },
  {
    "url": "css/clip_path.html",
    "revision": "96dc41ac46982cf8cdbe99b76ec8da59"
  },
  {
    "url": "css/columns.html",
    "revision": "f03766837106a4172be8add8d9d9d0ec"
  },
  {
    "url": "css/grid_layout.html",
    "revision": "e851eb5b66f80af63ce8b3e54f375ec9"
  },
  {
    "url": "css/index.html",
    "revision": "975a0d4a391d0cc8079c6f9d7a727cb0"
  },
  {
    "url": "css/styled_switch.html",
    "revision": "631dbe175392ee8d92c8ea95c4a79ed8"
  },
  {
    "url": "css/svg_path_animation.html",
    "revision": "900b0e2cb6097962ffdbc74d6feb625a"
  },
  {
    "url": "css/use_of_checkbox.html",
    "revision": "b66ef8cb29c6a28df2c646629c46058e"
  },
  {
    "url": "else/index.html",
    "revision": "49ab78d936d0ab1b28c3ba912162020a"
  },
  {
    "url": "else/miao.html",
    "revision": "e2ccae7bc412a9f79a17a62c75c993a9"
  },
  {
    "url": "hero.gif",
    "revision": "aefbc8b54f167d7eacea3e4c65e865cc"
  },
  {
    "url": "html/canvas_pixel_pick.html",
    "revision": "35813debd5faaca222e2cbc42b985385"
  },
  {
    "url": "html/canvas_video_green_screen_cutout.html",
    "revision": "d36d7675e4c57133edc983bdd307c66d"
  },
  {
    "url": "html/dialog_element.html",
    "revision": "7f712393d528e87753e6834f10f10990"
  },
  {
    "url": "html/index.html",
    "revision": "ea96d7b3fb609d6203e7da653d3fa1fd"
  },
  {
    "url": "html/web_components.html",
    "revision": "d1b62c4384c1e9072d5ced82a27ba0ec"
  },
  {
    "url": "images/jiaolou.jpg",
    "revision": "a9eb6fa056774b0255ff0409138de1c5"
  },
  {
    "url": "index.html",
    "revision": "a49576fa574e71a278e6ca97d23af072"
  },
  {
    "url": "js/camera_in_js_trial.html",
    "revision": "aae69a7f1012d55652ed76d96a1d0861"
  },
  {
    "url": "js/communication_using_postmessage.html",
    "revision": "bb2898f552190e98f9057e8b08184adc"
  },
  {
    "url": "js/editable_dom.html",
    "revision": "5acac382d40851852a0ed5128bd4684c"
  },
  {
    "url": "js/four_kinds_of_observers.html",
    "revision": "d11fae16c7b0f87f4d3dcc0f402d4293"
  },
  {
    "url": "js/index.html",
    "revision": "5afe249bcaaf459e0ae2dcc17526ef9b"
  },
  {
    "url": "js/kinds_of_xs_and_ys.html",
    "revision": "3a3ddb2f1604e5dd87486b8ed1add34d"
  },
  {
    "url": "js/scroll_behaviors.html",
    "revision": "745a56c92a23d19f51300dd0ffc8f44c"
  },
  {
    "url": "js/shape_detection_api_trial.html",
    "revision": "675be3ee08465949b3c04b8146ef1e4c"
  },
  {
    "url": "js/simple_chatroom_using_socketio.html",
    "revision": "4a4b83f60024739ce181c6631cf0a305"
  },
  {
    "url": "js/simple_code_preview.html",
    "revision": "eca2720d596d66f54876b9656181fe4c"
  },
  {
    "url": "js/speech_in_js_recognition.html",
    "revision": "68c530db09584d37da934ef7717f2c07"
  },
  {
    "url": "js/speech_in_js_synthesis.html",
    "revision": "69d7668775be8771a80358fd07034859"
  },
  {
    "url": "js/upload_using_filereader_createobjecturl.html",
    "revision": "f60e3c3dabef449c2ba7f2345731a8c4"
  },
  {
    "url": "js/useful_webapis_audiocontext.html",
    "revision": "4bc9557232a2bb6a76a26be0a1ae3c01"
  },
  {
    "url": "js/useful_webapis_connection.html",
    "revision": "765fab000a5f19befc566cad76990924"
  },
  {
    "url": "js/useful_webapis_fullscreen.html",
    "revision": "6ca2bfd44ff3309c3f977876a56b1cc1"
  },
  {
    "url": "js/useful_webapis_geolocation.html",
    "revision": "008df19adbd0a7bbddfd2d363ef6ab26"
  },
  {
    "url": "js/useful_webapis_mediarecorder.html",
    "revision": "d924898210001f2e4c5fd80ad5d138fb"
  },
  {
    "url": "js/useful_webapis_notification.html",
    "revision": "bd265d2b23b03a483d630d14468eba67"
  },
  {
    "url": "logo.png",
    "revision": "fe74ab6d2c004ff8a8257c397bcaa058"
  },
  {
    "url": "study/algorithm.html",
    "revision": "b4083525353597f40fa216d6fcb9d8a5"
  },
  {
    "url": "study/api.html",
    "revision": "176263476b303b7d7c29e73efd9d8a52"
  },
  {
    "url": "study/browser.html",
    "revision": "674694a7b0fbf04e1599f73c56ac1418"
  },
  {
    "url": "study/conception.html",
    "revision": "d5337395e5078e3126e718b236d974b2"
  },
  {
    "url": "study/css_A.html",
    "revision": "25d143ac3341be86707722d86b2a29e2"
  },
  {
    "url": "study/css_AA.html",
    "revision": "b74ec081ac97f8879e37539912109f74"
  },
  {
    "url": "study/css_AAA.html",
    "revision": "48e47154c128205f5d0f57e6f478a910"
  },
  {
    "url": "study/css_technics.html",
    "revision": "4757d6787d0d57252bcc7802650d6961"
  },
  {
    "url": "study/diy.html",
    "revision": "5da789096b5f4c364368613378609072"
  },
  {
    "url": "study/DOM.html",
    "revision": "2aeee8dcd4016c4eaf1fdf8536043d14"
  },
  {
    "url": "study/engineering.html",
    "revision": "8be51a85bccc004cb5dfe1f59873ae8d"
  },
  {
    "url": "study/es6.html",
    "revision": "e19e46ddf1f068629d3d1e09035e52d6"
  },
  {
    "url": "study/http.html",
    "revision": "a1cb82f9e2337598482fd936b64de35a"
  },
  {
    "url": "study/index.html",
    "revision": "94bc17491ab31eb67f071a91947b9cfb"
  },
  {
    "url": "study/js_A.html",
    "revision": "12bd25079af5cf49ed94d4038c5f5190"
  },
  {
    "url": "study/js_AA.html",
    "revision": "aabdaa6b34ebf624bf23748ba3c81efb"
  },
  {
    "url": "study/js_AAA.html",
    "revision": "53a9e6328f097b401a74d6030956bea9"
  },
  {
    "url": "study/mobile.html",
    "revision": "3ea5fa6f24e3ecf9bd07fc059c8b5d42"
  },
  {
    "url": "study/performance.html",
    "revision": "179c32d1839640eb74e70ce396e34cd8"
  },
  {
    "url": "study/questions.html",
    "revision": "a280208283b0679e3381f73c1cb1f4ab"
  },
  {
    "url": "study/vue_code.html",
    "revision": "d1f4c443ab1031150188c9ffb16abfd5"
  },
  {
    "url": "study/vue.html",
    "revision": "b7216a7c0f25d25aeba260b6a6e88654"
  },
  {
    "url": "study/webpack.html",
    "revision": "73000a8c94bfc8df13cc11415911e70c"
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
