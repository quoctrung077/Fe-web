// day la jquery
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            // Hiển thị nút khi cuộn xuống 100px
            $("#scroll-to-top").fadeIn();
        } else {
            $("#scroll-to-top").fadeOut();
        }
    });
    // Khi nhấp vào nút "Đầu trang", cuộn lên đầu trang
    $("#scroll-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $("#btn-menu").click(function () {
        $(
            ".navbar, .track-section, .trusted-section, .your-section,.bigger-section, two-bg, .diam-section, .powerful-section, .team-section, .ultrices-section, .bg-sub, .our-section, .slider-section, .your-section you-section-2, .footer"
        ).hide();
        $(".navbar-menu").fadeIn(600);
    });
    $(".close").click(function () {
        $(
            ".navbar, .track-section, .trusted-section, .your-section,.bigger-section, two-bg, .diam-section, .powerful-section, .team-section, .ultrices-section, .bg-sub, .our-section, .slider-section, .your-section you-section-2, .footer"
        ).fadeIn(600);
        $(".navbar-menu").hide();
    });

    let intervalId;
    // Hàm thiết lập interval
    function startInterval() {
        intervalId = setInterval(() => {
            moveFirstElementToEnd(".slider-section-group-box");
            console.log("chay");
        }, 5000);
    }

    function moveFirstElementToEnd() {
        var $elements = $(".slider-group-box");
        if ($elements.length > 0) {
            // Lấy phần tử đầu tiên
            var $firstElement = $elements.first();
            // Di chuyển phần tử đầu tiên đến cuối danh sách
            $firstElement.appendTo($elements.parent());
        }
    }
    // Hàm dừng interval
    function stopInterval() {
        if (intervalId) {
            console.log("dung")
            clearInterval(intervalId);
            intervalId = null; // Đặt lại intervalId để kiểm tra trong tương lai
        }
    }
    // Hàm xử lý thay đổi kích thước cửa sổ
    function handleResize() {
        // Xác định kích thước cửa sổ cho mobile và desktop
        const isMobile = window.innerWidth >= 769;

        if (isMobile) {
            stopInterval(); // Dừng interval nếu đang ở chế độ desktop
            $("#next").on("click", function () {
                //lấy phần tử đầu tiên của phần tử cha
                var firstSlide = $(
                    ".slider-section-group-box .slider-group-box"
                ).first();
                //chèn vào vị trí cuối cùng
                firstSlide.appendTo(".slider-section-group-box");
            });
            $("#prev").on("click", function () {
                // lấy phần tử cuối cùng của phần tử cha
                var firstSlide = $(
                    ".slider-section-group-box .slider-group-box"
                ).last();
                // chèn vào vị trí đầu tiên
                firstSlide.prependTo(".slider-section-group-box");
            });
        } else {
            if (!intervalId) {
                startInterval(); // Bắt đầu interval nếu chưa có, mobile
            }
        }
    }

    // Thực hiện kiểm tra ngay khi tải trang
    handleResize();

    // Thêm sự kiện resize để kiểm tra khi kích thước cửa sổ thay đổi
    window.addEventListener('resize', handleResize);

    // Hover vào các nút
    // tạo function để xử lí desktop với mobi vì mobi ko có trỏ chuột
    function handleHoverIn() {
        $(this).css('transform', 'scale(1.1)');
    }

    function handleHoverOut() {
        $(this).css('transform', 'scale(1)');
    }
    const btnHover = $('.btn-request, .btn-primary, .btn-secondary, .btn-primary-start, .btn-ultrices-track, .arrow-left, .arrow-right, .scroll-btn, #btn-menu, .btn-input-subscribe ')
    // đây là xử lý hover cho des
    btnHover.hover(handleHoverIn, handleHoverOut);


    // đây là xử lý hover cho mobi
    btnHover.on('click', function () {
        $(this).toggleClass('active');
    });

    // Xử lý sự kiện touch cho mobile
    btnHover.on('touchstart', function () {
        $(this).addClass('active');
    });

    btnHover.on('touchend', function () {
        $(this).removeClass('active');
    });

    // navbar flxed
    var navbar = $('#navbar');
    var sticky = navbar.offset().top;
    // lấy phần tử con đầu tiên trong phần tử cha
    var firstDiv = $('.main').find('div').first(); 

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > sticky) {
            // navbar.addClass('fixed');
            // $('.main').prepend($('.navbar'));
            firstDiv.addClass('fix');
        } else {
            // navbar.removeClass('fixed');
            firstDiv.removeClass('fix');

        }
    });

    // Clik vào Start for free

    $(".btn-primary ").click(function () {

        $('.subscribe-section').css('display', 'flex').hide().fadeIn();
        // tạo một lớp phủ lên để ngăn scroll
        $('body').css('overflow', 'hidden');
    });

    // Đóng popup khi nhấp vào nút đóng
    $('.subscribe-section-icon').click(function () {
        $('.subscribe-section').fadeOut();
        $('body').css('overflow', 'auto');
    });

    // Xử lý gửi form
    $('.btn-input-subscribe').click(function (event) {
        var Input = $('#name').val().trim();

        $('#name').removeClass('error');
        $('#Error').hide();
        if (Input === '') {
            $('#name').addClass('error');
            event.preventDefault(); // Ngăn gửi đi nếu trường bị bỏ trống
        } else {
            $('#name').val('');
            //alert('Thank you for subscribing!');
            $('.subscribe-section').fadeOut();
        }
    });

    // Tạo một đối tượng Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm lớp CSS khi phần tử xuất hiện trong khung nhìn
                entry.target.classList.add('visible');
                // Dừng theo dõi phần tử sau khi đã xuất hiện
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Thay đổi threshold 

    // Chọn các phần để xem
    const elementsToObserve = document.querySelectorAll('.observe-me');

    // Thực hiện quan sát
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

 