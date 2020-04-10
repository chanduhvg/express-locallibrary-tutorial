const mongoose = require('mongoose');
const moment = require('moment'); // For date handling.

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date }
});

// Virtual for author "full" name.
AuthorSchema.virtual('name').get(function() {
  const fullname = '';

  if (this.first_name && this.family_name) {
    fullname = this.family_name + ', ' + this.first_name;
  }

  if (!this.first_name && !this.family_name) {
    fullname = '';
  }
  return fullname;
});
