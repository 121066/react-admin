export default function dictReducer(dict, action) {
    // switch (action.type) {
    //     case 'added': {
    //         return [
    //             ...tasks,
    //             {
    //                 id: action.id,
    //                 text: action.text,
    //                 done: false,
    //             },
    //         ]
    //     }
    //     case 'changed': {
    //         return tasks.map((t) => {
    //             if (t.id === action.task.id) {
    //                 return action.task
    //             } else {
    //                 return t
    //             }
    //         })
    //     }
    //     case 'deleted': {
    //         return tasks.filter((t) => t.id !== action.id)
    //     }
    //     default: {
    //         throw Error('Unknown action: ' + action.type)
    //     }
    // }
    switch (action.type) {
        case 'add':
            return [
                ...dict,
                {
                    id: action.id,
                    text: action.text,
                    flag: action.flag,
                },
            ]

        // case 'reduce':
        //     break;
        case 'update':
            return dict.map((item) => {
                if (item.id === action.item.id) {
                    return action.item
                } else {
                    return item
                }
            })

        case 'delete':
            return dict.filter((item) => {
                return item.id !== action.id
            })
        default:
            dict
    }
}
