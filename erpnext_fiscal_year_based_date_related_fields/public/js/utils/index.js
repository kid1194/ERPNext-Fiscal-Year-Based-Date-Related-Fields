export function extend_class(me) {
    if (me._fiscal_year || !me.df.options || typeof me.df.options !== 'string'
    || me.df.options.toLowerCase().replace(/\s/g, '_') !== 'fiscal_year') {
        return;
    }
    frappe.db.get_value(
        'Fiscal Year',
        frappe.sys_defaults.fiscal_year,
        ['year_start_date', 'year_end_date']
    )
    .then(function(ret) {
        let data = ret.message;
        me._fiscal_year = {
            start_date: data.year_start_date,
            end_date: data.year_end_date,
        };
    });
}

export function update_picker(me) {
    if (!me._fiscal_year) return;
    let now_dt = moment(),
    start_dt = moment(me._fiscal_year.start_date, frappe.defaultDateFormat),
    end_dt = moment(me._fiscal_year.end_date, frappe.defaultDateFormat);
    _update_datetime(me, now_dt);
    me.datepicker.update({
        startDate: frappe.datetime.moment_to_date_obj(now_dt),
        minDate: frappe.datetime.moment_to_date_obj(start_dt),
        maxDate: frappe.datetime.moment_to_date_obj(end_dt),
    });
}

export function get_datetime(me, val, date, as_obj) {
    let format = date ? frappe.defaultDateFormat : frappe.defaultDatetimeFormat,
    now_dt = val ? moment(val, format) : moment();
    if (me._fiscal_year) _update_datetime(me, now_dt);
    if (!as_obj) return now_dt.format(format);
    return frappe.datetime.moment_to_date_obj(now_dt);
}

function _update_datetime(me, now_dt) {
    let start_dt = moment(me._fiscal_year.start_date, frappe.defaultDateFormat),
    end_dt = moment(me._fiscal_year.end_date, frappe.defaultDateFormat),
    start_diff = start_dt.diff(now_dt, 'seconds', true),
    end_diff = end_dt.diff(now_dt, 'seconds', true);
    if (end_diff < 0) now_dt.add(end_diff, 'seconds');
    else if (start_diff > 0) now_dt.add(start_diff, 'seconds');
}