import { useHistory } from 'react-router-dom'
import { useAppContext } from '../../appContext'
import { postWaveEvent } from '../../waveApi'
import SceneCard from '../../components/SceneCard'
import confirmArrivalImage from '../../images/confirm_arrival.svg'

export default function ConfirmArrival() {
    const history = useHistory()
    const { state } = useAppContext()
    const text = `
        Hi ${state.firstname || 'No Name'}, please head to our curbside parking space. 
        Look for the large purple Curbside sign and park as close to it as possible.
    `

    const handleOnClickButton = async () => {
        await postWaveEvent()
    }

    return <SceneCard 
        title="Confirm Arrival"
        text={text}
        image={confirmArrivalImage}
        buttonText="I'm here"
        onClickButton={() => history.push('/curbside-pickup')}
    />
}