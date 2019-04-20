 (function(doc, win, undefined) {

     var loading = doc.createElement("section");

     var defaultSetting = {
         color: "#666",
         background: "rgba(0,0,0,.2)",
         timeout: 1,
         scale: 1
     }

     var fadeIn = "fadeIn " + defaultSetting.timeout + "s forwards";
     var fadeOut = "fadeOut " + defaultSetting.timeout + "s forwards";

     loading.style.backgroundColor = defaultSetting.background;
     loading.setAttribute("class", "H5_loading");
     loading.setAttribute("id", "H5_loading");
     var loading_process = doc.createElement("div");
     loading_process.setAttribute("class", "H5_loading_process");

     var svg_h5 = doc.createElement("img");
     svg_h5.setAttribute("src", "assets/loader.svg");
     svg_h5.setAttribute("width", "70");
     loading_process.appendChild(svg_h5);
     var divs = new Array();

     loading.appendChild(loading_process);

     doc.documentElement.appendChild(loading);
     win.H5_loading = {

         show: function(option) {
             loading.style.display = "block";
             if (option) {
                 if (option.color) {
                     for (var i = 0; i < divs.length; i++) {
                         divs[i].style.backgroundColor = option.color;
                     }
                 }
                 if (option.background) {
                     loading.style.backgroundColor = option.background;
                 }
                 if (option.timeout) {
                     fadeIn = "fadeIn " + option.timeout + "s forwards";
                 }
                 if (option.scale && (typeof option.scale) == "number") {
                     loading_process.style.transform = "scale(" + option.scale + "," + option.scale + ")";
                 }
             }
             loading.style.animation = fadeIn;
             loading.style.webkitAnimation = fadeIn;
             loading.style.MozAnimation = fadeIn;
             loading.style.msAnimation = fadeIn;
         },

         hide: function(timeout) {
             if (timeout) {
                 fadeOut = "fadeOut " + timeout + "s forwards";
             } else {
                 timeout = defaultSetting.timeout;
             }
             loading.style.animation = fadeOut;
             loading.style.webkitAnimation = fadeOut;
             loading.style.MozAnimation = fadeOut;
             loading.style.msAnimation = fadeOut;
             setTimeout(function() {
                 loading.style.display = "none";
             }, timeout * 500);

         }
     };
 })(document, window);