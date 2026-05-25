import type { ModuleManifest } from '@boilerbear/core';

export const influxdbClient: ModuleManifest = {
  id: 'influxdb-client',
  name: 'InfluxDB Client',
  category: 'database',
  tags: ['influxdb', 'timeseries', 'metrics'],
  description: 'Official InfluxDB v2 client for JavaScript and Node.js.',
  homepage: 'https://github.com/influxdata/influxdb-client-js',
  license: 'MIT',
  popularity: 380_000,
  versions: { range: '^1.35.0', min: '1.35.0' },
  languages: ['js'],
  packages: {
    deps: [{ name: '@influxdata/influxdb-client', version: '^1.35.0' }],
    devDeps: [],
  },
  requires: [],
  conflicts: [],
  recommends: [],
  appliesTo: [],
  setup: [],
  maintainers: ['influxdata'],
  docs: {
    quickstart: 'https://docs.influxdata.com/influxdb/v2/api-guide/client-libraries/nodejs/',
  },
};
