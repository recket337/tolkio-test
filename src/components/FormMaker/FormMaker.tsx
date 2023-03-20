import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFormData } from '../../slices/formStorageSlice';
import { FormMakerPropsType, InputTypes } from './types';
import { getInitialState } from './utils';

export const FormMaker = ({ label, config, id }: FormMakerPropsType) => {
    const [values, setValues] = useState<Record<string,string>>({});

    const authFormData = useAppSelector((state) => state.formStorage[id])
    
    const dispatch = useAppDispatch()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    useEffect(() => {
        dispatch(setFormData({
            id,
            data: values
        }));
    }, [dispatch, id, values])

    useEffect(() => {
        const initialValue = getInitialState(config);
        setValues(initialValue);
        dispatch(setFormData({
            id,
            data: initialValue,
        }));
    }, [config, dispatch, id])

    useEffect(() => {
        console.log('redux', authFormData);
    }, [authFormData])

    return (
      <form className="form" id={id}>
        { label && <h3 className='form-label'>{label}</h3> }
        {config.map(item => {
            return <div className='inputField'>
                <label htmlFor={item.id}>
                    {item.label}
                </label>
                <input 
                    type={InputTypes[item.type]} 
                    id={item.id} onChange={handleChange} 
                    value={values[item.id]}
                    required={item.required}
                />
            </div>
        })}
      </form>
    );
  }