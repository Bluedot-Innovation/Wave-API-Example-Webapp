import { useHistory, useLocation } from 'react-router-dom'
import SceneCard from '../../components/SceneCard'
import invalidParamsImage from '../../images/invalid_params.svg'

export default function InvalidParams() {
    const history = useHistory()
    const location = useLocation()

    console.log('location', location)
    const text = `
        One or more of the values of the parameters in the URL are wrong.
        Please check that ProjectId, Destination ID and Region are correct.
    `
    return (
        <SceneCard
            title="Something went wrong"
            text={text}
            image={invalidParamsImage}
            buttonText="Try again"
            onClickButton={()=> history.push('/')}
        />
    )
}