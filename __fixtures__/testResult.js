const testCheck = {
  plane: '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
  nested: '{\n    common: {\n      + follow: false\n        setting1: Value 1\n      - setting2: 200\n      - setting3: true\n      + setting3: null\n      + setting4: blah blah\n      + setting5: {\n            key5: value5\n        }\n        setting6: {\n            doge: {\n              - wow: \n              + wow: so much\n            }\n            key: value\n          + ops: vops\n        }\n    }\n    group1: {\n      - baz: bas\n      + baz: bars\n        foo: bar\n      - nest: {\n            key: value\n        }\n      + nest: str\n    }\n  - group2: {\n        abc: 12345\n        deep: {\n            id: 45\n        }\n    }\n  + group3: {\n        deep: {\n            id: {\n                number: 45\n            }\n        }\n        fee: 100500\n    }\n}',
  plain: `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`,
  json: '[{"type":"complex","key":"common","value":[{"type":"added","key":"follow","value":false},{"type":"delete","key":"setting1","value":"Value 1"},{"type":"removed","key":"setting2","value":200},{"type":"updated","key":"setting3","value1":true,"value2":null},{"type":"added","key":"setting4","value":"blah blah"},{"type":"added","key":"setting5","value":{"key5":"value5"}},{"type":"complex","key":"setting6","value":[{"type":"complex","key":"doge","value":[{"type":"updated","key":"wow","value1":"","value2":"so much"}]},{"type":"delete","key":"key","value":"value"},{"type":"added","key":"ops","value":"vops"}]}]},{"type":"complex","key":"group1","value":[{"type":"updated","key":"baz","value1":"bas","value2":"bars"},{"type":"delete","key":"foo","value":"bar"},{"type":"updated","key":"nest","value1":{"key":"value"},"value2":"str"}]},{"type":"removed","key":"group2","value":{"abc":12345,"deep":{"id":45}}},{"type":"added","key":"group3","value":{"deep":{"id":{"number":45}},"fee":100500}}]',
};
export default testCheck;
