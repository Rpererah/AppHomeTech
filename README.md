"# AppHomeTech"  


Na pasta raiz do android acrescentar essa linha ao gradle em dependencias.

dependencies {
//essa linha já vem padrão no projeto
        classpath("com.android.tools.build:gradle:3.5.2")
//essa linha aqui,ela possibilita a conexão com o firebase graças ao google services
    	classpath 'com.google.gms:google-services:4.2.0'
     	     }


Na pasta App dentro de android adicionar as seguintes linhas 
//essa ao inicio do codigo, ela que indica que utilizaremos o google services, manda aplicar o plugin responsavel
apply plugin: 'com.google.gms.google-services'


//em defaultConfig caso der erros task multidex , será necessario ligar o multidex adicione entao a linha,abaixo dentro de defaultConfig{  },a pós a linha applicationId "com.emulador"

multiDexEnabled true

//dentro de dependecies { } caso você tenha adicionado o multidex, adicione a linha de sua implementação

implementation 'com.android.support:multidex:1.0.3'

//dentro de dependecies { } caso vá utilizar funções do firebase como message que utiliza do analytics dele adicione  a linha

implementation 'com.google.firebase:firebase-analytics:17.2.2'


//por fim caso utilize vector icons em seu projeto deve adicionar a linha abaixo para que sua biblioteca possa ser encontrada ,isso após ja ter instalado o vector icons

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"



//essa é a lista de instalados no projeto,caso queira apenas cole a dentro do package.json do seu projeto dentro de dependecies e de um npm install


    "@react-native-community/async-storage": "^1.11.0",
    "@react-native-community/masked-view": "^0.1.10",
    "@react-native-firebase/app": "^7.3.1",
    "@react-native-firebase/auth": "^8.0.8",
    "@react-native-firebase/database": "^7.2.2",
    "@react-native-firebase/messaging": "^7.1.5",
    "@react-navigation/bottom-tabs": "^5.5.2",
    "@react-navigation/drawer": "^5.8.2",
    "@react-navigation/native": "^5.5.1",
    "@react-navigation/stack": "^5.5.1",
    "react": "16.11.0",
    "react-native": "0.62.2",
    "react-native-cards": "^1.1.4",
    "react-native-elements": "^2.0.2",
    "react-native-gesture-handler": "^1.6.1",
    "react-native-image-overlay": "^0.1.2",
    "react-native-modal": "^11.5.6",
    "react-native-reanimated": "^1.9.0",
    "react-native-safe-area-context": "^3.0.3",
    "react-native-screens": "^2.8.0",
    "react-native-vector-icons": "^6.6.0"



para uso de imagens dentro de inputs foi criado uma pasta drawable junto dos icones de app na pasta res,as imagens lá devem estar já do tamanho ao qual serão utilizadas




 