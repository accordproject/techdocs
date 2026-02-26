# Founder Equity Vesting Agreement

This Founder Equity Vesting Agreement is entered into by and between the Company and **{{founderName}}** (the "Founder").

## 1. Total Equity Grant
The Founder is granted a total equity interest of **{{totalEquity}}%** in the Company, subject to the vesting schedule described below.

## 2. Vesting Schedule
The equity granted shall vest over a total duration of **{{totalVestingMonths}}** months, subject to the Following conditions:

- **Cliff Period**: There shall be a cliff period of **{{cliffMonths}}** months. No equity shall vest if the Founder leaves the Company before the completion of the cliff period.
- **Cliff Unlock**: Upon completion of the cliff period, **{{cliffPercentage}}%** of the total equity (i.e., **{{% (cliffPercentage / 100.0) * totalEquity %}}%**) shall vest immediately.
- **Monthly Vesting**: Following the cliff period, the remaining **{{% 100.0 - cliffPercentage %}}%** of the total equity shall vest in equal monthly installments over the remaining **{{% totalVestingMonths - cliffMonths %}}** months of the vesting duration.

## 3. Early Exit
If the Founder's relationship with the Company is terminated for any reason, all unvested equity as of the date of termination shall be forfeited.
