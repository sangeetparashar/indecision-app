"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Person

var Person = function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anon";

    _classCallCheck(this, Person);

    this.name = name;
    console.log("Hi my name is " + name);
};

var me = new Person("Sangeet");
