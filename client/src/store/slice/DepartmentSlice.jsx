import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// create department
export const createDepartment=createAsyncThunk('createDepartment',async(data,rejectWithValue)=>{
    try{
        const res=await axios.post('http://localhost:8001/api/v1/department/d-name',data);
        return res.data;
    }
    catch(error){
        return rejectWithValue(error.res);
    }
})
// read department
export const readDepartment=createAsyncThunk('readDepartment',async(data,rejectWithValue)=>{
    try{
        const res=await axios.get('http://localhost:8001/api/v1/department/getdepartment');
        return res.data;
    }
    catch(error){
        return rejectWithValue(error.res);
    }
})
// read single department
export const readSingleDepartment=createAsyncThunk('readSingleDepartment',async(data,rejectWithValue)=>{
    try{
        const res=await axios.get(`http://localhost:8001/api/v1/department/getsingledepartment/${data}`);
        return res.data;
    }
    catch(error){
        return rejectWithValue(error.res);
    }
})
// delete department
export const deleteDepartment=createAsyncThunk('deleteDepartment',async(id,rejectWithValue)=>{
    try{
        const res=await axios.delete(`http://localhost:8001/api/v1/department/deletedepartment/${id}`);
        return res.data;
    }
    catch(error){
        return rejectWithValue(error.res);
    }
})
// // // update department
export const updateDepartment=createAsyncThunk('updateDepartment',async(data,rejectWithValue)=>{
    try{
        const res=await axios.put(`http://localhost:8001/api/v1/department/updatedepartment/${data._id}`,data);
        return res.data;
    }
    catch(error){
        return rejectWithValue(error.res);
    }
})

 const departmentSlice=createSlice({
    name:'departmentSlice',
    initialState:{
        department:{
            listdepartment:[],
            singledepartment:null,
        },
        loading:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder
            .addCase(createDepartment.pending,(state)=>{
                state.loading=true;
            })
            .addCase(createDepartment.fulfilled,(state,action)=>{
                state.department.listdepartment.alldepartments.push(action.payload.department);
                // console.log(action.payload.department);
                state.loading=false;
            })
            .addCase(createDepartment.rejected,(state,action)=>{
                state.loading=true;
                state.error=action.payload;
            })
            .addCase(readDepartment.pending,(state)=>{
                state.loading=true;
            })
            .addCase(readDepartment.fulfilled, (state, action) => {
                state.loading = false;
                state.department.listdepartment=action.payload;
                // console.log(action.payload);
            })
            .addCase(readDepartment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(readSingleDepartment.pending,(state)=>{
                state.loading=true;
            })
            .addCase(readSingleDepartment.fulfilled, (state, action) => {
                state.loading = false;
                state.department.singledepartment=action.payload;
            })
            .addCase(readSingleDepartment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteDepartment.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteDepartment.fulfilled, (state, action) => {
                state.loading = false;
                const deletedId = action.payload.deletedDepartment._id;
                if (deletedId) {
                    state.department.listdepartment.alldepartments = state.department.listdepartment.alldepartments.filter(item => item._id !== deletedId);
                console.log('Deleted department ID:', deletedId); // Log the ID
                } else {
                    console.error('Department ID not found in payload:', action.payload);
                }
            })
            .addCase(deleteDepartment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updateDepartment.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateDepartment.fulfilled, (state, action) => {
                state.loading = false;
             state.department.listdepartment.alldepartments=state.department.listdepartment.alldepartments.map(item=>(item._id === action.payload.department._id?action.payload.department:item ));
                console.log(action.payload);
               
                })
            .addCase(updateDepartment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default departmentSlice.reducer;