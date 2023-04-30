import { Command } from '../interfaces/YamlConfig.interface.js';
import { ExecutionCallbackProps } from '../interfaces/ExecutorCallbackProps.interface.js';
import { logger } from './logger.js';
export declare const commandExecutor: ({ cmd, type }: Command, callback: (executionCallbackProps: ExecutionCallbackProps) => void, _logger?: typeof logger) => void;
