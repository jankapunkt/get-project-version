import gitRevSync from 'git-rev-sync';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

import getProjectVersion from '../src/';

export default () => {
  test('we should get a version string for a custom defined fieldname', () => {
    const projectVersion = getProjectVersion({
      field: 'custom',
      template: '{{version}} {{commit}}',
    });

    const commit = gitRevSync.short();
    const version = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')).custom;

    const expected = `${version} ${commit}`;
    assert.equal(projectVersion, expected, 'version string not matched');
  });
};
