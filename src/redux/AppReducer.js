const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON';
const SET_STATE = 'SET_STATE';
const SET_SUBJECTS_COUNT = 'SET_SUBJECTS_COUNT';
const SET_SUBJECTS = 'SET_SUBJECTS';
const BACK = 'BACK';


let initialState = {
    person: [
        {
            id: 1,
            name: "Nilfgaard",
            image: "nilfgaard.jpg"
        },
        {
            id: 2,
            name: "Redania",
            image: "redania.jpg"
        },
        {
            id: 3,
            name: "Skellige",
            image: "skellige.jpg"
        },
        {
            id: 4,
            name: "Emhyr var Emreis",
            post: "Urcheon of Erlenwald",
            image: "emhyr.jpg",
            parent: 1
        },
        {
            id: 5,
            name: "Morvran Voorhis",
            post: "General Commander",
            image: "morvran.jpg",
            parent: 1
        },
        {
            id: 6,
            name: "Jan Calveit",
            post: "Magne Division",
            image: "calveit.jpg",
            parent: 1
        },
        {
            id: 7,
            name: "Ardal aep Dahy",
            post: "East Army Group",
            image: "ardal.jpg",
            parent: 4
        },
        {
            id: 8,
            name: "Ceallach Dyffryn",
            post: "Seneschal",
            image: "ceallach.jpg",
            parent: 4
        },
        {
            id: 9,
            name: "Joachim de Wett",
            post: "Prince",
            image: "joachim.jpg",
            parent: 4
        },
        {
            id: 10,
            name: "Shilard Fitz-Oesterlen",
            post: "Ambassador",
            image: "shilard.jpg",
            parent: 4
        },
        {
            id: 11,
            name: "Stefan Skellen",
            post: "Imperial coroner",
            image: "skellen.jpg",
            parent: 4
        },
        {
            id: 12,
            name: "Menno Coehoorn",
            post: "Governor of Cintra",
            image: "menno.jpg",
            parent: 4
        },
        {
            id: 13,
            name: "Vattier de Rideaux",
            post: "Spymaster",
            image: "vattier.jpg",
            parent: 4
        },
        {
            id: 14,
            name: "Letho of Gulet",
            post: "Witcher",
            image: "letho.jpg",
            parent: 5
        },
        {
            id: 15,
            name: "Cahir Dyffryn",
            image: "dyffryn.jpg",
            parent: 5
        },
        {
            id: 16,
            name: "Vilgefortz",
            post: "Mage",
            image: "vilgefortz.jpg",
            parent: 5
        },
        {
            id: 17,
            name: "Tibor Eggebracht",
            post: "Soldier",
            image: "tibor.jpg",
            parent: 6
        },
        {
            id: 18,
            name: "Xarthisius",
            post: "Mage",
            image: "xarthisius.jpg",
            parent: 6
        },
        {
            id: 19,
            name: "Albrich",
            post: "Mage",
            image: "albrich.jpg",
            parent: 7
        },
        {
            id: 20,
            name: "Peter Saar Gwynleve",
            post: "Soldier",
            image: "gwynleve.jpg",
            parent: 7
        },
        {
            id: 21,
            name: "Assire var Anahid",
            post: "Mage",
            image: "anahid.jpg",
            parent: 8
        },
        {
            id: 22,
            name: "Fringilla Vigo",
            post: "Mage",
            image: "fringilla.jpg",
            parent: 10
        },
        {
            id: 23,
            name: "Sweers",
            post: "Knight",
            image: "sweers.jpg",
            parent: 22
        },
        {
            id: 24,
            name: "Vanhemar",
            post: "Mage",
            image: "vanhemar.jpg",
            parent: 23
        },
        {
            id: 25,
            name: "Auckes",
            post: "Witcher",
            image: "auckes.jpg",
            parent: 18
        },
        {
            id: 26,
            name: "Radovid V",
            post: "King of Redania",
            image: "radovid.jpg",
            parent: 2
        },
        {
            id: 27,
            name: "Horst Borsodi",
            post: "Auctioneer",
            image: "horst.jpg",
            parent: 26
        },
        {
            id: 28,
            name: "Ewald Borsodi",
            post: "Assassin",
            image: "borsodi.jpg",
            parent: 27
        },

        {
            id: 29,
            name: "Iris von Everec",
            post: "Painter",
            image: "iris.jpg",
            parent: 26
        },
        {
            id: 30,
            name: "Olgierd von Everec",
            post: "Soldier",
            image: "olgierd.jpg",
            parent: 29
        },
        {
            id: 31,
            name: "Philippa Eilhart",
            post: "Mage",
            image: "philippa.jpg",
            parent: 26
        },
        {
            id: 32,
            name: "Sigismund Dijkstra",
            post: "Spymaster",
            image: "dijkstra.jpg",
            parent: 26
        },
        {
            id: 33,
            name: "Vlodimir von Everec",
            post: "Noble",
            image: "everec.jpg",
            parent: 26
        },
        {
            id: 34,
            name: "Vicovaro",
            post: "Novice",
            image: "vicovaro.jpg",
            parent: 31
        },
        {
            id: 35,
            name: "Bran Tuirseach",
            post: "The Conqueror",
            image: "bran.jpg",
            parent: 3
        }
    ],              // Новый массив данных заливать сюда!)
    currentPerson: {},
    subjectsCount: null,
    subjects: []
};


const AppReducer = (state = initialState, action) => {
    const addSubjectsCount = (parentId, state) => {                // С помощью рекурсии добавляет значение id родителей всех
        let counter = parentId;                                   // уровней в соответствующий ключ
        let acc = [counter];
        let findParent = (state) => {
            if (counter === undefined) {
                return acc;
            }
            let currentItem = state.filter(p => p.id === counter);
            counter = currentItem[0].parent;
            if (counter === undefined) {
                return acc
            }
            acc.push(counter);
            return findParent(state);
        };
        return findParent(state)
    };
    switch (action.type) {
        case SET_CURRENT_PERSON:
            return {
                ...state, currentPerson: action.person

            };
        case SET_STATE:
            return {
                ...state, person: state.person.map(p => ({            // Добавляет новый ключ "Список всех родителей"
                    id: p.id,                                         // который потом используется для подсчета подчиненных
                    name: p.name,
                    image: p.image,
                    post: p.post,
                    parent: p.parent,
                    listOfParentsId: addSubjectsCount(p.parent, state.person)
                }))
            };
        case SET_SUBJECTS_COUNT:
            return {
                ...state, subjectsCount: state.app.person           // Фильтрует по родителям, длинна массива есть
                    .filter(p => [action.person.id]                 // количество подчиненных
                        .every(el => p.listOfParentsId.includes(el))).length
            };
        case SET_SUBJECTS:
            return {
                ...state,
                /*subjects: [state.app.person                        // Изначально пустой массив, поэтому подчеркивает, но работает
                    .filter(p => p.parent === currentPerson.id)]*/   // Когда он вызывается, там уже есть данные.
            };                                                     // Возможно так делать не стоит, сообщите если я не прав.
        case BACK:
            let back = (currentPerson) => {
                state.person.find(p => p.id === currentPerson.parent)
            };
        return {
            ...state, currentPerson: back(state.currentPerson)
        };
        default:
            return state;
    }
};

export const setState = () => ({type: SET_STATE});
export const setCurrentPerson = (person) => ({type: SET_CURRENT_PERSON, person});
export const setSubjectsCount = (person) => ({type: SET_SUBJECTS_COUNT, person});
export const back = () => ({type: BACK});

export default AppReducer;