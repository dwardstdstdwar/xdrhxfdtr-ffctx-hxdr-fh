const JavaScript0bfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

const obfuscation0ptions = {
compact: true,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 0.75,
numbersToExpressions: true,
simplify: true,
shuffleStringArray: true,
splitStrings: true,
splitStringsChunkLength: 10,
unicodeEscapeSequence: false
};

const originalCode = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf-8');
// 4. Обфусцируем код и сохраняем результат .get0bfuscatedCode();
const obfuscatedCode = JavaScript0bfuscator.obfuscate(originalCode, obfuscation0ptions)
    .getObfuscatedCode();
//5. Сохраняем в файл
fs.writeFileSync(path.join(＿dirname, 'index_obfuscated.js'),
 obfuscatedCode); console.log('Обфускация завершена');