import Landing from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={Landing.container}>
      <div className={Landing.contSmall}>
        <h1>Bienvenidos</h1>
        <a className={Landing.btn} href="/home">
          <span>Comencemos</span>
          
        </a><div className={Landing.decorate}></div>
      </div>
    </div>
  );
}
