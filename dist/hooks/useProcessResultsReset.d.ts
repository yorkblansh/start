import { Dispatch, SetStateAction } from 'react';
/**
 * clean command rersults (`done` or `error`) from screen after command had been done
 */
export declare const useProcessResultReset: (predicat: boolean, setPercent: Dispatch<SetStateAction<number>>) => void;
