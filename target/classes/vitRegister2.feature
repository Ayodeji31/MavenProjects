Feature: Register

  Scenario: As a user I want to Register successfully
    Given Am on the home page
    And I click on My Account link
    And Iclick create account link
    And I enter First name
    And I enter Last name
    And I enter email address
    And I enter confirm email address
    And I enter password
    And I enter confirm password
    And I select For Home product radio button
    And I select Yes for currently own vitamin
    And I tick the tooltip to agree to Terms and Conditions
    When I click on the Create Account button
    Then My Account is created
    And I log out
