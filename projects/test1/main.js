const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(WIDTH, HEIGHT)
renderer.setClearColor(0xDDDDDD, 1)
document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT)
camera.position.z = 50
scene.add(camera)

const boxGeometry = new THREE.BoxGeometry(10, 10, 10)
const basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD})
const cube = new THREE.Mesh(boxGeometry, basicMaterial)
scene.add(cube)
cube.rotation.set(0.4, 0.2, 0)

function render() {
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}

render()
