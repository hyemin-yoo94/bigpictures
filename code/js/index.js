console.clear();

$(function() {
    $.scrollify({
        section:".page",
        scrollbars:false,
        before:function(i,panels) {
            var ref = panels[i].attr("data-section-name");
            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".page").each(function(i) {
                activeClass = "";
                if ( i === 0 ) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".page-indicator-box").append(pagination);

            $(".pagination a").on("click", $.scrollify.move);
        }
    });
});


$('.slider-1 > .page-nav > div').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var index = $this.index();
    
    $slider.find(' > .slides > .active').removeClass('active');
    $slider.find(' > .slides > div').eq(index).addClass('active');
});

$('.slider-1 > .side-btns > div:first-child').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    var $current = $slider.find('.page-nav > div.active');
    var $post = $current.prev();
    
    if ( $post.length == 0 ) {
        $post = $slider.find('.page-nav > div:last-child');
    }
    
    $post.click();
});

$('.slider-1 > .side-btns > div:last-child').click(function() {
    var $this = $(this);
    var $slider = $this.closest('.slider-1');
    
    var $current = $slider.find('.page-nav > div.active');
    var $post = $current.next();
    
    if ( $post.length == 0 ) {
        $post = $slider.find('.page-nav > div:first-child');
    }
    
    $post.click();
});