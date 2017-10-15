const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, { id: user.id, name: user.name });
});

passport.deserializeUser(({ id, name }, done) => {
  User.findById(id).then(user => {
    user.name = name;
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        existingUser.name = profile.displayName;
        done(null, existingUser);
      } else {
        const user = await new User({
          googleId: profile.id
        }).save();
        user.name = profile.displayName;
        done(null, user);
      }
    }
  )
);
