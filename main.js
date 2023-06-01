jQuery(function ($) {
    $('button.openPaymentDropdown').click(function (e) {
        const dropdown = $(e.target).parents('.all_buttons').find(`#${e.target.name}`)
        console.log(dropdown[0])
        $('.dropdown').addClass('d-none')
        dropdown[0].className = 'd-inline-block dropdown'
    })
})