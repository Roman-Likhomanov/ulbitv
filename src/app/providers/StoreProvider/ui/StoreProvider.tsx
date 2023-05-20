import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import {DeepPartial} from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateShema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState as StateShema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
