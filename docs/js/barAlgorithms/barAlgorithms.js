const algorithms = [
    { id: "btnR", label: "R", srcImage: "assets/algR.gif" },
    { id: "btnR'", label: "R'", srcImage: "assets/algR'.gif" },
    { id: "btnL", label: "L", srcImage: "assets/algL.gif" },
    { id: "btnL'", label: "L'", srcImage: "assets/algL'.gif" },
    { id: "btnF", label: "F", srcImage: "assets/algF.gif" },
    { id: "btnF'", label: "F'", srcImage: "assets/algF'.gif" },
    { id: "btnU", label: "U", srcImage: "assets/algU.gif" },
    { id: "btnU'", label: "U'", srcImage: "assets/algU'.gif" },
    { id: "btnD", label: "D", srcImage: "assets/algD.gif" },
    { id: "btnD'", label: "D'", srcImage: "assets/algD'.gif" },
    { id: "btnC", label: "C", srcImage: "assets/algC.gif" },
    { id: "btnC'", label: "C'", srcImage: "assets/algC'.gif" },
]

class BarAlgorithms {

    constructor() {
        this.barAlgorithms = this.createBarAlgorithms();
        this.tipArea = this.createTipArea();
        document.body.appendChild(this.barAlgorithms);
        document.body.appendChild(this.tipArea);
    }

    createBarAlgorithms() {
        let barAlgorithms = document.createElement("div");
        barAlgorithms.setAttribute("id", "helpBarContainer");
        algorithms.map((buttonList) => (
            barAlgorithms.appendChild(this.createButtons(buttonList))
        ))
        return barAlgorithms;
    }

    createButtons(buttonList) {

        let button = document.createElement("button");
        button.setAttribute("id", buttonList.id);
        button.innerHTML = buttonList.label;

        button.addEventListener("mouseover", () => {
            document.getElementById("imgTip").setAttribute("src", buttonList.srcImage);
        })

        button.addEventListener("mouseout", () => {
            document.getElementById("imgTip").setAttribute("src", "");
        })

        return button;
    }

    createTipArea() {
        let tipArea = document.createElement("div");
        tipArea.setAttribute("id", "tipArea");
        let imgTip = document.createElement("img");
        imgTip.setAttribute("id", "imgTip");
        imgTip.setAttribute("src", "");
        tipArea.appendChild(imgTip);
        return tipArea;
    }
}