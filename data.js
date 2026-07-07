var APP_DATA = {
  "scenes": [
    {
      "id": "0-inicio",
      "name": "inicio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0.20162134749638128,
        "pitch": 0.034421307436630855,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 1.8677923970113905,
          "pitch": 0.013765722218622045,
          "rotation": 0.7853981633974483,
          "target": "2-juegos"
        },
        {
          "yaw": -1.9098865447734195,
          "pitch": 0.05294620753589285,
          "rotation": 0,
          "target": "1-bar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bar",
      "name": "bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": 0.04844559622797462,
        "pitch": -0.512258004603261,
        "fov": 1.335888521808506
      },
      "linkHotspots": [
        {
          "yaw": 2.7714661815167556,
          "pitch": -0.16674912350600302,
          "rotation": 0,
          "target": "0-inicio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-juegos",
      "name": "juegos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.13187333956072855,
          "pitch": -0.23201963343940335,
          "rotation": 0,
          "target": "0-inicio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
