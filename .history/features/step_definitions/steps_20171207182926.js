"use strict";

var { defineSupportCode } = require("cucumber");
//var until = require('selenium-webdriver').until;
var { By, until, Key } = require("selenium-webdriver");
var { expect } = require("chai");
var creategoogleHomePage = require("../pages/googleHomePage");

defineSupportCode(function({ setDefaultTimeout, Given, When, Then }) {
  setDefaultTimeout(30 * 1000);

  Given(/^I can access the Google Search Engine$/, function(next) {
    const googleHomePage = creategoogleHomePage(this.driver);
    googleHomePage.go();
    next();
  });

  When("I run a search for {search_query}", function(searchQuery, next) {
    const googleHomePage = creategoogleHomePage(this.driver);
    googleHomePage.search(searchQuery);
    next();
  });

  Then("I get more than one result", function(next) {
    this.driver
      .executeScript(function() {
        return document.querySelector("#resultStats").innerHTML;
      })
      .then(function(innerHTML) {
        var r = innerHTML.match(new RegExp("About (.*) results"));
        if (r) var intResults = parseInt(r[1].replace(/,/g, ""));
        expect(intResults).to.be.above(1);
        next();
      });
  });

  When("the results are returned in under a second", function(next) {
    this.driver
      .executeScript(function() {
        return document.querySelector("#resultStats").innerHTML;
      })
      .then(function(innerHTML) {
        var r = innerHTML.match(new RegExp("((.*) seconds)"));
        if (r) var intResults = parseInt(r[1]);
        expect(intResults).to.not.be.above(1);
        next();
      });
  });
});
