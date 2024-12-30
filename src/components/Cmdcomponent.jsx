import '../layout/Cmdcomponent.css'
import { TypeAnimation } from 'react-type-animation';

function Cmdcomponent(){
    return (
        <>
            <div className='cmd-window'>
                <div className='cmd-bar'>
                    <div className='cmd-app'>
                        <div className='cmd-ico'>
                            <img className='cmd-img' src='./src/assets/image.png' />
                        </div>
                        <div className='cmd-name'>
                            Welcome.exe
                        </div>
                    </div>
                    <div className='cmd-options'>
                        <div className='cmd-minimize'>_</div>
                        <div className='cmd-maximize'>□</div>
                        <div className='cmd-close'>x</div>
                    </div>
                </div>
                <div className='cmd'>
                    <TypeAnimation
                        sequence={[
                            `Armando el nuevo portfolio dksanldksakdskamdmslkamdlksmaldkmslakmdsklamdklmsalkmdlsamdkslakma
                                ` ,
                            1000,
                            `Puto el que lee`, 1000

                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </>
    )
}

export default Cmdcomponent;