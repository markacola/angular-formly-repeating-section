const ngModuleName = 'formlyRepeatingSection';
const angular = window.angular;
const ngModule = angular.module(ngModuleName, [ 'angular-formly' ]);

ngModule.constant('formlyBootstrapVersion', VERSION);

import repeatingSection from './repeating-section';
repeatingSection(ngModule);

export default ngModuleName;
