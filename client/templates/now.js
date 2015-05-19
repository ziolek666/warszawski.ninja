Meteor.subscribe('reports');
Session.setDefault('counter', 0);

function getReports() {

  var query = {
    expired: false
  };

  if (viewingFavs()) {
    var favs = getFavs();
    query.line = {
      $in: favs.lines
    };
    query.dir = {
      $in: favs.dirs
    };
  }

  return Reports.find(query, { sort: {createdAt: -1}});
}

Template.now.helpers({
  noReports: function() {
    return getReports().count() === 0;
  },
  reports: getReports
});

Template.now.helpers({
  counter: function() {
    return Session.get('counter');
  },
  duzo: function() {
    if (Session.get('counter') > 6) {
      return "Jest dużodobrze."
    };
  },
});

Template.now.events({
  'click #egg': function(event) {
      Session.set('counter', Session.get('counter') + 1);
      //alert(Session.get('counter'))
  },
});