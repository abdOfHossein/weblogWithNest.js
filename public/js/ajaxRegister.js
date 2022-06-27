function makeRequest() {
  let isMale = document.getElementById('male').checked;
  let isFemale = document.getElementById('female').checked;
  console.log(isMale);
  let gender = null;

  if (isMale) {
    gender = 'male';
  } else if (isFemale) {
    gender = 'female';
  }
  const registerInfo = {
    userName: document.getElementById('userName').value,
    password: document.getElementById('password').value,
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    phoneNumber: document.getElementById('phoneNumber').value,
    gender,
  };
  console.log(registerInfo);

  fetch('http://localhost:3000/register/page/doing', {
    method: 'POST',
    body: JSON.stringify({
      registerInfo,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(`err of fetch register:${err}`);
    });
  return;
};






document.getElementById('btn-signUp').onsubmit = makeRequest;
