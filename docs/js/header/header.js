const arrayLinks = [
    { id: 2, href: "pages/team.html", title: "Equipe" }
]

class Header {
    constructor() {
        this.viewBox = false;
        this.containerHeader = this.createContainerHeader();
        this.containerHeader.appendChild(this.createNav());
        document.body.appendChild(this.containerHeader);
    }

    set viewBox(viewBox){this._viewBox = viewBox;}

    get viewBox(){return this._viewBox;}

    createContainerHeader() {
        let containerHeader = document.createElement("Header");
        containerHeader.setAttribute("id", "headerContainer");
        return containerHeader;
    }

    createNav() {
        let navHeader = document.createElement("nav");
        navHeader.setAttribute("id", "navHeader");

        arrayLinks.map((link) => (
             navHeader.appendChild(this.createLink(link))
        ))

        return navHeader;
    }

    createLink(link) {
        let linkHeader = document.createElement("a");
        linkHeader.setAttribute("href", link.href);
        linkHeader.setAttribute("target", "_blank");
        linkHeader.innerHTML = link.title;
        return linkHeader;
    }

}
