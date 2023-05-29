import { DivFlex, RotatingBorderAnimation } from "./RotatingBorderAnimationStyled"
import { ZigZagStyled } from "./ZigZagBorderStyled"

import ArcherImage from './assets/archer.jpg'
import SaberImage from './assets/saber.jpg'


export const BoxCustom = () => {

    return <DivFlex>
        <RotatingBorderAnimation>
            <p>Rotating Border Animation</p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quia, perferendis ab accusantium incidunt, magnam facere iste neque nihil porro iure suscipit dolorem vero temporibus quisquam ipsum. Praesentium, porro nulla!
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </RotatingBorderAnimation>
        <ZigZagStyled>
            <h1><span>Archer</span> Vs <span>Saber</span></h1>
            <div className="gallery">
                <img src={ArcherImage} alt="Archer from Fate/Stay" />
                <img src={SaberImage} alt="Saber from Fate/Stay" />
            </div>
        </ZigZagStyled>
    </DivFlex>
}