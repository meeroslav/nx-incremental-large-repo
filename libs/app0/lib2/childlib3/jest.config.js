module.exports = {
  preset: '../../../../jest.preset.js',
  coverageDirectory: '../../../../coverage/libs/app0/lib2/childlib3',

  displayName: 'app0-lib2-childlib3',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
