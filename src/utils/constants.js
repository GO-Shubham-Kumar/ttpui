import { PUT_FRONT_ITEMS_TO_IRT_BIN, UD_PUT_FRONT_DAMAGED_EXCEPTION, UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION } from "./screenIds";

export const AUTHORIZATION_HEADER = 'Authentication-Token';
export const AUTH_TOKEN_REQUEST = 'Authorization';
export const AUTH_TOKEN = 'auth-token';
export const REFRESH_TOKEN = 'refresh_token';
export const USER_NAME = 'username';
export const VALID_URLS = ['/login', '/put', '/pick'];
export const SEAT_NAME="seat_name";
export const PPS_SEATS = "pps_seats";
export const SESSION_DATA = "session_data";
export const SERVER_ERROR_TEXT = "Server Error";
export const FETCH_SUCCESS_TEXT = "Server Error";
export const AUTH = 'auth';
export const LOGIN = 'LOGIN';
export const CLIENT_ID ="butlerUISudivya";
export const BOI_UI = "boi_ui";
export const METHOD_POST ='POST';
export const METHOD_PUT ='PUT';
export const ERROR_INVALID_TOKEN ='Invalid Token';
export const SOMETHING_WENT_WRONG = 'Something went wrong!';
export const EVENT_TYPE_PROCESS_BARCODE = 'process_barcode';
export const APP_SOURCE = 'ui';
export const SEATS = 'seats';
export const CALLBACK = 'callback';
export const VALID_SCREEN_ID = [UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION, UD_PUT_FRONT_DAMAGED_EXCEPTION, PUT_FRONT_ITEMS_TO_IRT_BIN]
export const EVENT_TYPE_CANCEL_SCAN = 'cancel_barcode_scan';
export const EVENT_TYPE_EXCEPTION_PRESS = 'exception_button_press';
export const EVENT_TYPE_DAMAGED = 'physically_damaged';
export const DEFAULT_LANGUAGE = 'en-US'
export const EVENT_TYPE_SEND_TOTE = 'send_tote';
export const STANDARD_CARD_HEIGHT = '42em';
export const STANDARD_CARD_HEIGHT_WITH_SEPERATOR = '37.3em';
export const NOTIFICATION_TYPE_ERROR= 'error';
export const WEBSOCKET_ERROR = 'Not able to connect to the WebSockets!, please try again !'
export const NOTIFICATION_TYPE_INFO= 'info';
export const INTIAL_FETCH_ERROR ="Not able to fetch Initial configs , please try again !"
export const EVENT_CLOSE_PALLET_MODAL ="confirm_close_tote"
export const EXCEPTION_TYPE= {
    'physically_damaged' : 'damaged'
}
export const EVENT_TYPE_RESET = 'reset'
export const EVENT_TYPE_BACK = 'back'
export const EVENT_TYPE_PUT_FRONT_EXCEPTION = 'put_front_exception'
export const EVENT_TYPE_QUANTITY_UPDATE_FROM_GUI = 'quantity_update_from_gui'
export const EVENT_TYPE_UDP_DAMAGE_EXCEPTION = 'udp_damaged_exception'
export const EVENT_TYPE_CANCEL_EXCEPTION = 'cancel_exception'
export const EVENT_ACTION_CONFIRM_IRT_BIN = 'confirm_irt_bin'

