var Observable = require('rxjs').Observable;

var fromHistory = function (history) {
  var unlisten;
  var listen = function (handler) {
    unlisten = history.listen(handler);
  };
  return Observable.fromEventPattern(listen, unlisten);
};

Observable.fromHistory = fromHistory;
