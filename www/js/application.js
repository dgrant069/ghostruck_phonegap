/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// var app = {
(function() {
  // Application Constructor
  var home = Handlebars.compile($("#home").html());
  var faqs = Handlebars.compile($("#faqs").html());
  var about = Handlebars.compile($("#about").html());

  // var faqsURL = /#faqs/
  // var aboutURL = /#about/

  // var slider = new PageSlider($('body'));

  function initialize() {
    this.bindEvents();
  };

  $(document).ready(function(){
    $('body').html(new HomeView(home).render().el);
  })
  // $(window).on('hashchange', route);

  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  function bindEvents() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  };

  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicity call 'app.receivedEvent(...);'
  function onDeviceReady() {
    app.receivedEvent('deviceready');
  };

  // Update DOM on a Received Event
  function receivedEvent(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  };

  // route: function () {
  //   var hash = window.location.hash;
  //   var faqsMatch = hash.match(faqsURL);
  //   if(!hash) {
  //     slider.slidePage(new HomeView(home).render().el);
  //     return;
  //   },
  //   if(faqsMatch) {
  //     slider.slidePage(new FaqsView(faqs).render().el);
  //   }
  // }

  var HomeView = function(template) {

    this.initialize = function () {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
    };

    this.render = function() {
        this.el.html(template);
        return this;
    };

    this.initialize();
  };

  var FaqsView = function(template){

    this.initialize = function(){
      this.el = $('<div/>');
      // this.el.html(faqs);
      // return this;
    };

    this.initialize();

    $(document).ready(function(){
      $(function() {
        $("#faqs").accordion({
          collapsible: true,
          heightStyle: "content",
          active: false
        });
      });

      $(".question").on("click", "dt", function(){
        $(".question").css({ "height":"60px", "padding-bottom":"0px"});
      });
    });
  };


}());
