import { createSlice } from '@reduxjs/toolkit';
import {
  addIncomeTransactionThunk,
  deleteTransactionThunk,
  getIncomeTransactionsThunk
} from './thunks';

const initialState = {
  incomes: null,
  monthStats: null,
};

export const incomeSlice = createSlice({
  name: 'income',
  initialState,
  extraReducers: builder =>
    builder
      // ------------GET TRANSACTIONS------------
      .addCase(getIncomeTransactionsThunk.fulfilled, (state, { payload }) => {
        state.incomes = payload.incomes;
        state.monthStats = payload.monthStats
      })

      // ------------ADD TRANSACTION------------
      .addCase(addIncomeTransactionThunk.fulfilled, (state, { payload }) => {
        console.log(state)
        state.incomes.push(payload.transaction);
      })

      // ------------DELETE TRANSACTION------------
      .addCase(deleteTransactionThunk.fulfilled, (state, { payload }) => {
        state.incomes = state.incomes.filter(item => item.id !== payload);
      })

      // .addMatcher(
      //   isAnyOf(
      //     fetchIncomeCategoriesThunk.pending,
      //     addTransactionThunk.pending,
      //     deleteTransactionThunk.pending
      //   ),

      //   state => {
      //     state.contacts.isLoading = true;
      //     state.contacts.error = null;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(
      //     fetchIncomeCategoriesThunk.rejected,
      //     addTransactionThunk.rejected,
      //     deleteTransactionThunk.rejected
      //   ),

      //   (state, { payload }) => {
      //     state.contacts.isLoading = false;
      //     state.contacts.error = payload;
      //   }
      // )
      // .addMatcher(
      //   isAnyOf(
      //     requestIncomeCategoriesThunk.fulfilled,
      //     addTransactionThunk.fulfilled,
      //     deleteTransactionThunk.fulfilled
      //   ),

      //   state => {
      //     state.contacts.isLoading = false;
      //     state.contacts.error = null;
      //   }
      // ),
});

export const incomeReducer = incomeSlice.reducer;
