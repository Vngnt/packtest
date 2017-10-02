// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by packtest.js.
import { name as packageName } from "meteor/vngnt:packtest";

// Write your tests here!
// Here is an example.
Tinytest.add('packtest - example', function (test) {
  test.equal(packageName, "packtest");
});
