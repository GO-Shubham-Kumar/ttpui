export const UD_PUT_FRONT_TOTE_SCAN = 'ud_put_front_tote_scan'
export const UD_PUT_FRONT_ENTITY_SCAN = 'ud_put_front_entity_scan'
export const UD_PUT_FRONT_PLACE_ITEMS_IN_RACK = 'ud_put_front_place_items_in_rack'
export const UD_PUT_TOTE_INDUCTION = 'put_tote_induction'
export const SCAN_PALLET = 'ScanPallet'
export const SCAN_TOTE = 'ScanTote'
export const SCREEN_ID_MAPPING = {
  [UD_PUT_FRONT_TOTE_SCAN]: SCAN_PALLET,
  [UD_PUT_FRONT_ENTITY_SCAN]: SCAN_TOTE,
}
export const PICK_FRONT_DOCK_TOTE = 'pick_front_dock_tote'
export const PICK_FRONT_TTP_ITEM_SCAN = 'pick_front_ttp_item_scan'
export const PICK_FRONT_MORE_ITEM_SCAN = 'pick_front_more_item_scan'
export const PICK_FRONT_PPTL_PRESS = 'pick_front_pptl_press'
export const PICK_FRONT_UNDOCK_TOTE = 'pick_front_undock_tote'
export const PICK_FRONT_WAITING_FOR_MSU = 'pick_front_waiting_for_msu'
export const PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER = 'pick_front_scan_or_wait_for_container'
export const PICK_FRONT_MISSING_OR_UNSCANNABLE_DAMAGED_ITEM = 'pick_front_missing_or_unscannable_damaged_item'
export const PICK_FRONT_BIN_SCAN = 'pick_front_bin_scan'
export const UD_PUT_FRONT_MISSIN = 'ud_put_front_missing';
export const UD_PUT_FRONT_DAMAGED_EXCEPTION = 'ud_put_front_damaged_exception';
export const PUT_FRONT_ITEMS_TO_IRT_BIN = 'put_front_items_to_irt_bin';
export const UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR = 'ud_put_front_place_tote_on_conveyor';
