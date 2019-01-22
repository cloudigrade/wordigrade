const fs = require('fs');
const path = require('path');
const ea = path.join(__dirname, 'ea_out');
const exportLocales = {};

fs.readdirSync(ea).forEach(file => {
  const locale = file.split('.')[0].split('-')[0];
  exportLocales[locale] = Object.assign(exportLocales[locale] || {}, require(path.join(ea, file)));
});

module.exports = {
  ea_out: exportLocales
};
