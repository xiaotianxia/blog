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
    "revision": "8daffa36470a94bced5aa4fb89668267"
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
    "url": "assets/js/100.95d051b3.js",
    "revision": "8f6689ab9f72dd6dfc09be1cade2e830"
  },
  {
    "url": "assets/js/101.6797225a.js",
    "revision": "12b32f0ccaf228a73427c2602d9408df"
  },
  {
    "url": "assets/js/102.8648aa61.js",
    "revision": "2d4c0d1e82741c0d349a055d957e02db"
  },
  {
    "url": "assets/js/103.99e4ddc1.js",
    "revision": "83a60814c4e02748824dd0a8340ce68a"
  },
  {
    "url": "assets/js/104.f5191572.js",
    "revision": "cc7575531b2c43e2f45fcfc527729fc2"
  },
  {
    "url": "assets/js/105.dd6d0176.js",
    "revision": "2e95470f3d696454b43c64fc9587b567"
  },
  {
    "url": "assets/js/106.d5f78526.js",
    "revision": "80de2abebb3ca3f04985589a759280b0"
  },
  {
    "url": "assets/js/107.3fe997ad.js",
    "revision": "5af97c019608f4b5202f8590f3cd5f96"
  },
  {
    "url": "assets/js/108.143f59f0.js",
    "revision": "ec57b068f0070feaecdf925c52e992e5"
  },
  {
    "url": "assets/js/109.4bf7108c.js",
    "revision": "0cdfad8872c42b89aa93e3417be0628c"
  },
  {
    "url": "assets/js/11.d5594752.js",
    "revision": "150ed98af6acde5f6bdcdb6fa808fd21"
  },
  {
    "url": "assets/js/110.40b3c0d0.js",
    "revision": "1eb1be53137f13a74a58d3be3a22ab60"
  },
  {
    "url": "assets/js/111.4713db3f.js",
    "revision": "d31ba591fef3e99580918429636f0d6f"
  },
  {
    "url": "assets/js/112.127533e0.js",
    "revision": "e7dc6dcfa854d2bc53856a03d2ca4e21"
  },
  {
    "url": "assets/js/113.a04fbb3e.js",
    "revision": "f2392705419a480a3a3b4fa0920d552f"
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
    "url": "assets/js/60.3b50c5c3.js",
    "revision": "30469ae8c9c2e64147133ee602263732"
  },
  {
    "url": "assets/js/61.911a0f19.js",
    "revision": "1ecff9c83b41154ac228f79355589573"
  },
  {
    "url": "assets/js/62.7676e73a.js",
    "revision": "1eb2dc2008f93ed85c9c4f1f02071a71"
  },
  {
    "url": "assets/js/63.e7d50ca2.js",
    "revision": "cdb0d83e2e8912dc86c82da58003daed"
  },
  {
    "url": "assets/js/64.dadcf0ae.js",
    "revision": "acbca0259579b2dab4114b7facc2438a"
  },
  {
    "url": "assets/js/65.1043454b.js",
    "revision": "10fe95ca54e9948f13d362c277f3c802"
  },
  {
    "url": "assets/js/66.bb132898.js",
    "revision": "b08632c6746f4784631c4127be510a24"
  },
  {
    "url": "assets/js/67.b4b44da1.js",
    "revision": "d3c9dee2b6e13428b93965dd6a739169"
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
    "url": "assets/js/71.14391bc0.js",
    "revision": "3817c054dbe8f144ece2017f4891a3a9"
  },
  {
    "url": "assets/js/72.6b0317cb.js",
    "revision": "e93d2507e2b533f3a0172025e6ba5966"
  },
  {
    "url": "assets/js/73.50252a72.js",
    "revision": "8bfcca166fcab1b20d4d488f4926af9c"
  },
  {
    "url": "assets/js/74.e3ec950c.js",
    "revision": "9442f68ea536fe4f83b38dcf9309533d"
  },
  {
    "url": "assets/js/75.c37c3d47.js",
    "revision": "fa03a5ef1a042e91d7fe630985690d21"
  },
  {
    "url": "assets/js/76.fa1ba15d.js",
    "revision": "6dcf7125b991eb3b707d0622e75d5c7d"
  },
  {
    "url": "assets/js/77.9d9192b7.js",
    "revision": "eb56c652b858f1bf33fbe9a9b7194a73"
  },
  {
    "url": "assets/js/78.1d64fb34.js",
    "revision": "e0d16a629a318cb587d41536d2e389bd"
  },
  {
    "url": "assets/js/79.c06af77a.js",
    "revision": "249b5cfaa53c74eb4637d6fa94cde871"
  },
  {
    "url": "assets/js/8.740e5f25.js",
    "revision": "b242cf82b520ff107507d5b9896cffb2"
  },
  {
    "url": "assets/js/80.5c7ca8fa.js",
    "revision": "42ca539545052121c6be178ccfe8b82a"
  },
  {
    "url": "assets/js/81.88b9b005.js",
    "revision": "10b920142ee03330d46d9870f6f632dc"
  },
  {
    "url": "assets/js/82.bbd16e35.js",
    "revision": "172ca8679cd43afde6b654260d71c8b9"
  },
  {
    "url": "assets/js/83.c1717033.js",
    "revision": "ff091a1ec5850252b5fd4a9d05681faf"
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
    "url": "assets/js/89.016935bd.js",
    "revision": "4a5cb1e58b9e8e8a1d50d062f80be8b8"
  },
  {
    "url": "assets/js/9.26c0dc9a.js",
    "revision": "688401c859e7922f1ef53197f291e6c5"
  },
  {
    "url": "assets/js/90.f5d7cd4c.js",
    "revision": "5f3f02ee8259ef4b4a19352af7422f9e"
  },
  {
    "url": "assets/js/91.f8255e2f.js",
    "revision": "c49f9937a118348894654a3405f39b99"
  },
  {
    "url": "assets/js/92.3ff9e069.js",
    "revision": "dca1b28e7f4dcd892ec4a0f90ebd0c27"
  },
  {
    "url": "assets/js/93.ca248572.js",
    "revision": "aadb57985120cbf466e68fc1a9e0c958"
  },
  {
    "url": "assets/js/94.83b5caf0.js",
    "revision": "689d80fb30584e736a3a65af83c6641c"
  },
  {
    "url": "assets/js/95.fe0e00dc.js",
    "revision": "147cb4adb860de821d76b18539fde4f3"
  },
  {
    "url": "assets/js/96.9071e2b5.js",
    "revision": "5976ece05414f94868ef6babaeb5f17d"
  },
  {
    "url": "assets/js/97.6865bb8d.js",
    "revision": "3234564af91f1d734edced9c2e747ea4"
  },
  {
    "url": "assets/js/98.7f00812b.js",
    "revision": "27da5faad35283442c2c0b37f6fcb320"
  },
  {
    "url": "assets/js/99.351d3bf4.js",
    "revision": "ee232ab4b678984f9b65f323f416d875"
  },
  {
    "url": "assets/js/app.acede38b.js",
    "revision": "bb005c603b07f6c81f394cd2a8501dfe"
  },
  {
    "url": "assets/js/vendors~notification.d5e78cba.js",
    "revision": "a8a265705d3149c734372cd62eccc21a"
  },
  {
    "url": "css/clip_path.html",
    "revision": "607f42a0db0e47f490aaa53d91746b3a"
  },
  {
    "url": "css/columns.html",
    "revision": "ec105c5e7291a5c81a16d6c7a60bd609"
  },
  {
    "url": "css/grid_layout.html",
    "revision": "103a478c2bd77a9d4ad03ea3bab50efc"
  },
  {
    "url": "css/index.html",
    "revision": "ae5c2c335105c0830a4f1f1536539ebc"
  },
  {
    "url": "css/styled_switch.html",
    "revision": "090441046f7c33575b36845ef94f84ee"
  },
  {
    "url": "css/svg_path_animation.html",
    "revision": "5a7e626b0988b122d2275fac172e150a"
  },
  {
    "url": "css/use_of_checkbox.html",
    "revision": "092a5711f719b77b1080fa0941acf400"
  },
  {
    "url": "else/index.html",
    "revision": "3d7fbf7dada8134d196ce4f306e3b6ae"
  },
  {
    "url": "else/miao.html",
    "revision": "7cc262bc20dfa8e29090f348d0e85c39"
  },
  {
    "url": "hero.gif",
    "revision": "aefbc8b54f167d7eacea3e4c65e865cc"
  },
  {
    "url": "html/canvas_pixel_pick.html",
    "revision": "ee428e6a8779e92fd149f87da2c563ea"
  },
  {
    "url": "html/canvas_video_green_screen_cutout.html",
    "revision": "25ce274dc03422dfb75f5d39725bf872"
  },
  {
    "url": "html/dialog_element.html",
    "revision": "1ef8ed8a73c63bf20fb6a58e5929b671"
  },
  {
    "url": "html/index.html",
    "revision": "0f35b01cbc88121678666db2aafada7e"
  },
  {
    "url": "html/web_components.html",
    "revision": "368cea9247f7789ff2f007cc2e088cbd"
  },
  {
    "url": "images/jiaolou.jpg",
    "revision": "a9eb6fa056774b0255ff0409138de1c5"
  },
  {
    "url": "index.html",
    "revision": "c1ee25b5ebc76d0875ad5bdd249964a5"
  },
  {
    "url": "js/camera_in_js_trial.html",
    "revision": "bf0349195eaafb6533ace1badb4ca7ad"
  },
  {
    "url": "js/communication_using_postmessage.html",
    "revision": "21f76078660a6fdff6ad88d181002d65"
  },
  {
    "url": "js/editable_dom.html",
    "revision": "2b90f91d71195ccb0e901427cda0ed60"
  },
  {
    "url": "js/four_kinds_of_observers.html",
    "revision": "ef5478377ba45c5f1cb0dac7154f7096"
  },
  {
    "url": "js/index.html",
    "revision": "d4d01894360be567e431280f93e0b9bd"
  },
  {
    "url": "js/kinds_of_xs_and_ys.html",
    "revision": "a0baab35ffe368c99344c58ba4544de8"
  },
  {
    "url": "js/scroll_behaviors.html",
    "revision": "a4d47d2f569f36a0e64b6e41f9e6f9f0"
  },
  {
    "url": "js/shape_detection_api_trial.html",
    "revision": "88f0ce6c757be5ff432f97a7107357f4"
  },
  {
    "url": "js/simple_chatroom_using_socketio.html",
    "revision": "46060f6502c68e0ca4aaedb7b6feeb5d"
  },
  {
    "url": "js/simple_code_preview.html",
    "revision": "ad120d298b374e9d0c95b631a70b8545"
  },
  {
    "url": "js/speech_in_js_recognition.html",
    "revision": "b3faf819508737b5d5c79eb77e523087"
  },
  {
    "url": "js/speech_in_js_synthesis.html",
    "revision": "92dadbd112a792fe68ab9461912bb42c"
  },
  {
    "url": "js/upload_using_filereader_createobjecturl.html",
    "revision": "f082bd63236233f29287851c6e0891c5"
  },
  {
    "url": "js/useful_webapis_audiocontext.html",
    "revision": "b2fa68ee4116779bed5ebff401f24105"
  },
  {
    "url": "js/useful_webapis_connection.html",
    "revision": "ff9de61a8ecc05131d27c9b8dc2f13bc"
  },
  {
    "url": "js/useful_webapis_fullscreen.html",
    "revision": "d4e16d9049ff294a1b21248b06052ca9"
  },
  {
    "url": "js/useful_webapis_geolocation.html",
    "revision": "ac4390153aef22724b05f28ef872c645"
  },
  {
    "url": "js/useful_webapis_mediarecorder.html",
    "revision": "14067b806e420245f921d851c0a84db4"
  },
  {
    "url": "js/useful_webapis_notification.html",
    "revision": "885b3c8bd0e67ea9407933b383d0162e"
  },
  {
    "url": "logo.png",
    "revision": "fe74ab6d2c004ff8a8257c397bcaa058"
  },
  {
    "url": "study/algorithm.html",
    "revision": "b8f7c058fea0d62e03516eb1c40edf14"
  },
  {
    "url": "study/api.html",
    "revision": "4c5d707ff3ee889b6b491f96a6b87eee"
  },
  {
    "url": "study/browser.html",
    "revision": "4067631490fd824de176943c8ce82cea"
  },
  {
    "url": "study/conception.html",
    "revision": "b51028b9dace1f3456c615ecd70d90bd"
  },
  {
    "url": "study/css_A.html",
    "revision": "37b13b59b7fcca2ba190b94bfb68b3b1"
  },
  {
    "url": "study/css_AA.html",
    "revision": "17c79b6e1ae093be1ac3eee4833c0ae2"
  },
  {
    "url": "study/css_AAA.html",
    "revision": "b443d62dfb72079c09dc36f95f3a10c0"
  },
  {
    "url": "study/css_technics.html",
    "revision": "79be29255fb3a38cb05cc172b1efa8bf"
  },
  {
    "url": "study/diy.html",
    "revision": "25eb2ca66da5d0dadb058c8e522360e0"
  },
  {
    "url": "study/DOM.html",
    "revision": "f3e11ff2ee10c6692dc4428a2b6d491c"
  },
  {
    "url": "study/engineering.html",
    "revision": "7c01aebb001779409810236c4a53908f"
  },
  {
    "url": "study/es6.html",
    "revision": "2b73410ef1bbe95d8702d3e74b08d3a5"
  },
  {
    "url": "study/http.html",
    "revision": "b3ccfd4ec020d7062f8555be10e2492b"
  },
  {
    "url": "study/index.html",
    "revision": "983665e96adb240b71b67ec9f73c1ebe"
  },
  {
    "url": "study/js_A.html",
    "revision": "e77a82ab41a00c802b6d2db714ffc4ff"
  },
  {
    "url": "study/js_AA.html",
    "revision": "6c83ed45a578e036363aca0a8188362f"
  },
  {
    "url": "study/js_AAA.html",
    "revision": "8a1357d71cc9e48bb191ff6a8d1f3f6f"
  },
  {
    "url": "study/mobile.html",
    "revision": "f6bc889d437ae9a48a7d23867f131122"
  },
  {
    "url": "study/performance.html",
    "revision": "7370c0830d9431bd1f480ab17a66ec7c"
  },
  {
    "url": "study/questions.html",
    "revision": "c02ba72aa0714ac8108b34c82e07bb0e"
  },
  {
    "url": "study/vue_code.html",
    "revision": "7ba9ab32375acf463cdbf7cf9b8993be"
  },
  {
    "url": "study/vue.html",
    "revision": "468d7bef835ae36c2495069df31a3540"
  },
  {
    "url": "study/webpack.html",
    "revision": "96ba931e4aa7ef47265bf4400c306453"
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
