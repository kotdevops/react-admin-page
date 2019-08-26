import {DataActionTypes} from './types';
import {DataActions} from './actions';

interface FieldAttendeeTagsData {
    type: string;
    id: string;
}

interface Data {
    id: string;
    attributes: {
        field_first_name: string;
        field_last_name: string;
        title: string;
    };
    relationships: {
        field_attendee_tags: {
            data: FieldAttendeeTagsData[];
        }
    }
}

interface Included {
    attributes: {
        name: string;
    };
    id: string
}

export interface AttendeeData {
    data: Data[];
    included: Included[];
}

export interface EventTags {
    attributes: {
        name: string
    };
    id: string;
}


export interface DataState {
    eventCode: string;
    language: string;
    attendees: AttendeeData;
    eventTags: EventTags[];
    XCSRFtoken: string;
    tagsParentData: {
        eventID: string,
        vocabularyID: string
    }
}

export const initialState: DataState = {
    eventCode: 'empty',
    language: 'empty',
    attendees: {
        data: [{
            id: 'empty',
            attributes: {
                field_last_name: 'empty',
                field_first_name: 'empty',
                title: 'empty',
            },
            relationships: {
                field_attendee_tags: {
                    data: [{
                        type: 'empty',
                        id: 'empty'
                    }]
                }
            }
        }],
        included: [{
            attributes: {
                name: 'empty',
            },
            id: 'empty'
        }]
    },
    eventTags: [{
        attributes: {
            name: 'empty'
        },
        id: 'empty'
    }],
    XCSRFtoken: 'empty',
    tagsParentData: {
        eventID: 'empty',
        vocabularyID: 'empty'
    }
};

export function dataReducer(
    state = initialState,
    action: DataActions
): DataState {
    switch (action.type) {
        case DataActionTypes.SET_EVENT_CODE: {
            return {
                ...state,
                eventCode: action.payload
            }
        }
        case DataActionTypes.SET_LANGUAGE: {
            return {
                ...state,
                language: action.payload
            }
        }
        case DataActionTypes.SET_ATTENDEES: {
            return {
                ...state,
                attendees: action.payload
            }
        }
        case DataActionTypes.SET_EVENT_TAGS: {
            return {
                ...state,
                eventTags: action.payload
            }
        }
        case DataActionTypes.SET_XCSRF_TOKEN: {
            return {
                ...state,
                XCSRFtoken: action.payload
            }
        }
        case DataActionTypes.SET_TAGS_PARENT_DATA: {
            return {
                ...state,
                tagsParentData: action.payload
            }
        }
        default:
            return state
    }
}