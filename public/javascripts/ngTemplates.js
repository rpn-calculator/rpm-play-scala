angular.module('rpn-calc').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/js/lookUp/lookUp.html',
    "<nav-bar></nav-bar>\n" +
    "<banner expression=\"inFix\" result=\"result\"></banner>\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <form>\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-md-6 col-lg-6\">\n" +
    "\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"inFix\">Mathmatical Expression: </label>\n" +
    "                    <input type=\"text\" ng-model=\"inFix\" class=\"form-control input-lg\" id=\"inFix\" aria-describedby=\"inFixHelp\" placeholder=\"Enter Expression\">\n" +
    "                    <small id=\"inFixHelp\" class=\"form-text text-muted\">Please enter mathematical expression.</small>\n" +
    "                </div>\n" +
    "\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <button type=\"submit\" ng-click=\"onCalculate()\" class=\"btn btn-lg btn-primary\">Calculate</button>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/common/banner.html',
    "<div class=\"jumbotron text-center\">\n" +
    "  <h1>RPN Calc</h1>\n" +
    "  <p>Reverse Polish Notation</p>\n" +
    "  <p class=\"expression\">\n" +
    "      Expression: <mark>{{$ctrl.expression || \"Enter Expression\"}}</mark>\n" +
    "  </p>\n" +
    "  <p class=\"expression\">\n" +
    "      Result: <mark>{{$ctrl.result || \"Result\"}}</mark>\n" +
    "  </p>\n" +
    "</div>\n"
  );


  $templateCache.put('app/js/shared/ngComponents/common/navBar.html',
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n" +
    "    <div class=\"container\">\n" +
    "        <a class=\"navbar-brand\" href=\"#\">RPN Calculator</a>\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "            <li class=\"nav-item active\">\n" +
    "                <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" target=\"_blank\" href=\"/calculus?query=MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk=\">2 * (23/(3*3))- 23 * (2*3)</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" target=\"_blank\" href=\"/calculus?query=a+b\" href=\"#\">a+b</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

}]);
