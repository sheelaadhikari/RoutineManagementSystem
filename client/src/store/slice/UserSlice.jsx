import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
// // create User
// // export const createUser=createAsyncThunk('createUser',async(data,rejectWithValue)=>{
// //     try{
// //         const res=await axios.post('',data);
// //         return res.data;
// //     }
// //     catch(error){
// //         return rejectWithValue(error.res);
// //     }
// // })
// // read User
// // export const readUser=createAsyncThunk('readUser',async(data,rejectWithValue)=>{
// //     try{
// //         const res=await axios.get('http://localhost:8001/api/v1/bca/get-singledr/Monday');
// //         return res.data;
// //     }
// //     catch(error){
// //         return rejectWithValue(error.res);
// //     }
// // })
// // delete User
// // export const deleteUser=createAsyncThunk('deleteUser',async(id,rejectWithValue)=>{
// //     try{
// //         const res=await axios.post('${id}');
// //         return res.data;
// //     }
// //     catch(error){
// //         return rejectWithValue(error.res);
// //     }
// // })
// // // update User
// // export const updateUser=createAsyncThunk('updateUser',async(data,rejectWithValue)=>{
// //     try{
// //         const res=await axios.post('${data.id}',data);
// //         return res.data;
// //     }
// //     catch(error){
// //         return rejectWithValue(error.res);
// //     }
// // })

const userSlice=createSlice({
    name:'User',
    initialState:{
        user:[],
        loading:false,
        error:null,
    },
//     extraReducers:(builder)=>{
//         builder
//             // .addCase(createUser.pending,(state)=>{
//             //     state.loading=true;
//             // })
//             // .addCase(createUser.fulfilled,(state,action)=>{
//             //     state.user.push(action.payload);
//             //     state.loading=false;
//             // })
//             // .addCase(createUser.rejected,(state)=>{
//             //     state.loading=true;
//             //     state.error=action.payload;
//             // })
//             .addCase(readUser.pending,(state)=>{
//                 state.loading=true;
//             })
//             .addCase(readUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.user=action.payload;
//             })
//             .addCase(readUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload.message;
//             })
//             // .addCase(deleteUser.pending, (state) => {
//             //     state.loading = true;
//             // })
//             // .addCase(deleteUser.fulfilled, (state, action) => {
//             //     state.loading = false;
//             //     const {id}=action.payload;
//             //     if(id){
//             //         state.user=state.user.filter(item=>item.id !==id)
//             //     }
//             //     console.log("delete action",action.payload);
//             //     })
//             // .addCase(deleteUser.rejected, (state, action) => {
//             //     state.loading = false;
//             //     state.error = action.payload.message;
//             // })
//             // .addCase(updateUser.pending, (state) => {
//             //     state.loading = true;
//             // })
//             // .addCase(updateUser.fulfilled, (state, action) => {
//             //     state.loading = false;
//             //         state.user=state.user.map(item=>(item.id === action.payload.id?action.payload:item ));
               
//             //     })
//             // .addCase(updateUser.rejected, (state, action) => {
//             //     state.loading = false;
//             //     state.error = action.payload;
//             // });
//     },
});

export default userSlice.reducer;