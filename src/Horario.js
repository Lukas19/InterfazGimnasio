import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from './Events'

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const MyCalendar = props => (
    <div>
        <BigCalendar
            {...this.props}
            events={events}
            defaultView='week'
            step={15}
            timeslots={8}
        />
    </div>
);

class Horario extends React.Component {
    render () {
        return (
            <div {...this.props}>
                <h3 className="callout">
                    Click an event to see more info, or
                    drag the mouse over the calendar to select a date/time range.
                </h3>
                <BigCalendar
                    selectable
                    events={events}
                    defaultView='week'
                    step={15}
                    timeslots={8}
                    scrollToTime={new Date(2017, 1, 1)}
                    defaultDate={moment()}
                    onSelectEvent={event => alert(event.title+ ": " + event.desc)}
                    onSelectSlot={(slotInfo) => alert(
                        `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                        `\nend: ${slotInfo.end.toLocaleString()}` +
                        `\naction: ${slotInfo.action}` + '\nHorario Reservado'
                    )}
                />
            </div>
        )
    }

}

export default Horario;