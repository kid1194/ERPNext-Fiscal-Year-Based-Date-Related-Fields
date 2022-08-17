import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils';

frappe.ui.form.ControlDate = frappe.ui.form.ControlDate.extend({
	init: function(opts) {
	    respectFiscalYear(this);
	    this._super(opts);
	},
	set_input: function(value) {
	    value = getDateTime(this, value, true);
		this._super(value);
	},
	set_datepicker: function() {
	    this._super();
	    updateDatePicker(this);
	},
	get_now_date: function() {
	    let dt = getDateTime(this, null, true, true);
	    return frappe.datetime.convert_to_system_tz(dt, false).toDate();
	}
});
