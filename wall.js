import * as THREE from "https://cdn.skypack.dev/three@0.132.2";

class Walls {
  depth = 1;
  width = 120;
  height = 100;
  shape= new THREE. Object3D();
  constructor(x, y, z, rotate) {
    //load textures
    var textureloader = new THREE.TextureLoader();
    var tilesBasecolor = textureloader.load(
      "textures/wallt/Concrete_Wall_007_basecolor.jpg"
    );
    var tilesNormalMap = textureloader.load(
      "textures/wallt/Concrete_Wall_007_normal.jpg"
    );
    var tilesRoughnessMap = textureloader.load(
      "textures/wallt/Concrete_Wall_007_roughness.jpg"
    );
    var tilesAmbientocclusionMap = textureloader.load(
      "textures/wallt/Concrete_Wall_007_ambientOcclusion.jpg"
    );

    this.shape = new THREE.Mesh(
      new THREE.BoxGeometry(this.width, this.height, this.depth),

      new THREE.MeshStandardMaterial({
        map: tilesBasecolor,
        normalMap: tilesNormalMap,
        roughnessMap: tilesRoughnessMap,
        aoMap: tilesAmbientocclusionMap,
      })
    );
    this.shape.position.set(x, y, z);
    this.shape.receiveShadow = true;
    this.shape.castShadow = true;
    if (rotate) {
      this.shape.rotation.y = Math.PI / 2;
    }
  }

  get getShape() {
    return this.shape;
  }

  /*
  var foo = new CustomObject();
  scene.add( foo );
*/
}

export { Walls };
