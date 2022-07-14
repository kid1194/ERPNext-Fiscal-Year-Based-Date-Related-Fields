frappe.ui.form.ControlDate = class ControlDate extends frappe.ui.form.ControlDate {
	set_datepicker() {
	    super.set_datepicker();
	    frappe.ui.form.addFiscalYearSupport(this);
	}
	get_now_date() {
	    let dt = frappe.ui.form.updateFiscalYearDate(this, frappe.datetime.now_date(true));
	    return frappe.datetime.convert_to_system_tz(dt, false).toDate();
	}
};
