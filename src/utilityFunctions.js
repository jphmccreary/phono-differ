/*
https://programmingwithmosh.com/react/multiple-css-classes-react/
 */
function classList (...classes) {
    return classes
      .filter(entry => !!entry)
      .join(' ');
}

export { classList };
