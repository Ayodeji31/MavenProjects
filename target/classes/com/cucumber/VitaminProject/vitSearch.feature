Feature: Search Functionality: As a user I want to be able to search for any product

  Scenario Outline: 
    Given Am on the home page
    When I enter diferent "<Product>" in the search field
    And I click search Icon
    Then search result should be displayed.

    Examples: 
      | Product            |
      | Blender Containers |
      | Cookbooks          |
      | Kitchen tools      |
      | Smoothie cups      |
      | Tampers            |
