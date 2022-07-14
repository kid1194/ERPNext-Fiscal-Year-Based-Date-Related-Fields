frappe.ui.form.addFiscalYearSupport = function(me) {
    function $of(v, t) { return Object.prototype.toString.call(v).slice(8, -1) === t; }
    if (me.respectedFY || !$of(me.df.options, 'String') || me.df.options.toLowerCase().replace(/\s/g, '_') !== 'fiscal_year') return;
    let dfy = frappe.sys_defaults.fiscal_year;
	frappe.db.get_value('Fiscal Year', {year: dfy}, ['year_start_date', 'year_end_date'],
	function(v) {
	    let ret = v.message,
	    ndt = fdt.now_date(true),
	    sdt = new Date(ret.year_start_date),
	    edt = new Date(ret.year_end_date);
	    $.each({FullYear: 'nowYear', Month: 'nowMonth', 'Date': 'nowDay'}, function(k, v) {
	        let gk = 'get' + k, sv = sdt[gk]();
	        if (sv !== ndt[gk]()) {
	            ndt['set' + k]((me[v] = sv));
	            me.respectedFY = true;
	        }
	    });
	    me.datepicker.update({startDate: ndt, minDate: sdt, maxDate: edt});
	});
};
frappe.ui.form.updateFiscalYearDate = function(me, dt) {
    if (!me.respectedFY) return dt;
    if (me.nowYear) dt.setFullYear(me.nowYear);
    if (me.nowMonth) dt.setMonth(me.nowMonth);
    if (me.nowDay) dt.setDate(me.nowDay);
    return dt;
};
