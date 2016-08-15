import * as WHS from 'whitestormjs'

const world = new WHS.World({
    stats: "fps", // fps, ms, mb or false if not need.
    autoresize: true,

    gravity: { // Physic gravity.
        x: 0,
        y: -100,
        z: 0
    }
});

const sphere = new WHS.Sphere({ // Create sphere object.
  geometry: {
    radius: 3
  },

  mass: 10, // Mass of physics object.

  material: {
    color: 0xffffff,
    kind: 'basic'
  },

  pos: {
    x: 0,
    y: 100,
    z: 0
  }
});

sphere.addTo(world);
sphere.getNative(); // Returns THREE.Mesh of this object.

world.start(); // Start animations and physics simulation.
