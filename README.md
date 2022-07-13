# ERPNext Fiscal Year Based Date Field
ERPNext app to make date related fields respect the default fiscal year.

In ERPNext, date related fields show the current date and there is nothing wrong with that, but if you are entering historical data manually then you might end up forgetting to change the date related fields to match the default active **Fiscal Year**.
For such reason I created this to help myself and others with such issue.

#### Note
This has not been tested yet, so if you can, please test it and tell me how it goes ☺ 

### Installation Steps
#### Step 1) One time to get app

```bench get-app https://github.com/kid1194/ERPNext-Fiscal-Year-Based-Date-Field```

#### Step 2) to install app on any instance/site

```bench --site [sitename] install-app erpnext_fiscal_year_based_date_field```


#### License

MIT

