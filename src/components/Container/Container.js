
export const Container = ({teacher = "Conrado Lanusse",tutor = "Lucas Lobos"}) => {

 /*    console.log(props)
    const {teacher,tutor} = props */


    return (
        <div>
            <h2> Hi {teacher}</h2>
            <hr></hr>
            <p>Hi {tutor}</p>
        </div>
    )
}

export default Container;