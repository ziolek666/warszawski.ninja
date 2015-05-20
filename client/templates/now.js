Meteor.subscribe('reports');
Session.setDefault('easter egg counter', 0);

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
  duzo: function() {
    var audio = new Audio('test22.mp3');
    if (Session.get('easter egg counter') > 6) {
      return "Jest dużodobrze."
      audio.play();
    };
  },
});

Template.now.events({
  'click .cover': function(event) {
      Session.set('easter egg counter', Session.get('easter egg counter') + 1);
    },
});
