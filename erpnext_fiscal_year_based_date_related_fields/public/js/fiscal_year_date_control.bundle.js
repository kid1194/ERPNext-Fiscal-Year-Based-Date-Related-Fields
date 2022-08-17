import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils';

frappe.ui.form.ControlDate = class ControlDate extends frappe.ui.form.ControlDate {
	constructor(opts) {
	    respectFiscalYear(this);
	    super(opts);
	}
	set_input(value) {
	    value = getDateTime(this, value, true);
		super.set_input(value);
	}
	set_datepicker() {
	    super.set_datepicker();
	    updateDatePicker(this);
	}
	get_now_date() {
	    let dt = getDateTime(this, null, true, true);
	    return frappe.datetime.convert_to_system_tz(dt, false).toDate();
	}
};
