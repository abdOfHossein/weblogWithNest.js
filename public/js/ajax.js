$('#btn-signUp').click(function (e) {
  e.preventDefault();

  let isMale = $('#male').is(':checked');
  let isFemale = $('#female').is(':checked');
  let gender = '';

  if (isMale) {
    gender = 'male';
  } else if (isFemale) {
    gender = 'female';
  }

  let objRegisterInfo = {
    userName: $('#userName').val(),
    password: $('#password').val(),
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    phoneNumber: $('#phoneNumber').val(),
    gender,
  };
  let userNameErr = $('#userName-err'),
    passwordErr = $('#password-err'),
    firstNameErr = $('#firstName-err'),
    lastNameErr = $('#lastName-err'),
    phoneNumberErr = $('#phoneNumber-err');

  $.ajax({
    type: 'POST',
    url: '/register/page/doing',
    data: JSON.stringify(objRegisterInfo),
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    success: function (data, statusCode, XmlHttpRequest) {
      alert('i am in success');
      userNameErr.text(null);
      passwordErr.text(null);
      firstNameErr.text(null);
      lastNameErr.text(null);
      phoneNumberErr.text(null);
      // let response = $(XmlHttpRequest.responseText).find('b\\:value').text();
      console.log('success');
      alert('success');
      console.log(`statusCode===>${statusCode}`);
      alert(statusCode);
      console.log(`response===>${response}`);
      console.log(XmlHttpRequest.status);
      '<html>' + $('html').html('ok') + '</html>';
      // if (XmlHttpRequest.status === 200) {

      //   "<html>" + $("html").html(response) + "</html>";
      //   console.log(`response===>${response}`);
      //   console.log(`statusCode===>${statusCode}`);
      //   return;
      // }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      userNameErr.text(null);
      passwordErr.text(null);
      firstNameErr.text(null);
      lastNameErr.text(null);
      phoneNumberErr.text(null);

      if (xhr.status == 400) {
        let objMsgErr = JSON.parse(xhr.responseText);
        for (const iterator of objMsgErr['message']) {
          let determiner = iterator.split(' ')[0];
          console.log(determiner);
          if (determiner === 'userName') {
            userNameErr.text(iterator);
          } else if (determiner === 'password') {
            passwordErr.text(iterator);
          } else if (determiner === 'firstName') {
            firstNameErr.text(iterator);
          } else if (determiner === 'lastName') {
            lastNameErr.text(iterator);
          } else if (determiner === 'phoneNumber') {
            phoneNumberErr.text(iterator);
          }
        }
      }
      if (xhr.status == 201) {
        let res = xhr.responseText;
        let resgiterPage = $('#registerPage');
        let template = Handlebars.compile(res);
        resgiterPage.html(template);
      }
    },
  });
});
