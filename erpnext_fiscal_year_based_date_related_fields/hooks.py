# ERPNext Fiscal Year Based Date Related Fields © 2022
# Author:  Ameen Ahmed
# Company: Level Up Marketing & Software Development Services
# Licence: Please refer to license.txt

from . import __version__ as app_version
from frappe import __version__ as frappe_version


app_name = "erpnext_fiscal_year_based_date_related_fields"
app_title = "ERPNext Fiscal Year Based Date Related Fields"
app_publisher = "Ameen Ahmed (Level Up)"
app_description = "ERPNext plugin that makes date related fields respect the start and end dates of default fiscal year."
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "kid1194@gmail.com"
app_license = "MIT"
is_frappe_above_v13 = int(frappe_version.split(".")[0]) > 13

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/erpnext_fiscal_year_based_date_related_fields/css/erpnext_fiscal_year_based_date_related_fields.css"
# app_include_js = "/assets/erpnext_fiscal_year_based_date_related_fields/js/erpnext_fiscal_year_based_date_related_fields.js"

app_include_js = [
    "fiscal_year_date_control.bundle.js",
    "fiscal_year_datetime_control.bundle.js",
    "fiscal_year_date_range_control.bundle.js"
] if is_frappe_above_v13 else [
    "/assets/erpnext_fiscal_year_based_date_related_fields/js/fiscal_year_date_control.js",
    "/assets/erpnext_fiscal_year_based_date_related_fields/js/fiscal_year_datetime_control.js",
    "/assets/erpnext_fiscal_year_based_date_related_fields/js/fiscal_year_date_range_control.js",
]

# include js, css files in header of web template
# web_include_css = "/assets/erpnext_fiscal_year_based_date_related_fields/css/erpnext_fiscal_year_based_date_related_fields.css"
# web_include_js = "/assets/erpnext_fiscal_year_based_date_related_fields/js/erpnext_fiscal_year_based_date_related_fields.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "erpnext_fiscal_year_based_date_related_fields/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "erpnext_fiscal_year_based_date_related_fields.utils.jinja_methods",
# 	"filters": "erpnext_fiscal_year_based_date_related_fields.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "erpnext_fiscal_year_based_date_related_fields.install.before_install"
# after_install = "erpnext_fiscal_year_based_date_related_fields.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "erpnext_fiscal_year_based_date_related_fields.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"erpnext_fiscal_year_based_date_related_fields.tasks.all"
# 	],
# 	"daily": [
# 		"erpnext_fiscal_year_based_date_related_fields.tasks.daily"
# 	],
# 	"hourly": [
# 		"erpnext_fiscal_year_based_date_related_fields.tasks.hourly"
# 	],
# 	"weekly": [
# 		"erpnext_fiscal_year_based_date_related_fields.tasks.weekly"
# 	],
# 	"monthly": [
# 		"erpnext_fiscal_year_based_date_related_fields.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "erpnext_fiscal_year_based_date_related_fields.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "erpnext_fiscal_year_based_date_related_fields.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "erpnext_fiscal_year_based_date_related_fields.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]


# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"erpnext_fiscal_year_based_date_related_fields.auth.validate"
# ]

