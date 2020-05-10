module.exports = {
    // [...]
    // Replace `ts-jest` with the preset you want to use
    // from the above list
    preset: 'ts-jest',
    moduleFileExtensions: [ 'ts', 'js' ],
    globals: {
        'ts-jest': {
            isolatedModules: true,
            enableTsDiagnostics: true,
        }
    }
};