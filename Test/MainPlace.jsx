import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './contentSlice';

export default function MainPlace() {
  const { userName, age, email } = useSelector((state) => state.content);

  console.log(userName, age, email);

  const dispatch = useDispatch();

  dispatch(changeName('Ayo'));

  console.log(userName, age, email);

  return <div className="bg-red-600">mainPlace</div>;
}
