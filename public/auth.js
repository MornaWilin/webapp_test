

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById('login');
  const createAccountForm = document.getElementById('createAccount');

  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", e => {
      e.preventDefault();
      loginForm.classList.remove("form--hidden");
      createAccountForm.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", e => {
      e.preventDefault();

      // Perform your AJAX/Fetch login

      setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach(inputElement => {
      inputElement.addEventListener("blur", e => {
          if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
              setInputError(inputElement, "Username must be at least 10 characters in length");
          }
      });

      inputElement.addEventListener("input", e => {
          clearInputError(inputElement);
      });
  });
});

 

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const txtEmailReg = document.getElementById('txtEmailReg');
const txtPasswordReg = document.getElementById('txtPasswordReg');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const btnOpenApp = document.getElementById('btnOpenApp');
const container = document.getElementById('container');
const linkCreate = document.getElementById('linkCreateAccount');
const linkLogin = document.getElementById('linkLogin')
const loginForm = document.getElementById('login');
  const createAccountForm = document.getElementById('createAccount');


linkCreate.addEventListener('click', e => {
  createAccountForm.classList.remove('hide')
  loginForm.classList.add('hide')
})
linkLogin.addEventListener('click', e => {
  createAccountForm.classList.add('hide')
  loginForm.classList.remove('hide')
})

btnLogin.addEventListener('click', e => {

  const email = txtEmail.value;
  const pass = txtPassword.value;
  

  

const promise = auth.signInWithEmailAndPassword(email, pass)  
 
  promise.catch(e => console.log(e.message));
  
  
});



btnLogout.addEventListener('click', e => {

  const email = txtEmail.value;
  const pass = txtPassword.value;
  

  const promise = auth.signOut();

  promise.catch(e => console.log(e.message));


});

btnSignUp.addEventListener('click', e => {

  const email = txtEmailReg.value;
  const pass = txtPasswordReg.value;
  

  const promise = auth.createUserWithEmailAndPassword(email, pass);

  promise.catch(e => console.log(e.message));


});




auth.onAuthStateChanged(firebaseUser => {

if(firebaseUser){
  console.log(firebaseUser);
  btnLogin.classList.add('hide')
  btnOpenApp.classList.remove('hide')
  container.classList.add('hide')
}
else
{
  console.log('not logged in');
  btnLogin.classList.remove('hide')
  btnOpenApp.classList.add('hide')
  container.classList.remove('hide')
  
}

});

