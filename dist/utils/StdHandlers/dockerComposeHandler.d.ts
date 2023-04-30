import { StdHandler } from '../../interfaces/StdHandler.interface.js';
export interface DockerComposeExecutorCallbackProps {
    dockerComposeExitCode?: number;
    dockerComposePercent?: number;
}
export declare const dockerComposeHandler: StdHandler;
