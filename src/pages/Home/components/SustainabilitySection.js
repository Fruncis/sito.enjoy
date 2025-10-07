import "./SustainabilitySection.css"
import * as motion from "motion/react-client"

import { useAnimate} from "motion/react"
import ImageCard from "./ImageCard"

const SustainabilityCard = (props)=>{
  const [scope, animate] = useAnimate()
  //const [isStarted, setIsStarted] = useState(false)
  const runAnimation = async () => {
    await animate(scope.current, { translateY: "-110%"}, {opacity: 0.5 })
  }

  return (
    
    <motion.div
      ref={scope}
      className="stat-card"
      //onClick={()=>{runAnimation()}}
      whileHover={{ scale: 1.1}}
    >
      <div className="stat-icon">
        <i className={props.icon}></i>
      </div>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </motion.div>
  )
}


const SustainabilitySection = ()=>{
    /*const q1 = useAnimation()
    const q2 = useAnimation()

    useEffect(()=>{
      async function runSequence() {
        await q1.start({translateX: "50%", transition:{duration: 2}})
        await q2.start({scale: 2})
      }
      runSequence()
    })*/

    


    

    return (
        <section className="sustainability-section section">
        <div className="container">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2 class="section-title left-aligned">Risolutivo per il tuo business.<br />Sostenibile per il pianeta.</h2>
              <p>Con la gestione intelligente dei dispositivi di EnjoyCube, non stai solo ottimizzando le operazioni—stai contribuendo a un futuro più sostenibile.</p>
              
              <div className="sustainability-stats">
                
                <SustainabilityCard icon="fa-solid fa-leaf" heading="20% di Riduzione" text="dei rifiuti elettronici grazie a cicli di vita dei dispositivi prolungati"/>
                <SustainabilityCard icon="fa-solid fa-bolt" heading="30% di Energia in Meno" text="consumata con prestazioni ottimizzate dei dispositivi"/>
                <SustainabilityCard icon="fa-solid fa-recycle" heading="Economia Circolare" text="promuovendo una gestione sostenibile dei dispositivi"/>
              </div>
            </div>

            <div className="sustainability-image">
              {/* Will be styled with CSS background */}
            </div>
          </div>
        </div>
      </section>
    )
}

export default SustainabilitySection
