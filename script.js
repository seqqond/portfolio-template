const body = document.body;
const header = document.getElementById('navbar')
const main = document.getElementById('main')
const headerHeight = header.offsetHeight;
main.style.top = headerHeight + "px";
let lastScroll = 0;


addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset;
  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
    $('#main').removeClass('blurToggle')
  } else {
    // scrolled up -- header show
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
    
  }
  lastScroll = currentScroll;

})
$(function () {
  $('.myPhoto img').hover(function () {
    $('#box').css('top', '10px')
    $('#box').css('left', '10px')
  }, function () {
    $('#box').css('top', '20px')
    $('#box').css('left', '20px')
  });
});

for (const btn of $('.btn')) {
  btn.onclick = () => {
    setTimeout(() => {
      for (const btn of $('.btn')) {
        btn.ariaSelected = false
      }
      btn.ariaSelected = true
    }, 200);

  }
}
$('#toggler').on('click', () => {
  if ($('#toggler').attr("aria-expanded") === "true")
    $('.navbar .container-fluid').addClass('clicked')
  $('#main').addClass('blurToggle')
  if ($('#toggler').attr("aria-expanded") === "false") {
    $('.navbar .container-fluid').removeClass('clicked')
    $('#main').removeClass('blurToggle')
  }
})
$('#btn1').click(() => {
  setTimeout(() => {
    $('#buttonContent').html(`
    <h5>Engineer <a href="https://upstatement.com/" class="appleLink">@Upstatement</a></h5>
    <p>May 2018 - Present</p>
    <ul>
        <li><span>Write modern, performant, maintainable code for a diverse array of client and<br>
                internal projects</span></li>
        <li><span>Work with a variety of different languages, platforms, frameworks, and content<br>
                management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,<br>
                Prismic, and Netlify</span></li>
        <li><span>Communicate with multi-disciplinary teams of engineers, designers, producers, and<br>
                clients on a daily basis</span></li>
    </ul>`)
  }, 200)
})
$('#btn2').click(() => {
  setTimeout(() => {
    $('#buttonContent').html(`
  <h5>Studio Developer <a href="https://scout.camd.northeastern.edu/" class="appleLink">@Scout</a></h5>
<p>January - April 2018</p>
<ul>
    <li><span>Worked with a team of three designers to build a marketing website and e-commerce platform<br>for blistabloc, an ambitious startup originating from Northeastern</span></li>
    <li><span>Helped solidify a brand direction for blistabloc that spans both packaging and web</span></li>
    <li><span>Interfaced with clients on a weekly basis, providing technological expertise</span></li>
</ul>`)
  }, 200)
})
$('#btn3').click(() => {
  setTimeout(() => {
    $('#buttonContent').html(`
  <h5>UI Engineer Co-op <a href="https://www.apple.com/apple-music/" class="appleLink">@Apple</a></h5>
<p>July - December 2017</p>
<ul>
    <li><span>Developed and shipped highly interactive web applications<br> for Apple Music using Ember.js</span></li>
    <li><span>Built and shipped the Apple Music Extension within Facebook<br> Messenger leveraging third-party and internal APIs</span></li>
    <li><span>Architected and implemented the front-end of Apple Music's<br> embeddable web player widget, which lets users log in and listen to full songs in the browser</span></li>
    <li><span>Contributed extensively to MusicKit.js, a JavaScript framework<br> that allows developers to add an Apple Music player to their web apps</span></li>
    </ul>`)
  }, 200)
})
$('#btn4').click(() => {
  setTimeout(() => {
    $('#buttonContent').html(`
    <h5>Studio Developer <a href="https://scout.camd.northeastern.edu/" class="appleLink">@Scout</a></h5>
  <p>January - June 2017</p>
  <ul>
      <li><span>Collaborated with a small team of student designers to spearhead a new<br> brand and design system for Scout’s inaugural student-led<br> design conference at Northeastern</span></li>
      <li><span>Worked closely with designers and management team<br> to develop, document, and manage the conference’s marketing<br> website using Jekyll, Sass, and JavaScript</span></li>
  </ul>`)
  }, 200);

})
$('#btn5').click(() => {
  setTimeout(() => {
    $('#buttonContent').html(`
  <h5>Software Engineer Co-op <a href="https://starry.com/" class="appleLink">@Starry</a></h5>
<p>July - December 2016</p>
<ul>
    <li><span>Engineered and maintained major features of Starry's customer-facing web app<br> using ES6, Handlebars, Backbone, Marionette and CSS</span></li>
    <li><span>Proposed and implemented scalable solutions to issues identified with cloud services<br> and applications responsible for communicating with Starry Station</span></li>
    <li><span>Interfaced with user experience designers and other developers to ensure thoughtful<br> and coherent user experiences across Starry’s iOS and Android mobile apps</span></li>
</ul>`)
  }, 200);

})
$('#btn6').click(() => {
  setTimeout(() => {
    $('#buttonContent').html(`
    <h5>Creative Technologist Co-op <a href="https://us.mullenlowe.com/" class="appleLink">@MullenLowe</a></h5>
  <p>July - December 2015</p>
  <ul>
      <li><span>Developed and maintained code for in-house and client<br> websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</span></li>
      <li><span>Manually tested sites in various browsers and mobile devices<br> to ensure cross-browser compatibility and responsiveness</span></li>
      <li><span>Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more</span></li>
  </ul>`)
  }, 200);
})
let newElems = document.getElementsByClassName('newElems')
let btnShow = document.getElementById('btnShow')
btnShow.innerText = 'Show More'
$('#btnShow').click(() => {
  setTimeout(() => {
    newElems[0].classList.toggle('isShow')
  }, 200);
  setTimeout(() => {
    newElems[1].classList.toggle('isShow')
  }, 300);
  setTimeout(() => {
    newElems[2].classList.toggle('isShow')
  }, 400);
  if (btnShow.innerText.includes("Show More")) {
    btnShow.innerText = "Show Less"
}
else{
  btnShow.innerText = "Show More"
}
})

$('#textContact').click(() => {
    $('.content').toggleClass('isShow')
})