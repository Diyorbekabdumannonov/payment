jQuery(function ($) {
    $('button.next').click(function () {
        var getIndex = $(this).parents('.acc-control').index() + 1;
        if (getIndex == 1) {
            const inputEl = $(this).parents('.acc-control').find('input[name="FirtsName"').val()
            console.log(inputEl)
            if (inputEl == '') {
                alert('Please complete all fields');
            }
            else {
                const dropdown = $(`.${getIndex + 1}`)
                $('.dropdown').addClass('d-none')
                dropdown[0].className = `d-inline-block dropdown ${getIndex + 1}`
            }
        }
        if (getIndex == 2) {
            const inputEl = $(this).parents('.acc-control').find('input[name="address"').val()
            console.log(inputEl)
            if (inputEl == '') {
                alert('Please complete all fields');
            }
            else {
                const dropdown = $(`.${getIndex + 1}`)
                $('.dropdown').addClass('d-none')
                dropdown[0].className = `d-inline-block dropdown ${getIndex + 1}`
            }
        }
        if (getIndex == 3) {

        }
    })
})