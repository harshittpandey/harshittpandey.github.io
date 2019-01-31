// let startScrollValue = 0;
// let width= 0;
// var height= 0;
// var finalWidth=0;
// var finalHeight=0;
// var initialWidth=0;
// var initialHeight=0;
//
// width= $(".home canvas").width();
// height= $(".home canvas").height();
// // initialWidth= width;
// // initialHeight= height;
// // finalWidth= 0.85*width;
// // finalHeight= 0.85*height;
//
// var canvas= document.getElementsByClassName("home")[0].getElementsByTagName("canvas")[0];
// canvas.onload= function () {
//   console.log("it gets loaded");
// };
// $(document).ready(function () {
//
//   console.log(height);
//
//   // initializeValues();
//   // function initializeValues() {
//   // }
//
//   function changeDesignOnScroll(changeScrollValue) {
//
//     if (changeScrollValue > startScrollValue) {
//       if(width>finalWidth) {
//           var temp= 0.05*width;
//           width= width- temp;
//           $(".home canvas").css("width", width);
//       }
//       if(height>finalHeight) {
//           var temp= 0.05*height;
//           height= height- temp;
//           $(".home canvas").css("height", height);
//       }
//       startScrollValue = changeScrollValue;
//     }
//     if (changeScrollValue < startScrollValue) {
//       if(width<initialWidth) {
//           var temp= 0.05*width;
//           width= width+ temp;
//           $(".home canvas").css("width", width);
//       }
//       if(height<initialHeight) {
//           var temp= 0.05*height;
//           height= height+ temp;
//           $(".home canvas").css("height", height);
//       }
//       startScrollValue = changeScrollValue;
//     }
//   }
//
//   $(window).scroll(function(event) {
//     var scroll = $(window).scrollTop();
//       width= $(".home canvas").width();
//       console.log(width);
//     // changeDesignOnScroll(scroll);
//   });
//
//   // $(".home canvas").load(function(){
//   //   console.log("canvas loaded");
//   // });
// });
