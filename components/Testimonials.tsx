/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import Slider from 'react-slick';

const Testimonials = ():JSX.Element => {
  const testimonialsList = [
    {
      quote: "Just had chimney stack and ridge tiles repointed.An excellent job done by Thomas and team.We couldn't fault the workmanship,when completed and the clean up you would never had known they had been.A job well done !!!",
      person: 'Len Moore',
    },
    {
      quote: "Huge thank you to Tommy and his team. Very professional service on all fronts. I was worried about my marble fireplace being damaged when having a flue fitted. I needn't have worried at all. The chimney breast was left in a better state than when the guys started and they took great care not to risk any damage to the fireplace. Not a scratch! High quality work and good craic into the bargain! Thanks chaps. Would definitely recommend. Will also be using their new flue cleaning service to ensure it's maintained properly. All the best. Johnny.",
      person: 'Johnny Spence',
    },
    {
      quote: "Firenstack is a highly professional company with a 'can do - will do' attitude. Their attention to detail is outstanding.They are punctual, polite, and will go out of their way to ensure the customer is pleased with their work.They ensured the area was kept clean and tidy at all times, and when the job was finished they left us ready for us to continue with normal daily life. We would gladly employ Firenstack again, and will be first on our call list when we need to. It is plain to see Tommy and the boys take pride in their work and are a very reliable crew. Thank you for a job well done!",
      person: 'Pady',
    },
    {
      quote: 'We were really pleased with the work done. I had a chimney pulled down and rebuilt with two flues relined and a stove installed. Firestack were a great help in the decision making and offered realistic practical advise. I would have no problems recommending them and will always now be my first port of call for anything to do with the fires/chimneys.',
      person: 'Charlie',
    },
    {
      quote: 'Fantastic company! Tommy and the boys did a great job and came back after to clean the driveway. Hard workers and very clean!',
      person: 'Gillian',
    },
    {
      quote: "Firestack solutions removed an old 1950's fireplace for us today, and installed a Victorian cast iron insert with wooden surround. We are delighted with the finished result, and can only praise Tommy and the boys. They provide a professional and friendly service, and are clean workers. There was minimal disruption, and we were grateful it was completed so efficiently. Thanks !",
      person: 'Vanessa',
    },
    {
      quote: 'Tommy and lads did a fantastic job. Well pleased',
      person: 'Trevor',
    },
    {
      quote: 'Firenstack removed our old chimney and replaced it with a new more efficient flue while also installing a multifuel stove. We are very pleased with the work, they are a very hardworking, friendly and trustworthy bunch of guys. Very clean, leaving very little mess for me to clean up, very efficient and knowledgeable and charge a very reasonable price! We would highly recommend Firenstack and would definitely use them again.',
      person: 'David',
    },
    {
      quote: 'Last week I had 3 chimney pots replaced and appropriate cowels fitted on 3 separate chimney stacks, together with associated pointing and replacement coping. I cannot speak too highly of the manner in which Tommy and his two colleagues carried out this work. They were meticulous in their care in working on my Rosemary-tiled roof. I consider them to be honest, efficient, clean and totally professional. They also engender confidence in their knowledge, skill and ability. If you are looking for someone to carry out this type of work - look no further!!',
      person: 'Michael',
    },
    {
      quote: 'Firenstack Solutions have just finished fitting my new multi-fuel stove in my house. Having meet a few guys, who called around after 6 to suit me, and recieved a few estimates my gut instinct was to hire this team to complete the work and I was not disappointed. They visited my property before I bought the stove and was able to advise me and exactly what I needed for the job. From the spec of the flue down to any accessories I may need to complete the job, each of which they could supply. One of the things that I was concerned about was the lintel. My father in law has a stove fitted and the fitter, NOT Firenstack, used concrete plaster board which after 6 months started to warp. All in all a great service fitting flue, stove, slate hearth and plastering to a very high standard. All in all we saved over £1000 by using this fitter.',
      person: 'Petercon',
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    centerPadding: '55px',
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const portfolioSlider = useRef<Slider | null>(null);
  return (
    <div className="my-10 max-w-7xl mx-auto items-center">
      <Slider {...settings} ref={portfolioSlider}>
        {testimonialsList.map((quote) => (
          <div className="p-4 text-center my-auto">
            <blockquote className="text-xl ">
              {quote.quote}
            </blockquote>
            <h3 className="font-medium py-4 text-2xl">

              {quote.person}
            </h3>
          </div>

        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
