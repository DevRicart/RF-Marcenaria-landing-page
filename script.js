$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

const images = ["https://picsum.photos/400/250?image=122"];

col.innerHTML = `
                <div class="gallery_product col-sm-3 col-xs-6 filter category1">
                    <a class="fancybox" rel="ligthbox" href="${image}">
                        <img class="img-responsive" alt="" src="${image}" />
                        <div class='img-info'>
                        </div>
                    </a>
                </div>
                `;