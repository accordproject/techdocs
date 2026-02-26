Feature: Founder Equity Vesting
  This describes the expected behavior for the Founder Equity Vesting contract

  Background:
    Given that the contract says
"""
# Founder Equity Vesting Agreement

This Founder Equity Vesting Agreement is entered into by and between the Company and **"John Doe"** (the "Founder").

## 1. Total Equity Grant
The Founder is granted a total equity interest of **40.0%** in the Company, subject to the vesting schedule described below.

## 2. Vesting Schedule
The equity granted shall vest over a total duration of **48** months, subject to the Following conditions:

- **Cliff Period**: There shall be a cliff period of **12** months. No equity shall vest if the Founder leaves the Company before the completion of the cliff period.
- **Cliff Unlock**: Upon completion of the cliff period, **25.0%** of the total equity (i.e., **10.0%**) shall vest immediately.
- **Monthly Vesting**: Following the cliff period, the remaining **75.0%** of the total equity shall vest in equal monthly installments over the remaining **36** months of the vesting duration.

## 3. Early Exit
If the Founder's relationship with the Company is terminated for any reason, all unvested equity as of the date of termination shall be forfeited.
"""

  Scenario: Case 1 — Founder leaves at 8 months (Before Cliff)
    When it receives the request
"""
{
    "$class": "org.accordproject.foundervesting.VestingRequest",
    "monthsWorked": 8
}
"""
    Then it should respond with
"""
{
    "$class": "org.accordproject.foundervesting.VestingResponse",
    "vestedEquity": 0.0
}
"""

  Scenario: Case 2 — Founder leaves at 24 months (Mid Vesting)
    When it receives the request
"""
{
    "$class": "org.accordproject.foundervesting.VestingRequest",
    "monthsWorked": 24
}
"""
    Then it should respond with
"""
{
    "$class": "org.accordproject.foundervesting.VestingResponse",
    "vestedEquity": 20.0
}
"""

  Scenario: Case 3 — Founder stays full 4 years (Full Vesting)
    When it receives the request
"""
{
    "$class": "org.accordproject.foundervesting.VestingRequest",
    "monthsWorked": 48
}
"""
    Then it should respond with
"""
{
    "$class": "org.accordproject.foundervesting.VestingResponse",
    "vestedEquity": 40.0
}
"""
