{
  "name": "My workflow",
  "nodes": [
    {
      "parameters": {
        "documentId": {
          "__rl": true,
          "value": "1m7s5O7jcmyzGdlnEdW8-lDYLT06OZgYh9ZFHKtt_vy4",
          "mode": "list",
          "cachedResultName": "N8N bday sheet",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1m7s5O7jcmyzGdlnEdW8-lDYLT06OZgYh9ZFHKtt_vy4/edit?usp=drivesdk"
        },
        "sheetName": {
          "__rl": true,
          "value": "gid=0",
          "mode": "list",
          "cachedResultName": "Sheet1",
          "cachedResultUrl": "https://docs.google.com/spreadsheets/d/1m7s5O7jcmyzGdlnEdW8-lDYLT06OZgYh9ZFHKtt_vy4/edit#gid=0"
        },
        "options": {}
      },
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 4.7,
      "position": [
        208,
        0
      ],
      "id": "abb60fb3-95ef-4bc9-969c-3dfa52fefa95",
      "name": "Get row(s) in sheet",
      "credentials": {
        "googleSheetsOAuth2Api": {
          "id": "8cIpLrCyxAYeN3yF",
          "name": "Google Sheets account"
        }
      }
    },
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "triggerAtHour": 17
            }
          ]
        }
      },
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.3,
      "position": [
        16,
        0
      ],
      "id": "6acb72c8-3bd6-4d95-ab26-03d83010dbb7",
      "name": "Schedule Trigger"
    },
    {
      "parameters": {
        "jsCode": "const today = new Date();\ntoday.setHours(0,0,0,0);\n\nconst tomorrow = new Date(today);\ntomorrow.setDate(today.getDate() + 1);\n\nconst results = [];\n\nfor (const item of items) {\n  const bday = new Date(item.json.Birthday);\n  bday.setFullYear(today.getFullYear());\n  bday.setHours(0,0,0,0);\n\n  if (bday.getTime() === tomorrow.getTime()) {\n    results.push({\n      json: {\n        name: item.json.name\n  // 👈 MUST match column name exactly\n      }\n    });\n  }\n}\n\nreturn results;\n"
      },
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        416,
        0
      ],
      "id": "344358f8-679d-4509-bae5-5b5a1f2c518f",
      "name": "Code in JavaScript"
    },
    {
      "parameters": {
        "sendTo": "lavanya7016@gmail.com",
        "subject": "Birthday Update",
        "emailType": "text",
        "message": "=Hi 👋 This is a reminder that tomorrow is {{ $json.name }}’s birthday 🎂🎉\n",
        "options": {}
      },
      "type": "n8n-nodes-base.gmail",
      "typeVersion": 2.2,
      "position": [
        624,
        0
      ],
      "id": "5545da35-626f-4372-8bfd-a1ea7ac0b65c",
      "name": "Send a message",
      "webhookId": "2beb9a35-9df6-4a05-8b67-b0decb616290",
      "credentials": {
        "gmailOAuth2": {
          "id": "tNfBir84MJVPWNus",
          "name": "Gmail account"
        }
      }
    }
  ],
  "pinData": {},
  "connections": {
    "Get row(s) in sheet": {
      "main": [
        [
          {
            "node": "Code in JavaScript",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Code in JavaScript": {
      "main": [
        [
          {
            "node": "Send a message",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Schedule Trigger": {
      "main": [
        [
          {
            "node": "Get row(s) in sheet",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": true,
  "settings": {
    "executionOrder": "v1",
    "availableInMCP": false,
    "timeSavedMode": "fixed",
    "callerPolicy": "workflowsFromSameOwner",
    "executionTimeout": -1
  },
  "versionId": "914be860-650a-4731-910c-8048aadabeb4",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "b1c240f976ba064b22d966290db790a74e841498d8d45c660dfea1cc8f80d493"
  },
  "id": "7tTjkyL96FVR1KgK",
  "tags": []
}
