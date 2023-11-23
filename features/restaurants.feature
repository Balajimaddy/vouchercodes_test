Feature: Validate the functionality in restaurants category

  Background: Launch the application
    Given I launch the application

  # Pass Scenario validate restaurant vouchers are displayed
  Scenario Outline:  Validate the Voucher codes are generated for restaurants category
    Given I navigate to the "Restaurants" page under categories tab
    When I search restaurant voucher for postcode "<postcode>" from day "<day>" for "<people>" people
    Then I validate restaurants voucher are displayed as expected

    Examples:
      # Post code should match search
      # Day can be Today, Tomorrow or 2 to 7=> this will pick the specify date
      | postcode | day      | people |
      | LondonUK | Tomorrow | 2      |

  #Fail scenario looks for Shopping under categories -> add report logs and screenshot in html format under test-results folder
  Scenario Outline:  Validate the Shopping sub category not found
    Given I navigate to the "Shopping" page under categories tab
