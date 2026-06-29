import {motion, useAnimationControls} from 'framer-motion'
import ms19 from './assets/ms19.png'
import './BottomSheet.css'
function Home (){
    const controls=useAnimationControls()
    return (
        <div>
            <h2>Frame motion Libraury</h2>
            <motion.div
                initial={{x:10, y:5}}
                animate={{x:100, y:50}}
                transition={{duration:3, repeat:Infinity}}
            >I am moving div</motion.div>
            <hr />

            <button onClick={()=>controls.start('right')}>right</button>
            <button onClick={()=>controls.start('up')}>up</button>
            <button onClick={()=>controls.start('down')}>down</button>
            <motion.div 
                style={{padding:8, boxShadow:'3px 3px 10px gray', width:150}}
                variants={{
                    right:{x:100},
                    up:{y:-50},
                    down:{y:50}
                }}
                animate={controls}            
            >I am DIV</motion.div>
            <hr />

            <motion.img
                src={ms19}
                style={{height:100, border:'solid', margin:'16px auto', display:'block'}}
                drag='x'
                dragConstraints={{left:-100, right:100}}
                dragElastic={0.3}
                onClick={()=>controls.start('open')}
            ></motion.img>
            <hr />

            <button onClick={()=>controls.start('open')}>open bottom sheet</button>
            <button onClick={()=>controls.start('close')}>close bottom sheet</button>

            <motion.div
                className='BottomSheet'
                variants={{
                    close:{y:'50%'},
                    open:{y:0}
                }}
                animate={controls}
                initial='close'
                drag='y'
                dragConstraints={{top:0}}
            >
                <div>
                    <h2>BOTTOM SHEET TITLE</h2>
                </div>
                <div>
                    <p>this is bottom sheet that recently appears</p>
                    <img src={ms19} style={{width:'200px'}} />
                </div>
            </motion.div>
        </div>
    )
}
export default Home