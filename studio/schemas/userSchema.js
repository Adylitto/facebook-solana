export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'walletAdress',
            type: 'string',
            title: 'Wallet Address',
        },
        {
            name: 'profileImage',
            type: 'string',
            title:'Profile Image',
        }
    ]
}