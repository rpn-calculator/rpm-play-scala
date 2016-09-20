angular.module('osprey').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/js/lookUp/lookUp.html',
    "<nav-bar></nav-bar>\n" +
    "<banner></banner>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <form>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 col-lg-6\">\n" +
    "\n" +
    "                <input-box></input-box>\n" +
    "\n" +
    "                <submit-button></submit-button>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/common/banner.html',
    "<div class=\"jumbotron text-center\">\n" +
    "  <h1>Osprey</h1>\n" +
    "  <p>Account Look Up</p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/common/navBar.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <a class=\"navbar-brand\" href=\"#\">Osprey</a>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"nav-item active\">\n" +
    "                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\">Loan History</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\">Loan Activity</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\">App Query</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"#\">Download Contract</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/form/inputBox.html',
    "<div class=\"form-group\">\n" +
    "    <label for=\"accountNumber\">Account Number</label>\n" +
    "    <input maxlength=\"18\" type=\"email\" class=\"form-control input-lg\" id=\"accountNumber\" aria-describedby=\"accountNumberHelp\" placeholder=\"Enter Account Number\">\n" +
    "    <small id=\"accountNumberHelp\" class=\"form-text text-muted\">Please enter 10 digits number.</small>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/form/submitButton.html',
    "<div class=\"pull-right\">\n" +
    "    <button type=\"submit\" class=\"btn btn-lg btn-primary\">Search</button>\n" +
    "</div>\n"
  );

}]);
