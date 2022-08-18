import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils/utils.js';

frappe.ui.form.ControlDate = class ControlDate extends frappe.ui.form.ControlDate {
    constructor(opts) {
        respectFiscalYear(this);
        super(opts);
    }
    set_value(value, force_set_value=false) {
        value = getDateTime(this, value, true);
        return super.set_value(value, force_set_value);
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
