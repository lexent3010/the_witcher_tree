const SET_CURRENT_PERSON = 'SET_CURRENT_PERSON';
const SET_STATE = 'SET_STATE';
const BACK = 'BACK';                                    // Константы для кейсов и AC
const SET_HOME_PAGE = 'SET_HOME_PAGE';
const CHANGE_PERSON = 'CHANGE_PERSON';


let initialState = {
    persons: [
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
    ],  //     <<< Новый массив данных заливать сюда!)
    currentPerson: null,
    currentPage: null,
    subjects: null,             // Все побочные объекты специально оставил пустыми, что бы заполнить тогда,
    checkBox: null              // когда UI попросит.
};


const AppReducer = (state = initialState, action) => {
    const addSubjectsCount = (parentId, state) => {                // С помощью рекурсии добавляет значение id родителей всех
        let counter = parentId;                                    // уровней в соответствующий ключ
        let acc = [counter];
        let findParent = (state) => {
            if (counter === undefined) {
                return acc;
            }
            let currentItem = state.find(person => person.id === counter);
            counter = currentItem.parent;
            if (counter === undefined) {
                return acc
            }
            acc.push(counter);
            return findParent(state);
        };
        return findParent(state)
    };
    const changePerson = (person, where) => {
        let siblingPerson = state.persons.filter(p => p.parent === person.parent);
        let switchingPerson = (siblingPerson, person, where) => {
            switch (where) {
                case 'NEXT':                                            // Логика кнопок < и >
                    return siblingPerson.indexOf(person) + 1;
                case 'PREVIOUS':
                    return siblingPerson.indexOf(person) - 1;
                default:
                    return null
            }
        };
        return siblingPerson[switchingPerson(siblingPerson, person, where)]
    };
    const setCurrentPerson = (person) => {                        // Функция для выбора текущего персонажа
        let setCheckBox = (person, siblingPerson) => {
            if  (siblingPerson.length <= 1) {                     // check box для зануления кнопок < и >,
                return null;                                      // если следующего, или предыдущего нет.
            } else if (changePerson(person, 'NEXT') === undefined) {
                return 'notNext'
            } else if (changePerson(person, 'PREVIOUS') === undefined) {
                return 'notPrevious'
            } else {
                return 'ok'
            }
        };
        return {
            ...state,
            currentPerson: [person],
            subjects: state.persons.filter(el => el.parent === person.id),
            currentPage: 'personPage',
            checkBox: setCheckBox(person, state.persons.filter(p => p.parent === person.parent)),
        };
    };
    const setHomePage = () => {
        return {                                               // Функция для перехода на домашнюю страницу
            ...state,
            currentPage: 'homePage',
            currentPerson: state.persons.filter(person => person.parent === undefined)
        };
    };
    const setState = () => {
        let newState = {
            ...state,
            persons: state.persons.map(person => ({            // Добавляет новый ключ "Список всех родителей"
                id: person.id,                               // который потом используется для подсчета подчиненных
                name: person.name,
                image: person.image,
                post: person.post,
                parent: person.parent,
                listOfParentsId: addSubjectsCount(person.parent, state.persons)
            }))
        };
        return {
            ...state,
            persons: newState.persons.map(person => ({        // Добавляет новый ключ
                id: person.id,                               // "Количество подчиненных всех уровней"
                name: person.name,
                image: person.image,
                post: person.post,
                parent: person.parent,
                subjectsCount: newState.persons.filter(element => [person.id]
                    .every(el => element.listOfParentsId.includes(el))).length,
            }))}
    };
    const back = (parentId) => {
        let person = state.persons.find(person => person.id === parentId);
        if (parentId === undefined) {
            return setHomePage();                          // Логика кнопки 'назад'
        }
        return setCurrentPerson(person)
    };
    switch (action.type) {
        case SET_CURRENT_PERSON:
           return setCurrentPerson(action.person);
        case SET_STATE:
            return setState();
        case BACK:
            return back(state.currentPerson[0].parent);
        case SET_HOME_PAGE:
            return setHomePage();
        case CHANGE_PERSON:
            return setCurrentPerson(changePerson(state.currentPerson[0], action.where));
        default:
            return state;
    }
};

export const setState = () => ({type: SET_STATE});
export const setCurrentPerson = (person) => ({type: SET_CURRENT_PERSON, person});
export const back = () => ({type: BACK});                            // Для простоты понимания, и меньшего количества
export const setHomePage = () => ({type: SET_HOME_PAGE});            // багов, было решено использовать action creator
export const changePerson = (where) => ({type: CHANGE_PERSON, where});

export default AppReducer;