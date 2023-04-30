export const npmScriptHandler = (childProcess, callback, logger) => {
    // childProcess.stdout?.on('data', (d) => {
    // 	console.log({ d })
    // })
    childProcess.on('close', (code, signal) => {
        if (code !== null)
            callback({ exitCode: code });
    });
};
