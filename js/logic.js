
var loadJobs = ()=>{
  fetch('assets/jobs.json')
  .then( r => r.json() )
  .then( res => {
    console.log( res )
    var imgid = document.getElementById('vacantesImg')
    let content  = ''
    res.forEach( async x => {
     content += render( x )
    })
    imgid.innerHTML = content;
  })
}

var render = ( obj )=>{
  console.log( obj )
  return `
    <div class=" col-md-3 mt-3">
      <figure class="snip1573"><img src="assets/img/${ obj.img }" alt="sample94" />
        <figcaption>
          <h3>Aplicar</h3>
        </figcaption>
        <a href="#"></a>
      </figure>
    </div>
  `
}


window.onload = loadJobs

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
