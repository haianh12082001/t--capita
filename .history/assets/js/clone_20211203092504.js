window.addEventListener("load", function () {
    const links = [...this.document.querySelectorAll(".menu-item a")];
    links.forEach((item) => item.addEventListener("mouseenter", handleHoverLink));
    const line = document.createElement("div");
    line.className = "line-menu";
    document.body.appendChild(line);
    function handleHoverLink(event) {
        // console.log(event.target)
        const { left, top, width, height } = event.target.getBoundingClientRect();
        // console.log({ left, top, width, height })
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + 5}px`;
    }
    const menu = document.querySelectorAll(".menu");
    console.log(menu)
    menu.addEventListener("mouseleave", function () {
        line.style.width = 0;

    })

})