import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils';

frappe.ui.form.ControlDateRange = class ControlDateRange extends frappe.ui.form.ControlDateRange {
	constructor(opts) {
	    respectFiscalYear(this);
	    super(opts);
	}
	set_datepicker() {
	    super.set_datepicker();
	    updateDatePicker(this);
	}
	set_input(value, value2) {
	    value = getDateTime(this, value, true);
	    value2 = getDateTime(this, value2, true);
		super.set_input(value, value2);
	}
};
