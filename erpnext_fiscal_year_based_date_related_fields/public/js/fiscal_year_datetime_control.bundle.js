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

frappe.ui.form.ControlDatetime = class ControlDatetime extends frappe.ui.form.ControlDatetime {
    make() {
        extend_class(this);
        super.make();
    }
    set_value(value, force_set_value=false) {
        value = get_datetime(this, value);
        return super.set_value(value, force_set_value);
    }
    set_input(value) {
        value = get_datetime(this, value);
        super.set_input(value);
    }
    set_datepicker() {
        super.set_datepicker();
        update_picker(this);
    }
    get_start_date() {
        this.value = this.value == null ? undefined : this.value;
        let value = frappe.datetime.convert_to_user_tz(this.value);
        return get_datetime(this, this.value, false, true);
    }
    get_now_date() {
        return get_datetime(this, null, false, true);
    }
};
