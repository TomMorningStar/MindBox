import { pathsToModuleNameMapper } from 'ts-jest'

export const roots = ['<rootDir>/src']
export const transform = {
	'^.+\\.tsx?$': 'ts-jest',
}

export default {
	roots,
	transform,
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
		'\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/styleMock.js',
		...pathsToModuleNameMapper(
			{
				'@/*': ['src/*'],
			},
			{ prefix: '<rootDir>/' }
		),
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
}
