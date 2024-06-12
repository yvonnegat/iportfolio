const handleVisitWorks = () => {
    
    const portfolioSection = document.getElementById('portfolio');
    
   
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
};

function HandleDownload() {
    
    window.location.href = 'https://docs.google.com/document/d/1QICcNdDO9NzGq6v9m3TNTBH2Km9l1p7W/edit?usp=drive_link&ouid=110572169713985191598&rtpof=true&sd=true';
}

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
    
    $(".btn-primary").on('click', function(event) {
        event.preventDefault();
        handleVisitWorks();
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// const handleVisitWorks = () => {
//     // Get the portfolio section by its ID
//     const portfolioSection = document.getElementById('portfolio');
    
//     // Scroll to the portfolio section
//     portfolioSection.scrollIntoView({ behavior: 'smooth' });
// };