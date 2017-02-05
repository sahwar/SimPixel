if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

const HOST = 'ws://10.0.1.60:1337';

const view = new View();
const network = new Network(HOST);

network.onConf( view.init.bind(view) );
network.onColor( view.update.bind(view) );
