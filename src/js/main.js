var scene = null,
    camera = null,
    renderer = null,
    controls = null,
    myLight=null,
    pasto=null,
    textureStreet= null;

const size = 200,
    division = 200;

    function startScene(){
        scene  = new THREE.Scene();
        scene.background = new THREE.Color(0xaed7f8);
        camera = new THREE.PerspectiveCamera( 75,  // Angulo de Vision (Abajo o Arriba)
                                            window.innerWidth / window.innerHeight, // Relación Aspecto (16:9)
                                            0.1, // Mas Cerca (no renderiza)
                                            1000); // Mas lejos
        renderer = new THREE.WebGLRenderer({canvas: document.getElementById("app")});
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        camera.position.set(0, 5, 20);
        controls.update();
    }

    function createLight() {
        var light2 = new THREE.AmbientLight(0xffffff);
        light2.position.set(20, 10, 20);
        scene.add(light2);
        myLight = new THREE.DirectionalLight(0xffffff, 0, 2000);
        scene.add(myLight);
    }

function createModel(generalPath,pathMtl,pathObj,x,z,sc) {
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.setTexturePath(generalPath);
    mtlLoader.setPath(generalPath);
    mtlLoader.load(pathMtl, function (materials) {

        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath(generalPath);
        objLoader.load(pathObj, function (object) {

            modelLoad = object;
            figuresGeo.push(modelLoad);
            scene.add(object);
            object.scale.set(sc,sc,sc);

            object.position.y = 0;
            object.position.x = x;
            object.position.z=z;

        });

    });

    }

    function addFigure(){

    }