import { UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION } from "./screenIds";

export const AUTHORIZATION_HEADER = 'Authentication-Token';
export const AUTH_TOKEN_REQUEST = 'Authorization';
export const AUTH_TOKEN = 'auth-token';
export const REFRESH_TOKEN = 'refresh_token';
export const USER_NAME = 'username';
export const VALID_URLS = ['/' , '/login', '/put', '/put-back', '/put-front', '/scan-pallet', '/scan-tote', '/scan-entity', '/place-entity', '/pick-back'];
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
export const VALID_SCREEN_ID=[UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION]
export const EVENT_TYPE_CANCEL_SCAN = 'cancel_barcode_scan';
export const DEFAULT_LANGUAGE = 'en-US'