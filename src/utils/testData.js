import { UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR } from "./screenIds"

export const SCAN_PALLET_ID_DATA = {
    "state_data": {
        "user_loggedin": "admin",
        "logout_allowed": true,
        "time_stamp": "2022-09-12T09:05:21Z",
        "screen_id": "ud_put_front_tote_scan",
        "screen_version": "1",
        "exception_allowed": [],
        "header_msge_list": [
            {
                "code": "UdpF.H.001",
                "level": "info",
                "description": "Dock Tote",
                "details": [
                    "tote"
                ]
            }
        ],
        "sub_header_msge_list": [],
        "notification_list": [],
        "seat_type": "front",
        "seat_name": "front_1",
        "mode": "put",
        "pps_profile": "",
        "pps_requested_status": "undefined",
        "pps_requested_mode": "undefined",
        "api_version": "1",
        "error_popup_disabled": false,
        "operator_orientation": "0",
        "uph_count": 0,
        "ops_paused": false,
        "current_bin_widget": true,
        "show_bin_view": false,
        "bin_plotting": true,
        "audit_sideline_popup": false,
        "allow_positive_adjustment": true,
        "auto_sideline_confirm_required": false,
        "auto_sideline_crash_type": "none",
        "rc_warehouse_full_popup": false,
        "entity_location_after_crash": [],
        "entity_location_type_after_crash": "undefined",
        "is_only_exception_button_pressed": false,
        "pps_blocked": false,
        "current_bin_id": "undefined",
        "disable_reconcile_screen": false,
        "show_bin_full_default_zero": false,
        "reserve_audit": false,
        "show_empty_popup": false,
        "empty_popup_msg": [],
        "maintenance": "undefined",
        "early_display": false,
        "show_inv_count_popup": false,
        "inv_count_popup_msg": [],
        "inventory_count_check_limit": 5,
        "product_info_for_inv_count_check": [],
        "selected_seat_for_release_bins_filter": "undefined",
        "split_pps_info": [],
        "is_zerowalk_flow": false,
        "ppsbin_list": [
            {
                "orig_coordinate": [
                    0,
                    0
                ],
                "ppsbin_id": "1",
                "ppsbin_count": "0",
                "bin_info": [],
                "coordinate": [
                    1,
                    1
                ],
                "group_id": "1",
                "direction": "center",
                "length": "200",
                "breadth": "100",
                "height": "100",
                "ppsbin_state": "empty",
                "selected_state": false,
                "back_drawing_start": "left",
                "front_drawing_start": "left",
                "back_seat_name": "back_1",
                "totes_associated": "false"
            }
        ],
        "structure": [
            1,
            1
        ],
        "scan_allowed": true,
        "send_msu_enabled": true,
        "previous_put_details": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        }
                    ],
                    "ql_code": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Slot ID",
                            "locale": "en-US"
                        }
                    ],
                    "slot_barcode": [
                        [
                            ""
                        ]
                    ]
                }
            ],
            [
                {
                    "display_data": [],
                    "bin_station": ""
                }
            ]
        ],
        "is_idle": false,
        "roll_cage_flow": false,
        "group_info": {
            "1": "center"
        },
        "bin_coordinate_plotting": true,
        "docked": [],
        "event": "initialise",
        "current_put_details": {
            "sku_type": "Single SKU",
            "sku_qty": {
              "total_qty": 1,
              "put_qty": 0
            },
            "uom_qty": {
              "total_qty": 1,
              "put_qty": 0
            },
            "tote_id": "LPN01",
            "tote_details": {
              "value": "LPN01",
              "display_data": [
                {
                  "display_name": "Pallet ID",
                  "locale": "en-US"
                }
              ]
            },
            "rack_details": {
              "value": "002",
              "display_data": [
                {
                  "display_name": "TOTE ID",
                  "locale": "en-US"
                }
              ]
            }
          },
    }
}

export const PUT_TOTE_INDUCTION = {
        "state_data": {
            "user_loggedin": "admin",
            "logout_allowed": true,
            "time_stamp": "2022-09-12T09:05:21Z",
            "screen_id": "put_tote_induction",
            "screen_version": "1",
            "exception_allowed": [],
            "header_msge_list": [
                {
                    "code": "UdpF.H.001",
                    "level": "info",
                    "description": "Dock Tote",
                    "details": [
                        "tote"
                    ]
                }
            ],
            "sub_header_msge_list": [],
            "notification_list": [
                {
                    "code": "UdpF.I.011",
                    "description": "~p close successfully",
                    "details": [
                        "Pallet"
                    ],
                    "level": "info"
                }
            ],
            "seat_type": "front",
            "seat_name": "front_1",
            "mode": "put",
            "pps_profile": "",
            "pps_requested_status": "undefined",
            "pps_requested_mode": "undefined",
            "api_version": "1",
            "error_popup_disabled": false,
            "operator_orientation": "0",
            "uph_count": 0,
            "ops_paused": false,
            "current_bin_widget": true,
            "show_bin_view": false,
            "bin_plotting": true,
            "audit_sideline_popup": false,
            "allow_positive_adjustment": true,
            "auto_sideline_confirm_required": false,
            "auto_sideline_crash_type": "none",
            "rc_warehouse_full_popup": false,
            "entity_location_after_crash": [],
            "entity_location_type_after_crash": "undefined",
            "is_only_exception_button_pressed": false,
            "pps_blocked": false,
            "current_bin_id": "undefined",
            "disable_reconcile_screen": false,
            "show_bin_full_default_zero": false,
            "reserve_audit": false,
            "show_empty_popup": false,
            "empty_popup_msg": [],
            "maintenance": "undefined",
            "early_display": false,
            "show_inv_count_popup": false,
            "inv_count_popup_msg": [],
            "inventory_count_check_limit": 5,
            "product_info_for_inv_count_check": [],
            "selected_seat_for_release_bins_filter": "undefined",
            "split_pps_info": [],
            "is_zerowalk_flow": false,
            "ppsbin_list": [
                {
                    "orig_coordinate": [
                        0,
                        0
                    ],
                    "ppsbin_id": "1",
                    "ppsbin_count": "0",
                    "bin_info": [],
                    "coordinate": [
                        1,
                        1
                    ],
                    "group_id": "1",
                    "direction": "center",
                    "length": "200",
                    "breadth": "100",
                    "height": "100",
                    "ppsbin_state": "empty",
                    "selected_state": false,
                    "back_drawing_start": "left",
                    "front_drawing_start": "left",
                    "back_seat_name": "back_1",
                    "totes_associated": "false"
                }
            ],
            "structure": [
                1,
                1
            ],
            "scan_allowed": true,
            "send_msu_enabled": true,
            "previous_put_details": [
                [
                    {
                        "display_data": [
                            {
                                "display_name": "Product Barcode",
                                "locale": "en-US"
                            }
                        ],
                        "ql_code": "dasdasd"
                    }
                ],
                [
                    {
                        "display_data": [
                            {
                                "display_name": "Slot ID",
                                "locale": "en-US"
                            }
                        ],
                        "slot_barcode": [
                            [
                                "dasdas"
                            ]
                        ]
                    }
                ],
                [
                    {
                        "display_data": [
                            {
                                "display_name": "Slosst ID",
                                "locale": "en-US"
                            }
                        ],
                        "slot_barcode": [
                            [
                                "dasdadas"
                            ]
                        ]
                    }
                ],
                [
                    {
                        "display_data": [
                            {
                                "display_name": "Slsssot ID",
                                "locale": "en-US"
                            }
                        ],
                        "slot_barcode": [
                            [
                                "dasdas"
                            ]
                        ]
                    }
                ],
                [
                    {
                        "display_data": [],
                        "bin_station": ""
                    }
                ]
            ],
            "is_idle": false,
            "roll_cage_flow": false,
            "group_info": {
                "1": "center"
            },
            "bin_coordinate_plotting": true,
            "docked": [],
            "event": "initialise",
            "current_put_details": {
                "sku_type": "Single SKU",
                "sku_qty": {
                  "total_qty": 1,
                  "put_qty": 0
                },
                "uom_qty": {
                  "total_qty": 1,
                  "put_qty": 0
                },
                "tote_id": "LPN01",
                "tote_details": {
                  "value": "LPN01",
                  "display_data": [
                    {
                      "display_name": "Pallet ID",
                      "locale": "en-US"
                    }
                  ]
                },
                "rack_details": {
                  "value": "002",
                  "display_data": [
                    {
                      "display_name": "TOTE ID",
                      "locale": "en-US"
                    }
                  ]
                }
              },
        }
}

export const UD_PUT_FRONT_ENTITY_SCAN ={
    state_data : {
        "item_uid": "69",
        "entity_location_after_crash": [],
        "empty_popup_msg": [],
        "pps_blocked": false,
        "show_inv_count_popup": false,
        "reserve_audit": false,
        "inv_count_popup_msg": [],
        "ppsbin_list": [
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    5
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    0,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "6",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [
                    {
                        "load_unit_id": [
                            "1"
                        ],
                        "load_unit_label": "Bin",
                        "product_sku": "item_s5",
                        "quantity": 2,
                        "serial": [],
                        "service_request_id": [
                            "sr0951311111111211111111"
                        ],
                        "type": "Item"
                    }
                ],
                "breadth": "100",
                "coordinate": [
                    1,
                    5
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    0,
                    0
                ],
                "ppsbin_count": "1",
                "ppsbin_id": "1",
                "ppsbin_state": "staged",
                "selected_state": true,
                "totes_associated": "true"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    4
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    200,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "7",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    4
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    200,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "2",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    3
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    400,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "8",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    3
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    400,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "3",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    2
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    600,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "9",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    2
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    600,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "4",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    1
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    800,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "10",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_3",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    1
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    800,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "5",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            }
        ],
        "auto_sideline_confirm_required": false,
        "time_stamp": "2022-09-21T13:34:22Z",
        "auto_sideline_crash_type": "none",
        "exception_allowed": [
            {
                "details": [],
                "event": "physically_damaged",
                "exception_id": "UdP001",
                "exception_name": "Damaged Entites"
            }
        ],
        "is_zerowalk_flow": false,
        "api_version": "1",
        "ops_paused": false,
        "docked": [],
        "show_bin_full_default_zero": false,
        "allow_positive_adjustment": true,
        "header_msge_list": [
            {
                "code": "UdpF.H.003",
                "description": "Scan item or tote",
                "details": [
                    "pallet"
                ],
                "level": "info"
            }
        ],
        "seat_name": "front_3",
        "event": "initialise",
        "show_bin_view": true,
        "operator_orientation": "0",
        "is_ud_without_staging": false,
        "show_current_put_widget": true,
        "notification_list": [
            {
                "code": "PtB.I.001",
                "description": "Tote scan successful.",
                "details": [],
                "level": "info"
            }
        ],
        "screen_version": "1",
        "current_bin_widget": true,
        "bin_coordinate_plotting": true,
        "error_popup_disabled": false,
        "disable_reconcile_screen": false,
        "current_put_details": {
            "rack_details": {
                "display_data": [
                    {
                        "display_name": "TOTE ID",
                        "locale": "en-US"
                    }
                ],
                "value": "TOTE1235"
            },
            "sku_qty": {
                "put_qty": 0,
                "total_qty": 1
            },
            "sku_type": "Single SKU",
            "tote_details": {
                "display_data": [
                    {
                        "display_name": "Pallet ID",
                        "locale": "en-US"
                    }
                ],
                "value": "LP2313"
            },
            "tote_id": "LP2313",
            "uom_qty": {
                "put_qty": 0,
                "total_qty": 1
            }
        },
        "selected_seat_for_release_bins_filter": "undefined",
        "rack_details": {
            "rack_type": "tsu",
            "rack_type_rec": [
                {
                    "barcodes": [
                        "A.01"
                    ],
                    "free_space": 96000,
                    "height": 40,
                    "length": 40,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        0
                    ],
                    "prefixed_barcodes": [
                        "A.01"
                    ],
                    "slot_ref": [
                        [
                            84,
                            79,
                            84,
                            69,
                            49,
                            50,
                            51,
                            53,
                            46,
                            48,
                            46,
                            65,
                            46,
                            48,
                            49
                        ]
                    ],
                    "type": "slot"
                }
            ],
            "rack_width": 40,
            "slot_type": "slot"
        },
        "is_only_exception_button_pressed": false,
        "audit_sideline_popup": false,
        "maintenance": "undefined",
        "mode": "put",
        "pps_requested_status": "undefined",
        "early_display": false,
        "logout_allowed": true,
        "show_empty_popup": false,
        "is_idle": false,
        "bin_plotting": true,
        "seat_type": "front",
        "roll_cage_flow": false,
        "screen_id": "ud_put_front_entity_scan",
        "previous_put_details": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        }
                    ],
                    "ql_code": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Slot ID",
                            "locale": "en-US"
                        }
                    ],
                    "slot_barcode": [
                        [
                            ""
                        ]
                    ]
                }
            ],
            [
                {
                    "bin_station": "",
                    "display_data": []
                }
            ]
        ],
        "group_info": {
            "1": "center"
        },
        "product_info_for_inv_count_check": [],
        "sub_header_msge_list": [],
        "uph_count": 0,
        "rc_warehouse_full_popup": false,
        "pps_profile": "",
        "current_bin_id": "1",
        "product_info": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        },
                        {
                            "display_name": "Código de barras del producto",
                            "locale": "es-ES"
                        }
                    ],
                    "product_barcode": []
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "product_local_image_url",
                            "locale": "en-US"
                        }
                    ],
                    "product_local_image_url": null
                }
            ]
        ],
        "scan_allowed": true,
        "entity_location_type_after_crash": "undefined",
        "tote_induction": true,
        "pps_requested_mode": "undefined",
        "tote_id": "LP2313",
        "user_loggedin": "admin",
        "split_pps_info": [],
        "inventory_count_check_limit": 5,
        "missing_items": []
    }
}


export const TEST_DATA = {
    "state_data" : {
        "entity_location_after_crash": [],
        "empty_popup_msg": [],
        "pps_blocked": false,
        "show_inv_count_popup": false,
        "reserve_audit": false,
        "inv_count_popup_msg": [],
        "auto_sideline_confirm_required": false,
        "time_stamp": "2022-09-30T06:13:31Z",
        "auto_sideline_crash_type": "none",
        "exception_allowed": [],
        "is_zerowalk_flow": false,
        "api_version": "1",
        "ops_paused": false,
        "docked": [],
        "show_bin_full_default_zero": false,
        "allow_positive_adjustment": true,
        "header_msge_list": [
            {
                "code": "UdpF.H.012",
                "description": "Scan a Tote to Induct",
                "details": [],
                "level": "info"
            }
        ],
        "seat_name": "front_1",
        "event": "initialise",
        "show_bin_view": true,
        "operator_orientation": "0",
        "show_current_put_widget": true,
        "notification_list": [
            {
                "code": "UdpF.I.007",
                "description": "Tote close successful",
                "details": [],
                "level": "info"
            }
        ],
        "screen_version": "1",
        "current_bin_widget": true,
        "bin_coordinate_plotting": true,
        "error_popup_disabled": false,
        "disable_reconcile_screen": false,
        "current_put_details": {
            "rack_details": {
                "display_data": [
                    {
                        "display_name": "TOTE ID",
                        "locale": "en-US"
                    }
                ]
            },
            "sku_qty": {
                "put_qty": 0,
                "total_qty": 2
            },
            "sku_type": "Multi SKU",
            "tote_details": {
                "display_data": [
                    {
                        "display_name": "Tote",
                        "locale": "en-US"
                    }
                ],
                "value": "TOT0000463"
            },
            "tote_id": "TOT0000463",
            "uom_qty": {
                "put_qty": 0,
                "total_qty": 20
            }
        },
        "selected_seat_for_release_bins_filter": "undefined",
        "is_only_exception_button_pressed": false,
        "audit_sideline_popup": false,
        "maintenance": "undefined",
        "mode": "put",
        "pps_requested_status": "undefined",
        "early_display": false,
        "logout_allowed": false,
        "show_empty_popup": false,
        "is_idle": false,
        "bin_plotting": true,
        "seat_type": "front",
        "roll_cage_flow": false,
        "screen_id": "put_tote_induction",
        "previous_put_details": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        }
                    ],
                    "ql_code": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Tote ID",
                            "locale": "en-US"
                        }
                    ],
                    "slot_barcode": [
                        [
                            ""
                        ]
                    ]
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "SKU ID",
                            "locale": "en-US"
                        }
                    ],
                    "value": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "SKU Qty",
                            "locale": "en-US"
                        }
                    ],
                    "value": ""
                }
            ]
        ],
        "group_info": {
            "1": "center"
        },
        "product_info_for_inv_count_check": [],
        "sub_header_msge_list": [],
        "uph_count": 0,
        "rc_warehouse_full_popup": false,
        "pps_profile": "",
        "current_bin_id": "1",
        "scan_allowed": true,
        "entity_location_type_after_crash": "undefined",
        "tote_induction": true,
        "pps_requested_mode": "undefined",
        "tote_id": "TOT0000463",
        "user_loggedin": "default_user_name",
        "split_pps_info": [],
        "inventory_count_check_limit": 5
    }
}

export const TEST_DATA_2={
    state_data : {
        "entity_location_after_crash": [],
        "empty_popup_msg": [],
        "pps_blocked": false,
        "show_inv_count_popup": false,
        "reserve_audit": false,
        "inv_count_popup_msg": [],
        "auto_sideline_confirm_required": false,
        "time_stamp": "2022-09-21T13:07:41Z",
        "auto_sideline_crash_type": "none",
        "exception_allowed": [],
        "is_zerowalk_flow": false,
        "api_version": "1",
        "ops_paused": false,
        "docked": [],
        "show_bin_full_default_zero": false,
        "allow_positive_adjustment": true,
        "header_msge_list": [
            {
                "code": "UdpF.H.012",
                "description": "Scan a Tote to Induct",
                "details": [],
                "level": "info"
            }
        ],
        "seat_name": "front_3",
        "event": "process_barcode",
        "show_bin_view": true,
        "operator_orientation": "0",
        "show_current_put_widget": true,
        "notification_list": [
            {
                "code": "UdpF.I.001",
                "description": "Tote scan successful",
                "details": [
                    "Pallet"
                ],
                "level": "info"
            }
        ],
        "screen_version": "1",
        "current_bin_widget": true,
        "bin_coordinate_plotting": true,
        "error_popup_disabled": false,
        "disable_reconcile_screen": false,
        "current_put_details": {
            "rack_details": {
                "display_data": [
                    {
                        "display_name": "TOTE ID",
                        "locale": "en-US"
                    }
                ]
            },
            "sku_qty": {
                "put_qty": 0,
                "total_qty": 1
            },
            "sku_type": "Single SKU",
            "tote_details": {
                "display_data": [
                    {
                        "display_name": "Pallet ID",
                        "locale": "en-US"
                    }
                ],
                "value": "LP2313"
            },
            "tote_id": "LP2313",
            "uom_qty": {
                "put_qty": 0,
                "total_qty": 1
            }
        },
        "selected_seat_for_release_bins_filter": "undefined",
        "is_only_exception_button_pressed": false,
        "audit_sideline_popup": false,
        "maintenance": "undefined",
        "mode": "put",
        "pps_requested_status": "undefined",
        "early_display": false,
        "logout_allowed": false,
        "show_empty_popup": false,
        "is_idle": false,
        "bin_plotting": true,
        "seat_type": "front",
        "roll_cage_flow": false,
        "screen_id": "put_tote_induction",
        "group_info": {
            "1": "center"
        },
        "product_info_for_inv_count_check": [],
        "sub_header_msge_list": [],
        "uph_count": 0,
        "rc_warehouse_full_popup": false,
        "pps_profile": "",
        "current_bin_id": "1",
        "scan_allowed": true,
        "entity_location_type_after_crash": "undefined",
        "tote_induction": true,
        "pps_requested_mode": "undefined",
        "user_loggedin": "admin",
        "split_pps_info": [],
        "inventory_count_check_limit": 5
    }
}

export const PLACE_ENTITY_DATA ={
    "state_data" : {
        "entity_location_after_crash": [],
        "Possible_Container_Names": [],
        "empty_popup_msg": [],
        "pps_blocked": false,
        "show_inv_count_popup": false,
        "reserve_audit": false,
        "inv_count_popup_msg": [],
        "ppsbin_list": [
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_2",
                "bin_info": [
                    {
                        "load_unit_id": [
                            "1"
                        ],
                        "load_unit_label": "Bin",
                        "product_sku": "ttp_item1",
                        "quantity": 8,
                        "serial": [],
                        "service_request_id": [
                            "sr09213111411111111113"
                        ],
                        "type": "Item"
                    }
                ],
                "breadth": "100",
                "coordinate": [
                    1,
                    1
                ],
                "direction": "left",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    0,
                    0
                ],
                "ppsbin_count": "4",
                "ppsbin_id": "1",
                "ppsbin_state": "staged",
                "selected_state": true,
                "totes_associated": "true"
            }
        ],
        "auto_sideline_confirm_required": false,
        "time_stamp": "2022-09-27T12:32:02Z",
        "auto_sideline_crash_type": "none",
        "exception_allowed": [
            {
                "details": [],
                "event": "physically_damaged",
                "exception_id": "UdP001",
                "exception_name": "Damaged Entites"
            }
        ],
        "is_zerowalk_flow": false,
        "api_version": "1",
        "ops_paused": false,
        "docked": [],
        "show_bin_full_default_zero": false,
        "allow_positive_adjustment": true,
        "header_msge_list": [
            {
                "code": "UdpF.H.004",
                "description": "Put entity in ~p and scan ~p to confirm",
                "details": [
                    [
                        "Tote"
                    ],
                    [
                        "Tote"
                    ]
                ],
                "level": "info"
            }
        ],
        "seat_name": "front_2",
        "event": "process_barcode",
        "show_bin_view": true,
        "send_msu_enabled": false,
        "operator_orientation": "0",
        "is_ud_without_staging": false,
        "show_current_put_widget": true,
        "notification_list": [
            {
                "code": "PkF.W.004",
                "description": "Wrong barcode scanned",
                "details": [],
                "level": "warning"
            }
        ],
        "screen_version": "1",
        "current_bin_widget": true,
        "bin_coordinate_plotting": true,
        "error_popup_disabled": false,
        "disable_reconcile_screen": false,
        "current_put_details": {
            "rack_details": {
                "display_data": [
                    {
                        "display_name": "TOTE ID",
                        "locale": "en-US"
                    }
                ],
                "value": "TOTE134"
            },
            "sku_qty": {
                "put_qty": 0,
                "total_qty": 1
            },
            "sku_type": "Single SKU",
            "tote_details": {
                "display_data": [
                    {
                        "display_name": "Pallet ID",
                        "locale": "en-US"
                    }
                ],
                "value": "PALLET1111111113"
            },
            "tote_id": "PALLET1111111113",
            "uom_qty": {
                "put_qty": 0,
                "total_qty": 4
            }
        },
        "selected_seat_for_release_bins_filter": "undefined",
        "rack_details": {
            "rack_type": "tsu",
            "rack_type_rec": [
                {
                    "barcodes": [
                        "A.01"
                    ],
                    "free_space": 96000,
                    "height": 40,
                    "length": 40,
                    "occupancy_color": "#4CAF50",
                    "orig_coordinates": [
                        0,
                        0
                    ],
                    "preferred_slot": true,
                    "prefixed_barcodes": [
                        "A.01"
                    ],
                    "put_qty": 99,
                    "restrict_slot": false,
                    "slot_ref": [
                        [
                            84,
                            79,
                            84,
                            69,
                            49,
                            51,
                            52,
                            46,
                            48,
                            46,
                            65,
                            46,
                            48,
                            49
                        ]
                    ],
                    "type": "slot"
                }
            ],
            "rack_width": 40,
            "slot_type": "slot"
        },
        "scan_details": {
            "allow_mark_full": false,
            "current_qty": "4",
            "kq_allowed": true,
            "kq_direction": "down",
            "total_qty": "4"
        },
        "is_only_exception_button_pressed": false,
        "audit_sideline_popup": false,
        "maintenance": "undefined",
        "mode": "put",
        "pps_requested_status": "undefined",
        "early_display": false,
        "logout_allowed": true,
        "show_empty_popup": false,
        "is_idle": false,
        "bin_plotting": true,
        "seat_type": "front",
        "roll_cage_flow": false,
        "item_uid": "1218",
        "screen_id": "ud_put_front_place_items_in_rack",
        "previous_put_details": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        }
                    ],
                    "ql_code": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Tote ID",
                            "locale": "en-US"
                        }
                    ],
                    "slot_barcode": [
                        [
                            ""
                        ]
                    ]
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "SKU ID",
                            "locale": "en-US"
                        }
                    ],
                    "value": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "SKU Qty",
                            "locale": "en-US"
                        }
                    ],
                    "value": ""
                }
            ]
        ],
        "group_info": {
            "1": "left"
        },
        "default_level": "undefined",
        "selected_level": "undefined",
        "product_info_for_inv_count_check": [],
        "enable_kq": true,
        "sub_header_msge_list": [],
        "uph_count": 0,
        "rc_warehouse_full_popup": false,
        "pps_profile": "default2",
        "current_bin_id": "1",
        "product_info": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "製品SKU",
                            "locale": "ja-JP"
                        },
                        {
                            "display_name": "Product SKU",
                            "locale": "en-US"
                        }
                    ],
                    "product_sku": "ttp_item1"
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "product_local_image_url",
                            "locale": "en-US"
                        }
                    ],
                    "product_local_image_url": null
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "製品バーコード",
                            "locale": "ja-JP"
                        },
                        {
                            "display_name": "Product Barcodes",
                            "locale": "en-US"
                        }
                    ],
                    "product_barcodes": [
                        "ttp_item1"
                    ]
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "UOM",
                            "locale": "en-US"
                        }
                    ],
                    "uom": "Item"
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "商品の寸法",
                            "locale": "ja-JP"
                        },
                        {
                            "display_name": "Product Dimensions",
                            "locale": "en-US"
                        }
                    ],
                    "product_dimensions": [
                        2,
                        2,
                        2
                    ]
                }
            ]
        ],
        "scan_allowed": true,
        "entity_location_type_after_crash": "undefined",
        "tote_induction": true,
        "pps_requested_mode": "undefined",
        "user_loggedin": "admin",
        "split_pps_info": [],
        "inventory_count_check_limit": 5
    }
}




export const PLACE_TOTE_AND_CONFIRM = {
    "state_data": {
        "entity_location_after_crash": [],
        "empty_popup_msg": [],
        "pps_blocked": false,
        "show_inv_count_popup": false,
        "reserve_audit": false,
        "inv_count_popup_msg": [],
        "ppsbin_list": [
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    4
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    0,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "5",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [
                    {
                        "load_unit_id": [
                            "1"
                        ],
                        "load_unit_label": "Bin",
                        "product_sku": "Item1",
                        "quantity": 2,
                        "serial": [],
                        "service_request_id": [
                            "sid0141"
                        ],
                        "type": "Item"
                    }
                ],
                "breadth": "100",
                "coordinate": [
                    1,
                    4
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    0,
                    0
                ],
                "ppsbin_count": "1",
                "ppsbin_id": "1",
                "ppsbin_state": "staged",
                "selected_state": true,
                "totes_associated": "true"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    3
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    200,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "6",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    3
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    200,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "2",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    2
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    400,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "7",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    2
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    400,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "3",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    2,
                    1
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    600,
                    200
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "8",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            },
            {
                "back_drawing_start": "left",
                "back_seat_name": "back_1",
                "bin_info": [],
                "breadth": "100",
                "coordinate": [
                    1,
                    1
                ],
                "direction": "center",
                "front_drawing_start": "left",
                "group_id": "1",
                "height": "100",
                "length": "200",
                "orig_coordinate": [
                    600,
                    0
                ],
                "ppsbin_count": "0",
                "ppsbin_id": "4",
                "ppsbin_state": "empty",
                "selected_state": false,
                "totes_associated": "false"
            }
        ],
        "auto_sideline_confirm_required": false,
        "time_stamp": "2022-09-19T10:18:40Z",
        "auto_sideline_crash_type": "none",
        "exception_allowed": [],
        "is_zerowalk_flow": false,
        "api_version": "1",
        "ops_paused": false,
        "docked": [],
        "show_bin_full_default_zero": false,
        "allow_positive_adjustment": true,
        "header_msge_list": [
            {
                "code": "UdpF.H.003",
                "description": "Scan {0} or tote",
                "details": [
                    "tote"
                ],
                "level": "info"
            }
        ],
        "seat_name": "front_1",
        "event": "missing_items",
        "show_bin_view": true,
        "operator_orientation": "0",
        "is_ud_without_staging": false,
        "show_current_put_widget": false,
        "notification_list": [],
        "screen_version": "1",
        "current_bin_widget": true,
        "bin_coordinate_plotting": true,
        "error_popup_disabled": false,
        "disable_reconcile_screen": false,
        "selected_seat_for_release_bins_filter": "undefined",
        "rack_details": {
            "rack_type": "msu",
            "rack_type_rec": [
                {
                    "barcodes": [
                        "F.05",
                        "F.06"
                    ],
                    "free_space": 30380,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        56,
                        165
                    ],
                    "prefixed_barcodes": [
                        "F.06",
                        "F.05"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            70,
                            46,
                            48,
                            53,
                            45,
                            70,
                            46,
                            48,
                            54
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "F.03",
                        "F.04"
                    ],
                    "free_space": 30380,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        28,
                        165
                    ],
                    "prefixed_barcodes": [
                        "F.04",
                        "F.03"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            70,
                            46,
                            48,
                            51,
                            45,
                            70,
                            46,
                            48,
                            52
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "F.01",
                        "F.02"
                    ],
                    "free_space": 30380,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        165
                    ],
                    "prefixed_barcodes": [
                        "F.02",
                        "F.01"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            70,
                            46,
                            48,
                            49,
                            45,
                            70,
                            46,
                            48,
                            50
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "E.05",
                        "E.06"
                    ],
                    "free_space": 30380,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        56,
                        125
                    ],
                    "prefixed_barcodes": [
                        "E.06",
                        "E.05"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            69,
                            46,
                            48,
                            53,
                            45,
                            69,
                            46,
                            48,
                            54
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "E.03",
                        "E.04"
                    ],
                    "free_space": 30380,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        28,
                        125
                    ],
                    "prefixed_barcodes": [
                        "E.04",
                        "E.03"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            69,
                            46,
                            48,
                            51,
                            45,
                            69,
                            46,
                            48,
                            52
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "E.01",
                        "E.02"
                    ],
                    "free_space": 30380,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        125
                    ],
                    "prefixed_barcodes": [
                        "E.02",
                        "E.01"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            69,
                            46,
                            48,
                            49,
                            45,
                            69,
                            46,
                            48,
                            50
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "D.05",
                        "D.06"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        60,
                        105
                    ],
                    "prefixed_barcodes": [
                        "D.06",
                        "D.05"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            68,
                            46,
                            48,
                            53,
                            45,
                            68,
                            46,
                            48,
                            54
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "D.04"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        40,
                        105
                    ],
                    "prefixed_barcodes": [
                        "D.04"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            68,
                            46,
                            48,
                            52
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "D.03"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        20,
                        105
                    ],
                    "prefixed_barcodes": [
                        "D.03"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            68,
                            46,
                            48,
                            51
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "D.01",
                        "D.02"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        105
                    ],
                    "prefixed_barcodes": [
                        "D.02",
                        "D.01"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            68,
                            46,
                            48,
                            49,
                            45,
                            68,
                            46,
                            48,
                            50
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "C.05",
                        "C.06"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        60,
                        85
                    ],
                    "prefixed_barcodes": [
                        "C.06",
                        "C.05"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            67,
                            46,
                            48,
                            53,
                            45,
                            67,
                            46,
                            48,
                            54
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "C.04"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        40,
                        85
                    ],
                    "prefixed_barcodes": [
                        "C.04"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            67,
                            46,
                            48,
                            52
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "C.03"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        20,
                        85
                    ],
                    "prefixed_barcodes": [
                        "C.03"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            67,
                            46,
                            48,
                            51
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "C.01",
                        "C.02"
                    ],
                    "free_space": 18900,
                    "height": 15,
                    "length": 20,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        85
                    ],
                    "prefixed_barcodes": [
                        "C.02",
                        "C.01"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            67,
                            46,
                            48,
                            49,
                            45,
                            67,
                            46,
                            48,
                            50
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "B.05",
                        "B.06"
                    ],
                    "free_space": 61740,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        56,
                        45
                    ],
                    "prefixed_barcodes": [
                        "B.06",
                        "B.05"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            66,
                            46,
                            48,
                            53,
                            45,
                            66,
                            46,
                            48,
                            54
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "B.03",
                        "B.04"
                    ],
                    "free_space": 61740,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        28,
                        45
                    ],
                    "prefixed_barcodes": [
                        "B.04",
                        "B.03"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            66,
                            46,
                            48,
                            51,
                            45,
                            66,
                            46,
                            48,
                            52
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "B.01",
                        "B.02"
                    ],
                    "free_space": 61740,
                    "height": 35,
                    "length": 28,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        45
                    ],
                    "prefixed_barcodes": [
                        "B.02",
                        "B.01"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            66,
                            46,
                            48,
                            49,
                            45,
                            66,
                            46,
                            48,
                            50
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "A.04",
                        "A.05",
                        "A.06"
                    ],
                    "free_space": 97020,
                    "height": 35,
                    "length": 44,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        44,
                        5
                    ],
                    "prefixed_barcodes": [
                        "A.06",
                        "A.05",
                        "A.04"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            65,
                            46,
                            48,
                            52,
                            45,
                            65,
                            46,
                            48,
                            53,
                            45,
                            65,
                            46,
                            48,
                            54
                        ]
                    ],
                    "type": "slot"
                },
                {
                    "barcodes": [
                        "A.01",
                        "A.02",
                        "A.03"
                    ],
                    "free_space": 97020,
                    "height": 35,
                    "length": 44,
                    "occupancy_color": "",
                    "orig_coordinates": [
                        0,
                        5
                    ],
                    "prefixed_barcodes": [
                        "A.03",
                        "A.02",
                        "A.01"
                    ],
                    "slot_ref": [
                        [
                            48,
                            53,
                            56,
                            46,
                            48,
                            46,
                            65,
                            46,
                            48,
                            49,
                            45,
                            65,
                            46,
                            48,
                            50,
                            45,
                            65,
                            46,
                            48,
                            51
                        ]
                    ],
                    "type": "slot"
                }
            ],
            "rack_width": 96,
            "slot_type": "slot"
        },
        "is_only_exception_button_pressed": false,
        "audit_sideline_popup": false,
        "maintenance": "undefined",
        "mode": "put",
        "pps_requested_status": "undefined",
        "early_display": false,
        "logout_allowed": false,
        "show_empty_popup": false,
        "is_idle": false,
        "bin_plotting": true,
        "seat_type": "front",
        "roll_cage_flow": false,
        "screen_id": "ud_put_front_missing",
        "previous_put_details": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        }
                    ],
                    "ql_code": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Slot ID",
                            "locale": "en-US"
                        }
                    ],
                    "slot_barcode": [
                        [
                            ""
                        ]
                    ]
                }
            ],
            [
                {
                    "bin_station": "",
                    "display_data": []
                }
            ]
        ],
        "group_info": {
            "1": "center"
        },
        "product_info_for_inv_count_check": [],
        "sub_header_msge_list": [],
        "uph_count": 0,
        "rc_warehouse_full_popup": false,
        "pps_profile": "",
        "current_bin_id": "1",
        "product_info": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        },
                        {
                            "display_name": "Código de barras del producto",
                            "locale": "es-ES"
                        }
                    ],
                    "product_barcode": []
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "product_local_image_url",
                            "locale": "en-US"
                        }
                    ],
                    "product_local_image_url": null
                }
            ]
        ],
        "scan_allowed": true,
        "entity_location_type_after_crash": "undefined",
        "pps_requested_mode": "undefined",
        "tote_id": "sid0141",
        "user_loggedin": "default_user_name",
        "split_pps_info": [],
        "inventory_count_check_limit": 5,
        "missing_items": [
            {
                "product_barcode": "Item1Barcode2",
                "product_sku": "Item1",
                "quantity": 1
            }
        ]
    }
}

export const PUT_FRONT_MISSING_SCREEN = {
    state_data : {
        "user_loggedin": "default_user_name",
        "logout_allowed": false,
        "time_stamp": "2022-09-29T08:39:02Z",
        "screen_id": "ud_put_front_missing",
        "screen_version": "1",
        "exception_allowed": [],
        "header_msge_list": [
            {
                "code": "UdpF.H.012",
                "level": "info",
                "description": "Scan a Tote to Induct",
                "details": []
            }
        ],
        "sub_header_msge_list": [],
        "notification_list": [
            {
                "code": "UdpF.I.001",
                "level": "info",
                "description": "Tote scan successful",
                "details": [
                    "Pallet"
                ]
            }
        ],
        "seat_type": "front",
        "seat_name": "front_1",
        "mode": "put",
        "pps_profile": "",
        "pps_requested_status": "undefined",
        "pps_requested_mode": "undefined",
        "api_version": "1",
        "error_popup_disabled": false,
        "operator_orientation": "0",
        "uph_count": 0,
        "ops_paused": false,
        "current_bin_widget": true,
        "show_bin_view": true,
        "bin_plotting": true,
        "audit_sideline_popup": false,
        "allow_positive_adjustment": true,
        "auto_sideline_confirm_required": false,
        "auto_sideline_crash_type": "none",
        "rc_warehouse_full_popup": false,
        "entity_location_after_crash": [],
        "entity_location_type_after_crash": "undefined",
        "is_only_exception_button_pressed": false,
        "pps_blocked": false,
        "current_bin_id": "1",
        "disable_reconcile_screen": false,
        "show_bin_full_default_zero": false,
        "reserve_audit": false,
        "show_empty_popup": false,
        "empty_popup_msg": [],
        "maintenance": "undefined",
        "early_display": false,
        "show_inv_count_popup": false,
        "inv_count_popup_msg": [],
        "inventory_count_check_limit": 5,
        "product_info_for_inv_count_check": [],
        "selected_seat_for_release_bins_filter": "undefined",
        "split_pps_info": [],
        "is_zerowalk_flow": false,
        "tote_induction": true,
        "tote_id": "TOT0000446",
        "scan_allowed": true,
        "previous_put_details": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        }
                    ],
                    "ql_code": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Tote ID",
                            "locale": "en-US"
                        }
                    ],
                    "slot_barcode": [
                        [
                            ""
                        ]
                    ]
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "SKU ID",
                            "locale": "en-US"
                        }
                    ],
                    "value": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "SKU Qty",
                            "locale": "en-US"
                        }
                    ],
                    "value": ""
                }
            ]
        ],
        "product_info": [
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Barcode",
                            "locale": "en-US"
                        },
                        {
                            "display_name": "Código de barras del producto",
                            "locale": "es-ES"
                        }
                    ],
                    "product_barcode": []
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product SKU",
                            "locale": "en-US"
                        }
                    ],
                    "product_sku": ""
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "Product Dimensions",
                            "locale": "en-US"
                        }
                    ],
                    "product_dimension": []
                }
            ],
            [
                {
                    "display_data": [
                        {
                            "display_name": "product_local_image_url",
                            "locale": "en-US"
                        }
                    ],
                    "product_local_image_url": null
                }
            ]
        ],
        "rack_details": [],
        "rack_id": "12345",
        "missing_items": [
            {
                "product_sku": "item_s5",
                "product_barcode": "item_s5",
                "quantity": 5,
                "type": "Item"
            }
        ],
        "ppsbin_list": [
            {
                "orig_coordinate": [
                    0,
                    0
                ],
                "ppsbin_id": "1",
                "ppsbin_count": "5",
                "bin_info": [
                    {
                        "type": "Item",
                        "product_sku": "item_s5",
                        "serial": [],
                        "quantity": 5,
                        "service_request_id": [
                            "TOT0000446"
                        ],
                        "load_unit_label": "Bin",
                        "load_unit_id": [
                            "1"
                        ]
                    }
                ],
                "coordinate": [
                    1,
                    1
                ],
                "group_id": "1",
                "direction": "center",
                "length": "200",
                "breadth": "100",
                "height": "100",
                "ppsbin_state": "staged",
                "selected_state": true,
                "back_drawing_start": "left",
                "front_drawing_start": "left",
                "back_seat_name": "back_1",
                "totes_associated": "true"
            }
        ],
        "is_ud_without_staging": false,
        "current_put_details": {
            "tote_details": {
                "value": "TOT0000446",
                "display_data": [
                    {
                        "display_name": "Tote",
                        "locale": "en-US"
                    }
                ]
            },
            "rack_details": {
                "display_data": [
                    {
                        "display_name": "TOTE ID",
                        "locale": "en-US"
                    }
                ]
            },
            "sku_type": "Single SKU",
            "sku_qty": {
                "total_qty": 1,
                "put_qty": 0
            },
            "uom_qty": {
                "total_qty": 5,
                "put_qty": 0
            },
            "tote_id": "TOT0000446"
        },
        "show_current_put_widget": true,
        "is_idle": false,
        "roll_cage_flow": false,
        "group_info": {
            "1": "center"
        },
        "bin_coordinate_plotting": true,
        "docked": [],
        "event": "missing_items"
    }
}

