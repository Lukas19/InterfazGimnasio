import moment from 'moment';


export default [
    {
        'title': 'All Day Event very long title',
        'allDay': true,
        'start': new Date(2015, 3, 0),
        'end': new Date(2015, 3, 1)
    },
    {
        'title': 'Long Event',
        'start': new Date(2017, 20, 12),
        'end': new Date(2017, 20, 12)
    },

    {
        'title': 'DTS STARTS',
        'start': new Date(2017, 12, 25, 0, 0, 0),
        'end': new Date(2017, 12, 26, 0, 0, 0)
    },

    {
        'title': 'DTS ENDS',
        'start': new Date(2016, 10, 6, 0, 0, 0),
        'end': new Date(2016, 10, 13, 0, 0, 0)
    },

    {
        'title': 'Some Event',
        'start': moment(),
        'end': moment().endOf('day').fromNow()
    },
    {
        'title': 'Aerobox',
        'start': new Date(2017, 11, 22),
        'end': new Date(2017, 11, 23),
        desc: 'Clase de Aerobox con el profe zunino'
    },
    {
        'title': 'Aerobox',
        'start': new Date(2017, 11, 25, 14, 0, 0, 0),
        'allDay': true,
        'end': new Date(2017, 11, 26, 15, 0, 0, 0),
        desc: 'Clase de Aerobox con el profe zunino'
    },
    {
        'title': 'Meeting',
        'start':new Date(2015, 3, 12,14, 0, 0, 0),
        'end': new Date(2015, 3, 12,15, 0, 0, 0)
    },
    {
        'title': 'Happy Hour',
        'start':new Date(2017, 3, 12, 17, 0, 0, 0),
        'end': new Date(2017, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day'
    },
    {
        'title': 'Dinner',
        'start':new Date(2015, 3, 12, 20, 0, 0, 0),
        'end': new Date(2015, 3, 12, 21, 0, 0, 0)
    },
    {
        'title': 'Birthday Party',
        'start':new Date(2015, 3, 13, 7, 0, 0),
        'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
        'title': 'Birthday Party 2',
        'start':new Date(2015, 3, 13, 7, 0, 0),
        'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
        'title': 'Birthday Party 3',
        'start':new Date(2015, 3, 13, 7, 0, 0),
        'end': new Date(2015, 3, 13, 10, 30, 0)
    },
    {
        'title': 'Late Night Event',
        'start':new Date(2015, 3, 17, 19, 30, 0),
        'end': new Date(2015, 3, 18, 2, 0, 0)
    },
    {
        'title': 'Multi-day Event',
        'start':new Date(2015, 3, 20, 19, 30, 0),
        'end': new Date(2015, 3, 22, 2, 0, 0)
    }
]