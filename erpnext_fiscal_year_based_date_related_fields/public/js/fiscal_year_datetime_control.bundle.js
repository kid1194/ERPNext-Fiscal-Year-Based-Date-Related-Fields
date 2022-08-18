import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils/utils.js';

frappe.ui.form.ControlDatetime = class ControlDatetime extends frappe.ui.form.ControlDatetime {
    constructor(opts) {
        respectFiscalYear(this);
        super(opts);
    }
    set_value(value, force_set_value=false) {
        value = getDateTime(this, value, true);
        return super.set_value(value, force_set_value);
    }
    set_input(value) {
        value = getDateTime(this, value);
        super.set_input(value);
    }
    set_datepicker() {
        super.set_datepicker();
        updateDatePicker(this);
    }
    get_start_date() {
        this.value = this.value == null ? undefined : this.value;
        let value = frappe.datetime.convert_to_user_tz(this.value);
        return getDateTime(this, this.value, false, true);
    }
    get_now_date() {
        return getDateTime(this, null, false, true);
    }
};
