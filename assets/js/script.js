$('document').ready(() => {
    var modalIsOpen = false;
    // Open Modal Window
    $('.modal_close').click(() => {
        let scrolled = $(window).scrollTop()
        $('.modal_windows, .modal_overlay, .modal_login')
        .addClass('disabled')
        if(modalIsOpen & scrolled > 50){
            $('.nav_fixed').slideDown(100)
            modalIsOpen = false
        }
        $('body').css({'overflow-y': 'scroll'})
        $('.messenger').addClass('messenger_disabled')
    })
    $(document).mouseup(function (e){ 
		var div = $(".modal_login, .modal_login *, .modal_search *");
        let scrolled = $(window).scrollTop()
		if (!div.is(e.target)){
            $('.modal_windows, .modal_overlay, .modal_login, .modal_search')
            .addClass('disabled')
            if(modalIsOpen & scrolled > 50){
                $('.nav_fixed').slideDown(100)
                modalIsOpen = false
            }
            $('body').css({'overflow-y': 'scroll'})
		}
	});
    $(document).mouseup(function (e){ 
		var div = $(".modal_login, .modal_login *, .modal_search *, .modal_share *");
        let scrolled = $(window).scrollTop()
		if (!div.is(e.target)){
            $('.modal_windows, .modal_overlay, .modal_login, .modal_search, .modal_share ')
            .addClass('disabled')
            if(modalIsOpen & scrolled > 50){
                $('.nav_fixed').slideDown(100)
                modalIsOpen = false
            }
            $('body').css({'overflow-y': 'scroll'})
		}
	});
    $('nav > ul > li:nth-child(1)').click(() => {
        $('.modal_windows, .modal_overlay, .modal_login')
        .removeClass('disabled')
        modalIsOpen = false
    })
    $('nav > ul > li:nth-child(1),nav > ul > li:nth-child(2)').click(() => {
        $('.nav_fixed').slideUp(100)
        modalIsOpen = true;
        $('body').css({'overflow': 'hidden'})
    })
    // Messenger
    $('nav > ul > li:nth-child(3), .mobile_messenger_open').click(() => {
        $('.messenger').toggleClass('messenger_disabled')
    })
    
    // Search

    $('nav > ul > li:nth-child(2)').click(() => {
        $('.modal_windows, .modal_overlay, .modal_search')
        .removeClass('disabled')
    })

    // LOGIN WINDOW
    var for_reg = $('.for_reg')
        for_log = $('.for_log')
    for_reg.addClass('disabled')
    $('.to_reg_page').click(() => {
        $('.modal_login > *').css(({'opacity':'0'}))
        setTimeout(() => {
            $('.modal_login > *').css(({'opacity':'1'}))
            for_log.addClass('disabled')
            for_reg.removeClass('disabled')
        },500)
    })
    
    let classesByLogin = $('.password_container, .for_log, .modal_login h4, .modal_login ul,.modal_login h3')
    $('.restore_password').click(() => {
        $('.modal_login > *').css(({'opacity':'0'}))
        setTimeout(() => {
            $('.modal_login > *').css(({'opacity':'1'}))
            classesByLogin.addClass('disabled')
            $('.for_restore').removeClass('disabled')
        },500)
    })

    $('.restore_back').click(() => {
        $('.modal_login > *').css(({'opacity':'0'}))
        setTimeout(() => {
            $('.modal_login > *').css(({'opacity':'1'}))
            classesByLogin.removeClass('disabled')
            $('.for_restore').addClass('disabled')
        },500)
    })
    
    $('.to_log_page').click(() => {
        console.log(11)
        $('.modal_login > *').css(({'opacity':'0'}))
        setTimeout(() => {
            $('.modal_login > *').css(({'opacity':'1'}))
            for_reg.addClass('disabled')
            for_log.removeClass('disabled')
        },500)
    })

    $(window).scroll(() => {
        let scrolled = $(window).scrollTop()
        if(scrolled > 60){
            $('.nav_fixed').removeClass('disabled')
            $('.messenger').css({'bottom':'-46px'})
        }else{
            $('.nav_fixed').addClass('disabled')
            $('.messenger').css({'bottom':'-90px'})
        }
    })
    
    var reg_button = $('.registration_button')
    reg_button.prop('disabled', true)
    reg_button.css({'background': 'gray'})

    $('.accept_conditions_container').click(() => {
        if($('#accept_conditions').is(':checked')){
            reg_button.prop('disabled', false)
            reg_button.css({'background': '#0075FF'})
        }else{
            reg_button.prop('disabled', true)
            reg_button.css({'background': 'gray'})
        }
    })

    function showModalShare(element,e, a = 200, b = 220){
        let y = e.pageY,
            x = e.pageX;
        let item = $(element);
        item.toggleClass('disabled')
        item.css({'left': x - a})
        item.css({'top': y - b})
    }
    // MODAL FOR SHARE LINKS
    $('.quote_share_links li:nth-child(4)').click((e)=>{
        showModalShare($('.for_default_share'),e)
    })
    $('.left_social_sidebar li:last-child').click((e) => {
        showModalShare($('.for_left_sidebar'),e,0,0)
    })
    $('.open_block_modal').click((e) => {
        showModalShare($('.for_content_block'),e)
    })
    $(window).scroll(()=>{
        $('.for_left_sidebar').addClass('disabled')
    })
})
