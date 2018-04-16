let titleFun = (chunkName, title) => {
  let titleDef = '网站';
  let returnTitle;
  if (chunkName.indexOf('index') !== -1) {
    returnTitle = titleDef;
  } else {
    returnTitle = `${title}_${titleDef}`
  }

  return title;
}

module.exports = {
  titleFun,
}