frappe.ui.form.ControlDatetime = class ControlDatetime extends frappe.ui.form.ControlDatetime {
	set_input(value) {
	    if (this.respectedFY) {
    	        let dt = this._prep_date(new Date(value));
    		value = moment(dt).format(moment(value).creationData().format);
	    }
	    super.set_input(value);
	}
	set_datepicker() {
	    super.set_datepicker();
	    frappe.ui.form.supportFiscalYear(this);
	}
	get_start_date() {
	    let value = frappe.datetime.convert_to_user_tz(this.value);
	    return this._prep_date(frappe.datetime.str_to_obj(value));
	}
	get_now_date() {
	    return this._prep_date(frappe.datetime.now_datetime(true));
	}
	_prep_date(dt) {
	    return frappe.ui.form.respectFiscalYear(this, dt);
	}
};
