let subjectsCount = (parent, state) => {
    let count = parent;
    let acc = [{count}];
    let findParent = (state) => {
        if (count === undefined) {
            return acc;
        }
        let currentItem = state.filter(p => p.id === count);
        count = currentItem[0].parent;
        if (count === undefined) {
            return acc
        } else {
            acc.push({count});
            return findParent(state);
        }
    };
    return findParent(state)
};


let initialState = {
    person: []
};
initialState.person = state.map(p => {
    return  {id: p.id, name: p.name, image: p.image, post: p.post, parent: p.parent, parents: subjectsCount(p.parent, state)}
});

let subjectsCount = (parentId, state) => {
    let count = parentId;
    let parent = {};
    let acc = [];
    let findParent = (state) => {
        if (count === undefined) {
            return acc;
        }
        let currentItem = state.filter(p => p.id === count);
        parent = currentItem[0];
        count = parent.parent;
        if (count === undefined) {
            return acc
        } else {
            acc.push({parent});
            return findParent(state);
        }
    };
    return findParent(state)
};