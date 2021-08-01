module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
};
