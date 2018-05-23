const hook = require('node-hook');
const SvgLoader = require('svg-inline-loader');

hook.hook('.scss', () => ({}));
hook.hook('.svg', (source) => {
  const markup = SvgLoader.getExtractedSVG(source, { removeSVGTagAttrs: false });
  return `module.exports =  ${JSON.stringify(markup)}`;
});
