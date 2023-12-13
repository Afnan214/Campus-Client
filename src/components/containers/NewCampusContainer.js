import { useState } from 'react'
import Header from './Header'
import NewCampusView from '../views/NewCampusView'
import { addCampusThunk } from '../../store/thunks'
import { campusCreated } from '../../store/reducers/campuses'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const NewCampusContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [state, setState] = useState(
        {
            name: "",
            address: "",
            description: "",
            redirect: false,
            redirectId: null
        }
    )
    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setState((oldState) => {
            return {
                ...oldState,
                [field]: value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let campus = {
            name: state.name,
            address: state.address,
            description: state.description
        };

        // Add new student in back - end database
        let newCampus = await addCampusThunk(campus);

        dispatch(campusCreated(newCampus))
        // Update state, and trigger redirect to show the new student
        setState({
            firstname: "",
            lastname: "",
            campusId: null,
            redirect: true,
            redirectId: newCampus.id
        });
    }
    if (state.redirect) {
        return navigate(`/campus/${state.redirectId}`);
        // return (<Redirect to={`/student/${this.state.redirectId}`} />)
    }
    return (
        <>
            <Header />
            <NewCampusView handleChange={handleChange} handleSubmit={handleSubmit} />
        </>

    )
}

export default NewCampusContainer