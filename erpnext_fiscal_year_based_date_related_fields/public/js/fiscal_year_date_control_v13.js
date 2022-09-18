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

frappe.ui.form.ControlDate = frappe.ui.form.ControlDate.extend({
    make: function() {
        extend_class(this);
        this._super();
    },
    set_value: function(value, force_set_value=false) {
        value = get_datetime(this, value, true);
        return this._super(value, force_set_value);
    },
    set_input: function(value) {
        value = get_datetime(this, value, true);
        this._super(value);
    },
    set_datepicker: function() {
        this._super();
        update_picker(this);
    },
    get_now_date: function() {
        let dt = get_datetime(this, null, true, true);
        return frappe.datetime.convert_to_system_tz(dt, false).toDate();
    }
});
