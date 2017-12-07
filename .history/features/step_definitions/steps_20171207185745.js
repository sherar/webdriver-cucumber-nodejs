"use strict";

var { defineSupportCode } = require("cucumber");
//var until = require('selenium-webdriver').until;
var { By, until, Key } = require("selenium-webdriver");
var { expect } = require("chai");

defineSupportCode(function({ setDefaultTimeout, Given, When, Then }) {
  setDefaultTimeout(30 * 1000);

  Given(/^I can access the Google Search Engine$/, function(next) {
    this.googlePage.home();
    next();
  });

  When("I run a search for {search_query}", function(searchQuery, next) {
    this.googlePage.search(searchQuery);
    next();
  });

  Then("I get more than one result", function(next) {
    this.googlePage.checkResults().then(results => {
      expect(results).to.be.above(1);
      next();
    });
  });

  When("the results are returned in under a second", function(next) {
    this.googlePage.checkElapsedTime().then(results => {
      expect(results).to.not.be.above(1);
      next();
    });
    // this.driver
    //   .executeScript(function() {
    //     return document.querySelector("#resultStats").innerHTML;
    //   })
    //   .then(function(innerHTML) {
    //     var r = innerHTML.match(new RegExp("((.*) seconds)"));
    //     if (r) var intResults = parseInt(r[1]);
    //     expect(intResults).to.not.be.above(1);
    //     next();
    //   });
  });
});
