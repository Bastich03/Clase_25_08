var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            // Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(valor, valor, WEBGL);

  describe('A white sphere on a grey background.');
}

function draw() {
  background(0);
    
    // Turn on an ambient light.
  ambientLight(200);

  // Get the mouse's coordinates.
  let mx = mouseX - 50;
  let my = mouseY - 50;

  // Turn on a white point light that follows the mouse.
  pointLight(250, 250, 250, mx, my, 50);

  // Style the spheres.
  noStroke();
  fill(30, 30, 255);
  specularMaterial(255);
  shininess(20);
    
     // Draw the right sphere with high metalness.
  translate(50, 0, 0);
  metalness(50);
  sphere(20);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the ellipsoid.
  // Set its radiusX to 30.
  ellipsoid(30);
}

            function windowResized() {
                resizeCanvas(valor, valor);
            }