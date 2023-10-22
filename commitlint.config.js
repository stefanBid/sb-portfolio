module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^((fix|feat)\(([^)]+)\): (.+)|(Merge pull request #[0-9]+ from .+))$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', ['fix', 'feat', 'Merge pull request']],
    'scope-empty': [1, 'never'],
    'subject-empty': [2, 'never'],
  },
};
