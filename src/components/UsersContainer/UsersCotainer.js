
import User from "./components/User/User"

const UsersContainer = () => {

    const users = [
        {
            name: 'Lucas Lobos',
            rol: 'admin',
            address: 'street 123',
            age: 32
        },
        {
            name: 'Ema Cola',
            rol: 'user',
            address: 'street 1234',
            age: 33
        }
    ]

    return (
        <div>
            <User user={users[0]}></User>
            <User user={users[1]}></User>
        </div>
    )
}