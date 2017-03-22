export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/angular-datatable.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.datatable',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/forms': 'ng.forms'
    }
}