(() => {
  headersMap = {
    "head-1": "h1",
    "head-2": "h2",
  };

  const stylesMap = {
    italic: "italic",
    bold: "bold",
  };

  const stylesHandler = (style) => {
    document.execCommand(style);
  };

  const tagsHandler = (tag) => {
    document.execCommand("formatBlock", false, tag);
  };

  const toolKit = document.querySelector(".toolkit");
  const toolkitButtons = Array.from(toolKit.getElementsByTagName("button"));
  toolkitButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isHeader = btn.className.split("-")[0] === "head";
      if (isHeader) {
        const tag = headersMap[btn.className];
        tagsHandler(tag);
      } else {
        const style = stylesMap[btn.className];
        stylesHandler(style);
      }
    });
  });
})();
