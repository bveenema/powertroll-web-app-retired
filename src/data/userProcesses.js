const userProcesses = [
  {
    meta: {
      name: "Fart Rainbows",
      topProcess: true,
      type: "setpoint",
      port: 0,
    },
    device: {
      name: "Swamp Master",
      type: "PowerTroll Ought",
      _id: 5551234567890124567890123,
    },
    sensors: [
      {
				_id: 12345678901234561234567890123456,
				name: "Captain Greybeard",
				type: "floating thermometer",
        batteryLevel: 100,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "temperature",
          unit: "farenheit",
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 65,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 66,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 67,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 68,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 69,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 70,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 70.5,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 71,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 71.25,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 71.5,
          },

        ],
			},
      {
				_id: 22345678901234561234567890123457,
				name: "McSwitchy",
				type: "end stop",
        batteryLevel: 50,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "on/off",
          unit: "boolean",
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 1,
          },

        ],
			},
      {
				_id: 32345678901234561234567890123458,
				name: "Panama Joe",
				type: "outdoor humidity",
        batteryLevel: 5,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "humidity",
          unit: "%RH",
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 5,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 10,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 15,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 20,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 22,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 24,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 26,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 27,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 28,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 29,
          },

        ],
			},
    ],
    actions: [
      {
        _id: 99912345678901234567890123,
        name: "run motor",
        port: 1,
        type: "duty",
        duration: "forever",
        while: {
          sensorId: 12345678901234561234567890123457,
          level: false,
          invert: false,
        }
      }
    ]
  },
  {
    meta: {
      processName: "Brew Potion",
      topProcess: false,
      type: "setpoint",
      port: 0,
    },
    device: {
      name: "Fridge Captain",
      type: "PowerTroll Ought",
      _id: 5551234567890124567890124,
    },
    sensors: [
      {
				_id: 12345678901234561234567890123456,
				name: "Captain Greybeard",
				type: "floating thermometer",
        batteryLevel: 100,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "temperature",
          unit: "farenheit",
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 65,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 66,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 67,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 68,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 69,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 70,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 70.5,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 71,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 71.25,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 71.5,
          },

        ],
			},
      {
				_id: 12345678901234561234567890123457,
				name: "McSwitchy",
				type: "end stop",
        batteryLevel: 50,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "on/off",
          unit: "boolean",
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 1,
          },

        ],
			},
      {
				_id: 12345678901234561234567890123458,
				name: "Panama Joe",
				type: "outdoor humidity",
        batteryLevel: 5,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "humidity",
          unit: "%RH",
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 5,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 10,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 15,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 20,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 22,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 24,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 26,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 27,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 28,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 29,
          },

        ],
			},
    ],
    actions: [
      {
        _id: 99912345678901234567890123,
        name: "run motor",
        port: 1,
        type: "duty",
        duration: "forever",
        while: {
          sensorId: 12345678901234561234567890123457,
          level: false,
          invert: false,
        }
      }
    ]
  },
]

export default userProcesses;
