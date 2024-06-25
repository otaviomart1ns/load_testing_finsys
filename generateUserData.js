module.exports = {
    generateUsername: function (context, events, done) {
      const prefix = 'user';
      const timestamp = new Date().getTime();
      //const randomNumber = Math.floor(Math.random() * 100000);
      //context.vars.username = `${prefix}${randomNumber}`;
      context.vars.username = `${prefix}${timestamp}`;
      return done();
    },
    generateEmail: function (context, events, done) {
      const domain = '@example.com';
      const username = context.vars.username;
      //const username = context.vars.username || `user${Math.floor(Math.random() * 100000)}`;
      //context.vars.email = `${username}${domain}`;
      context.vars.email = `${username}${domain}`;
      return done();
    }
  }
  