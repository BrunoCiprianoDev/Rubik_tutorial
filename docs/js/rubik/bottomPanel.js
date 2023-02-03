const parametersButtons = [
    { id: "buttonBack", srcImage: "assets/angulo-duplo-esquerdo.png", textDescription: "Voltar movimento" },
    { id: "buttonRandomize", srcImage: "assets/setas-cruzadas.png", textDescription: "Embaralhar" },
    { id: "buttonResetAll", srcImage: "assets/reset.png", textDescription: "Resetar" },
]

class BottomPanel {

    constructor() {
        this.BottomPanel = this.createBottomPanel();
        document.body.appendChild(this.createSubtitle());
        document.body.appendChild(this.BottomPanel);
    }

    createSubtitle() {
        let subtitle = document.createElement("label");
        subtitle.setAttribute("id", "subtitle")
        subtitle.innerHTML = "";
        return subtitle;
    }

    createBottomPanel() {
        let bottomPanelComponent = document.createElement("div");
        bottomPanelComponent.setAttribute("id", "bottomPanel");

        parametersButtons.map((parameter)=>(
            bottomPanelComponent.appendChild(this.createButton(parameter))
        ))
        return bottomPanelComponent;
    }

    createButton(parameter) {

        let button = document.createElement("button");
        button.setAttribute("id", parameter.id);

        let imgButton = document.createElement("img");
        imgButton.setAttribute("src", parameter.srcImage);
        button.appendChild(imgButton);

        button.addEventListener("mouseover", () => {
            document.getElementById("subtitle").innerHTML = parameter.textDescription;
        })

        button.addEventListener("mouseout", () => {
            document.getElementById("subtitle").innerHTML = "";
        })

        return button;
    }

}
