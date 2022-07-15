function $of(v, t) { return Object.prototype.toString.call(v).slice(8, -1) === t; }
function $updateDate(dt1, dt2, dt3, me) {
    var y1 = dt1 && dt1.getFullYear(), y2 = dt2.getFullYear(), y3 = dt3 && dt3.getFullYear(),
    m1 = dt1 && dt1.getMonth(), m2 = dt2.getMonth(), m3 = dt3 && dt3.getMonth(),
    d1 = dt1 && dt1.getDate(), d2 = dt2.getDate(), d3 = dt3 && dt3.getDate();
    if (dt1) {
        if (y1 > y2) dt2.setFullYear(y1);
        if (m1 > m2) dt2.setMonth(m1);
        if (d1 > d2) dt2.setDate(d1);
        if (me && (y1 > y2 || m1 > m2 || d1 > d2)) me.startDT = dt1;
    }
    if (dt3) {
        if (y3 < y2) dt2.setFullYear(y3);
        if (m3 < m2) dt2.setMonth(m3);
        if (d3 < d2) dt2.setDate(d3);
        if (me && (y3 < y2 || m3 < m2 || d3 < d2)) me.endDT = dt3;
    }
    return dt2;
}
frappe.ui.form.supportFiscalYear = function(me) {
    if (me.respectedFY || !$of(me.df.options, 'String') || me.df.options.toLowerCase().replace(/\s/g, '_') !== 'fiscal_year') return;
    let dfy = frappe.sys_defaults.fiscal_year;
	frappe.db.get_value('Fiscal Year', {year: dfy}, ['year_start_date', 'year_end_date'],
	function(v) {
	    let ret = v.message,
	    ndt = fdt.now_date(true),
	    sdt = new Date(ret.year_start_date),
	    edt = new Date(ret.year_end_date);
	    $updateDate(sdt, ndt, edt, me);
	    me.respectedFY = !!me.startDT || !!me.endDT;
	    me.datepicker.update({startDate: ndt, minDate: sdt, maxDate: edt});
	});
};
frappe.ui.form.respectFiscalYear = function(me, dt) {
    if (me.respectedFY) $updateDate(me.startDT, dt, me.endDT);
    return dt;
};
