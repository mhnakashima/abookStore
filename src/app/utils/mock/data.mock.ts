import { Book } from '../../api/book';

export function DataMock(): Book[] {
    return [
        {
            "id": "2",
            "name": "The Little Prince",
            "author": "Antoine de Saint-Exupéry",
            "genre": [
                "fantasy"
            ],
            "language": "English",
            "quantity": '5'
        },
        {
            "id": "3",
            "name": "Harry Potter and the Philosopher's Stone",
            "author": "J. K. Rowling",
            "genre": [
                "fantasy",
                "mystery"
            ],
            "language": "English",
            "quantity": '19'
        },
        {
            "id": "4",
            "name": "The Master and Margarita",
            "author": "Mikhail Bulgakov",
            "genre": [
                "fantasy",
                "farce",
                "supernatural",
                "romance",
                "satirical novel"
            ],
            "language": "English",
            "quantity": '7'
        },
        {
            "id": "5",
            "name": "Alice's Adventures in Wonderland",
            "author": "Lewis Carroll",
            "genre": [
                "fantasy novel"
            ],
            "language": "English",
            "quantity": '2'
        },
        {
            "id": "6",
            "name": "The Hobbit",
            "author": "J. R. R. Tolkien",
            "genre": [
                "fantasy"
            ],
            "language": "English",
            "quantity": '10'
        },
        {
            "id": "7",
            "name": "And Then There Were None",
            "author": "Agatha Christie",
            "genre": [
                "mystery"
            ],
            "language": "English",
            "quantity": '1'
        },
        {
            "id": "8",
            "name": "Dream of the Red Chamber",
            "author": "Cao Xueqin",
            "genre": [
                "family saga"
            ],
            "language": "Chinese",
            "quantity": '30'
        }
    ]
}

export function DataMockItem(): Book {
    return {
        "id": "2",
        "name": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "genre": ["fantasy"],
        "language": "English",
        "quantity": '5'
    };
}