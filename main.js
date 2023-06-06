jQuery(function ($) {
  $("input").on("keypress", function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      var getIndex = $(this).parents(".acc-control").index() + 1;
      if (getIndex == 1) {
        const inputEl = $(this)
          .parents(".acc-control")
          .find('input[name="FirtsName"')
          .val();

        var ownerEmail = $(this)
          .parents(".inner_tab_content")
          .find('input[type="email"]')
          .val();
        var validatePass = false;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(ownerEmail)) {
          validatePass = true;
        } else {
          validatePass = false;
        }
        if (inputEl == "") {
          alert("Please complete all fields");
        } else if (ownerEmail == "") {
          alert("please enter the email");
        } else if (ownerEmail != "" && validatePass == false) {
          alert("Not a valid email address");
        } else {
          $(`.fst`).find(".check").removeClass("d-none");
          $(`.snd`).find(".plus").addClass("d-none");
          const dropdown = $(`.${getIndex + 1}`);
          $(".dropdown").addClass("d-none");
          dropdown[0].className = `d-inline-block dropdown ${getIndex + 1}`;
          $("a.innner_previous_btn").removeClass("d-none");
        }
      }
      if (getIndex == 2) {
        const inputEl = $(this)
          .parents(".acc-control")
          .find('input[name="address"')
          .val();
        if (inputEl == "") {
          alert("Please complete all fields");
        } else {
          $(`.snd`).find(".check").removeClass("d-none");
          $(`.thr`).find(".plus").addClass("d-none");
          const dropdown = $(`.${getIndex + 1}`);
          $(".dropdown").addClass("d-none");
          dropdown[0].className = `d-inline-block dropdown ${getIndex + 1}`;
          $("a.innner_previous_btn2").removeClass("d-none");
          $("a.innner_previous_btn").addClass("d-none");
        }
      }
      if (getIndex == 3) {
        const inputEl = $(this)
          .parents(".acc-control")
          .find('input[name="payInfo"')
          .val();
        if (inputEl == "") {
          alert("Please complete all fields");
        } else {
          $(`.thr`).find(".check").removeClass("d-none");
        }
      }
    }
  });
  $("button.next").click(function () {
    var getIndex = $(this).parents(".acc-control").index() + 1;
    if (getIndex == 1) {
      const inputEl = $(this)
        .parents(".acc-control")
        .find('input[name="FirtsName"')
        .val();

      var ownerEmail = $(this)
        .parents(".inner_tab_content")
        .find('input[type="email"]')
        .val();
      var validatePass = false;
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (testEmail.test(ownerEmail)) {
        validatePass = true;
      } else {
        validatePass = false;
      }
      if (inputEl == "") {
        alert("Please complete all fields");
      } else if (ownerEmail == "") {
        alert("please enter the email");
      } else if (ownerEmail != "" && validatePass == false) {
        alert("Not a valid email address");
      } else {
        $(`.fst`).find(".check").removeClass("d-none");
        $(`.snd`).find(".plus").addClass("d-none");
        const dropdown = $(`.${getIndex + 1}`);
        $(".dropdown").addClass("d-none");
        dropdown[0].className = `d-inline-block dropdown ${getIndex + 1}`;
      }
    }
    if (getIndex == 2) {
      const inputEl = $(this)
        .parents(".acc-control")
        .find('input[name="address"')
        .val();
      if (inputEl == "") {
        alert("Please complete all fields");
      } else {
        $(`.snd`).find(".check").removeClass("d-none");
        $(`.thr`).find(".plus").addClass("d-none");
        const dropdown = $(`.${getIndex + 1}`);
        $(".dropdown").addClass("d-none");
        dropdown[0].className = `d-inline-block dropdown ${getIndex + 1}`;
      }
    }
    if (getIndex == 3) {
      const inputEl = $(this)
        .parents(".acc-control")
        .find('input[name="payInfo"')
        .val();
      if (inputEl == "") {
        alert("Please complete all fields");
      } else {
        $(`.thr`).find(".check").removeClass("d-none");
      }
    }
  });

  $(".openPaymentDropdown").click(function () {
    var nextIndex = $(this).parents(".acc-control").index() + 1;
    console.log($(".acc-control .dropdown"));
    if (nextIndex == 3) {
      if ($(".acc-control .dropdown")[0].classList.contains("d-inline-block")) {
        const inputEl = $(".acc-control").find('input[name="FirtsName"').val();

        var ownerEmail = $(this)
          .parents(".inner_tab_content")
          .find('input[type="email"]')
          .val();
        var validatePass = false;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(ownerEmail)) {
          validatePass = true;
        } else {
          validatePass = false;
        }
        if (inputEl == "") {
          alert("Please complete all fields");
        } else if (ownerEmail == "") {
          alert("please enter the email");
        } else if (ownerEmail != "" && validatePass == false) {
          alert("Not a valid email address");
        } else {
          $(`.fst`).find(".check").removeClass("d-none");
          $(`.snd`).find(".plus").addClass("d-none");
          const dropdown = $(`.2`);
          $(".dropdown").addClass("d-none");
          dropdown[0].className = `d-inline-block dropdown 2`;
        }
      }
      if ($(".acc-control .dropdown")[1].classList.contains("d-inline-block")) {
        const inputEl = $(".acc-control").find('input[name="address"').val();
        if (inputEl == "") {
          alert("Please complete all fields");
        } else {
          $(`.snd`).find(".check").removeClass("d-none");
          $(`.thr`).find(".plus").addClass("d-none");
          const dropdown = $(`.3`);
          $(".dropdown").addClass("d-none");
          dropdown[0].className = `d-inline-block dropdown 3`;
        }
      }
    } else if (nextIndex == 2) {
      const inputEl = $(this)
        .parents(".acc-control")
        .find('input[name="FirtsName"')
        .val();

      var ownerEmail = $(this)
        .parents(".inner_tab_content")
        .find('input[type="email"]')
        .val();
      var validatePass = false;
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (testEmail.test(ownerEmail)) {
        validatePass = true;
      } else {
        validatePass = false;
      }
      if (inputEl == "") {
        alert("Please complete all fields");
      } else if (ownerEmail == "") {
        alert("please enter the email");
      } else if (ownerEmail != "" && validatePass == false) {
        alert("Not a valid email address");
      } else {
        $(`.fst`).find(".check").removeClass("d-none");
        $(`.snd`).find(".plus").addClass("d-none");
        const dropdown = $(`.${2}`);
        $(".dropdown").addClass("d-none");
        dropdown[0].className = `d-inline-block dropdown ${2}`;
      }
    } else {
      $(`.snd`).find(".check").removeClass("d-none");
      $(`.thr`).find(".plus").addClass("d-none");
      const dropdown = $(`.${nextIndex}`);
      $(".dropdown").addClass("d-none");
      dropdown[0].className = `d-inline-block dropdown ${nextIndex}`;
    }
  });

  $("a.innner_previous_btn").click(function (e) {
    $(".dropdown").addClass("d-none");
    $(".dropdown.1").addClass("d-inline-block");
    $(".dropdown.1").removeClass("d-none");
    $("a.innner_previous_btn").addClass("d-none");
  });

  $("a.innner_previous_btn2").click(function (e) {
    $(".dropdown").addClass("d-none");
    $(".dropdown.2").addClass("d-inline-block");
    $(".dropdown.2").removeClass("d-none");
    $("a.innner_previous_btn2").addClass("d-none");
  });

  $(".dsc").click(function (e) {
    const dropdown = $(".dscDropdown");
    console.log(dropdown[0]);
    if (dropdown[0].classList.contains("d-none")) {
      $(".dscDropdown").removeClass("d-none");
      $(".dscDropdown").addClass("d-flex");
    } else {
      $(".dscDropdown").removeClass("d-flex");
      $(".dscDropdown").addClass("d-none");
    }
  });
  $("#apply").click(function () {
    $(".dscDropdown").removeClass("d-flex");
    $(".dscDropdown").addClass("d-none");
  });
});
