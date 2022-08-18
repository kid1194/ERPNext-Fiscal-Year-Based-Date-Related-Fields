import {
    respectFiscalYear,
    updateDatePicker,
    getDateTime
} from './utils/utils.js';

frappe.ui.form.ControlDateRange = frappe.ui.form.ControlDateRange.extend({
    init: function(opts) {
        respectFiscalYear(this);
        this._super(opts);
    },
    set_datepicker: function() {
        this._super();
        updateDatePicker(this);
    },
    set_input: function(value, value2) {
        value = getDateTime(this, value, true);
        value2 = getDateTime(this, value2, true);
        this._super(value, value2);
    }
});
