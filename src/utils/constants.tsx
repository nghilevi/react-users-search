

enum Api {
    Users = 'https://jsonplaceholder.typicode.com/users',
    Posts = 'https://jsonplaceholder.typicode.com/posts'
}

enum Status {
    Default = 'default',
    Loading = 'loading',
    Success = 'success',
    Failure = 'failure'
}

enum LoadingStatusText {
    Loading = 'Loading data ...',
    Failure = 'Data loaded failed. Please try again',
    UsersLoadFail = 'Users loaded failed. Please try again'
}

enum UserSearchText {
    SelectedUserId = 'Selected user id:',
    SelectUser = 'Please select user',
    NoSelection = 'None'
}

enum ListSearchText {
    Empty = 'There is no items on the list'
}



export { Api, Status, UserSearchText, ListSearchText, LoadingStatusText }