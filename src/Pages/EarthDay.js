import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import "./earthday.css";

function EarthDay() {
  return (
    <div style={{ backgroundColor: "#E7E7E7" }}>
      <Navbar />
      <div className='content'>
        <div
          className='textblock'
        >
          <h1>Earth Day</h1>
          <p>
            Earth Day is an annual celebration that honors the achievements of
            the environmental movement and raises awareness of the need to
            protect Earths natural resources for future generations. Earth Day
            is celebrated on April 22 in the United States and on either April
            22 or the day the spring equinox occurs throughout the rest of the
            world.
          </p>
          <p>
            Environmental activism during the 1960s inspired Wisconsin Sen.
            Gaylord Nelson to create a national celebration uniting the
            environmental movement. With the help of Denis Hayes, a graduate
            student at Harvard University, Nelson organized the first Earth Day
            on April 22, 1970, educating participants in the importance of
            environmental conservation. Attended by 20 million people across the
            United States, the event strengthened support for legislation such
            as the Clean Air Act (updated in 1970) and the Endangered Species
            Act (1973).
          </p>
          <p>
            Today, the Earth Day Network (EDN), which brings together more than
            20,000 partners and organizations in 190 countries, supports the
            Earth Day mission year-round. This mission is founded on the premise
            that all people, regardless of race, gender, income, or geography,
            have a moral right to a healthy, sustainable environment. The Earth
            Day Network pursues this mission through education, public policy,
            and activism campaigns. These campaigns bring together more than 1
            billion participants every year, making it one of the largest
            public, secular events in the world.
          </p>
          <hr />

          <h2>Earth Days Core Issues</h2>
          <p>
            1. Advocacy: Supporters encourage individuals and organizations to
            meet with elected officials to discuss environmental issues. The
            online program "Million Acts of Green," for instance, encourages
            visitors to adopt lifestyle changes such as composting, reducing
            your carbon footprint, or recycling e-waste.{" "}
          </p>
          <p>
            2. Climate Change: Supporters raise awareness about climate change,
            human contribution to those changes, and opportunities to slow the
            phenomenon. Many Earth Day supporters, for instance, encourage
            citizens to support the landmark Paris Climate agreement, set to be
            signed on Earth Day 2016.
          </p>
          <p>
            3. Conservation & Biology: Supporters work to conserve the world's
            biodiversity. On Earth Day 2010, for instance, participants in Sri
            Lanka planted more than 100 medicinal plants throughout the tropical
            rain forest at Yagirala Forest Reserve. These plants can be used by
            local populations and will create habitats for different organisms,
            enhancing the biodiversity of the island nation.
          </p>
          <p>
            4. Education: Earth Day education programs provide educators,
            students, and the general public with resources and solutions to
            create a healthier, more sustainable planet. On Earth Day 2010, for
            instance, teachers and students in the Compostela Valley region of
            the Philippines participated in a day-long conference. At the
            conference, they learned about tree planting and care, participated
            in nature hikes, and presented their environmental action projects
            to the community.
          </p>
          <p>
            5. Energy: Advocates support projects that develop renewable energy
            sources and technologies as means of transitioning off of
            nonrenewable sources, such as coal and oil. Citizens of Qatar, for
            example, are invited to switch off their power for one hour on Earth
            Day in a symbolic stance against human contributions to global
            warming.
          </p>
        </div>
        <div className='card'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default EarthDay;
