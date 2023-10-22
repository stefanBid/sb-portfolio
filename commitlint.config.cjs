module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(fix|feat)(\(([^)]*)\))?: (.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat']],
    'scope-empty': [1, 'never'],
    'subject-empty': [2, 'never'],
  },
};
