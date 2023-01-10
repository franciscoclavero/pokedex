import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export function consumeApi<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [ data, setData ] = useState<T | []>([]);
  const [ isFetching, setIsFetching] = useState(true);
  const [ error, setError] = useState<Error | null>(null);

  const api = axios.create({
    baseURL: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/'
  });

  useEffect(() => {
    api.get(url, options)
    .then(response => {
      setData(response.data.pokemon);
    }).catch(err => {
      setError(err)
    }).finally(() => {
      setIsFetching(false);
    });
  }, []);

  return { data, error, isFetching };
};
