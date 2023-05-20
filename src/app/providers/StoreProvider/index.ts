import type { StateShema } from './config/StateShema';
import { createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateShema,
};
