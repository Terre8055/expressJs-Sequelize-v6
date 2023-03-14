


exports.get_landing = function(req, res, next) {//when we get a get request to root, render the pug file(landing)
    res.render('landing', { title: 'Express' });
};

exports.submit_lead = function(req, res, next) { //when we get a post request to root, grab the body and redirect to root 
    console.log('lead email', req.body.lead_email)
    res.redirect('/')
};