const shipmentData = {
    'wh_shipment_no':'S1234',
    'seal_no':'JH12',
    'checkin': {
        'checkin_no':'Ch124',
        'checkin_datetime': '2020-10-22'
    },
    'customer': {
        'code': 'C001' 
    },
    'division': {
        'code': 'LJ87' 
    },
    'orders': [
        { 
            'transaction_ref':'ORD001',
            'position':'middle', 
            'req_order_qty':5, 
            'picked_order_qty':4, 
            'uom':'AS12', 
            'order_notes':"CARGO",
            'pallet': { 
                'item_code':'I0867',
                'count':5,
                'code':'D123' 
            },
            'shipto': { 
                'name':'LKS', 
                'st_addr':'ST peters road,LA', 
                'city':'LA', 
                'state':'WESTERN', 
                'zip':11000, 
                'country':'USA',
            }, 
            'billto':{
                'name': 'Adam',
                'st_addr':'34,York Street', 
                'city':"LA", 
                'state':'WESTERN', 
                'zip':22000, 
                'country':'JPA',
            },
            'items': [
                { 
                    'item': {
                        'item_code':'G01', 
                        'alt_item_code':'K12', 
                        'item_descr':'GARRET TURBO', 
                        'req_item_qty':5, 
                        'picked_item_qty':4
                    },
                    'tracking_units': [
                        { 
                            'wh_tracking_no':'WB123', 
                            'cust_tracking_no': 'CST12', 
                            'cust_tracking_label':'DHL XX', 
                            'expiry_date': '2020-12-28', 
                            'committed_qty': 6, 
                            'avail_qty': 5, 
                            'location':'Japan', 
                            'committed_type':'SCH', 
                            'picked_qty':10, 
                            'tu_notes':'Sample Not'
                        },
                        { 
                            'wh_tracking_no':'WH8973', 
                            'cust_tracking_no': 'CST12', 
                            'cust_tracking_label':'PRONTO', 
                            'expiry_date': '2020-12-28', 
                            'committed_qty': 6, 
                            'avail_qty': 5, 
                            'location':'LA', 
                            'committed_type':'DMC', 
                            'picked_qty':10, 
                            'tu_notes':'Sample Not'
                        },
                    ]
                },
                { 
                    'item': {
                        'item_code':'G02', 
                        'alt_item_code':'K12', 
                        'item_descr':'HKS FILTER', 
                        'req_item_qty':10, 
                        'picked_item_qty':3
                    },
                    'tracking_units': [
                        { 
                            'wh_tracking_no':'WH908', 
                            'cust_tracking_no': 'CST12', 
                            'cust_tracking_label':'LAK', 
                            'expiry_date': '2020-12-28', 
                            'committed_qty': 6, 
                            'avail_qty': 5, 
                            'location':'Tokyo', 
                            'committed_type':'ASD', 
                            'picked_qty':10, 
                            'tu_notes':'Sample Not'
                        },
                    ]
                },
            ]
        }, 
        { 
            'transaction_ref':'ORD002',
            'position':'top', 
            'req_order_qty':15, 
            'picked_order_qty':11, 
            'uom':'AS12', 
            'order_notes':"CARGO",
            'pallet': { 
                'item_code':'I0867',
                'count':5,
                'code':'D123' 
            },
            'shipto': { 
                'name':'LKS', 
                'st_addr':'ST peters road,LA', 
                'city':'LA', 
                'state':'WESTERN', 
                'zip':11000, 
                'country':'USA',
            }, 
            'billto':{
                'name': 'Adam',
                'st_addr':'34,York Street', 
                'city':"LA", 
                'state':'WESTERN', 
                'zip':22000, 
                'country':'JPA',
            },
            'items': [
                { 
                    'item': {
                        'item_code':'G03', 
                        'alt_item_code':'K12', 
                        'item_descr':'TOYO TYRES', 
                        'req_item_qty':4, 
                        'picked_item_qty':1
                    },
                    'tracking_units': [
                        { 
                            'wh_tracking_no':'WH908', 
                            'cust_tracking_no': 'CST12', 
                            'cust_tracking_label':'LAK', 
                            'expiry_date': '2020-12-28', 
                            'committed_qty': 6, 
                            'avail_qty': 5, 
                            'location':'Tokyo', 
                            'committed_type':'ASD', 
                            'picked_qty':10, 
                            'tu_notes':'Sample Not'
                        },
                    ]
                },
                { 
                    'item': {
                        'item_code':'G04', 
                        'alt_item_code':'K12', 
                        'item_descr':'EVO TURBO', 
                        'req_item_qty':5, 
                        'picked_item_qty':4
                    },
                    'tracking_units': [
                        { 
                            'wh_tracking_no':'WH908', 
                            'cust_tracking_no': 'CST12', 
                            'cust_tracking_label':'LAK', 
                            'expiry_date': '2020-12-28', 
                            'committed_qty': 6, 
                            'avail_qty': 5, 
                            'location':'Tokyo', 
                            'committed_type':'ASD', 
                            'picked_qty':10, 
                            'tu_notes':'Sample Not'
                        },
                    ]
                },
                { 
                    'item': {
                        'item_code':'L567', 
                        'alt_item_code':'K12', 
                        'item_descr':'2JZ Intake Valve', 
                        'req_item_qty':12, 
                        'picked_item_qty':4
                    },
                    'tracking_units': [
                        { 
                            'wh_tracking_no':'WH908', 
                            'cust_tracking_no': 'CST12', 
                            'cust_tracking_label':'LAK', 
                            'expiry_date': '2020-12-28', 
                            'committed_qty': 6, 
                            'avail_qty': 5, 
                            'location':'Tokyo', 
                            'committed_type':'ASD', 
                            'picked_qty':10, 
                            'tu_notes':'Sample Not'
                        },
                    ]
                },
            ]
        } 
    ]
}
export default shipmentData;