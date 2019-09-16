const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
    name:{
        type: String,
        required: [true,'Name is Requried']
    },
    place: {
        type: String,
    }
});

const Profile = mongoose.model('profile',profileSchema);

module.exports = Profile;
