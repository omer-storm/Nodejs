const mongoose = require('mongoose');

(async()=> {
    await mongoose.connect('mongodb://localhost:27017/playground', {});
})();


module.exports = {
    Course: require('./Course.js')
}