$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchProduct.feature");
formatter.feature({
  "line": 2,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"\u003cproduct\u003e\" in the search field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 11,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;1"
    },
    {
      "cells": [
        "Duvet"
      ],
      "line": 12,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;2"
    },
    {
      "cells": [
        "Bed"
      ],
      "line": 13,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;3"
    },
    {
      "cells": [
        "Bowl"
      ],
      "line": 14,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;4"
    },
    {
      "cells": [
        "body care"
      ],
      "line": 15,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;5"
    },
    {
      "cells": [
        "bosch"
      ],
      "line": 16,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;6"
    },
    {
      "cells": [
        "chairs"
      ],
      "line": 17,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;7"
    },
    {
      "cells": [
        "chanderliers"
      ],
      "line": 18,
      "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"Duvet\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 6216328527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Duvet",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 399498503,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 98086523,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 4548295160,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"Bed\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 1468961038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bed",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 109632775,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 2456666479,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 627409383,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"Bowl\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 3129911742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bowl",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 287956395,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 101139241,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 3103650829,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"body care\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 1231362367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "body care",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 177427619,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 2481292110,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 429598593,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"bosch\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 1004964511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bosch",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 238460620,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 93595039,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 2215917039,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"chairs\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 1686122795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chairs",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 118965285,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 2378042511,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 885487636,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "As a user I want to be able to search for any product of my choice on the site.",
  "description": "",
  "id": "search-functionality;as-a-user-i-want-to-be-able-to-search-for-any-product-of-my-choice-on-the-site.;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I entered \"chanderliers\" in the search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on search Icon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the product searched for should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 1034933319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chanderliers",
      "offset": 11
    }
  ],
  "location": "Search.i_entered_in_the_search_field(String)"
});
formatter.result({
  "duration": 253579793,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_Icon()"
});
formatter.result({
  "duration": 2260618560,
  "status": "passed"
});
formatter.match({
  "location": "Search.te_product_searched_for_should_be_displayed()"
});
formatter.result({
  "duration": 139159328,
  "status": "passed"
});
formatter.uri("checkout.feature");
formatter.feature({
  "line": 3,
  "name": "Checkout Functionality",
  "description": "",
  "id": "checkout-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@checkout"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "As a user I want to be able to checkout.",
  "description": "",
  "id": "checkout-functionality;as-a-user-i-want-to-be-able-to-checkout.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I move cursor to curtains and blinds",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I selected from the list of values under ready made blinds",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I selected Black hardwood blinds",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I selected size and quantity",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I clicked Add to basket",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see a pop-up",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click coninue shopping",
  "keyword": "And "
});
formatter.match({
  "location": "Checkout.am_on_the_homepage()"
});
formatter.result({
  "duration": 1289375881,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_move_cursor_to_curtains_and_blinds()"
});
formatter.result({
  "duration": 162497985,
  "status": "passed"
});
formatter.match({
  "location": "Checkout.i_selected_from_the_list_of_values_under_ready_made_blinds()"
});
formatter.result({
  "duration": 30159272961,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Venetian Blinds\"}\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9),platform\u003dWindows NT 10.0.10586 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.15 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:48:19 -0700\u0027\nSystem info: host: \u0027DUN103179T\u0027, ip: \u002710.70.13.134\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.27.440174 (e97a722caafc2d3a8b807ee115bfb307f7d2cfd9), userDataDir\u003dC:\\Users\\ajoseph\\AppData\\Local\\Temp\\scoped_dir2068_16260}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0714ef1733cd4ec6598dfb4f51019f62\n*** Element info: {Using\u003dlink text, value\u003dVenetian Blinds}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\r\n\tat pageobject.LandingPage.click_Venetian_Blind(LandingPage.java:34)\r\n\tat step_definition.Checkout.i_selected_from_the_list_of_values_under_ready_made_blinds(Checkout.java:48)\r\n\tat ✽.And I selected from the list of values under ready made blinds(checkout.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Checkout.i_selected_Black_hardwood_blinds()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_selected_size_and_quantity()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_clicked_Add_to_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_should_see_a_pop_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Checkout.i_click_coninue_shopping()"
});
formatter.result({
  "status": "skipped"
});
});