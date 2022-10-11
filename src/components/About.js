import React from "react";
import Footer from "./Footer";
import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <>
    <Accordion defaultActiveKey={['0']} alwaysOpen className="about">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Care for yourself.</Accordion.Header>
        <Accordion.Body>
          We may appear fit and healthy, but our lifestyle takes a toll on our health. <br/>
          Unhealthy eating habits, overeating, extended working hours, inadequate rest, sedentary lifestyle with no exercise, use of alcohol and tobacco – all this plays havoc on the health of an individual. Often with the fast-paced life one does not have the time to go for a health check up until there is a medical crisis.
          A few hours once a year is most often all that is needed to ensure good health. <br/>
          Periodic health checks help detect disease early and with corrective action can ensure prevention or treatment aimed at cure or containment.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why Medicat</Accordion.Header>
        <Accordion.Body>
          HealthMaster Plans suit individuals as well as organisations.<br/>
          The customer care will help you with fixing the appointment, pre-arrival preparation, guiding you through the process of various tests you will undergo as part of the health check and ensuring your appointment with the consultant.<br/>
          All our health check packages are supported by evidence-based practice and expertise with the most sophisticated technology Electronic medical records which helps us to email you the reports.<br/>
          Supported by a state-of–the–art radiology department and laboratory Internationally benchmarked standard protocols and evidence based medical practice.
          International standards of infection control and hygiene.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Scheduling your appointment</Accordion.Header>
        <Accordion.Body>
          To avoid any inconvenience, kindly fix your appointment with customer care in advance with your Member Registration Number (MRN) if you are already registered with us.<br/>
          If you are not registered with us, please reach the hospital twenty minutes prior to your scheduled appointment. The customer care will assist you.
          Inform in advance if you wish to undergo any additional tests/ investigations/ procedures/consultations, so that customer care can schedule them in advance.<br/>
          Additional tests/ investigations/ procedures/consultations requested by you would be charged separately in addition to the package.
          In case you want to postpone or cancel the scheduled appointment, please let us know a day in advance. This will not only help us reschedule your appointment but your cancelled slot will be allotted to another patient on the waiting list.<br/>
          On completion of your health check-up, you will receive a comprehensive medical summary comprising relevant diagnosis, recommendations, etc.<br/>
          <ol>
            <li>No fitness certificate or medical clearance certificate will be issued</li>
            <li>Specially for Women Radiological investigations like x-rays are contraindicated in pregnancy</li>
            <li>Pap smear is advised for women of all ages, who are sexually active</li>
            <li>Women with an ongoing menstrual period, should postpone the health check-up as urine examination and Pap smear test results will not be accurate.</li>
            <li>Inform Customer Care If you are
              <ul>
                <li>Diabetic</li>
                <li>Have complaints of chest pain or breathlessness</li>
                <li>Pregnant or suspect pregnancy</li>
              </ul>
            </li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   <Footer />
  </>
   );
}

export default About;



