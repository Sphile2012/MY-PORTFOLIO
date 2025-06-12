const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      auth.signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
    });
  }
  
  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      auth.createUserWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
    });
  }
  
  function logout() {
    auth.signOut().then(() => {
      alert("Logged out");
      window.location.href = "login.html";
    });
  }