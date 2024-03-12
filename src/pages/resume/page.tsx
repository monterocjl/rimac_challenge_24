import { Divider } from "../../components/Divider/Component";
import { ArrowIcon } from "../../components/Icons/ArrowIcon/Component";
import { UserIcon } from "../../components/Icons/UserIcon/Component";
import { Layout } from "../../components/Layout/Component";
import { Steps } from "../../components/Steps/Component";
import { useResume } from "./hooks/useResume";
import "./styles.scss";

function Resume() {
  const { userData, selectedPlan } = useResume();

  return (
    <Layout withFooter={false} withBackground={false}>
      <Steps step='two' />
      <div className='resume-container'>
        <div className='resume-container__arrow-container'>
          <ArrowIcon width='20' height='20' color='#4F4FFF' />
          <div>Volver</div>
        </div>
        <h1 className='resume-container__title'>Resumen del seguro</h1>
        <div className='resume-container__details-card'>
          <p className='details-card__subtitle'>PRECIOS CALCULADOS PARA:</p>
          <div className='details-card__name'>
            <UserIcon />
            <p>
              {userData?.name} {userData?.lastName}
            </p>
          </div>
          <Divider />
          <div>
            <p className='details-card__title'>Responsable de pago</p>
            <p className='details-card__item'>
              DNI: {userData?.documentNumber}
            </p>
            <p className='details-card__item'>Celular: {userData?.cellphone}</p>
          </div>
          <div className='details-card__content'>
            <p className='details-card__title'>Plan elegido</p>
            <p className='details-card__item'>{selectedPlan?.name}</p>
            <p className='details-card__item'>
              Costo del Plan: ${selectedPlan?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
