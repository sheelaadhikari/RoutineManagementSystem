import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// create department
// export const createDepartment=createAsyncThunk('createDepartment',async(data,rejectWithValue)=>{
//     try{
//         const res=await axios.post('',data);
//         return res.data;
//     }
//     catch(error){
//         return rejectWithValue(error.res);
//     }
// })
// read department
export const readDepartment=createAsyncThunk('readDepartment',async(data,rejectWithValue)=>{
    try{
        const res=await axios.get('http://localhost:8001/api/v1/bca/get-singledr/Monday');
        return res.data;
    }
    catch(error){
        return rejectWithValue(error.res);
    }
})
// delete department
// export const deleteDepartment=createAsyncThunk('deleteDepartment',async(id,rejectWithValue)=>{
//     try{
//         const res=await axios.post('${id}');
//         return res.data;
//     }
//     catch(error){
//         return rejectWithValue(error.res);
//     }
// })
// // update department
// export const updateDepartment=createAsyncThunk('updateDepartment',async(data,rejectWithValue)=>{
//     try{
//         const res=await axios.post('${data.id}',data);
//         return res.data;
//     }
//     catch(error){
//         return rejectWithValue(error.res);
//     }
// })

 const departmentSlice=createSlice({
    name:'departmentSlice',
    initialState:{
        department:[],
        loading:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder
            // .addCase(createDepartment.pending,(state)=>{
            //     state.loading=true;
            // })
            // .addCase(createDepartment.fulfilled,(state,action)=>{
            //     state.department.push(action.payload);
            //     state.loading=false;
            // })
            // .addCase(createDepartment.rejected,(state)=>{
            //     state.loading=true;
            //     state.error=action.payload;
            // })
            .addCase(readDepartment.pending,(state)=>{
                state.loading=true;
            })
            .addCase(readDepartment.fulfilled, (state, action) => {
                state.loading = false;
                state.department=action.payload;
            })
            .addCase(readDepartment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            // .addCase(deleteDepartment.pending, (state) => {
            //     state.loading = true;
            // })
            // .addCase(deleteDepartment.fulfilled, (state, action) => {
            //     state.loading = false;
            //     const {id}=action.payload;
            //     if(id){
            //         state.department=state.department.filter(item=>item.id !==id)
            //     }
            //     console.log("delete action",action.payload);
            //     })
            // .addCase(deleteDepartment.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload.message;
            // })
            // .addCase(updateDepartment.pending, (state) => {
            //     state.loading = true;
            // })
            // .addCase(updateDepartment.fulfilled, (state, action) => {
            //     state.loading = false;
            //         state.department=state.department.map(item=>(item.id === action.payload.id?action.payload:item ));
               
            //     })
            // .addCase(updateDepartment.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // });
    },
});

export default departmentSlice.reducer;