module.exports = {
	root: true,
	extends: [
		'@react-native-community',
		'prettier',
		'plugin:cypress/recommended',
	],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
};
