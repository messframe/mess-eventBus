function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * publish / subscribe
 */
var EventBus = /*#__PURE__*/function () {
  function EventBus() {
    _classCallCheck(this, EventBus);

    this._cache = {};
  }

  _createClass(EventBus, [{
    key: "on",
    value: function on(type, callback) {
      var fns = this._cache[type] = this._cache[type] || [];

      if (fns.indexOf(callback) === -1) {
        fns.push(callback);
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(type, data) {
      var fns = this._cache[type];

      if (Array.isArray(fns)) {
        fns.forEach(function (fn) {
          fn(data);
        });
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(type, callback) {
      var fns = this._cache[type];

      if (Array.isArray(fns)) {
        if (callback) {
          var index = fns.indexOf(callback);

          if (index !== -1) {
            fns.splice(index, 1);
          }
        } else {
          fns.length = 0;
        }
      }

      return this;
    }
  }]);

  return EventBus;
}();

export default EventBus;
