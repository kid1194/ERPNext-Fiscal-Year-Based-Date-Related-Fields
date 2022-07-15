frappe.ui.form.ControlDate = class ControlDate extends frappe.ui.form.ControlDate {
	set_input(value) {
	    let dt = frappe.ui.form.respectFiscalYear(this, new Date(value));
		value = moment(dt).format(moment(value).creationData().format);
		super.set_input(value);
	}
	set_datepicker() {
	    super.set_datepicker();
	    frappe.ui.form.supportFiscalYear(this);
	}
	get_now_date() {
	    let dt = frappe.ui.form.respectFiscalYear(this, frappe.datetime.now_date(true));
	    return frappe.datetime.convert_to_system_tz(dt, false).toDate();
	}
};
