'use strict';

module.exports = class OntraportMockService{


    getOntraportObjects(){
        return new Promise((res, rej) => {
            res({
                "code": 0,
                "data": [
                  {
                    "id": "0",
                    "name": "Contacts",
                    "date_created": "0",
                    "table": "contacts",
                    "key": "id",
                    "external_key": "contact_id",
                    "primary_nav": "1",
                    "singular": "Contact",
                    "plural": "Contacts",
                    "possessive": "Contact's",
                    "plural_possessive": "Contacts'",
                    "icon": "people-circle",
                    "theme": "ussr-theme-orange-900",
                    "deletable": "0",
                    "object_label": "[First Name] [Last Name] ([Email])"
                  },
                  {
                    "id": "10001",
                    "name": "Calls",
                    "date_created": "1527449856",
                    "table": "data_object_10001",
                    "key": "id",
                    "external_key": "contact_id",
                    "primary_nav": "0",
                    "singular": "Call",
                    "plural": "Calls",
                    "possessive": "Call's",
                    "plural_possessive": "Calls'",
                    "icon": "phone-ring",
                    "theme": "ussr-theme-orange-900",
                    "deletable": "1",
                    "object_label": "[LifeGuides ID]"
                  },
                  {
                    "id": "10005",
                    "name": "Client_Messages",
                    "date_created": "1528051610",
                    "table": "data_object_10005",
                    "key": "id",
                    "external_key": "contact_id",
                    "primary_nav": "0",
                    "singular": "Client_Message",
                    "plural": "Client_Messages",
                    "possessive": "Client_Message's",
                    "plural_possessive": "Client_Messages'",
                    "icon": "user",
                    "theme": "ussr-theme-orange-900",
                    "deletable": "1",
                    "object_label": "[ID]"
                  }
                ],
                "account_id": 168657,
                "misc": []
              })
        })
    }

    getObjectFields(objectId){
        return new Promise((res, rej) =>{
            if(objectId !== 0){
                rej(new Error(`Object doesn't exist`))
            }
            res({
                "code": 0,
                "data": {
                  "0": {
                    "name": "Contact",
                    "fields": {
                      "firstname": {
                        "alias": "First Name",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "lastname": {
                        "alias": "Last Name",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "email": {
                        "alias": "Email",
                        "type": "email",
                        "required": "0",
                        "unique": "1",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "address": {
                        "alias": "Address",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "city": {
                        "alias": "City",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "state": {
                        "alias": "State",
                        "type": "state",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "zip": {
                        "alias": "Zip Code",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "birthday": {
                        "alias": "Birthday",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "contact_cat": {
                        "alias": "Contact Tags",
                        "type": "subscription",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "bulk_mail": {
                        "alias": "Bulk Email Status",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "office_phone": {
                        "alias": "Office Phone",
                        "type": "phone",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "fax": {
                        "alias": "Fax",
                        "type": "phone",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "company": {
                        "alias": "Company",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "address2": {
                        "alias": "Address 2",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "website": {
                        "alias": "Website",
                        "type": "url",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "title": {
                        "alias": "Title",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "country": {
                        "alias": "Country",
                        "type": "country",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "date": {
                        "alias": "Date Added",
                        "type": "timestamp",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "dlm": {
                        "alias": "Date Modified",
                        "type": "timestamp",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "dla": {
                        "alias": "Last Activity",
                        "type": "timestamp",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "spent": {
                        "alias": "Spent",
                        "type": "price",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "n_lead_source": {
                        "alias": "First Lead Source",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 76
                      },
                      "n_campaign": {
                        "alias": "First Campaign",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 75
                      },
                      "n_content": {
                        "alias": "First Content",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 78
                      },
                      "n_medium": {
                        "alias": "First Medium",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 77
                      },
                      "referral_page": {
                        "alias": "Referring Page",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "0"
                      },
                      "n_term": {
                        "alias": "First Term",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": null,
                        "deletable": "0",
                        "parent_object": 79
                      },
                      "mriInvoiceNum": {
                        "alias": "Last Invoice #",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "mriInvoiceTotal": {
                        "alias": "Last Total Invoice Amount",
                        "type": "price",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "mrcAmount": {
                        "alias": "Last Charge Amount",
                        "type": "price",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "mrcUnpaid": {
                        "alias": "Total Amount of Unpaid Transactions",
                        "type": "price",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "ccType": {
                        "alias": "Last Card Type",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0",
                        "options": {
                          "0": "",
                          "1": "Visa",
                          "2": "Mastercard",
                          "3": "American Express",
                          "4": "Discover",
                          "5": "Paypal",
                          "6": "Other"
                        }
                      },
                      "ccExpirationMonth": {
                        "alias": "Last Card Expiration Month",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0",
                        "options": {
                          "1": "January",
                          "2": "February",
                          "3": "March",
                          "4": "April",
                          "5": "May",
                          "6": "June",
                          "7": "July",
                          "8": "August",
                          "9": "September",
                          "10": "October",
                          "11": "November",
                          "12": "December"
                        }
                      },
                      "ccExpirationYear": {
                        "alias": "Last Card Expiration Year",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "ccNumber": {
                        "alias": "Last Card Number (Last 4)",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "mrcResult": {
                        "alias": "Last CC Status",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0",
                        "options": {
                          "0": "Success",
                          "1": "Declined"
                        }
                      },
                      "ccExpirationDate": {
                        "alias": "Last Card Expiration Date",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "fn": {
                        "alias": "Name",
                        "type": "mergefield",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "grade": {
                        "alias": "Score",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "id": {
                        "alias": "Contact ID",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "owner": {
                        "alias": "Owner",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 2
                      },
                      "bulk_sms": {
                        "alias": "Bulk SMS Status",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "sms_number": {
                        "alias": "SMS Number",
                        "type": "sms",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "last_note": {
                        "alias": "Last Note",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "ip_addy_display": {
                        "alias": "IP Address",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "last_inbound_sms": {
                        "alias": "Last Inbound SMS",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "0",
                        "deletable": "0"
                      },
                      "updateCampaign": {
                        "alias": "Campaigns",
                        "type": "subscription",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "timezone": {
                        "alias": "Timezone",
                        "type": "timezone",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "l_lead_source": {
                        "alias": "Last Lead Source",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 76
                      },
                      "l_campaign": {
                        "alias": "Last Campaign",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 75
                      },
                      "l_content": {
                        "alias": "Last Content",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 78
                      },
                      "l_medium": {
                        "alias": "Last Medium",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 77
                      },
                      "l_term": {
                        "alias": "Last Term",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 79
                      },
                      "144234f1483": {
                        "alias": "Follow up attempts",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "144234f1484": {
                        "alias": "Guide Pipeline",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1",
                        "options": {
                          "1": "Interview Requested",
                          "2": "Interview Booked",
                          "3": "Follow Up",
                          "4": "No Show",
                          "5": "Won- Completed Interview & Passed Background Check",
                          "6": "Lost - Stop Follow Up",
                          "8": "Did Not Pass Interview",
                          "9": "Passed Interview",
                          "10": "Interview Requested But Not Booked",
                          "11": "Background Check: NOT Passed",
                          "12": "Background Check: Passed",
                          "13": "Completed Long Application",
                          "14": "Completed Short Form",
                          "15": "Application Not Completed"
                        }
                      },
                      "f1509": {
                        "alias": "Who has been diagnosed with Dementia/Alzheimer's?",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1",
                        "options": {
                          "58": "Other",
                          "59": "Self",
                          "60": "Friend",
                          "61": "Family Member",
                          "62": "Grandparent",
                          "63": "Parent",
                          "64": "Spouse/Partner"
                        }
                      },
                      "144234f1486": {
                        "alias": "Next Follow-up Date",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1487": {
                        "alias": "Guide: Calendly Interview Date",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1488": {
                        "alias": "Guide: Calendly Interview Time",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1489": {
                        "alias": "Have you lived in the United States for at least 10 years? ",
                        "type": "list",
                        "required": "0",
                        "unique": "0",
                        "editable": null,
                        "deletable": "1",
                        "options": {
                          "16": "No",
                          "17": "Yes"
                        }
                      },
                      "f1490": {
                        "alias": "Do you speak English with true fluency?",
                        "type": "list",
                        "required": "0",
                        "unique": "0",
                        "editable": null,
                        "deletable": "1",
                        "options": {
                          "18": "No",
                          "19": "Yes"
                        }
                      },
                      "f1491": {
                        "alias": "Do you speak any languages other than English with true fluency? If yes, which languages?",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1492": {
                        "alias": "For how many years have you been a primary caregiver for someone with Alzheimer's or dementia?",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1493": {
                        "alias": "For how many years have you been a secondary caregiver for someone with Alzheimer's or dementia?",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1494": {
                        "alias": "Please describe your experience as a caregiver. (For example, for whom, how long, and what were your responsibilities?)",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1495": {
                        "alias": "Why would you like to become a Guide?",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1496": {
                        "alias": "Have you been convicted of a felony in the last 20 years that was not expunged, vacated, pardoned, overturned on re-trial or the equivalent, or are such charges currently pending? If yes, this does not necessarily prevent you from becoming a Certified Lif",
                        "type": "list",
                        "required": "0",
                        "unique": "0",
                        "editable": null,
                        "deletable": "1",
                        "options": {
                          "20": "No",
                          "21": "Yes"
                        }
                      },
                      "f1497": {
                        "alias": "If yes, please explain:",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1499": {
                        "alias": "Guide: Calendly Training Date",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1500": {
                        "alias": "Guide: Calendly Training Time",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "updateSequence": {
                        "alias": "Sequences",
                        "type": "subscription",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "f1504": {
                        "alias": "Timezone 001",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1",
                        "options": {
                          "52": "Hawaii Time",
                          "53": "Alaska Time",
                          "54": "Pacific Time",
                          "55": "Mountain Time",
                          "56": "Central Time",
                          "57": "Eastern Time"
                        }
                      },
                      "f1507": {
                        "alias": "Phone Number",
                        "type": "phone",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1528": {
                        "alias": "Unbounce: Who Has Been Diagnosed?",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1760": {
                        "alias": "Starting Channel URL",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1511": {
                        "alias": "Availability",
                        "type": "list",
                        "required": "0",
                        "unique": "0",
                        "editable": null,
                        "deletable": "1",
                        "options": {
                          "74": "4pm- 5pm",
                          "75": "3pm- 4pm",
                          "76": "2pm- 3pm",
                          "77": "1pm- 2pm",
                          "78": "12pm -1pm"
                        }
                      },
                      "f1515": {
                        "alias": "CVP PIPELINE",
                        "type": "drop",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1",
                        "options": {
                          "93": "First call with Guide",
                          "94": "Got matched with a Guide",
                          "95": "Reachout to CVP"
                        }
                      },
                      "f1516": {
                        "alias": "Client first Call",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1523": {
                        "alias": "Unbounce Date & Time for Guide to Call You 001",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1658": {
                        "alias": "Environment",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1525": {
                        "alias": "Unbounce Timezone 001",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1527": {
                        "alias": "Unbounce: 2 Subjects to Discuss With Guide",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "freferrer": {
                        "alias": "First Referrer",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 36
                      },
                      "lreferrer": {
                        "alias": "Last Referrer",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 36
                      },
                      "program_id": {
                        "alias": "Partner Program",
                        "type": "parent",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0",
                        "parent_object": 35
                      },
                      "aff_paypal": {
                        "alias": "Paypal Address",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "aff_sales": {
                        "alias": "Number of Sales",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "aff_amount": {
                        "alias": "Total Sales",
                        "type": "price",
                        "required": "0",
                        "unique": "0",
                        "editable": "1",
                        "deletable": "0"
                      },
                      "f1548": {
                        "alias": "My Story",
                        "type": "longtext",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1563": {
                        "alias": "isClient",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1562": {
                        "alias": "isGuide",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1561": {
                        "alias": "lifeguidesID",
                        "type": "longtext",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1564": {
                        "alias": "Completed Client Registration",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1565": {
                        "alias": "Guide Approved",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1623": {
                        "alias": "Guide Application ID",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1645": {
                        "alias": "Client Last Call",
                        "type": "fulldate",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1650": {
                        "alias": "Death + Dying (Guide)",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1652": {
                        "alias": "Aging Parents (Guide)",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1653": {
                        "alias": "Death + Dying (Client)",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1654": {
                        "alias": "Aging Parents (Client)",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1655": {
                        "alias": "Caring for a Loved One (Guide)",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1656": {
                        "alias": "Caring for a Loved One (Client)",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1675": {
                        "alias": "Age",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1672": {
                        "alias": "Degree",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1754": {
                        "alias": "Vendors",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1676": {
                        "alias": "Specialities",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1732": {
                        "alias": "Freecall",
                        "type": "numeric",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1733": {
                        "alias": "Facebook Live",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1734": {
                        "alias": "Phone Call",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1735": {
                        "alias": "Webinar",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1736": {
                        "alias": "What is the biggest challenge caring for a loved one with Alzheimer’s?",
                        "type": "longtext",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1739": {
                        "alias": "Subjects To Talk About",
                        "type": "drop",
                        "required": "1",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1",
                        "options": {
                          "172": "Preparing for End of Life",
                          "173": "Care Facilities & Resources",
                          "174": "Caring for the Caregiver",
                          "175": "Navigating Legal, Financial, & Healthcare",
                          "176": "Communicating",
                          "177": "Care Planning and Safety",
                          "178": "Accepting & Moving Forward",
                          "179": "Understanding the Diagnosis",
                          "180": "Recognizing Early Signs"
                        }
                      },
                      "f1740": {
                        "alias": "Purchase Price",
                        "type": "price",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1741": {
                        "alias": "Prodct Purchased",
                        "type": "text",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1743": {
                        "alias": "Understanding the Diagnosis",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1744": {
                        "alias": "Recognizing Early Signs",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1745": {
                        "alias": "Accepting and Moving Forward",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1746": {
                        "alias": "Care Planning & Safety",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1747": {
                        "alias": "Communicating",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1748": {
                        "alias": "Caring for the Caregiver",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1749": {
                        "alias": "Navigating Legal, Financial & Healthcare",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1750": {
                        "alias": "Finding Care Facilities & Resources",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      },
                      "f1751": {
                        "alias": "Preparing for End of Life",
                        "type": "check",
                        "required": "0",
                        "unique": "0",
                        "editable": 1,
                        "deletable": "1"
                      }
                    }
                  }
                },
                "account_id": 168657
              })

        })
    }


}