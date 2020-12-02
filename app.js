function colorElement(idElement, couleur) {
    let element = document.getElementById(idElement);
    element.style.backgroundColor = couleur;
    console.log(element);
}

colorElement("p1", "blue");
colorElement("p2", "purple");
colorElement("p3", "yellow");
colorElement("p4", "red");

