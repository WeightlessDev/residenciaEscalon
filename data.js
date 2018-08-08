var APP_DATA = {
  "scenes": [
    {
      "id": "0-cochera-1",
      "name": "Cochera 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.6426155291632121,
        "pitch": 0.02818226765768017,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -1.1576919663075262,
          "pitch": -0.2653103426689878,
          "rotation": 0,
          "target": "1-descanso-cochera---sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-descanso-cochera---sala",
      "name": "Descanso Cochera - Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.8028773984967081,
        "pitch": 0.07911347461289786,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -1.974022678775441,
          "pitch": 0.3510449491711469,
          "rotation": 0,
          "target": "0-cochera-1"
        },
        {
          "yaw": -1.5827051528444862,
          "pitch": -0.34071384524144577,
          "rotation": 0,
          "target": "2-nivel-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-nivel-1",
      "name": "Nivel 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.608537598700849,
        "pitch": 0.10457458110449735,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 1.3000584003824542,
          "pitch": 0.29200780125879255,
          "rotation": 0,
          "target": "1-descanso-cochera---sala"
        },
        {
          "yaw": 1.7484158452310492,
          "pitch": -0.2559292668262483,
          "rotation": 0,
          "target": "16-descanso-nivel-2"
        },
        {
          "yaw": -0.962697153687543,
          "pitch": 0.049272791315923214,
          "rotation": 0,
          "target": "3-sala--comedor---1"
        },
        {
          "yaw": -1.749298430959147,
          "pitch": 0.03173484643611246,
          "rotation": 0,
          "target": "6-bao---sala"
        },
        {
          "yaw": -2.2159465036896275,
          "pitch": 0.023623982914850572,
          "rotation": 0,
          "target": "5-sala-1"
        },
        {
          "yaw": 2.6528260877373793,
          "pitch": 0.0066401200538539484,
          "rotation": 0,
          "target": "7-sala-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sala--comedor---1",
      "name": "Sala / Comedor - 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.4861665897188772,
        "pitch": 0.03868006178334582,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.9273436251049674,
          "pitch": 0.022875402512351428,
          "rotation": 0,
          "target": "2-nivel-1"
        },
        {
          "yaw": -1.5564867041590809,
          "pitch": 0.0007423515992641683,
          "rotation": 0,
          "target": "15-cocina"
        },
        {
          "yaw": 1.4861665897188772,
          "pitch": 0.03868006178334582,
          "rotation": 0,
          "target": "4-sala--comedor---2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sala--comedor---2",
      "name": "Sala / Comedor - 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.6213490541362106,
        "pitch": 0.005631887516249989,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 1.6213490541362106,
          "pitch": 0.005631887516249989,
          "rotation": 0,
          "target": "3-sala--comedor---1"
        },
        {
          "yaw": 3.0392679346120204,
          "pitch": 0.02636904244907612,
          "rotation": 0,
          "target": "5-sala-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-1",
      "name": "Sala 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.2766322231736567,
        "pitch": 0.04956528981505137,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.8901648197515755,
          "pitch": -0.01871321095735823,
          "rotation": 0,
          "target": "4-sala--comedor---2"
        },
        {
          "yaw": 0.6944629217280305,
          "pitch": -0.021480867910721457,
          "rotation": 0,
          "target": "2-nivel-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao---sala",
      "name": "Baño - Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.1879550939015022,
        "pitch": 0.07107872072042198,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -1.5674553327483132,
          "pitch": -0.08047933850824407,
          "rotation": 0,
          "target": "2-nivel-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sala-2",
      "name": "Sala 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.02305365539112,
        "pitch": 0.05187764721678789,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 0.7541500365472,
          "pitch": -0.019580501917280557,
          "rotation": 0,
          "target": "2-nivel-1"
        },
        {
          "yaw": 2.9324687351468928,
          "pitch": 0.007892264782803693,
          "rotation": 0,
          "target": "8-jardin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-jardin-1",
      "name": "Jardin 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.8761614323546043,
        "pitch": 0.04811811228523055,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.10076136026946614,
          "pitch": -0.07424822646803086,
          "rotation": 0,
          "target": "7-sala-2"
        },
        {
          "yaw": 2.9884815638021633,
          "pitch": -0.016290551937888864,
          "rotation": 0,
          "target": "9-jardin-2"
        },
        {
          "yaw": 1.245656899508674,
          "pitch": -0.01984186885501593,
          "rotation": 0,
          "target": "10-habitacion-1---n1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-jardin-2",
      "name": "Jardin 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5291872576344891,
          "pitch": -0.05958513065587212,
          "rotation": 0,
          "target": "8-jardin-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-habitacion-1---n1",
      "name": "Habitacion 1 - N1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6098852656421805,
          "pitch": -0.07702436189278217,
          "rotation": 0,
          "target": "8-jardin-1"
        },
        {
          "yaw": 2.588359204333024,
          "pitch": -0.027117217822841155,
          "rotation": 0,
          "target": "11-pasillo-1---n1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9208724275749294,
          "pitch": -0.042888508283100535,
          "title": "Baño Privado",
          "text": "Baño Privado"
        }
      ]
    },
    {
      "id": "11-pasillo-1---n1",
      "name": "Pasillo 1 - N1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.124426522543203,
          "pitch": -0.01794244589835614,
          "rotation": 0,
          "target": "10-habitacion-1---n1"
        },
        {
          "yaw": 1.6723825083006876,
          "pitch": -0.012003588183075564,
          "rotation": 0,
          "target": "12-habitacion-2---n1"
        },
        {
          "yaw": 0.18924108707543752,
          "pitch": -0.0032433227272292697,
          "rotation": 0,
          "target": "13-pasillo-2---n1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-habitacion-2---n1",
      "name": "Habitacion 2 - N1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.977241745195343,
          "pitch": -0.046234953005074075,
          "rotation": 0,
          "target": "11-pasillo-1---n1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9341763902745797,
          "pitch": -0.02308515625470875,
          "title": "Baño Privado<br>",
          "text": "Baño Privado"
        }
      ]
    },
    {
      "id": "13-pasillo-2---n1",
      "name": "Pasillo 2 - N1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.598339028384805,
          "pitch": -0.001119981542927917,
          "rotation": 0,
          "target": "14-zona-de-lavado"
        },
        {
          "yaw": 3.138774308155538,
          "pitch": 0.053353193187085424,
          "rotation": 0,
          "target": "11-pasillo-1---n1"
        },
        {
          "yaw": 0.39825929311156116,
          "pitch": -0.015459136897289838,
          "rotation": 0,
          "target": "15-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-zona-de-lavado",
      "name": "Zona de lavado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17646912020395789,
          "pitch": -0.026002198236900753,
          "rotation": 0,
          "target": "13-pasillo-2---n1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.9491236306670956,
        "pitch": 0.11555250441799458,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.6260698831456093,
          "pitch": -0.044175297530628654,
          "rotation": 0,
          "target": "13-pasillo-2---n1"
        },
        {
          "yaw": 0.4471996527489104,
          "pitch": -0.06233873863778783,
          "rotation": 0,
          "target": "3-sala--comedor---1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-descanso-nivel-2",
      "name": "Descanso Nivel 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.5957145808097266,
        "pitch": 0.18781915808909844,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -1.9390153979255462,
          "pitch": 0.4672095755657715,
          "rotation": 0,
          "target": "2-nivel-1"
        },
        {
          "yaw": -1.3719821889736306,
          "pitch": -0.32109892792204775,
          "rotation": 0,
          "target": "17-nivel-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-nivel-2",
      "name": "Nivel 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.4942526342485358,
        "pitch": 0.14347536410479123,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -1.264832525003964,
          "pitch": -0.35409472581887513,
          "rotation": 0,
          "target": "30-descanso-azotea"
        },
        {
          "yaw": 3.051335095189028,
          "pitch": 0.0017938092578226872,
          "rotation": 0,
          "target": "18-pasillo-1---n2"
        },
        {
          "yaw": 0.12071047749218877,
          "pitch": 0.04972164567824855,
          "rotation": 0,
          "target": "19-pasillo-2---n2"
        },
        {
          "yaw": -1.734833532039092,
          "pitch": 0.6057452492022968,
          "rotation": 0,
          "target": "16-descanso-nivel-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-pasillo-1---n2",
      "name": "Pasillo 1 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.1263049965012044,
        "pitch": 0.05033285567633783,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 0.0775914809666709,
          "pitch": 0.011532568246996888,
          "rotation": 0,
          "target": "17-nivel-2"
        },
        {
          "yaw": 1.8916919766196996,
          "pitch": -0.0019738066542949184,
          "rotation": 0,
          "target": "20-habitacion-1---n2"
        },
        {
          "yaw": 1.2534661646782883,
          "pitch": -0.003023557084327777,
          "rotation": 0,
          "target": "22-habitacion-2---n2"
        },
        {
          "yaw": -1.378750181830629,
          "pitch": 0.05193828858508098,
          "rotation": 0,
          "target": "27-habitacion-4---n2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.687962214456114,
          "pitch": -0.11301021297196989,
          "title": "Baño",
          "text": "Baño"
        }
      ]
    },
    {
      "id": "19-pasillo-2---n2",
      "name": "Pasillo 2 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.655907669532521,
          "pitch": 0.0732889201361484,
          "rotation": 0,
          "target": "23-habitacion-3---n2"
        },
        {
          "yaw": -1.5255705063084761,
          "pitch": 0.08440284110254836,
          "rotation": 0,
          "target": "17-nivel-2"
        },
        {
          "yaw": 0.009337285257238648,
          "pitch": 0.04754397778497932,
          "rotation": 0,
          "target": "24-habitacion-master---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-habitacion-1---n2",
      "name": "Habitacion 1 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.1888754855182544,
        "pitch": 0.03912964475585312,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.5006410319443475,
          "pitch": 0.016370072740713226,
          "rotation": 0,
          "target": "18-pasillo-1---n2"
        },
        {
          "yaw": 1.4993097189444304,
          "pitch": -0.003803295275204732,
          "rotation": 0,
          "target": "21-terraza---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-terraza---n2",
      "name": "Terraza - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1867091409283006,
          "pitch": 0.029180784076688226,
          "rotation": 0,
          "target": "20-habitacion-1---n2"
        },
        {
          "yaw": -1.2724785691291665,
          "pitch": -0.021799655333971657,
          "rotation": 0,
          "target": "22-habitacion-2---n2"
        },
        {
          "yaw": -0.3215585144337805,
          "pitch": -0.02086914386978478,
          "rotation": 0,
          "target": "23-habitacion-3---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-habitacion-2---n2",
      "name": "Habitacion 2 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -3.009844556682829,
        "pitch": 0.01778583017690849,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.5133780402250707,
          "pitch": 0.024465051226618684,
          "rotation": 0,
          "target": "18-pasillo-1---n2"
        },
        {
          "yaw": -2.466540848753489,
          "pitch": 0.07642959508084957,
          "rotation": 0,
          "target": "21-terraza---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-habitacion-3---n2",
      "name": "Habitacion 3 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.2934164434495514,
        "pitch": 0.01921074790599775,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.904807871265648,
          "pitch": 0.002499445071180162,
          "rotation": 0,
          "target": "21-terraza---n2"
        },
        {
          "yaw": 1.0838964258090886,
          "pitch": 0.010688333352153023,
          "rotation": 0,
          "target": "19-pasillo-2---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-habitacion-master---n2",
      "name": "Habitacion Master - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0343433920606984,
          "pitch": 0.049371613381614665,
          "rotation": 0,
          "target": "27-habitacion-4---n2"
        },
        {
          "yaw": -2.7086735838657887,
          "pitch": 0.050202792058142265,
          "rotation": 0,
          "target": "19-pasillo-2---n2"
        },
        {
          "yaw": -3.1301282621364184,
          "pitch": 0.032353031602465165,
          "rotation": 0,
          "target": "25-master---walk-in-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-master---walk-in-closet",
      "name": "Master - Walk in Closet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6564325629634027,
          "pitch": 0.08747441947930312,
          "rotation": 0,
          "target": "24-habitacion-master---n2"
        },
        {
          "yaw": 1.5720089221828033,
          "pitch": 0.005058793932796846,
          "rotation": 0,
          "target": "26-master---bao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-master---bao",
      "name": "Master - Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9083667873071715,
          "pitch": 0.07202026284646124,
          "rotation": 0,
          "target": "25-master---walk-in-closet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-habitacion-4---n2",
      "name": "Habitacion 4 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 3.005056596813591,
        "pitch": 0.013043214918617707,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": -0.8827536160271574,
          "pitch": 0.036776252844024526,
          "rotation": 0,
          "target": "18-pasillo-1---n2"
        },
        {
          "yaw": -1.7685210365159563,
          "pitch": 0.05277431434318913,
          "rotation": 0,
          "target": "24-habitacion-master---n2"
        },
        {
          "yaw": -2.6728663071419128,
          "pitch": 0.01085318511714739,
          "rotation": 0,
          "target": "29-terraza-h4---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-bao-h4---n2",
      "name": "Baño H4 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "29-terraza-h4---n2",
      "name": "Terraza H4 - N2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.6037533488449043,
        "pitch": 0.06869569560548783,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03600214879314656,
          "pitch": 0.008973152578388266,
          "rotation": 0,
          "target": "27-habitacion-4---n2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-descanso-azotea",
      "name": "Descanso Azotea",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 1.5962616310933289,
        "pitch": 0.08870061818933195,
        "fov": 1.5547512182991647
      },
      "linkHotspots": [
        {
          "yaw": 1.2128148111877515,
          "pitch": 0.5384329384819324,
          "rotation": 0,
          "target": "17-nivel-2"
        },
        {
          "yaw": 1.7902709218932689,
          "pitch": -0.2979606133806527,
          "rotation": 0,
          "target": "31-azotea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-azotea",
      "name": "Azotea",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7723688202527006,
          "pitch": 0.008530373773130151,
          "rotation": 0,
          "target": "30-descanso-azotea"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Residencia Escalon",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
