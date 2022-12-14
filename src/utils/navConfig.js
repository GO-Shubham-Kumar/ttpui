import {
    PICK_FRONT_BIN_SCAN,
    PICK_FRONT_DOCK_TOTE,
    PICK_FRONT_MORE_ITEM_SCAN,
    PICK_FRONT_PPTL_PRESS,
    PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER,
    PICK_FRONT_TTP_ITEM_SCAN,
    PICK_FRONT_UNDOCK_TOTE,
    PICK_FRONT_WAITING_FOR_MSU,
    PUT_FRONT_ITEMS_TO_IRT_BIN,
    UD_PUT_FRONT_DAMAGED_EXCEPTION,
    UD_PUT_FRONT_ENTITY_SCAN,
    UD_PUT_FRONT_MISSIN,
    UD_PUT_FRONT_PLACE_ITEMS_IN_RACK,
    UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR,
    UD_PUT_FRONT_TOTE_SCAN,
    UD_PUT_TOTE_INDUCTION,
} from "./screenIds";

import _ from "./helpers/transalations";

export const SCREEN_NAVIGATION = {
    put: {
        [UD_PUT_FRONT_TOTE_SCAN]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Pallet to dock"),
                "showImage": false,
                "step": null,
                "active": true
            },
        ],
        [UD_PUT_TOTE_INDUCTION]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Tote"),
                "showImage": false,
                "step": 1,
                "active": true
            },
            {
                "code": "Common.000",
                "label": _("Scan Entity"),
                "description": _(""),
                "showImage": false,
                "step": 2,
                "active": false
            },
            {
                "code": "Common.000",
                "label": _("Close Tote"),
                "description": _(""),
                "showImage": false,
                "step": 3,
                "type": false
            }
        ],
        [UD_PUT_FRONT_ENTITY_SCAN]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Tote"),
                "showImage": false,
                "step": 1,
                "active": false
            },
            {
                "code": "Common.000",
                "label": _("Scan Entity"),
                "description": _("Scan Entity frm {0}"),
                "showImage": false,
                "step": 2,
                "active": true
            },
            {
                "code": "Common.000",
                "label": _("Close Tote"),
                "description": _(""),
                "showImage": false,
                "step": 3,
                "type": false
            }
        ],
        [UD_PUT_FRONT_PLACE_ITEMS_IN_RACK]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Tote"),
                "showImage": false,
                "step": 1,
                "active": false
            },
            {
                "code": "Common.000",
                "label": _("Scan Entity"),
                "description": _("Scan Entity frm {0}"),
                "showImage": false,
                "step": 2,
                "active": true
            },
            {
                "code": "Common.000",
                "label": _("Close Tote"),
                "description": _(""),
                "showImage": false,
                "step": 3,
                "type": false,
                "active": false
            }
        ],
        [UD_PUT_FRONT_MISSIN]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Tote"),
                "showImage": false,
                "step": 1,
                "active": true
            },
            {
                "code": "Common.000",
                "label": _("Scan Entity"),
                "description": _(""),
                "showImage": false,
                "step": 2,
                "active": false
            },
            {
                "code": "Common.000",
                "label": _("Close Tote"),
                "description": _(""),
                "showImage": false,
                "step": 3,
                "type": false
            }
        ],
        [UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Tote"),
                "showImage": false,
                "step": 1,
                "active": false
            },
            {
                "code": "Common.000",
                "label": _("Scan Entity"),
                "description": _(""),
                "showImage": false,
                "step": 2,
                "active": false
            },
            {
                "code": "Common.000",
                "label": _("Close Tote"),
                "description": _(""),
                "showImage": false,
                "step": 3,
                "active": true
            }
        ],
        [UD_PUT_FRONT_DAMAGED_EXCEPTION]: [
            {
                "code": "Common.000",
                "label": _("Scan Exception Types"),
                "description": _("Scan Entity"),
                "showImage": false,
                "step": 1,
                "active": true
            },
        ],
        [PUT_FRONT_ITEMS_TO_IRT_BIN]: [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Entity"),
                "showImage": false,
                "step": 1,
                "active": true
            },
        ],
    },
    pick: {
        [PICK_FRONT_DOCK_TOTE]: [
            {
                code: "Common.000",
                active: true,
                description: "Scan a tote",
                label: "Dock Tote",
                step: 1,
                showImage: false,
            },
            {
                code: "Common.000",
                showImage: false,
                active: false,
                description: "Place Entity into the Tote and scan 11 more",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_TTP_ITEM_SCAN]: [
            {
                code: "Common.000",
                active: false,
                showImage: false,
                description: "Scan a Packing box",
                label: "Dock Packing Box",
                step: 1,
            },
            {
                code: "Common.000",
                active: true,
                showImage: false,
                description: "Scan Entities from tote and place in Bin",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_MORE_ITEM_SCAN]: [
            {
                code: "Common.000",
                active: false,
                showImage: false,
                description: "Waiting for inventory tote",
                label: "Dock Tote",
                step: 1,
            },
            {
                code: "Common.000",
                active: true,
                showImage: false,
                description: "Place Entity in bin and scan more",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_PPTL_PRESS]: [
            {
                code: "Common.000",
                active: false,
                showImage: false,
                description: "Waiting for inventory tote",
                label: "Dock Tote",
                step: 1,
            },
            {
                code: "Common.000",
                active: true,
                showImage: false,
                description: "Press PPTL to confirm",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_UNDOCK_TOTE]: [
            {
                code: "Common.000",
                active: false,
                showImage: false,
                description: "Scan a Packing box",
                label: "Dock Packing Box",
                step: 1,
            },
            {
                code: "Common.000",
                active: true,
                showImage: false,
                description: "Scan Entities from tote and place in Bin",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_WAITING_FOR_MSU]: [
            {
                code: "Common.000",
                active: true,
                description: "Dock Tote",
                label: "Dock Tote",
                step: 1,
                showImage: false,
            },
            {
                code: "Common.000",
                showImage: false,
                active: false,
                description: "Place Entity into the Tote and scan 11 more",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_SCAN_OR_WAIT_FOR_CONTAINER]: [
            {
                code: "Common.000",
                active: true,
                description: "Scan a {0} or Wait for inventory Tote",
                label: "Dock packing Box",
                step: 1,
                showImage: false,
            },
            {
                code: "Common.000",
                showImage: false,
                active: false,
                description: "Place Entity into the Tote and scan 11 more",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ],
        [PICK_FRONT_BIN_SCAN]: [
            {
                active: true,
                description: "",
                label: "Dock packing Box",
                step: 1,
                showImage: false,
            },
            {
                showImage: false,
                active: false,
                description: "",
                label: "Scan Entity and confirm",
                step: 2,
            },
        ]
    },
};
