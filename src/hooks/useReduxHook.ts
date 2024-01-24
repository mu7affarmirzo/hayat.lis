import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../feature/rootreducer'
import { AppDispatch } from '../feature/store'

export const useReduxDispatch = () => useDispatch<AppDispatch>()
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector
