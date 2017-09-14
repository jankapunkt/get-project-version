import testCliDefault from './test-cli-default';
import testCliTemplate from './test-cli-template';
import testModifyTemplate from './test-modify-template';
import testNoOpts from './test-no-opts';
import testNoTag from './test-no-tag';
import testCustomField from './test-custom-field';

suite('test basic usage', () => {
  testNoOpts();
  testModifyTemplate();
  testNoTag();
  testCustomField();
});

suite('test cli', () => {
  testCliDefault();
  testCliTemplate();
});
