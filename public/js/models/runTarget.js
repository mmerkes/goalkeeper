'use strict';

App.RunTarget = DS.Model.extend({
  user_id: function() {
      return localStorage_userId;
  },
  total_miles: DS.attr(),
  start_date: DS.attr(),
  end_date: DS.attr(),
  frequency: DS.attr(),
  name: DS.attr(),
  runEvents: DS.hasMany('runEvent')
  //runMilestones: DS.hasMany('runMilestone')
});
