import Card from './Card';
import { Clock } from '../clock/Clock'

function ProfileCard(props) {
  return (
    <Card title="Inje" backgroundColor="#4ea04e">
      <p>하이</p>
      <Clock></Clock>
    </Card>
  )
}
export default ProfileCard;