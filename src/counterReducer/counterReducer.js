import { TYPES } from "./counterActions";

export function reducer(state, action) {
  switch (action.type) {
    // CONTADOR
    case TYPES.DECREMENTAR: {
      return {
        ...state,
        contador: state.contador - 1,
      };
    }
    case TYPES.RESETEAR:{
        return {
            ...state,
            contador: 0
        }
    }
    case TYPES.INCREMENTAR: {
      return {
        ...state,
        contador: state.contador + 1,
      };
    }

    // VISIBLE
    case TYPES.MOSTRAR: {
      return {
        ...state,
        visible: true,
      };
    }

    case TYPES.OCULTAR: {
      return {
        ...state,
        visible: false,
      };
    }
    default:
      return state;
  }
}

