import shelljs from 'shelljs';
import { dockerComposeHandler } from './StdHandlers/dockerComposeHandler.js';
import { logger } from './logger.js';
import { defaultHandler } from './StdHandlers/defaultHandler.js';
import { npmScriptHandler } from './StdHandlers/npmScriptHandler.js';
export const commandExecutor = ({ cmd, type }, callback, _logger) => {
    const childProcess = shelljs.exec(cmd.join(' && '), {
        async: true,
        silent: true,
    });
    const handlersMap = {
        docker_compose: dockerComposeHandler,
        default: defaultHandler,
        npm_script: npmScriptHandler,
    };
    if (type) {
        handlersMap[type](childProcess, callback, logger);
    }
    else {
        handlersMap['default'](childProcess, callback, logger);
    }
};
