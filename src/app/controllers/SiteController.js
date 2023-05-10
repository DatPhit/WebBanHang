const Phone = require('../models/Phones');
const { multipleMongooseToObject } = require('../../util/monggoose');
class SiteController {
    // [GET] /
    index(req, res, next) {
        Phone.find({})
            .then(phones => {
                res.render('home', {
                    phones: multipleMongooseToObject(phones),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
