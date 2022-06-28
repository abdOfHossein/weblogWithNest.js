$('#btn-signUp').click(function (e) {
  e.preventDefault();

  let isMale = $('#male').is(':checked');
  let isFemale = $('#female').is(':checked');
  console.log(isMale);
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

console.log(JSON.stringify(objRegisterInfo));

  $.ajax({
    type: 'POST',
    url: '/register/page/doing',
    data:JSON.stringify(objRegisterInfo),
    dataType: 'json',
    contentType: "application/json; charset=utf-8",
    success: function (response, statusCode) {
      if (response) {
        console.log(`response===>${response}`);
        console.log(`statusCode===>${statusCode}`);
        return;
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      if (xhr.status == 400) {
        let objMsgErr = JSON.parse(xhr.responseText);
        let userNameErr = $('#userName-err'),
          passwordErr = $('#password-err'),
          firstNameErr = $('#firstName-err'),
          lastNameErr = $('#lastName-err'),
          phoneNumberErr = $('#phoneNumber-err');

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
    },
  });
});
