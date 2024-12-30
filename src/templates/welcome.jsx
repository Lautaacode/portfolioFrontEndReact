import Particlesbg from '../components/Particlesbg';
import '../layout/welcome.css'
import Cmdcomponent from '../components/Cmdcomponent';


function Welcome() {

    return (
            <div className='welcome-container'>
                <Cmdcomponent/>
                <div className='img-profile-container'>
                    <img className='img-profile' src="./src/assets/foto-de-perfil.png" alt="" />
                </div>
                <Particlesbg />
                <div className='scroll-sign'>{'>>'}</div>
            </div>

    )


}

export default Welcome;