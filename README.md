# ERPNext Fiscal Year Based Date Related Fields
ERPNext plugin to make date related fields respect the default fiscal year.

In ERPNext, date related fields show the current date and there is nothing wrong with that, but if you are entering historical data manually then you might end up forgetting to change the date related fields to match the default active **Fiscal Year**.
For such reason I created this to help myself and others with such issue.


### Installation Steps
1. **Get the plugin from Github** *(Required only once)*

`bench get-app https://github.com/kid1194/ERPNext-Fiscal-Year-Based-Date-Related-Fields`

2. **Install the plugin on any instance/site you want**

`bench --site [sitename] install-app erpnext_fiscal_year_based_date_related_fields`

3. **Enable the plugin for the date related fields you want by following the usage steps below**
*To be a good neighbor, I had to add a way to enable the plugin for specific date related fields*


### Usage
*How to make date related fields respect the default Fiscal Year*
1. Go to Customization > Customize Form
2. Enter the form type/name (ex: 'Journal Entry')
3. Scroll down to the form fields area and edit the date related fields you want
4. Add "Fiscal Year" *(without ")* in the options area of those fields to enable the plugin


#### License
MIT
