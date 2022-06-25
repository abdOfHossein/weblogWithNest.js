$('#btn-signUp').click(function (event) {
  event.preventDefault();

  fetch('http://localhost:3000/register/page/doing', {
    method: 'POST',
    body: JSON.stringify({
      userName: `${event.target.userName}`,
      // password: `${event.target.password.value}`,
      // firstName: `${event.target.firstName.value}`,
      // lastName: `${event.target.lastName.value}`,
      // phoneNumber: `${event.target.phoneNumber.value}`,
      // gender: `${event.target.gender.value}`,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
