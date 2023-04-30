import { YamlConfig } from '../interfaces/YamlConfig.interface.js';
import { ReadFileError } from '../interfaces/readfile.error.interface.js';
export declare const useYamlConfig: () => {
    yamlConfig: (YamlConfig & {
        error: ReadFileError;
    }) | undefined;
    isLoading: boolean;
    isError: boolean;
    errorCode: string | undefined;
};
