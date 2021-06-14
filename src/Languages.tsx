export type Language = {
  name: string;
  editorValue: string;
  language: string;
}

export const getLanguage = (lang: string): Language => {
  for (const l of AvailableLanguages) {
    if (l.language === lang) return l;
  }
  return AvailableLanguages[0];
}

export const AvailableLanguages: Language[] = [
  {
    name: 'Python 2',
    editorValue: 'python',
    language: 'python2'
  },
  {
    name: 'Python 3',
    editorValue: 'python',
    language: 'python3'
  },
  {
    name: 'Java',
    editorValue: 'java',
    language: 'java',
  },
  {
    name: 'Javascript',
    editorValue: 'javascript',
    language: 'javascript'
  },
  {
    name: 'C++',
    editorValue: 'c_cpp',
    language: 'c++'
  },
  {
    name: 'PHP',
    editorValue: 'php',
    language: 'php'
  },
  {
    name: 'Rust',
    editorValue: 'rust',
    language: 'rust'
  },
  {
    name: 'Typescript',
    editorValue: 'typescript',
    language: 'typescript'
  },
  {
    name: 'Go',
    editorValue: 'golang',
    language: 'go'
  },
  {
    name: 'Powershell',
    editorValue: 'powershell',
    language: 'powershell'
  },
  {
    name: 'Bash',
    editorValue: 'batchfile',
    language: 'bash'
  }
]