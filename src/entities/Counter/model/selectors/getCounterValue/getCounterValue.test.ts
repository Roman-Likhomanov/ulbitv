import {getCounterValue} from './getCounterValue';
import {DeepPartial} from '@reduxjs/toolkit';
import {StateShema} from 'app/providers/StoreProvider';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateShema> = {
            counter: {value: 10}
        }
        expect(getCounterValue(state as StateShema)).toEqual(10)
    })
})