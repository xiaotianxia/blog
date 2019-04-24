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
    "revision": "dd1c43a884a21609babb2d3ad5209aae"
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
    "url": "assets/js/101.e1e41675.js",
    "revision": "93b14f81e98a607fdee2efdca929b0a6"
  },
  {
    "url": "assets/js/102.ca8e5612.js",
    "revision": "06526d133650e29b956919d19347f126"
  },
  {
    "url": "assets/js/103.99e4ddc1.js",
    "revision": "83a60814c4e02748824dd0a8340ce68a"
  },
  {
    "url": "assets/js/104.15334917.js",
    "revision": "f0ca2ce7405c6d39a3a51615b82235c3"
  },
  {
    "url": "assets/js/105.dd6d0176.js",
    "revision": "2e95470f3d696454b43c64fc9587b567"
  },
  {
    "url": "assets/js/106.2a6335ba.js",
    "revision": "b887d72fbc2805a5e55bcd4cd2d00fd4"
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
    "url": "assets/js/114.81c62d86.js",
    "revision": "2fa553ac3d2c2b117be777e337e8a3ad"
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
    "url": "assets/js/60.f0230a52.js",
    "revision": "c22d23c6e3c69b87f4a108db680da47d"
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
    "url": "assets/js/63.2d010b5e.js",
    "revision": "9e6ad2245630b2ba70d96825b468c9ed"
  },
  {
    "url": "assets/js/64.fccb733a.js",
    "revision": "43dde93856114d9fe341afe707058e22"
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
    "url": "assets/js/70.9800f565.js",
    "revision": "bb33dedc086f57a7a13164542fa51de4"
  },
  {
    "url": "assets/js/71.e35e8465.js",
    "revision": "3f10997a4681244eb4778bff078a013e"
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
    "url": "assets/js/74.d5e70b1e.js",
    "revision": "328dbbb6856edfbe2e0fe5ae7b5419ef"
  },
  {
    "url": "assets/js/75.6caa9719.js",
    "revision": "50f9b4ff452f47498d2c7e112bb65056"
  },
  {
    "url": "assets/js/76.e2fc01d5.js",
    "revision": "be43ec014998f9337a1f938935d75f1d"
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
    "url": "assets/js/79.490c2312.js",
    "revision": "721a776f5b0207d58f75e2cdb33be2fa"
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
    "url": "assets/js/81.046b09ed.js",
    "revision": "b535d2276b429e8d183f73008763442f"
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
    "url": "assets/js/84.b53cb520.js",
    "revision": "eca99add8f3a74a166b00c3a666042bc"
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
    "url": "assets/js/87.2a192a39.js",
    "revision": "30741e162228ed37addbbc96e0dfdd7a"
  },
  {
    "url": "assets/js/88.7040851e.js",
    "revision": "924ec82cc591d093d0bcfa60c6027a1f"
  },
  {
    "url": "assets/js/89.4a319ee5.js",
    "revision": "5c24056ed91abe4d497a95c895ee935b"
  },
  {
    "url": "assets/js/9.26c0dc9a.js",
    "revision": "688401c859e7922f1ef53197f291e6c5"
  },
  {
    "url": "assets/js/90.227d812c.js",
    "revision": "19085b6f9fd24985eb2f0ac14b6f3331"
  },
  {
    "url": "assets/js/91.77166501.js",
    "revision": "04261e2be4194d27626c4015a8650a0b"
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
    "url": "assets/js/96.d949f050.js",
    "revision": "b51a371ac4703987343a4fd1d20591e6"
  },
  {
    "url": "assets/js/97.c6d28367.js",
    "revision": "590110a21b2c9ea5086dbbf93321c1c7"
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
    "url": "assets/js/app.9b107664.js",
    "revision": "f81e9a77f36e65c5ea14baf21b3c3220"
  },
  {
    "url": "assets/js/vendors~notification.d5e78cba.js",
    "revision": "a8a265705d3149c734372cd62eccc21a"
  },
  {
    "url": "css/clip_path.html",
    "revision": "27634e85663f36f876afbcb139bccf22"
  },
  {
    "url": "css/columns.html",
    "revision": "4dc06848fcbe60b9a25573039d75e5e9"
  },
  {
    "url": "css/grid_layout.html",
    "revision": "f6fd04d0f859449a692185b974f8fbf0"
  },
  {
    "url": "css/index.html",
    "revision": "1e23d64150cfdd825ff719fde6958389"
  },
  {
    "url": "css/styled_switch.html",
    "revision": "f5cd568c27e9ed57a4856125420270bc"
  },
  {
    "url": "css/svg_path_animation.html",
    "revision": "d95b7c6ac942bd25f75bd18d75d3ce0a"
  },
  {
    "url": "css/use_of_checkbox.html",
    "revision": "d6da1320c56364ccc6fec486833f5c10"
  },
  {
    "url": "else/index.html",
    "revision": "01530a319a43af0b72c75ce47d9e7ad7"
  },
  {
    "url": "else/miao.html",
    "revision": "238685b3665276bec474c1808f901dcc"
  },
  {
    "url": "hero.gif",
    "revision": "aefbc8b54f167d7eacea3e4c65e865cc"
  },
  {
    "url": "html/canvas_pixel_pick.html",
    "revision": "da3d675b81a3fa8cd08bc64712524fe8"
  },
  {
    "url": "html/canvas_video_green_screen_cutout.html",
    "revision": "11b20fbf7f01233d2f9ca08c2dbab8e1"
  },
  {
    "url": "html/dialog_element.html",
    "revision": "508f139b3f30f83d10070f3f5c6b68b8"
  },
  {
    "url": "html/index.html",
    "revision": "4ab3defa90d08f2a53bbe60f769bd302"
  },
  {
    "url": "html/web_components.html",
    "revision": "79a727cc3d83384ac5f601fa128aca38"
  },
  {
    "url": "images/jiaolou.jpg",
    "revision": "a9eb6fa056774b0255ff0409138de1c5"
  },
  {
    "url": "index.html",
    "revision": "60c3699b6558fc06aa56139f6c89a727"
  },
  {
    "url": "js/camera_in_js_trial.html",
    "revision": "e957a90f324239b539c4d032cf6fc289"
  },
  {
    "url": "js/communication_using_postmessage.html",
    "revision": "8593a34ae36e018a826d4c45786c4206"
  },
  {
    "url": "js/editable_dom.html",
    "revision": "53450aa19c1c08dfccb89416f05ffdde"
  },
  {
    "url": "js/four_kinds_of_observers.html",
    "revision": "9aafcc3a8dc0fb82f009872a55a84b97"
  },
  {
    "url": "js/index.html",
    "revision": "9a23ba6ce46aa59fa55a9686355a8d73"
  },
  {
    "url": "js/kinds_of_xs_and_ys.html",
    "revision": "42c55b28dfaf1a0b4fe7605090b16a1e"
  },
  {
    "url": "js/scroll_behaviors.html",
    "revision": "77f2f95d738e9af4011a5e36db9957b5"
  },
  {
    "url": "js/shape_detection_api_trial.html",
    "revision": "1289b265eeaccb6fea3b348677990f72"
  },
  {
    "url": "js/simple_chatroom_using_socketio.html",
    "revision": "3298acb92be6cc851f7ec12c56346992"
  },
  {
    "url": "js/simple_code_preview.html",
    "revision": "0f76cf68ec9cdfebcb14f6154e9f5aeb"
  },
  {
    "url": "js/speech_in_js_recognition.html",
    "revision": "d5d71f754bb87164bb06a67225bbd7a2"
  },
  {
    "url": "js/speech_in_js_synthesis.html",
    "revision": "553745955122808785d4f1570dac6eee"
  },
  {
    "url": "js/upload_using_filereader_createobjecturl.html",
    "revision": "4c3e2dd9b32f13cfee8ae8e2fbd21485"
  },
  {
    "url": "js/useful_webapis_audiocontext.html",
    "revision": "99cb2077a285348100de6f201f4a0559"
  },
  {
    "url": "js/useful_webapis_connection.html",
    "revision": "455c2c7275319d46227451acbb5d53a3"
  },
  {
    "url": "js/useful_webapis_fullscreen.html",
    "revision": "b7f55f7a255c26c379bc48863c86ff8f"
  },
  {
    "url": "js/useful_webapis_geolocation.html",
    "revision": "837fb25d8f194b07122cca77a2554217"
  },
  {
    "url": "js/useful_webapis_mediarecorder.html",
    "revision": "ac39bd6c44e14f3da05eb2cb808ceaae"
  },
  {
    "url": "js/useful_webapis_notification.html",
    "revision": "494960135ad97495e61958c04bf2aa48"
  },
  {
    "url": "logo.png",
    "revision": "fe74ab6d2c004ff8a8257c397bcaa058"
  },
  {
    "url": "study/algorithm.html",
    "revision": "8bc92147b9294ab952f768b47fe84bbb"
  },
  {
    "url": "study/api.html",
    "revision": "0c923bd46b830cbe6cc29a409930ed03"
  },
  {
    "url": "study/browser.html",
    "revision": "e074f4ffe37e1a3b84ca4573b8a55cdb"
  },
  {
    "url": "study/conception.html",
    "revision": "b0ebf59f797b0079c3e678b4defab3e4"
  },
  {
    "url": "study/css_A.html",
    "revision": "dd95ceec74030ab29c1a9c0bee890834"
  },
  {
    "url": "study/css_AA.html",
    "revision": "bd00363342ffd9d7b44496a2bc410979"
  },
  {
    "url": "study/css_AAA.html",
    "revision": "75e894ae7b779d51ae7a9b4d54bba8e0"
  },
  {
    "url": "study/css_technics.html",
    "revision": "b5c334402906c746c402d65ac8b978c8"
  },
  {
    "url": "study/diy.html",
    "revision": "70a46237d5b43a0034564b251aec5065"
  },
  {
    "url": "study/DOM.html",
    "revision": "90a270ecf08372f36d52c0ea7df9114e"
  },
  {
    "url": "study/engineering.html",
    "revision": "f82518f5075b01b34313023d5b0a0185"
  },
  {
    "url": "study/es6.html",
    "revision": "8f099e878a224e8cfd136b18f357e18a"
  },
  {
    "url": "study/http.html",
    "revision": "34a14fcc9c15d52f54b00d5286cfb4d1"
  },
  {
    "url": "study/index.html",
    "revision": "0b9a999a20f2ea4dedd49fe857242db1"
  },
  {
    "url": "study/js_A.html",
    "revision": "0b0d2c66b8c841d55f2534d92abf174a"
  },
  {
    "url": "study/js_AA.html",
    "revision": "d962e6e4658f072010f47f9ee8717289"
  },
  {
    "url": "study/js_AAA.html",
    "revision": "ac02b50588ac8e094c26fb3ed800accd"
  },
  {
    "url": "study/mobile.html",
    "revision": "206f5ba1247d3dee9860658d63c7af52"
  },
  {
    "url": "study/performance.html",
    "revision": "181d56731095ddd923c924d019799b08"
  },
  {
    "url": "study/questions.html",
    "revision": "f18ecd1592ab254bcf66003df478882c"
  },
  {
    "url": "study/vue_code.html",
    "revision": "c8a2c5ae0fa747c247102ac1a59f77d4"
  },
  {
    "url": "study/vue.html",
    "revision": "bf13be149004f9018f8c3bca12e04945"
  },
  {
    "url": "study/webpack.html",
    "revision": "ab69b3c3e94f410acabd14226456b682"
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
