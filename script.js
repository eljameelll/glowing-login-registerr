document.getElementById('to-register').onclick = function () {
  document.getElementById('login-box').style.display = 'none';
  document.getElementById('register-box').style.display = 'block';
};

document.getElementById('to-login').onclick = function () {
  document.getElementById('register-box').style.display = 'none';
  document.getElementById('login-box').style.display = 'block';
};

document.getElementById('show-login-password').addEventListener('click', function () {
  const pwd = document.getElementById('login-password');
  pwd.type = this.checked ? 'text' : 'password';
});

document.getElementById('show-register-password').addEventListener('click', function () {
  const pwd = document.getElementById('register-password');
  pwd.type = this.checked ? 'text' : 'password';
});
