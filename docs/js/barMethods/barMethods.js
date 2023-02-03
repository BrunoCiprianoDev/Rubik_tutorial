//ComponentCross====================================================================//
let componentCros = document.createElement("div");
componentCros.setAttribute("id", "divMethod");

let componentCrosTitle = document.createElement("h2");
componentCrosTitle.setAttribute("id", "titleComponent");
componentCrosTitle.innerHTML = "1º passo: Cruz";
componentCros.appendChild(componentCrosTitle);

let componentCrosP1 = document.createElement("p");
componentCrosP1.setAttribute("id", "paragraph1ComponentCross");
componentCrosP1.innerHTML = "Esse é o primeiro passo para iniciar a " +
    "resolução do cubo mágico, ele consiste em  organizar as peças da base " +
    "conforme a imagem abaixo:";
componentCros.appendChild(componentCrosP1);

let componentCrosImg1 = document.createElement("img");
componentCrosImg1.setAttribute("id", "img1ComponentCros");
componentCrosImg1.setAttribute("src", "assets/cross.ico");


componentCros.appendChild(componentCrosImg1);

let componentCrosP2 = document.createElement("p");
componentCrosP2.setAttribute("id", "paragraph2ComponentCross");
componentCrosP2.innerHTML = "Embora seja um passo simples, não é possivel " +
    "estabelecer um conjunto de algoritmos que possam organizar a cruz. Por isso," +
    " para a conclusão desse passo, é necessário um pouco de prática.";
componentCros.appendChild(componentCrosP2);

let componentLinkVideoCross = document.createElement("a");
componentLinkVideoCross.setAttribute("href", "pages/cross.html");
componentLinkVideoCross.setAttribute("target", "_blank");
componentLinkVideoCross.innerHTML = "[Video]";
componentCrosP2.appendChild(componentLinkVideoCross);

//ComponentFirstLayer================================================================//

let componentFirstLayer = document.createElement("div");
componentFirstLayer.setAttribute("id", "divMethod");

let componentFirstLayerTitle = document.createElement("h2");
componentFirstLayerTitle.setAttribute("id", "titleComponent");
componentFirstLayerTitle.innerHTML = "2º passo: Primeira camada";
componentFirstLayer.appendChild(componentFirstLayerTitle);

let componentFirstLayerP1 = document.createElement("p");
componentFirstLayerP1.setAttribute("id", "paragraph1ComponentCross");
componentFirstLayerP1.innerHTML = "Esse passo consiste em completar os " +
    "quatro cantos da primeira camada. Para isso você pode aplicar os " +
    "seguintes algoritmos:"
componentFirstLayer.appendChild(componentFirstLayerP1);

let componentFirstLayerLinkVideo = document.createElement("a");
componentFirstLayerLinkVideo.setAttribute("href", "pages/firstLayer.html");
componentFirstLayerLinkVideo.setAttribute("target", "_blank");
componentFirstLayerLinkVideo.innerHTML = "[Video]";
componentFirstLayerP1.appendChild(componentFirstLayerLinkVideo);

let componentContainerAlgFirstLayer = document.createElement("div");
componentContainerAlgFirstLayer.setAttribute("id", "containerAlgFirstLayer");

//-> Algoritmo 1
let cmd1 = document.createElement("div");
cmd1.setAttribute("class", "algDiv");
cmd1.innerHTML = "Caso 1"

let imgCmd1 = document.createElement("img");
imgCmd1.setAttribute("class", "imgButton");
imgCmd1.setAttribute("src", "assets/cmd_f1_01.ico");

let labelCmd1 = document.createElement("label");
labelCmd1.setAttribute("class", "labelButton");
labelCmd1.innerHTML = "R U R'"

cmd1.appendChild(imgCmd1);
cmd1.appendChild(labelCmd1);
componentContainerAlgFirstLayer.appendChild(cmd1);

//-> Algoritmo 2
let cmd2 = document.createElement("div");
cmd2.setAttribute("class", "algDiv");
cmd2.innerHTML = "Caso 2"

let imgCmd2 = document.createElement("img");
imgCmd2.setAttribute("class", "imgButton");
imgCmd2.setAttribute("src", "assets/cmd_f1_02.ico");

let labelCmd2 = document.createElement("label");
labelCmd2.setAttribute("class", "labelButton");
labelCmd2.innerHTML = "'F U' F"

cmd2.appendChild(imgCmd2);
cmd2.appendChild(labelCmd2);
componentContainerAlgFirstLayer.appendChild(cmd2);

//-> Algoritmo 3

let cmd3 = document.createElement("div");
cmd3.setAttribute("class", "algDiv");
cmd3.innerHTML = "Caso 3"

let imgCmd3 = document.createElement("img");
imgCmd3.setAttribute("class", "imgButton");
imgCmd3.setAttribute("src", "assets/cmd_f1_03.ico");

let labelCmd3 = document.createElement("label");
labelCmd3.setAttribute("class", "labelButton");
labelCmd3.innerHTML = "R U2 R' U' R U R'"

cmd3.appendChild(imgCmd3);
cmd3.appendChild(labelCmd3);
componentContainerAlgFirstLayer.appendChild(cmd3);

//-> Algoritmo 4

let cmd4 = document.createElement("div");
cmd4.setAttribute("class", "algDiv");
cmd4.innerHTML = "Caso 4"

let imgCmd4 = document.createElement("img");
imgCmd4.setAttribute("class", "imgButton");
imgCmd4.setAttribute("src", "assets/cmd_f1_04.ico");

let labelCmd4 = document.createElement("label");
labelCmd4.setAttribute("class", "labelButton");
labelCmd4.innerHTML = "R U R' U' R U2 R' U' R U R'"

cmd4.appendChild(imgCmd4);
cmd4.appendChild(labelCmd4);
componentContainerAlgFirstLayer.appendChild(cmd4);

//-> Algoritmo 5

let cmd5 = document.createElement("div");
cmd5.setAttribute("class", "algDiv");
cmd5.innerHTML = "Caso 5"

let imgCmd5 = document.createElement("img");
imgCmd5.setAttribute("class", "imgButton");
imgCmd5.setAttribute("src", "assets/cmd_f1_05.ico");

let labelCmd5 = document.createElement("label");
labelCmd5.setAttribute("class", "labelButton");
labelCmd5.innerHTML = "R U R' U' R U R'"

cmd5.appendChild(imgCmd5);
cmd5.appendChild(labelCmd5);
componentContainerAlgFirstLayer.appendChild(cmd5);

componentFirstLayer.appendChild(componentContainerAlgFirstLayer);

//ComponentSecondLayer================================================================//

let componentSecondLayer = document.createElement("div");
componentSecondLayer.setAttribute("id", "divMethod");

let componentSecondLayerTitle = document.createElement("h2");
componentSecondLayerTitle.setAttribute("id", "titleComponent");
componentSecondLayerTitle.innerHTML = "3º passo: Segunda camada";
componentSecondLayer.appendChild(componentSecondLayerTitle);

let componentSecondLayerP1 = document.createElement("p");
componentSecondLayerP1.setAttribute("id", "paragraph1ComponentCross");
componentSecondLayerP1.innerHTML = "Esse passo consiste em completar os " +
    "quatro cantos da segunda camada do cubo. Para isso você pode aplicar os " +
    "seguintes algoritmos:"
componentSecondLayer.appendChild(componentSecondLayerP1);

let componentSecondLayerP1Video = document.createElement("a");
componentSecondLayerP1Video.setAttribute("href", "pages/secondLayer.html");
componentSecondLayerP1Video.setAttribute("target", "_blank");
componentSecondLayerP1Video.innerHTML = "[Video]";
componentSecondLayerP1.appendChild(componentSecondLayerP1Video);

let componentContainerAlgSecondLayer = document.createElement("div");
componentContainerAlgSecondLayer.setAttribute("id", "containerAlgSecondLayer");
componentSecondLayer.appendChild(componentContainerAlgSecondLayer);

//-> Algoritmo 1
let cmd1S2 = document.createElement("div");
cmd1S2.setAttribute("class", "algDiv");
cmd1S2.innerHTML = "Algoritmo 1"
componentContainerAlgSecondLayer.appendChild(cmd1S2);

let imgCmd1S2 = document.createElement("img");
imgCmd1S2.setAttribute("class", "imgButton");
imgCmd1S2.setAttribute("src", "assets/c2_a1.ico");
cmd1S2.appendChild(imgCmd1S2);

let labelCmd1S2 = document.createElement("label");
labelCmd1S2.setAttribute("class", "labelButton");
labelCmd1S2.innerHTML = "U R U R' U' F' U' F"
cmd1S2.appendChild(labelCmd1S2);

//-> Algoritmo 2
let cmd2S2 = document.createElement("div");
cmd2S2.setAttribute("class", "algDiv");
cmd2S2.innerHTML = "Algoritmo 2"
componentContainerAlgSecondLayer.appendChild(cmd2S2);

let imgCmd2S2 = document.createElement("img");
imgCmd2S2.setAttribute("class", "imgButton");
imgCmd2S2.setAttribute("src", "assets/c2_a2.ico");
cmd2S2.appendChild(imgCmd2S2);

let labelCmd2S2 = document.createElement("label");
labelCmd2S2.setAttribute("class", "labelButton");
labelCmd2S2.innerHTML = "U' F' U' F U R U R'"
cmd2S2.appendChild(labelCmd2S2);

//-> Text
let componentSecondLayerP2 = document.createElement("p");
componentSecondLayerP2.setAttribute("id", "paragraph2ComponentLayer2");
componentSecondLayerP2.innerHTML = "Caso um dos cantos já esteja na segunda"+
" camada, porém da forma errada, basta aplicar o seguinte algoritmo para inseri-lo"+
" na borda superior:";
componentSecondLayer.appendChild(componentSecondLayerP2);

//-> Img Text
let cmd3S2 = document.createElement("div");
cmd3S2.setAttribute("class", "algDiv3");
cmd3S2.innerHTML = "Algoritmo 3"
componentSecondLayer.appendChild(cmd3S2);

let imgCmd3S2 = document.createElement("img");
imgCmd3S2.setAttribute("class", "imgButton");
imgCmd3S2.setAttribute("src", "assets/c2_a3.ico");
cmd3S2.appendChild(imgCmd3S2);

let labelCmd3S2 = document.createElement("label");
labelCmd3S2.setAttribute("id", "labelAlg3");
labelCmd3S2.innerHTML = "R U R' U' F' U' F"
cmd3S2.appendChild(labelCmd3S2);

//Component Yellow Cross====================================================================//
let componentL = document.createElement("div");
componentL.setAttribute("id", "divMethod");

let componentLTitle = document.createElement("h2");
componentLTitle.setAttribute("id", "titleComponent");
componentLTitle.innerHTML = "4º passo:  Cruz da terceira camada";
componentL.appendChild(componentLTitle);

let componentLP1 = document.createElement("p");
componentLP1.setAttribute("id", "paragraph1ComponentCross");
componentLP1.innerHTML = "Nesse passo o objetivo é formar uma cruz na camada"+
" superior, independente dos cantos. Para isso, execute a função: F U R U' R' F'" +
" até que existam pelo menos 2 peças alinhas da camada superior.(Assim como a imagem"+
" abaixo.";
componentL.appendChild(componentLP1);

let componentLP1Link = document.createElement("a");
componentLP1Link.setAttribute("href", "pages/yellowCross.html");
componentLP1Link.setAttribute("target", "_blank");
componentLP1Link.innerHTML = "[Video]";
componentLP1.appendChild(componentLP1Link);

let imgL = document.createElement("img");
imgL.setAttribute("id", "imgL");
imgL.setAttribute("src", "assets/imgL.ico")

componentL.appendChild(imgL);

let componentLP2 = document.createElement("p");
componentLP2.setAttribute("id", "passo4paragrafo2");
componentLP2.innerHTML = "Quando identificar a configuração acima, execute a formula"+
" anterior até que a crus amarela seja formada. Dependendo da configuração do cubo "+
"pode ser necessário a execução da mesma até 3 vezes.";
componentL.appendChild(componentLP2);

//Component lastLayer =================================================================//
let componentLastLayer = document.createElement("div");
componentLastLayer.setAttribute("id", "divMethod");

let componentLastLayerTitle = document.createElement("h2");
componentLastLayerTitle.setAttribute("id", "titleComponent");
componentLastLayerTitle.innerHTML = "5º passo:  3º camada";
componentLastLayer.appendChild(componentLastLayerTitle);

let componentPLastLayer = document.createElement("p");
componentPLastLayer.setAttribute("id", "passo5paragrafo1");
componentPLastLayer.innerHTML = "Nesse passo o objetivo é organizar todos as peças da"+
" camada superior. Para isso, com a cruz formada, rotacione e procure em um dos cantos "+
" da parte superior do cubo que contenha uma peça amarela na parte frontal. Como na imagem "+
"abaixo:"
componentLastLayer.appendChild(componentPLastLayer);

let componentPLastLayerLink = document.createElement("a");
componentPLastLayerLink.setAttribute("href", "pages/yellowLayer.html");
componentPLastLayerLink.setAttribute("target", "_blank");
componentPLastLayerLink.innerHTML = "[Video]";
componentPLastLayer.appendChild(componentPLastLayerLink);

let img1LastLayer = document.createElement("img");
img1LastLayer.setAttribute("id", "img1LastLayer");
img1LastLayer.setAttribute("src", "assets/lastLayerImg.ico");
componentLastLayer.appendChild(img1LastLayer);

let componentP2LastLayer = document.createElement("p");
componentP2LastLayer.setAttribute("id", "passo5paragrafo2");
componentP2LastLayer.innerHTML = "Com essa configuração execute a seguinte  função:"+
"R U R' U R U2 R'. Esse algoritmo deve ser aplicado, mais de uma vez, até que todas as peças da camada " +
"superior estejam organizadas. Lembrando que antes de iniciar cada repetição deve existir pelo"
 +" menos uma peça amarela na parte frontal do cubo (Como na imagem acima)"
componentLastLayer.appendChild(componentP2LastLayer);

// Component last layer corner =============================================================================//
let componentLastLayerCorner = document.createElement("div");
componentLastLayerCorner.setAttribute("id", "divMethod");

let componentLastLayerCornerTitle = document.createElement("h2");
componentLastLayerCornerTitle.setAttribute("id", "titleComponent");
componentLastLayerCornerTitle.innerHTML = "6º passo: Organizar os cantos da última camada"
componentLastLayerCorner.appendChild(componentLastLayerCornerTitle);

let componentLastLayerCornerParagraph1 = document.createElement("p");
componentLastLayerCornerParagraph1.setAttribute("id", "lastLayerParagraph1");
componentLastLayerCornerParagraph1.innerHTML = "[P1] Nesse passo o objetivo é organizar todos os cantos da 3º camada."+
"Para isso, verifique se a última camada do cubo apresenta a seguinte configuração:"
componentLastLayerCorner.appendChild(componentLastLayerCornerParagraph1);

let componentLastLayerCornerParagraph1Link = document.createElement("a");
componentLastLayerCornerParagraph1Link.setAttribute("href", "pages/lastCorners.html");
componentLastLayerCornerParagraph1Link.setAttribute("target", "_blank");
componentLastLayerCornerParagraph1Link.innerHTML = "[Video]";
componentLastLayerCornerParagraph1.appendChild(componentLastLayerCornerParagraph1Link);

let img1LastLayerCorner = document.createElement("img");
img1LastLayerCorner.setAttribute("id", "img1LastLayerCorner");
img1LastLayerCorner.setAttribute("src", "assets/f1lastLayerCorner.ico");
componentLastLayerCorner.appendChild(img1LastLayerCorner);

let componentLastLayerCornerParagraph2 = document.createElement("p");
componentLastLayerCornerParagraph2.setAttribute("id", "lastLayerParagraph2");
componentLastLayerCornerParagraph2.innerHTML = "[P2] Gire o cubo inteiro de forma que o lado que estiver semelhante ao exemplo "+
"fique na parte de traz do cubo e execute a formula: R' F R' B2 R F' R' B2' R2"
componentLastLayerCorner.appendChild(componentLastLayerCornerParagraph2);

let componentLastLayerCornerParagraph3 = document.createElement("p");
componentLastLayerCornerParagraph3.setAttribute("id", "lastLayerParagraph3");
componentLastLayerCornerParagraph3.innerHTML = "[P3] Caso não exista nenhuma face com a configuração da imagem acima, basta executar" +
" a função anterior [R' F R' B2 R F' R' B2' R2]. Você notará que pelo menos umas das faces do cantos superior terá essa configuração."+
" Depois disso,  você pode executar a instrução [P2]"
componentLastLayerCorner.appendChild(componentLastLayerCornerParagraph3);

// ComponentLastPieceRotation =============================================================================//
let componentLastPieceRotation = document.createElement("div");
componentLastPieceRotation.setAttribute("id", "divMethod");

let componentLastPieceRotationTitle = document.createElement("h2");
componentLastPieceRotationTitle.setAttribute("id", "titleComponent");
componentLastPieceRotationTitle.innerHTML = "7º passo: Rotacionar os centros da 3º camada"
componentLastPieceRotation.appendChild(componentLastPieceRotationTitle);

let componentLastPieceRotationParagraph = document.createElement("p");
componentLastPieceRotationParagraph.setAttribute("id", "componentLastPieceRotationParagraph");
componentLastPieceRotationParagraph.innerHTML = "Esse passo consiste em rotacionar as peças do centro da última camada." + 
"Para isso, só precisamos de 2 algoritmos:"
componentLastPieceRotation.appendChild(componentLastPieceRotationParagraph);

let componentLastPieceRotationParagraphLink = document.createElement("a");
componentLastPieceRotationParagraphLink.setAttribute("href", "pages/finish.html");
componentLastPieceRotationParagraphLink.setAttribute("target", "_blank");
componentLastPieceRotationParagraphLink.innerHTML = "[Video]";
componentLastPieceRotationParagraph.appendChild(componentLastPieceRotationParagraphLink);

let componentAlgLastPieceRotation = document.createElement("div");
componentAlgLastPieceRotation.setAttribute("id", "containerAlgLastPieceRotation");
componentLastPieceRotation.appendChild(componentAlgLastPieceRotation);

//-> Caso 1
let cmdLastPieceRotation = document.createElement("div");
cmdLastPieceRotation.setAttribute("class", "algDivLastCenter");
cmdLastPieceRotation.innerHTML = "Caso 1"
componentAlgLastPieceRotation.appendChild(cmdLastPieceRotation);

let imgcmdLastPieceRotation = document.createElement("img");
imgcmdLastPieceRotation.setAttribute("class", "algImgLastCenter");
imgcmdLastPieceRotation.setAttribute("src", "assets/rotationLastCenter1.ico");
cmdLastPieceRotation.appendChild(imgcmdLastPieceRotation);

let labelLastPieceRotation = document.createElement("label");
labelLastPieceRotation.setAttribute("class", "algLabelLastCenter");
labelLastPieceRotation.innerHTML = "F2 U' C U2 C' U' F2"
cmdLastPieceRotation.appendChild(labelLastPieceRotation);


let cmdLastPieceRotation2 = document.createElement("div");
cmdLastPieceRotation2.setAttribute("class", "algDivLastCenter");
cmdLastPieceRotation2.innerHTML = "Caso 2"
componentAlgLastPieceRotation.appendChild(cmdLastPieceRotation2);

let imgcmdLastPieceRotation2 = document.createElement("img");
imgcmdLastPieceRotation2.setAttribute("class", "algImgLastCenter");
imgcmdLastPieceRotation2.setAttribute("src", "assets/rotationLastCenter2.ico");
cmdLastPieceRotation2.appendChild(imgcmdLastPieceRotation2);

let labelLastPieceRotation2 = document.createElement("label");
labelLastPieceRotation2.setAttribute("class", "algLabelLastCenter");
labelLastPieceRotation2.innerHTML = "U2 U C U2' C' U' F2"
cmdLastPieceRotation2.appendChild(labelLastPieceRotation2);

// =================================================================================//

let componentEmpty = document.createElement("div");
componentEmpty.setAttribute("id", "divMethod");

const paramsStepsList = [
    {
        id: "cross",
        srcImage: "./assets/cross.ico",
        listOfMethods: componentCros
    },
    {
        id: "firstLayer",
        srcImage: "./assets/first_layer.ico",
        listOfMethods: componentFirstLayer
    },
    {
        id: "f2l",
        srcImage: "./assets/f2l.ico",
        listOfMethods: componentSecondLayer
    },
    {
        id: "yellowCrossStep",
        srcImage: "./assets/yellowLayer.ico",
        listOfMethods: componentL
    },
    {
        id: "lastlayer",
        srcImage: "./assets/lastlayer.ico",
        listOfMethods: componentLastLayer
    },
    {
        id: "lastlayerCorner",
        srcImage: "assets/lastlayerBr.ico",
        listOfMethods: componentLastLayerCorner
    },
    {
        id: "lastPiecesRotation",
        srcImage: "./assets/rubikComplete.ico",
        listOfMethods: componentLastPieceRotation
    },
    {
        id: "lastPiecesRotation",
        srcImage: "./assets/close.ico",
        listOfMethods: componentEmpty
    }

]

class StepsBar {
    constructor() {
        this._stepsBar = this.initStepsBar();
        this._listSteps = this.initListSteps();
        this.render();
    }

    set stepsBar(stepsBar) {
        this._stepsBar = stepsBar;
    }

    get stepsBar() {
        return this._stepsBar;
    }

    set listSteps(listSteps) {
        this._listSteps = listSteps;
    }

    get listSteps() {
        return this._listSteps;
    }

    initStepsBar() {
        let stepsBarPrototype = document.createElement("div");
        stepsBarPrototype.setAttribute("id", "stepsBar");
        return stepsBarPrototype;
    }

    initListSteps() {
        let listStepsPrototype = [];
        paramsStepsList.map((paramsStep) => (
            listStepsPrototype.push(new Step(paramsStep.id, paramsStep.srcImage, paramsStep.listOfMethods))
        ))
        return listStepsPrototype;
    }

    render() {
        document.body.appendChild(this._stepsBar);
        this._listSteps.map((step) => (step.render("stepsBar")));
    }

}

class Step {
    constructor(id, srcImage, pr_listOfMethods) {
        this._step = this.initStep(id, srcImage, pr_listOfMethods);
    }

    set step(step) {
        this._step = step;
    }

    get step() {
        return this._step;
    }

    set listOfMethods(listOfMethods) {
        this._listOfMethods = listOfMethods;
    }

    get listOfMethods() {
        return this._listOfMethods;
    }

    initStep(id, srcImage, pr_listOfMethods) {
        let stepPrototype = document.createElement("button");
        stepPrototype.setAttribute("id", id);

        stepPrototype.addEventListener("click", () => {

            let currentListOfMethods = document.getElementById("divMethod");

            if (currentListOfMethods !== null) {
                document.body.removeChild(currentListOfMethods);
            }
            document.body.appendChild(pr_listOfMethods);

        })

        let imageStepPrototype = document.createElement("img");
        imageStepPrototype.setAttribute("id", "stepImage");
        imageStepPrototype.setAttribute("src", srcImage);

        stepPrototype.appendChild(imageStepPrototype);
        return stepPrototype;
    }

    render(parent) {
        parent !== undefined && document.getElementById !== null ?
            document.getElementById(parent).appendChild(this._step) :
            document.body.appendChild(this._step);
    }

}



