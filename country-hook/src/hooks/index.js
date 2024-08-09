import { useEffect, useState } from 'react';
import { getByName } from '../services/country';

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
};

export const useCountry = (name) => {
  const [country, setCountry] = useState(null)

  useEffect(() => { 
    name === '' ? null :
    getByName(name).then(foundCountry => {
        setCountry(foundCountry)
    })
  }, [name])

  return country
}

