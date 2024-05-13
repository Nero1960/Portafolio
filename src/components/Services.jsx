import IconosServices from './IconosServices';

const Services = () => {
  return (
    <section id="servicios" className="my-10 pb-10 mx-5 md:mx-20">
      <h2 className="-z-10 relative inline-block text-white font-bold text-5xl before:content-[''] before:h-3 before:w-1/2 before:ms-1 before:absolute before:bg-greenCustom-500 before:bottom-1 before:-z-10 before:shadow before:left-0">Mis Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-x-5 md:gap-y-10 mt-10">
        <IconosServices />
      </div>
    </section>
  );
}

export default Services;
