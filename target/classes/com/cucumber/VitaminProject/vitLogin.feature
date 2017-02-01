Feature: Login functionality

  Scenario: As a user I want to be able to login successfully
    Given Am on the home page
    When I click on My Account link
    And I entered valid email address
    And I typed in correct password
    And I clicked on Login button
    Then I should be logged into my account
    And I logout
