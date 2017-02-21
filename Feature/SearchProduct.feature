@search
Feature: Search Functionality

  Scenario Outline: As a user I want to be able to search for any product of my choice on the site.
    Given Am on the homepage
    And I entered "<product>" in the search field
    And I click on search Icon
    Then the product searched for should be displayed

    Examples: 
      | product           |
      | Duvet             |
      | Bed               |
      | Bowl              |
      | body care         |
      | bosch             |
      | chairs            |
      | chanderliers      |
      #| Jug kettle        |
      #| Juliet            |
      #| Gun               |
      #| Lantern           |
      #| Lamp              |
      #| Lamp Shades       |
      #| Filled cushions   |
      #| Curtains          |
      #| Cushion cover     |
      #| Cutlery           |
      #| Cutlas            |
      #| Bedroom           |
      #| Bedroom furniture |
