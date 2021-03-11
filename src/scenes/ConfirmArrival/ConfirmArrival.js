import { useHistory } from 'react-router-dom'
import SceneCard from '../../components/SceneCard'
import confirmArrivalImage from '../../images/confirm_arrival.svg'

export default function ConfirmArrival() {
    const history = useHistory()
    const text = `
        Hi Kate, please head to our curbside parking space. 
        Look for the large purple Curbside sign and park as close to it as possible.
    `

    return <SceneCard 
        title="Confirm Arrival"
        text={text}
        image={confirmArrivalImage}
        buttonText="I'm here"
        onClickButton={() => history.push('/curbside-pickup')}
    />
}