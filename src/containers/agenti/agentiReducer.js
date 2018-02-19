import { AGENTI_SET} from "./agentiConstants";

export default function reducer(state = [], action={} ) {
  switch (action.type) {
    case AGENTI_SET:{
      //  sessionStorage.setItem('agenti',JSON.stringify(action.response))
      return action.response;
    }
    default:
      return state;
  }
}
