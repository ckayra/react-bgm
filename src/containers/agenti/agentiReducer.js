import { AGENTI_SET} from "./agentiConstants";

export default function reducer(state = [], action={} ) {
  switch (action.type) {
    case AGENTI_SET:{
      console.log('reducer',action)
      return action.response;
    }
    default:
      return state;
  }
}
