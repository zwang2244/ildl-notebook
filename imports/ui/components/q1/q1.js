import { Links } from '/imports/api/links/links.js';
import { Meteor } from 'meteor/meteor';
import './q1.html';

Template.q1.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.q1.helpers({
  links() {
    return Links.find({});
  },
});

Template.q1.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
