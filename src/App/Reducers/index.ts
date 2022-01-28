import { configureStore } from "@reduxjs/toolkit";
import {reducers} from '../../Business';
import axios from 'axios';

export default configureStore({
    reducer: reducers,
    middleware: defaultMiddleware => defaultMiddleware({
        thunk: {
            extraArgument: {
                fetch: axios,
            }
        }
    })
});