/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setFormData } from "../../slices/formStorageSlice";
import { FormMakerProps, InputTypes } from "./types";
import { getInitialState } from "./utils";

export const FormMaker = ({ label, config, id }: FormMakerProps) => {
  const formData = useAppSelector((state) => state.formStorage[id]);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setFormData({
        id,
        data: {
          ...formData,
          [e.target.id]: e.target.value,
        },
      })
    );

  useEffect(() => {
    const initialValue = getInitialState(config);
    dispatch(
      setFormData({
        id,
        data: initialValue,
      })
    );
  }, []);

  return (
    <form className="form" id={id}>
      {label && <h3 className="form-label">{label}</h3>}
      {config.map((item) => {
        return (
          <div className="inputField" key={item.id}>
            <label htmlFor={item.id}>{item.label}</label>
            <input
              type={InputTypes[item.type]}
              id={item.id}
              onChange={handleChange}
              value={formData?.[item.id] ?? ""} // could be loader for single input
              required={item.required}
              className='styled-input'
            />
          </div>
        );
      })}
    </form>
  );
};
