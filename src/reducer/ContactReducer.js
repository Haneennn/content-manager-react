import {CREATE_CONTACT,GET_CONTACT, UPDATE_CONTACT, 
  DELETE_CONTACT,SELECT_CONTACT,
  CLEAR_CONTACT,DELETE_ALL} from '../constant/type';
//import Contact from '../components/contact/Contact';


// 'contacts' is whole data and 'contact' is modfified data
const initialState = {
    contacts: [
        {
          "id": 1,
          "name": "Leanne Graham",
          
          "email": "Leanne@Graham.biz",
          
          "phone": "31-01-2018 15:04",

        },
        {
          "id": 2,
          "name": "Ervin Howell",

          "email": "Ervin@Howell.tv",
          
          "phone": "31-01-2018 15:04",
          
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          
          "email": "Clementine@Bauch.net",
         
          "phone": "31-01-2018 15:04",
          
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          
          "email": "Patricia@Lebsack.org",
    
          "phone": "31-01-2018 15:04",
         
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          
          "email": "Chelsey@Dietrich.ca",
        
          "phone": "31-01-2018 15:04",
          
        },
        {
          "id": 6,
          "name": "Dennis Schulist",
          
          "email": "Dennis@Schulist.info",
         
          "phone": "31-01-2018 15:04",
         
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          
          "email": "Kurtis@Weissnat.biz",
          
          "phone": "31-01-2018 15:04",
         
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir",
         
          "email": "Nicholas@Runolfsdottir.me",
          
          "phone": "31-01-2018 15:04",
         
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          
          "email": "Glenna@Reichert.io",
         
          "phone": "31-01-2018 15:04",
         
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          
          "email": "Clementina@DuBuque.biz",
         
          "phone": "31-01-2018 15:04",
          
        }
      ],
    contact: null,
    selectedContacts:[],
};

export const contactReducer = (state = initialState,action) => {
    switch(action.type){
        case CREATE_CONTACT:
            return{
                ...state,
                contacts:[action.payload, ...state.contacts],
            };
        case GET_CONTACT:
          let arr = state.contacts.filter((contact) => contact.id === action.payload);
          arr = arr.values();
          for(let val of arr)
          {
            arr = val;
          }
          return{
            ...state,
            contact: arr,
          };  
          case UPDATE_CONTACT:
            return{
              ...state,
              contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload: contact),
            }
            case DELETE_CONTACT:
                return{
                  ...state,
                  contacts: state.contacts.filter((contact) => contact.id !== action.payload),
                }
              
              case SELECT_CONTACT:
                  return{
                    ...state,
                    selectedContacts: action.payload,
                }
                case CLEAR_CONTACT:
                    return{
                    ...state,
                    selectedContacts: [],
                    }
                  
                  case DELETE_ALL:
                      return{
                        ...state,
                    contacts:[],     
                      }
                    
        default:
        return state;
    }
};
