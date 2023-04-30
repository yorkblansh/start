export type Setup = 'npm_script' | 'docker_compose' | 'default'

export interface Command {
	cmd: string[]
	type?: Setup
}

export interface YamlConfig {
	your_useful_scripts: { [commandName: string]: Command }
}
