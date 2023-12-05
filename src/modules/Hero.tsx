import { ReactNode} from 'react';
import {ReactComponent as Landscape} from '../svg/landscape.svg';

interface HeroProps {
  children: ReactNode
};
export default function Hero({children}: HeroProps) {
  return (
    <div className="hero">
      <div className="hero__bg">
        <div className="all_stars">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
          <div className="comet"></div>
        </div>
        <Landscape/>
      </div>
      {children}
    </div>
  )
}
