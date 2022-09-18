/*
 * ERPNext Fiscal Year Based Date Related Fields © 2022
 * Author:  Ameen Ahmed
 * Company: Level Up Marketing & Software Development Services
 * Licence: Please refer to license.txt
 */

import {
    extend_class,
    update_picker,
    get_datetime
} from './utils';

frappe.ui.form.ControlDatetime = frappe.ui.form.ControlDatetime.extend({
    init: function(opts) {
        extend_class(this);
        this._super(opts);
    },
    set_value: function(value, force_set_value=false) {
        value = get_datetime(this, value);
        return this._super(value, force_set_value);
    },
    set_input: function(value) {
        value = get_datetime(this, value);
        this._super(value);
    },
    set_datepicker: function() {
        this._super();
        update_picker(this);
    },
    get_start_date: function() {
        this.value = this.value == null ? undefined : this.value;
        let value = frappe.datetime.convert_to_user_tz(this.value);
        return get_datetime(this, this.value, false, true);
    },
    get_now_date: function() {
        return get_datetime(this, null, false, true);
    }
});
