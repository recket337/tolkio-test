import React, { useEffect, useState } from 'react';
import { FormMakerPropsType, InputTypes } from './types';
import { getInitialState } from './utils';

export const FormMaker = ({ config, id }: FormMakerPropsType) => {
    const [values, setValues] = useState<Record<string,string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }

    useEffect(() => {
        setValues(getInitialState(config));
        // redux update
    }, [])

    return (
      <form className="App" id={id}>
        {config.map(item => {
            return <div>
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