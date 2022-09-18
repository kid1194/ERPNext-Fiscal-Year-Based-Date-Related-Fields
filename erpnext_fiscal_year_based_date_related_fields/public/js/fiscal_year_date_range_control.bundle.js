import {
    extend_class,
    update_picker,
    get_datetime
} from './utils';

frappe.ui.form.ControlDateRange = class ControlDateRange extends frappe.ui.form.ControlDateRange {
    constructor(opts) {
        extend_class(this);
        super(opts);
    }
    set_datepicker() {
        super.set_datepicker();
        update_picker(this);
    }
    set_input(value, value2) {
        value = get_datetime(this, value, true);
        value2 = get_datetime(this, value2, true);
        super.set_input(value, value2);
    }
};
