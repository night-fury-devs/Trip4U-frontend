// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular/router-deprecated': 'vendor/@angular/router-deprecated',
  '@angular/forms': 'vendor/@angular/forms',
  'jquery': 'vendor/jquery',
  'materialize-css': 'vendor/materialize-css',
  'ng2-cookies': 'vendor/ng2-cookies',
  'elasticsearch': 'vendor/elasticsearch-browser/elasticsearch.js'
};

/** User packages configuration. */
const packages: any = {
  'app/pages': { main: 'index' },
  '@angular/router-deprecated': { main: 'index' },
  '@angular/forms': { main: 'index' },
  'jquery': { main: 'dist/jquery.min.js', format: 'cjs', defaultExtension: 'js' },
  'materialize-css': { main: 'dist/js/materialize.min.js', format: 'global', defaultExtension: 'js' },
  'ng2-cookies': {main: 'ng2-cookies.js'}
};

const meta: any = {
  'elasticsearch': {
    format: 'global',
    exports: 'elasticsearch'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages, meta });
