
function signIn() {
    var auth2 = gapi.auth2.init({
      clientId: "982774708892-edt942q84021d9mop1rssjrvpe6h1vu6.apps.googleusercontent.com",
      clientSecret: "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",
      redirectUri: "YOUR_REDIRECT_URI"
    });
  
    auth2.signIn().then(function(user) {
      // The user is signed in.
    }, function(error) {
      // The user failed to sign in.
    });
  }