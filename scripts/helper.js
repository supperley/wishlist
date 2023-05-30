export const createElement = (tagName, attribute) => {
    const elem = document.createElement(tagName, attribute);
    Object.assign(elem, attribute);
    return elem;
};
