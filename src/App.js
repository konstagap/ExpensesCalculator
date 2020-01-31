import React, { useState, useEffect } from "react";
import useForm from "./CustomHooks/useForm";
import "./App.css";

import List from "./components/List";
import Form from "./components/Form";
import Head from "./components/Head";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import uuid from "uuid/v4";

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  //custom hook to control state of inputs
  const [values, handleChange, reset] = useForm({
    charge: "",
    amount: ""
  });

  //edit boolean
  const [edit, setEdit] = useState(false);
  //edited item
  const [id, setId] = useState(0);
  //useEffect to set items to local storage every time we change expenses list
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = e => {
    e.preventDefault();
    if (values.charge) {
      if (edit) {
        const expense = expenses.find(item => item.id === id);
        expense.charge = values.charge;
        expense.amount = +values.amount;
        setExpenses(expenses);
        toast.warn("Expense edited");
        setEdit(false);
      } else {
        const expense = {
          id: uuid(),
          charge: values.charge,
          amount: +values.amount
        };
        setExpenses(initial => {
          return [expense, ...initial];
        });
        toast.success("Expense added");
      }
      reset({ charge: "", amount: "" });
    } else {
      toast.error("Charge name can not be empty");
    }
  };
  //clear all Expenses
  const clearItems = () => {
    setExpenses([]);
  };
  //delete expense
  const handleDelete = id => {
    setExpenses(expenses =>
      expenses.filter(item => {
        return item.id !== id;
      })
    );
    toast.warn("Expense deleted");
  };
  //edit expense
  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    reset({ charge: expense.charge, amount: expense.amount });
    setEdit(true);
    setId(id);
  };
  return (
    <>
      <ToastContainer />
      <Head expenses={expenses} />
      <main className="App">
        <Form
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <List
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
    </>
  );
}

export default App;
