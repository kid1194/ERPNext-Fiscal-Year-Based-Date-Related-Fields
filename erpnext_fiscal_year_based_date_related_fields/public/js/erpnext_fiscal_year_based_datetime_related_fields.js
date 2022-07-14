frappe.ui.form.ControlDatetime = class ControlDatetime extends frappe.ui.form.ControlDatetime {
	set_datepicker() {
	    super.set_datepicker();
	    frappe.ui.form.addFiscalYearSupport(this);
	}
	set_formatted_input(value) {
		if (this.timepicker_only) return;
		if (!this.datepicker) return;
		if (!value) {
			this.datepicker.clear();
			return;
		} else if (value === "Today") {
			value = this.get_now_date();
		}
		value = this.format_for_input(value);
		this.$input && this.$input.val(value);
		this.datepicker.selectDate(this._prep_date(frappe.datetime.user_to_obj(value)));
	}
	get_start_date() {
		let value = frappe.datetime.convert_to_user_tz(this.value);
		return this._prep_date(frappe.datetime.str_to_obj(value));
	}
	get_now_date() {
	    return this._prep_date(frappe.datetime.now_datetime(true));
	}
	_prep_date(dt) {
	    return frappe.ui.form.updateFiscalYearDate(this, dt);
	}
};
