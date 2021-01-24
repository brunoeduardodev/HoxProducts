import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { ApplicationState } from '../store/index'

export const useSafeSelector: TypedUseSelectorHook<ApplicationState> = useSelector
