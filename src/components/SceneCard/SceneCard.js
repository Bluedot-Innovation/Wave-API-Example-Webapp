import * as bluedotUI from '@bluedot-innovation/bluedot-ui'
import * as styled from './styled'

export default function SceneCard({ title }) {
    console.log(bluedotUI)
    const Button = bluedotUI.Button
    return (
        <styled.SceneCardWrapper>
            <styled.Title>{title}</styled.Title>
            <Button>Place order</Button>
        </styled.SceneCardWrapper>
    )
}