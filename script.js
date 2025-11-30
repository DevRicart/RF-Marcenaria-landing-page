$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all") {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
    });
});

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

const images = [
    { src: './assets/foto1.jpg', category: 'category1' },
    { src: './assets/foto2.jpg', category: 'category2' },
    { src: './assets/foto3.jpg', category: 'category3' },
    { src: './assets/foto4.jpg', category: 'category1' },
    { src: './assets/foto5.jpg', category: 'category2' },
    { src: './assets/foto6.jpg', category: 'category3' },
    { src: './assets/foto7.jpg', category: 'category1' },
    { src: './assets/foto8.jpg', category: 'category2' },
    { src: './assets/foto9.jpg', category: 'category3' },
];

const gallery = document.getElementById('gallery');
let html = '';

images.forEach( image => {
    html += `
            <div class="gallery_product mb-2 col-6 col-sm-3 col-xs-6 filter ${image.category}">
                <a class="fancybox" rel="ligthbox" href="${image.src}">
                    <img class="img-responsive w-100 h-100 img-portfolio" alt="" src="${image.src}" />
                    <div class='img-info'>
                    </div>
                </a>
            </div>
            `;
});
gallery.innerHTML = html;

//Ano
const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();