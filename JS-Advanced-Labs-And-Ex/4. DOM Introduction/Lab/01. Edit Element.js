function edit(element, match, replacer) {
    const text = element.textContent;
   // element.textContent = text.replaceAll(match, replacer);
    element.textContent = text.split(match).join(replacer);
}