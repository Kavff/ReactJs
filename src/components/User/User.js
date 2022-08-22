
const User = ({user}) => {

const {name,rol,address,age} = user;

return(
    <div>
        <h4>Name:{name}</h4>
        <p>Rol:{rol}</p>
        <p>Address:{address}</p>
        <p>Age:{age}</p>    
    </div>
)
}

export default User;