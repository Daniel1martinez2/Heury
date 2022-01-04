import { Application, Ticker, Container, filters, Sprite, Texture } from 'pixi.js';
import React, { useRef } from 'react';
import sculptureImage from './loginStuff.png'; 
import styles from './AsideAuth.module.css'; 
import logo from '../../library/img/brandFinal.svg'; 

const AsideAuth = () => {
  const divRef = useRef(null as null|HTMLDivElement);
  const gameRef = useRef(null as null|Application);
  const ticker = new Ticker();
  
  const app = new Application({ 
    width: 802,
    height: 400,
    backgroundAlpha: 0,
  });
  const container = new Container();
  app.stage.addChild(container);

  const texture = Texture.from(sculptureImage);
  const sculpture = new Sprite(texture);
  sculpture.scale.set(.6)
  container.addChild(sculpture);
  const myFilter = new filters.NoiseFilter(); 
  myFilter.noise = 0.19;
  sculpture.filters = [myFilter];
  const process = (delta:number) => {
    app.renderer.resize(sculpture.width, sculpture.height);
    myFilter.seed = Math.random();
  }

  ticker.add(process);
  ticker.start();
  
  React.useEffect(() => {
    gameRef.current = app;
    divRef.current!.append(gameRef.current.view);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className={styles['container']}>
      <img className={styles['brand']} src={logo} alt="" />
      <div ref={divRef} className={styles['app']}> </div>
    </div>
  );
}

export default AsideAuth
