const { Router } = require('express');
const router = Router();

module.exports = (passport) => {

	
	router.post('/login', function(req, res, next) {
		passport.authenticate('login', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.json( { message: info.message ,err:info.err}) }
			req.logIn(user, function(err) {
				if (err) { return next(err); }
				return res.json(user);;
			  });
			
			})(req, res, next);
	  });
	router.post('/sign', function(req, res, next) {
		passport.authenticate('signup', function(err, user, info) {
			if (err) { return next(err); }
			if (!user) { return res.json( { message: info.message ,err:info.err}) }
			req.logIn(user, function(err) {
				if (err) { return next(err); }
				return res.json(user);;
			  });
			
			})(req, res, next);
	  });
	router.get('/isAuth',(req,res)=>{
		console.log('Cookies: ', req.cookies)
  		console.log('Signed Cookies: ', JSON.stringify(req.signedCookies))
		console.log(req.session.passport)
		if (req.session.passport.user)
			res.json(req.session.passport.user)
		res.json({status:400})
	})
	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.writeHead(302, {
			'Location': '/'
		});
		res.end(); 
		res.redirect('http://localhost:3000/');
	});

	return router;
}