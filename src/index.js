const ngModuleName = 'formlyRepeatingSection';
const angular = require('./angular-fix');
const ngModule = angular.module(ngModuleName, [require('angular-formly')]);

ngModule.constant('formlyBootstrapVersion', VERSION);

import repeatingSection from '.repeating-section';
repeatingSection(ngModule);

export default ngModuleName;
