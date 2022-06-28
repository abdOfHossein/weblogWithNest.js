$('#btn-signUp').click(function (e) {
  e.preventDefault();

  let isMale = document.getElementById('male').checked;
  let isFemale = document.getElementById('female').checked;
  console.log(isMale);
  let gender = null;

  if (isMale) {
    gender = 'male';
  } else if (isFemale) {
    gender = 'female';
  }

  let objRegisterInfo = {
    userName: document.getElementById('userName').value,
    password: document.getElementById('password').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    gender,
  };

  let data = JSON.stringify(objRegisterInfo);

  $.ajax({
    type: 'POST',
    url: '/register/page/doing',
    data,
    dataType: 'json',
    success: function (response, statusCode) {
      console.log(`response===>${response}`);
      console.log(`statusCode===>${statusCode}`);
      //     if (response & statusCode==400) {
      //      let errUserName=$('#err-userName');
      // errUserName.html()='response.message[0]'

      //       return;
      //     }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alert(xhr.status);
      alert(thrownError)
      console.log('helloF');
    },
  });
});
