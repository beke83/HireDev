const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

const passport = require('passport');

const GOOGLE_CLIENT_ID = "15750711863-cf6q6vdglhjatif365n5gc141pleuu0l.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "process.env.GITHUB_CLIENT_ID";
const GITHUB_CLIENT_SECRET = "process.env.GITHUB_CLIENT_SECRET";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      //THIS IS USED IF YOU WANT TO CREATE A NEW PROFILE
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    done(null, profile);
  }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
))

//serilize user
//creates a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
})