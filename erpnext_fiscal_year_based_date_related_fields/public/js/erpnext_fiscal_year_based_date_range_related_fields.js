frappe.ui.form.ControlDateRange = class ControlDateRange extends frappe.ui.form.ControlDateRange {
	set_datepicker() {
	    super.set_datepicker();
	    frappe.ui.form.supportFiscalYear(this);
	}
	set_input(value, value2) {
	    if (this.respectedFY) {
    	    let dt1 = this._prep_date(new Date(value)),
    	    dt2 = this._prep_date(new Date(value2));
    		value = moment(dt1).format(moment(value).creationData().format);
    		value2 = moment(dt2).format(moment(value2).creationData().format);
		}
		super.set_input(value, value2);
	}
};
