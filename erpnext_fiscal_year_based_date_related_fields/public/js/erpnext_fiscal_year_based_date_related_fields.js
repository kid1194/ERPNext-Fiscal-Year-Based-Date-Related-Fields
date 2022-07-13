frappe.ui.form.ControlDate = class ControlDate extends frappe.ui.form.ControlDate {
	set_datepicker() {
	    super.set_datepicker();
		let me = this, dfy = frappe.sys_defaults.fiscal_year;
		frappe.db.get_value('Fiscal Year', {year: dfy}, ['year_start_date', 'year_end_date'],
		function(v) {
		    let ret = v.message,
		    ndt = fdt.now_date(true),
		    sdt = new Date(ret.year_start_date),
		    edt = new Date(ret.year_end_date);
		    if (sdt.getTime() > ndt.getTime()) {
		        me.nowYear = sdt.getFullYear();
		        ndt.setFullYear(me.nowYear);
		    }
		    if (sdt.getTime() > ndt.getTime()) {
		        me.nowMonth = sdt.getMonth();
		        ndt.setMonth(me.nowMonth);
		    }
		    if (sdt.getTime() > ndt.getTime()) {
		        me.nowDay = sdt.getDate();
		        ndt.setDate(me.nowDay);
		    }
		    me.datepicker.update({
		        startDate: ndt,
		        minDate: sdt,
		        maxDate: edt,
		    });
		});
	}
	get_now_date() {
	    let dt = frappe.datetime.now_date(true);
	    if (this.nowYear) dt.setFullYear(this.nowYear);
	    if (this.nowMonth) dt.setMonth(this.nowMonth);
	    if (this.nowDay) dt.setDate(this.nowDay);
	    return frappe.datetime.convert_to_system_tz(dt, false).toDate();
	}
};
