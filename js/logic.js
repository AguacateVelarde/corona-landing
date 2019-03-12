
var loadJobs = ()=>{
  fetch('assets/jobs.json')
  .then( r => r.json() )
  .then( res => {
    var imgid = document.getElementById('vacantesImg')
    let content  = ''
    res.forEach( async x => {
     content += render( x )
    })
    imgid.innerHTML = content;
  })
}

var render = ( obj )=>{
  return `
    <div class="col-md-3 mt-3 text-center">
      <figure class="snip1573 text-center">
        <img src="assets/img/${ obj.img }" alt="sample94" class="img-responsive center-block"/>
      <figcaption>
          <h3>Aplicar</h3>
        
        </figcaption>
        <a href="${ obj.url }"></a>
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
