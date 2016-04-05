var ICON = './images/logo.png';
var NO_POINTS = '?';

var cardBadge = function(t) {
  return t.get('card', 'shared', 'points').then(function(points) {
    if (points && points != NO_POINTS) {
      return [{
        dynamic: function() {
          return {
            text: points,
            icon: ICON
          }
        }
      }]
    } else {
      return [];
    }
  });
};

var cardButton = function(t) {
  return t.get('card', 'shared', 'points').then(function(points) {
    if (points && points != NO_POINTS) {
      var text = points + " points";
    } else {
      var text = "Points";
    }

    return [
      {
        icon: ICON,
        text: text,
        callback: cardButtonCallback
      }
    ];
  });
};

var cardButtonCallback = function(t) {
  var points = [1, 2, 3, 4, NO_POINTS].map(function(point) {
    return {
      text: point,
      callback: function(t) {
        return t.set('card', 'shared', 'points', point).then(function() {
          return t.closePopup();
        })
      }
    };
  });

  return t.popup({
    title: 'How many points?',
    items: points
  });
};

TrelloPowerUp.initialize({
  'card-badges': function(t, options) {
    return cardBadge(t);
  },
  'card-buttons': function(t, options) {
    return cardButton(t);
  }
});
