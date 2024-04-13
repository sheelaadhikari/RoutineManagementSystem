import {configureStore} from '@reduxjs/toolkit';
import userSlice from './slice/UserSlice';
import departmentSlice from './slice/DepartmentSlice';

const store=configureStore({   
    reducer:{
        userapp:userSlice,
        departmentapp:departmentSlice,
    },

});
export default store;
