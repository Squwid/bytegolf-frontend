export const PrimaryColor = '#0baa54';
export const SecondaryColor = '#de5353';
export const ThirdColor = '#414141';
export const LightTextColor = '#e6e6e6';

const backend = 'http://10.218.67.120:8080';
// const backend = process.env.REACT_APP_BACKEND_URI;

export const BackendURL = () => `${backend}/api`
export const RawBackendURL = () => `${backend}`;