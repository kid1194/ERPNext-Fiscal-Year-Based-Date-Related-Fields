import {
    extend_class,
    update_picker,
    get_datetime
} from './utils';

frappe.ui.form.ControlDateRange = frappe.ui.form.ControlDateRange.extend({
    init: function(opts) {
        extend_class(this);
        this._super(opts);
    },
    set_datepicker: function() {
        this._super();
        update_picker(this);
    },
    set_input: function(value, value2) {
        value = get_datetime(this, value, true);
        value2 = get_datetime(this, value2, true);
        this._super(value, value2);
    }
});
