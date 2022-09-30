import _ from './helpers/transalations'
import { UD_PUT_FRONT_ENTITY_SCAN, UD_PUT_FRONT_MISSIN, UD_PUT_FRONT_PLACE_ITEMS_IN_RACK, UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR, UD_PUT_FRONT_TOTE_SCAN, UD_PUT_TOTE_INDUCTION } from './screenIds'
export const SCREEN_NAVGATIONS = {
    'put' : {
        [UD_PUT_FRONT_TOTE_SCAN] : [
            {
                "code": "Common.000",
                "label": _("Scan Tote"),
                "description": _("Scan Pallet to dock"),
                "showImage": false,
                "step": null,
                "active": true
            },
        ],
        [UD_PUT_TOTE_INDUCTION] : [
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
        [UD_PUT_FRONT_ENTITY_SCAN] : [
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
        [UD_PUT_FRONT_PLACE_ITEMS_IN_RACK] : [
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
                "active" : false
            }
        ],
        [UD_PUT_FRONT_MISSIN] : [
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
        [UD_PUT_FRONT_PLACE_TOTE_ON_CONVEYOR] : [
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
                "active" : true
            }
        ],
    }
}