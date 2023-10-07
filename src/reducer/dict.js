export default function dictReducer(dict, action) {
    switch (action.type) {
        case 'add':
            return [
                ...dict,
                {
                    id: action.id,
                    text: action.text,
                    flag: action.flag,
                },
            ];

        // case 'reduce':
        //     break;
        case 'update':
            return dict.map((item) => {
                if (item.id === action.item.id) {
                    return action.item;
                } else {
                    return item;
                }
            });

        case 'delete':
            return dict.filter((item) => {
                return item.id !== action.id;
            });
        default: {
            throw Error('错误');
        }
    }
}
