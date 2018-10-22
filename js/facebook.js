let base1 = '<div class=\"slider-item\"><img src=\"'
let base2 = '\" alt=\"\"><div class=\"media-outline\"><div class=\"media-outline-title\">Día del idioma</div><div class=\"media-outline-date\">Hace 3 semanas</div><div class=\"media-info\"><div class=\"media-likes-icon\"></div><div class=\"media-count\">15</div><div class=\"media-comments-icon\"></div><div class=\"media-count\">23</div></div></div></div>'

$(() => {
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1593801997569118',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.1',
    });

    FB.api(
      '1593801997569118?fields=posts{link,picture,object_id}',
      'GET',
      {
        access_token: 'EAAWhGL7w9gMBAEfWZBgBfvVPYayPYiC7cxzXMR0NAgGyFnQYQX03Uocf5N4MxZArRMknztcCxwKK5jbZBCBnRo3lqB0HZBwVxvZCshWlXmG1ZCz6awzYjTKbGE2PJ9khNRZBa561aYfZAPsWSZBRFxFHIsE9ceIgkSeMZD'
      },
      function(response) {
        console.log(response)
        let posts = response.posts.data
        let count = 0
        for(const image of posts) {
          let request = image.object_id + '/picture?type=normal&redirect=false'
          console.log(request)
          FB.api(
            request,
            'GET',
            {
              access_token: 'EAAWhGL7w9gMBAEfWZBgBfvVPYayPYiC7cxzXMR0NAgGyFnQYQX03Uocf5N4MxZArRMknztcCxwKK5jbZBCBnRo3lqB0HZBwVxvZCshWlXmG1ZCz6awzYjTKbGE2PJ9khNRZBa561aYfZAPsWSZBRFxFHIsE9ceIgkSeMZD'
            },
            function(res) {
              console.log("Res is:")
              console.log(res)
              $("#img_fb").append(base1 + res.data.url + base2)
              count++
              if(count == posts.length) {
                console.log("TRIGGERED ------------->")
                setTimeout(function(){
                  setControls("FACEBOOOK") 
                }, 5000)
              }
            }
          )
        }
      }
    );
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


})
