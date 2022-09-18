# ERPNext Fiscal Year Based Date Related Fields
ERPNext plugin that makes date related fields respect the start and end dates of default fiscal year.

In ERPNext, date related fields show the current date and there is nothing wrong with that, but if you are entering historical data manually then you might end up forgetting to change the date related fields to match the default active **Fiscal Year**.
For such reason I created this to help myself and others with such issue.

---

### Table of Contents
<ul>
    <li><a href="#requirements">Requirements</a></li>
    <li>
    <a href="#setup">Setup</a>
        <ul>
            <li><a href="#install">Install</a></li>
            <li><a href="#update">Update</a></li>
            <li><a href="#uninstall">Uninstall</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#supported-fields">Supported Fields</a></li>
    <li><a href="#license">License</a></li>
</ul>

---

### Requirements
- Frappe >= v13.0.0
- ERPNext >= v13.0.0

---

### Setup

#### Install

⚠️ *Important* ⚠️

*Do not forget to replace [sitename] with the name of your site in all commands.*

#### Install
1. Go to bench directory

```
cd ~/frappe-bench
```

2. Get plugin from Github

*(Required only once)*

```
bench get-app https://github.com/kid1194/ERPNext-Fiscal-Year-Based-Date-Related-Fields
```

3. Build plugin

*(Required only once)*

```
bench build --apps erpnext_fiscal_year_based_date_related_fields
```

4. Install plugin on a specific site

```
bench --site [sitename] install-app erpnext_fiscal_year_based_date_related_fields
```

5. Check the usage section below

#### Update
1. Go to app directory

```
cd ~/frappe-bench/apps/erpnext_fiscal_year_based_date_related_fields
```

2. Get updates from Github

```
git pull
```

3. Go to bench directory

```
cd ~/frappe-bench
```

4. Build plugin

```
bench build --apps erpnext_fiscal_year_based_date_related_fields
```

5. Update a specific site

```
bench --site [sitename] migrate
```

6. Restart bench

```
bench restart
```

#### Uninstall
1. Go to bench directory

```
cd ~/frappe-bench
```

2. Uninstall plugin from a specific site

```
bench --site [sitename] uninstall-app erpnext_fiscal_year_based_date_related_fields
```

3. Remove plugin from bench

```
bench remove-app erpnext_fiscal_year_based_date_related_fields
```

4. Restart bench

```
bench restart
```

---

### Usage
*How to make date related fields respect the default Fiscal Year*
1. Go to Customization > Customize Form
2. Enter the form type/name (ex: 'Journal Entry')
3. Scroll down to the form fields area and edit the date related fields you want
4. Add *Fiscal Year* in the *options* property of those fields to enable the plugin

---

#### Supported Fields
1. Date
2. Datetime
3. Date Range

---

#### License
MIT
