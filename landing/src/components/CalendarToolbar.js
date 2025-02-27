/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import moment from 'moment';

const CalendarToolbar = toolbar => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };
  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };
  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const label = () => {
    const date = moment(toolbar.date);
    return (
      <span>
        <span>{date.format('MMMM')} </span>
        <span> {date.format('YYYY')}</span>
      </span>
    );
  };

  return (
    <div className="big-calendar-header">
      <div className="float-left">
        <label>{label()}</label>
      </div>

      <div className="float-right">
        <div>
          <button
            type="button"
            className="btn btn-primary calendar-today-btn mr-2"
            onClick={goToCurrent}
          >
            Today
          </button>
          <button
            type="button"
            className="btn calendar-prev-btn mr-1"
            onClick={goToBack}
          >
            <span className="simple-icon-arrow-left" />
          </button>
          <button
            type="button"
            className="btn calendar-next-btn"
            onClick={goToNext}
          >
            <span className="simple-icon-arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CalendarToolbar;
