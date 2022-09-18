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

frappe.ui.form.ControlDate = class ControlDate extends frappe.ui.form.ControlDate {
    constructor(opts) {
        extend_class(this);
        super(opts);
    }
    set_value(value, force_set_value=false) {
        value = get_datetime(this, value, true);
        return super.set_value(value, force_set_value);
    }
    set_input(value) {
        value = get_datetime(this, value, true);
        super.set_input(value);
    }
    set_datepicker() {
        super.set_datepicker();
        update_picker(this);
    }
    get_now_date() {
        let dt = get_datetime(this, null, true, true);
        return frappe.datetime.convert_to_system_tz(dt, false).toDate();
    }
};
