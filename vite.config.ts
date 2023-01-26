import { defineConfig, loadEnv, UserConfig, UserConfigExport } from 'vite';

import glsl from 'vite-plugin-glsl';

import glob from 'glob';

import { resolve as pathResolve } from 'path';

export default async ({ mode }: UserConfig): Promise<UserConfigExport> => {
	if (mode) process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return await new Promise((resolve, reject) => {
		const input: Record<string, string> = {
			main: pathResolve(__dirname, 'index.html')
		};

		glob('src/**/*.html', function (err, res) {
			if (err) {
				console.error('Error', err);
				reject(null);
			} else {
				if (Array.isArray(res)) {
					res.forEach((item) => {
						let fullPath: string;
						let key: string;
						if (typeof item === 'string') {
							fullPath = pathResolve(__dirname, item);
							key = fullPath.replace(/\\|\//g, '');
							input[key] = fullPath;
						}
					});
				}
				resolve({ input });
			}
		});
	}).then((result) => {
		return defineConfig({
			build: {
				rollupOptions: {
					input: (result as any).input
				}
			},
			resolve: {
				alias: [
					{ find: '@', replacement: pathResolve(__dirname) },
					{ find: '@src', replacement: pathResolve(__dirname, 'src') },
					{ find: '@styles', replacement: pathResolve(__dirname, 'styles') },
					{ find: '@utils', replacement: pathResolve(__dirname, 'utils') }
				]
			},
			plugins: [glsl()],
			base: './'
		});
	});
};
