import React from 'react';
import './VehiclesDetails.css';
import { motion } from 'framer-motion';  // Import framer-motion for animation

// Import images
import kiaForte from '../../assets/Car/kiaforte.jpg';
import toyotaYaris from '../../assets/Car/toyotayaris.jpg';
import fordFocus from '../../assets/Car/fordfocus.jpg';
import toyotaPriusC from '../../assets/Car/toyota prius c.jpg';
import volkswagenPassat from '../../assets/Car/volkswagen passat.jpg';
import chevroletVolt from '../../assets/Car/chevrolet volt.jpg';
import hondaCivic from '../../assets/Car/honda civic.jpg';
import toyotaPrius from '../../assets/Car/toyota prius.jpg';
import hondaInsight from '../../assets/Car/honda insight.jpg';
import mazda3 from '../../assets/Car/mazda 3.jpg';
import kiaOptima from '../../assets/Car/kia optima.jpg';
import chevroletCruze from '../../assets/Car/chevrolet cruze.jpg';
import hyundaiAccent from '../../assets/Car/hyundai accent.jpg';
import fordFiesta from '../../assets/Car/ford fiesta.jpg';
import hyundaiSonata from '../../assets/Car/hyundai sonata.jpg';
import volkswagenJetta from '../../assets/Car/volkswagen jetta.jpg';
import toyotaCamry from '../../assets/Car/toyota camry.jpg';
import hyundaiElantra from '../../assets/Car/hyundai elentra.jpg';
import fordFusion from '../../assets/Car/ford fusion.jpg';
import miniCooper from '../../assets/Car/mini cooper.jpg';
import kiaK7 from '../../assets/Car/kia k7.jpg';
import toyotaCorolla from '../../assets/Car/toyota corolla.jpg';
import mitsubishiPajero from '../../assets/Car/mitsubhisi pajero.jpg';
import subaruForester from '../../assets/Car/subaru forester.jpg';
import fordEscape from '../../assets/Car/ford escape.jpg';
import subaruXV from '../../assets/Car/subaru xv crosstrek.jpg';
import jeepRenegade from '../../assets/Car/jeep renegade.jpg';
import hondaCRV from '../../assets/Car/honda cr-v.jpg';
import hyundaiTucson from '../../assets/Car/hyundai tucson.jpg';
import jeepPatriot from '../../assets/Car/jeep patroit.jpg';
import mitsubishiOutlander from '../../assets/Car/mitsubishi outlander sport.jpg';
import subaruOutback from '../../assets/Car/subaru outback.jpg';
import gmcterrain from '../../assets/Car/gmc terrain.jpg';
import bmwx3 from '../../assets/Car/bmw x3.jpg';
import toyotaRAV4 from '../../assets/Car/toyota rav4.jpg';
import suzukiVitara from '../../assets/Car/suzuki vitara.jpg';
import mazdaCX5 from '../../assets/Car/mazda cx-5.jpg';
import jeepCherokee from '../../assets/Car/jeep cherokee.jpg';
import chevroletTrax from '../../assets/Car/chevrolet trax.jpg';
import nissanJuke from '../../assets/Car/nissan juke.jpg';
import mercedesML350 from '../../assets/Car/mercedes ml350.jpg';
import lexusRX450 from '../../assets/Car/lexus rx 450.jpg';
import bmwx5 from '../../assets/Car/bmw x5.jpg';
import landRoverSport from '../../assets/Car/land rover discovery sport 2.jpg';
import landRoverEvoque from '../../assets/Car/land rover evoque.jpg';
import mercedesSLK230 from '../../assets/Car/mercedes slk 230.jpg';
import chryslerCruiser from '../../assets/Car/chrysler cruiser.jpg';
import mercedesCLA250 from '../../assets/Car/mercedes cla 250.jpg';
import porscheCayenne from '../../assets/Car/porsche cayenne.jpg';
import dodgeChallenger from '../../assets/Car/dodge challenger.jpg';
import fordMustang from '../../assets/Car/ford mustang.jpg';
import toyotaSienna from '../../assets/Car/toyota sienna.jpg';
import mitsubishiDelica from '../../assets/Car/mitsubishi delica d5.jpg';
import mercedesVito from '../../assets/Car/mercedes vito 120.jpg';
import toyotaNoah from '../../assets/Car/toyota noah.jpg';
import volvoXC90 from '../../assets/Car/volvo xc 90.jpg';
import nissanPathfinder from '../../assets/Car/nissan pathfinder.jpg';
import fordExplorer from '../../assets/Car/ford explorer.jpg';
import toyotaHighlander from '../../assets/Car/toyota highlander.jpg';
import kiaSorento from '../../assets/Car/kia sorento.jpg';
import toyotaFortuner from '../../assets/Car/toyota fortuner.jpg';
import audiQ7 from '../../assets/Car/audi q7.jpg';
import mercedesGL450 from '../../assets/Car/mercedes gl 450.jpg';
import chevroletTraverse from '../../assets/Car/chevrolet traverse.jpg';
import toyotaPrado from '../../assets/Car/toyota prado.jpg';
import landRoverDiscovery from '../../assets/Car/land rover discovery.jpg';

const carData = {
  sedans: [
    { name: "Kia Forte", engine: "2.0L 4-cylinder", image: kiaForte },
    { name: "Toyota Yaris", engine: "1.5L 4-cylinder", image: toyotaYaris },
    { name: "Ford Focus", engine: "2.0L 4-cylinder", image: fordFocus },
    { name: "Toyota Prius C", engine: "1.5L 4-cylinder", image: toyotaPriusC },
    { name: "Volkswagen Passat", engine: "2.0L 4-cylinder", image: volkswagenPassat },
    { name: "Chevrolet Volt", engine: "1.5L 4-cylinder", image: chevroletVolt },
    { name: "Honda Civic", engine: "2.0L 4-cylinder", image: hondaCivic },
    { name: "Toyota Prius", engine: "1.8L 4-cylinder", image: toyotaPrius },
    { name: "Honda Insight", engine: "1.5L 4-cylinder", image: hondaInsight },
    { name: "Mazda 3", engine: "2.0L 4-cylinder", image: mazda3 },
    { name: "Kia Optima", engine: "2.4L 4-cylinder", image: kiaOptima },
    { name: "Chevrolet Cruze", engine: "1.4L 4-cylinder", image: chevroletCruze },
    { name: "Hyundai Accent", engine: "1.6L 4-cylinder", image: hyundaiAccent },
    { name: "Ford Fiesta", engine: "1.6L 4-cylinder", image: fordFiesta },
    { name: "Hyundai Sonata", engine: "2.4L 4-cylinder", image: hyundaiSonata },
    { name: "Volkswagen Jetta", engine: "1.4L 4-cylinder", image: volkswagenJetta },
    { name: "Toyota Camry", engine: "2.5L 4-cylinder", image: toyotaCamry },
    { name: "Hyundai Elantra", engine: "2.0L 4-cylinder", image: hyundaiElantra },
    { name: "Ford Fusion", engine: "2.5L 4-cylinder", image: fordFusion },
    { name: "Mini Cooper", engine: "1.5L 3-cylinder", image: miniCooper },
    { name: "Kia K7", engine: "3.0L V6", image: kiaK7 },
    { name: "Toyota Corolla", engine: "1.8L 4-cylinder", image: toyotaCorolla },
  ],
  suvs: [
    { name: "Mitsubishi Pajero IO", engine: "2.4L I4", image: mitsubishiPajero },
    { name: "Subaru Forester", engine: "2.5L H4", image: subaruForester },
    { name: "Ford Escape", engine: "1.5L I4", image: fordEscape },
    { name: "Subaru XV Crosstrek", engine: "2.0L H4", image: subaruXV },
    { name: "Jeep Renegade", engine: "2.4L I4", image: jeepRenegade },
    { name: "Honda CR-V", engine: "2.4L I4", image: hondaCRV },
    { name: "Hyundai Tucson", engine: "2.0L I4", image: hyundaiTucson },
    { name: "Jeep Patriot", engine: "2.4L I4", image: jeepPatriot },
    { name: "Mitsubishi Outlander Sport", engine: "2.0L I4", image: mitsubishiOutlander },
    { name: "Subaru Outback", engine: "2.5L H4", image: subaruOutback },
    { name: "GMC Terrain", engine: "1.5L I4", image: gmcterrain },
    { name: "BMW X3", engine: "2.0L I4", image: bmwx3 },
    { name: "Toyota RAV4", engine: "2.5L I4", image: toyotaRAV4 },
    { name: "Suzuki Vitara", engine: "1.4L I4", image: suzukiVitara },
    { name: "Mazda CX-5", engine: "2.5L I4", image: mazdaCX5 },
    { name: "Jeep Cherokee", engine: "3.2L V6", image: jeepCherokee },
    { name: "Chevrolet Trax", engine: "1.4L I4", image: chevroletTrax },
    { name: "Nissan Juke", engine: "1.6L I4", image: nissanJuke },
    { name: "Mercedes ML 350", engine: "3.5L V6", image: mercedesML350 },
    { name: "Lexus RX 450", engine: "3.5L V6", image: lexusRX450 },
    { name: "BMW X5", engine: "3.0L I6", image: bmwx5 },
    { name: "Land Rover Discovery Sport", engine: "2.0L I4", image: landRoverSport },
    { name: "Land Rover Evoque", engine: "2.0L I4", image: landRoverEvoque },
  ],
  sports: [
    { name: "Mercedes SLK 230", engine: "2.3L 4-cylinder", image: mercedesSLK230 },
    { name: "Chrysler Cruiser", engine: "2.4L 4-cylinder", image: chryslerCruiser },
    { name: "Mercedes CLA 250", engine: "2.0L I4", image: mercedesCLA250 },
    { name: "Porsche Cayenne", engine: "4.8L V8", image: porscheCayenne },
    { name: "Dodge Challenger", engine: "5.7L V8", image: dodgeChallenger },
    { name: "Ford Mustang", engine: "5.0L V8", image: fordMustang },
  ],
  sevenSeaters: [
    { name: "Toyota Sienna", engine: "3.5L V6", image: toyotaSienna },
    { name: "Mitsubishi Delica D5", engine: "2.4L I4", image: mitsubishiDelica },
    { name: "Mercedes Vito 120", engine: "2.2L I4", image: mercedesVito },
    { name: "Toyota Noah", engine: "2.0L I4", image: toyotaNoah },
    { name: "Mitsubishi Outlander", engine: "2.4L I4", image: mitsubishiOutlander },
    { name: "Volvo XC 90", engine: "2.0L I4", image: volvoXC90 },
    { name: "Nissan Pathfinder", engine: "3.5L V6", image: nissanPathfinder },
    { name: "Ford Explorer", engine: "3.5L V6", image: fordExplorer },
    { name: "Toyota Highlander", engine: "3.5L V6", image: toyotaHighlander },
    { name: "Kia Sorento", engine: "3.3L V6", image: kiaSorento },
    { name: "Toyota Fortuner", engine: "2.7L I4", image: toyotaFortuner },
    { name: "Audi Q7", engine: "3.0L V6", image: audiQ7 },
    { name: "Mercedes GL 450", engine: "4.7L V8", image: mercedesGL450 },
    { name: "Chevrolet Traverse", engine: "3.6L V6", image: chevroletTraverse },
    { name: "Toyota Land Cruiser Prado", engine: "2.7L I4", image: toyotaPrado },
    { name: "Land Rover Discovery", engine: "3.0L V6", image: landRoverDiscovery },
  ],
};

const CarCard = ({ name, engine, image }) => (
  <motion.div
    className="car-card"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <img src={image} alt={name} className="car-image" />
    <h3 className="car-name">{name}</h3>
    <p className="car-engine">Engine: {engine}</p>
    <button className="free-button">Free Cancellation</button>
    <button className="insurance-button">Free Insurance</button>
  </motion.div>
);

const VehiclesDetails = () => (
  <div className="vehicles-details">
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Available Vehicles
    </motion.h1>
    {Object.entries(carData).map(([type, cars]) => (
      <section key={type}>
        <motion.h2
          className="car-type"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </motion.h2>
        <motion.div
          className="car-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {cars.map((car, index) => (
            <CarCard
              key={index}
              name={car.name}
              engine={car.engine}
              image={car.image}
            />
          ))}
        </motion.div>
      </section>
    ))}
  </div>
);

export default VehiclesDetails;
